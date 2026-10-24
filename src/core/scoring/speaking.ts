import type { KeyPoint, ScoreResult, SpeechResponse, TimedWord, TraitScore, WordMark } from '../content/types';
import { getTaskType } from '../exams/registry';
import type { TaskTypeId, TraitId } from '../exams/types';
import { align, band, clamp, hesitationCount, keyPointCoverage, repetitionCount, tokenize, type Alignment } from './text';
import { ON_TOPIC_FLOOR } from './writing';

/*
 * Speaking estimates from a speech-recognition transcript plus timing.
 * Content: alignment to the reference text, or key-point coverage for open tasks.
 * Fluency: speaking rate, hesitations, repetitions and how much of the window was used.
 * Pronunciation: recogniser confidence blended with how many words were recognised.
 * Without a transcript (no recogniser on this device) we fall back to the learner's
 * self-rating for content and leave fluency/pronunciation unscored.
 */

type TraitValues = Partial<Record<TraitId, number>>;

function build(
  taskType: TaskTypeId,
  values: TraitValues,
  feedback: string[],
  answer: string | undefined,
  unscored: TraitId[] = [],
): ScoreResult {
  const traits: TraitScore[] = getTaskType(taskType).traits.map((t) => ({
    ...t,
    score: clamp(Math.round(values[t.id] ?? 0), 0, t.max),
    unscored: unscored.includes(t.id) || undefined,
  }));
  const counted = traits.filter((t) => !t.unscored);
  const total = counted.reduce((s, t) => s + t.score, 0);
  const max = counted.reduce((s, t) => s + t.max, 0);
  return { traits, total, max, percent: max === 0 ? 0 : total / max, estimated: true, feedback, answer };
}

/** Fluency 0..5 from words-per-minute against a target band, minus disfluencies. */
export function fluencyBand(words: string[], durationMs: number, responseSec: number): number {
  if (words.length === 0 || durationMs <= 0) return 0;
  const minutes = durationMs / 60000;
  const wpm = words.length / minutes;
  let score: number;
  if (wpm >= 110 && wpm <= 170) score = 5;
  else if (wpm >= 95 && wpm <= 190) score = 4;
  else if (wpm >= 80) score = 3;
  else if (wpm >= 65) score = 2;
  else if (wpm >= 45) score = 1;
  else score = 0;
  const disfluencies = hesitationCount(words) + repetitionCount(words);
  score -= Math.min(2, Math.floor(disfluencies / 2));
  // Very short answers in long windows sound hesitant even at a good rate.
  const usage = durationMs / 1000 / responseSec;
  if (responseSec >= 30 && usage < 0.5) score -= 1;
  return clamp(score, 0, 5);
}

export function pronunciationBand(confidence: number | null | undefined, recognisedRatio: number): number {
  const conf = confidence == null ? recognisedRatio : confidence * 0.6 + recognisedRatio * 0.4;
  return band(conf, 5);
}

function noTranscript(taskType: TaskTypeId, response: SpeechResponse, answer?: string): ScoreResult {
  // Nothing recorded (question skipped): every trait counts and scores 0, as an unanswered item would.
  if (response.durationMs <= 0) return build(taskType, {}, ['No recording was made for this question.'], answer);
  const spec = getTaskType(taskType);
  const contentTrait = spec.traits[0];
  const values: TraitValues = {};
  const feedback = [
    'Automatic speech scoring is not available on this device yet. Listen to your recording, compare it with the model answer and rate your content.',
  ];
  if (response.selfRating != null) values[contentTrait.id] = response.selfRating * contentTrait.max;
  const unscored = spec.traits.filter((t) => t.id !== contentTrait.id).map((t) => t.id);
  return build(taskType, values, feedback, answer, response.selfRating == null ? spec.traits.map((t) => t.id) : unscored);
}

/** ADR-017: Whisper transcripts get fluency and pronunciation estimates, labelled as such. */
const PHONE_NOTE =
  'Phone estimate: fluency comes from your speaking rate, fillers and long pauses; pronunciation from how clearly the speech model understood you. A mispronounced word that still sounds like the right word is not caught.';

/**
 * Long hesitations, one flag per word: Whisper folds the silence after a word into that word, so a
 * pause shows as a word that runs well past its expected length (or as a gap before the next one).
 * Pauses after punctuation are natural and not counted.
 */
export function pausesAfter(words: TimedWord[]): boolean[] {
  return words.map((w, i) => {
    if (i === words.length - 1 || /[.,;:!?]$/.test(w.word)) return false;
    const letters = w.word.replace(/[^\p{L}]/gu, '').length;
    const excess = w.end - w.start - (0.15 + 0.07 * letters);
    const gap = words[i + 1].start - w.end;
    return excess > 0.6 || gap > 0.6;
  });
}

/** Fluency 0..5 from timed words: rate over the spoken span (not the silence around it), minus pauses. */
export function timedFluencyBand(words: TimedWord[], responseSec: number): number {
  if (words.length === 0) return 0;
  const tokens = tokenize(words.map((w) => w.word).join(' '));
  const spanMs = (words[words.length - 1].end - words[0].start) * 1000;
  const pauses = pausesAfter(words).filter(Boolean).length;
  return clamp(fluencyBand(tokens, spanMs, responseSec) - Math.min(2, Math.floor(pauses / 2)), 0, 5);
}

/**
 * Pronunciation 0..5 from Whisper's mean segment probability. Clear speech scores about 0.85;
 * the scale is stretched so that unclear speech (around 0.6) loses marks. Uncalibrated (ADR-017).
 */
export function whisperPronunciationBand(confidence: number | null | undefined, recognisedRatio: number): number {
  const clarity = confidence == null ? recognisedRatio : clamp((confidence - 0.45) / 0.4, 0, 1);
  return band(clarity * 0.7 + recognisedRatio * 0.3, 5);
}

/** The reference text word by word, marked against the transcript, with long pauses. */
function referenceMarks(reference: string, a: Alignment, hyp: string[], hypPause: boolean[]): WordMark[] {
  let r = 0;
  return reference
    .split(/\s+/)
    .filter(Boolean)
    .map((text): WordMark => {
      if (tokenize(text).length === 0) return { text, status: 'ok' };
      const i = r++;
      const j = a.refToHyp[i];
      const status = a.matchedRef[i] ? 'ok' : j == null ? 'missed' : 'wrong';
      return {
        text,
        status,
        heard: status === 'wrong' && j != null ? hyp[j] : undefined,
        pauseAfter: j != null && hypPause[j] ? true : undefined,
      };
    });
}

/** Transcript words for scoring; with timings, one pause flag per word as well. */
function hypothesis(response: SpeechResponse): { hyp: string[]; pause: boolean[]; timed: TimedWord[] | null } {
  const timed = response.transcriptSource === 'whisper' && response.words?.length ? response.words : null;
  if (!timed) {
    const hyp = tokenize(response.transcript ?? '');
    return { hyp, pause: hyp.map(() => false), timed: null };
  }
  const flags = pausesAfter(timed);
  const hyp: string[] = [];
  const pause: boolean[] = [];
  timed.forEach((w, k) => {
    const t = tokenize(w.word);
    t.forEach((tok, n) => {
      hyp.push(tok);
      pause.push(n === t.length - 1 && flags[k]);
    });
  });
  return { hyp, pause, timed };
}

/** Read Aloud (content 0..5) and Repeat Sentence (content 0..3): reference alignment. */
export function scoreReferenceSpeech(
  taskType: 'read-aloud' | 'repeat-sentence',
  reference: string,
  response: SpeechResponse,
): ScoreResult {
  const answer = taskType === 'repeat-sentence' ? reference : undefined;
  if (response.transcript == null) return noTranscript(taskType, response, answer);
  const ref = tokenize(reference);
  const { hyp, pause, timed } = hypothesis(response);
  const a = align(ref, hyp);
  const ratio = ref.length === 0 ? 0 : a.matches / ref.length;
  const errors = a.substitutions + a.deletions + a.insertions;
  const feedback: string[] = [];
  const values: TraitValues = {};

  if (taskType === 'read-aloud') {
    values.content = ratio >= 0.97 ? 5 : ratio >= 0.9 ? 4 : ratio >= 0.8 ? 3 : ratio >= 0.65 ? 2 : ratio >= 0.45 ? 1 : 0;
    feedback.push(`${a.matches}/${ref.length} words read correctly; ${errors} omission/insertion/substitution error(s).`);
  } else {
    values.content = a.matches === ref.length ? 3 : ratio >= 0.5 ? 2 : ratio >= 0.1 ? 1 : 0;
    feedback.push(`You repeated ${a.matches} of ${ref.length} words in order.`);
  }
  const list = (words: string[]) => `${words.slice(0, 12).join(', ')}${words.length > 12 ? '…' : ''}`;
  const missed = ref.filter((_, i) => a.refToHyp[i] == null);
  const misheard = ref.flatMap((w, i) => (!a.matchedRef[i] && a.refToHyp[i] != null ? [`${w} → ${hyp[a.refToHyp[i]!]}`] : []));
  if (missed.length > 0) feedback.push(`Missed: ${list(missed)}`);
  if (misheard.length > 0) feedback.push(`Heard differently: ${list(misheard)}`);

  const spec = getTaskType(taskType);
  const responseSec = spec.timing.responseSec ?? 40;
  const whisper = response.transcriptSource === 'whisper';
  values.fluency = timed ? timedFluencyBand(timed, responseSec) : fluencyBand(hyp, response.durationMs, responseSec);
  values.pronunciation = whisper ? whisperPronunciationBand(response.confidence, ratio) : pronunciationBand(response.confidence, ratio);
  if (values.content === 0) {
    // PTE: no content means fluency and pronunciation are not credited.
    values.fluency = 0;
    values.pronunciation = 0;
  }
  const pauses = pause.filter(Boolean).length;
  const fillers = hesitationCount(hyp);
  if (pauses > 0) feedback.push(`${pauses} long pause(s) mid-sentence (marked | in the text). Pause only at commas and full stops.`);
  if (fillers > 0) feedback.push(`${fillers} filler(s) such as "um" or "uh". Keep going instead, even after a slip.`);
  if (whisper) feedback.push(PHONE_NOTE);
  return { ...build(taskType, values, feedback, answer), marks: referenceMarks(reference, a, hyp, pause) };
}

const POLITE_MARKERS = ['please', 'could you', 'would you', 'would it be', 'i was wondering', 'sorry', 'apologise', 'apologize', 'thank', 'appreciate', 'excuse me', 'i understand'];

/** DI, RL, SGD (content 0..6) and RTS (appropriacy 0..6): key-point coverage. */
export function scoreOpenSpeech(
  taskType: 'describe-image' | 'retell-lecture' | 'summarize-group-discussion' | 'respond-to-situation',
  keyPoints: KeyPoint[],
  modelAnswer: string,
  response: SpeechResponse,
): ScoreResult {
  if (response.transcript == null) return noTranscript(taskType, response, modelAnswer);
  const { hyp, timed } = hypothesis(response);
  const coverage = keyPointCoverage(response.transcript, keyPoints);
  const feedback: string[] = [];
  const values: TraitValues = {};
  const contentId: TraitId = taskType === 'respond-to-situation' ? 'appropriacy' : 'content';

  // Memorised templates and politeness alone must not earn content: below the on-topic
  // floor the content trait is 0, which zeroes fluency and pronunciation as in PTE.
  let ratio = coverage.ratio < ON_TOPIC_FLOOR ? 0 : coverage.ratio;
  if (taskType === 'respond-to-situation' && ratio > 0) {
    const lower = response.transcript.toLowerCase();
    const polite = POLITE_MARKERS.filter((m) => lower.includes(m)).length;
    ratio = coverage.ratio * 0.75 + clamp(polite / 2, 0, 1) * 0.25;
    if (polite === 0) feedback.push('Use polite, situation-appropriate language (could you…, I’m sorry…, thank you…).');
  }
  if (ratio === 0) feedback.push('Content: talk about what is actually in the prompt, not a memorised template.');
  values[contentId] = band(ratio, 6);
  feedback.push(`Covered ${coverage.covered.length} of ${keyPoints.length} key points.`);
  if (coverage.missed.length > 0)
    feedback.push(`Missing: ${coverage.missed.map((k) => (k.speaker ? `${k.speaker}: ${k.label}` : k.label)).join('; ')}`);

  const spec = getTaskType(taskType);
  const responseSec = spec.timing.responseSec ?? 40;
  const whisper = response.transcriptSource === 'whisper';
  values.fluency = timed ? timedFluencyBand(timed, responseSec) : fluencyBand(hyp, response.durationMs, responseSec);
  // No reference text: use how much was recognised against the expected length of the window.
  const recognised = clamp(hyp.length / ((responseSec * 0.8 * 130) / 60), 0, 1);
  values.pronunciation = whisper ? whisperPronunciationBand(response.confidence, recognised) : pronunciationBand(response.confidence, recognised);
  if (values[contentId] === 0) {
    values.fluency = 0;
    values.pronunciation = 0;
  }
  if (whisper) feedback.push(PHONE_NOTE);
  return build(taskType, values, feedback, modelAnswer);
}

/** Answer Short Question: 1 if any accepted answer is said. */
export function scoreShortAnswer(answers: string[], response: SpeechResponse): ScoreResult {
  if (response.transcript == null) return noTranscript('answer-short-question', response, answers[0]);
  const said = ` ${tokenize(response.transcript).join(' ')} `;
  const correct = answers.some((a) => said.includes(` ${tokenize(a).join(' ')} `));
  return build(
    'answer-short-question',
    { vocabulary: correct ? 1 : 0 },
    [correct ? 'Correct.' : `Accepted answers: ${answers.join(', ')}`],
    answers[0],
  );
}
