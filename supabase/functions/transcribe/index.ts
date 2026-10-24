import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

/*
 * transcribe (ADR-016): speech-to-text for speaking tasks on phones, with an open-weight Whisper
 * model behind any OpenAI-compatible /audio/transcriptions endpoint (Groq by default). Replies
 * { text, duration, confidence, words } (the local tools/stt-server sends the first three). Audio
 * is streamed to the provider and never stored here.
 *
 * Function secrets:
 *   LLM_API_KEY   required (the same provider key as score-writing). Use a free-tier key with no
 *                 billing: the public anon key gates this function, so quota is the abuse limit.
 *   STT_BASE_URL  default https://api.groq.com/openai/v1
 *   STT_MODEL     default whisper-large-v3-turbo (MIT open weights)
 */

const BASE_URL = (Deno.env.get('STT_BASE_URL') ?? 'https://api.groq.com/openai/v1').replace(/\/$/, '');
const MODEL = Deno.env.get('STT_MODEL') ?? 'whisper-large-v3-turbo';
const API_KEY = Deno.env.get('LLM_API_KEY');
// A 2-minute AAC answer is ~2 MB; the cap limits how much free provider quota one call can use.
const MAX_BYTES = 4 * 1024 * 1024;
const MAX_SECONDS = 150; // longest PTE speaking window is 120 s
const TIMEOUT_MS = 30_000;
// Whisper invents short phrases ("Thank you.") from silence; drop segments it marks as no speech.
const NO_SPEECH = 0.6;
// Its usual silence hallucinations. A whole answer that is only one of these is treated as empty;
// longer answers that contain them are kept.
const SILENCE_PHRASES = new Set(['thank you', 'thanks', 'thank you for watching', 'thanks for watching', 'you', 'bye', 'okay', 'so']);

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

interface Segment {
  text: string;
  avg_logprob?: number;
  no_speech_prob?: number;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json(405, { error: 'Use POST.' });
  if (!API_KEY) return json(503, { error: 'Transcription is not configured.' });

  let file: File;
  let language = 'en';
  try {
    const form = await req.formData();
    const part = form.get('file');
    if (!(part instanceof File) || part.size === 0) return json(400, { error: "Missing 'file'." });
    if (part.size > MAX_BYTES) return json(413, { error: 'Recording too large.' });
    file = part;
    const lang = form.get('language');
    if (typeof lang === 'string' && /^[a-z]{2}$/.test(lang)) language = lang;
  } catch {
    return json(400, { error: "Send multipart/form-data with a 'file' field." });
  }

  try {
    const upstream = new FormData();
    upstream.append('file', file, file.name || 'answer.m4a');
    upstream.append('model', MODEL);
    upstream.append('language', language);
    upstream.append('response_format', 'verbose_json');
    upstream.append('timestamp_granularities[]', 'segment');
    upstream.append('timestamp_granularities[]', 'word');
    upstream.append('temperature', '0');
    // Whisper normally drops "um" and "uh"; a prompt written with them keeps them, so the app can
    // count hesitations for fluency.
    upstream.append('prompt', 'Umm, let me think like, hmm... Okay, uh, here is what I am, like, thinking.');
    const res = await fetch(`${BASE_URL}/audio/transcriptions`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${API_KEY}` },
      body: upstream,
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (res.status === 429) return json(429, { error: 'Transcription is busy; try again shortly.' });
    if (!res.ok) {
      console.error('transcribe: provider HTTP', res.status, (await res.text()).slice(0, 300));
      return json(res.status === 400 ? 422 : 502, { error: `Speech API error ${res.status}` });
    }
    const data = (await res.json()) as {
      text?: string;
      duration?: number;
      segments?: Segment[];
      words?: { word: string; start: number; end: number }[];
    };
    if ((data.duration ?? 0) > MAX_SECONDS) return json(400, { error: `Recording longer than ${MAX_SECONDS} s.` });

    // Speech only: drop segments marked as no speech and punctuation-only ones (silence gives ".").
    const segments = (data.segments ?? []).filter((s) => (s.no_speech_prob ?? 0) < NO_SPEECH && /[\p{L}\p{N}]/u.test(s.text));
    let text = data.segments ? segments.map((s) => s.text.trim()).filter(Boolean).join(' ') : (data.text ?? '').trim();
    // Groq reports no_speech_prob as 0, so also catch hallucinations by rate: a near-silent
    // 15 s recording comes back as two words ("I'm sorry."), real speech is ~2 words a second.
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const sparse = wordCount <= 3 && (data.duration ?? 0) > 0 && wordCount / data.duration! < 0.25;
    const silent = sparse || SILENCE_PHRASES.has(text.toLowerCase().replace(/[^\p{L}\s]/gu, '').trim().replace(/\s+/g, ' '));
    if (silent) text = '';
    const probs = silent ? [] : segments.map((s) => Math.exp(s.avg_logprob ?? 0));
    return json(200, {
      text,
      duration: data.duration ?? null,
      // Word timings (seconds) for fluency: speaking rate over the spoken span and long pauses.
      words: silent ? [] : (data.words ?? []).map((w) => ({ word: w.word.trim(), start: w.start, end: w.end })),
      // Mean segment probability: a rough 0..1 confidence, the app's pronunciation proxy.
      confidence: probs.length > 0 ? probs.reduce((a, b) => a + b, 0) / probs.length : null,
    });
  } catch (error) {
    console.error('transcribe failed:', error instanceof Error ? `${error.name}: ${error.message}` : error);
    return json(500, { error: 'Unexpected transcription error.' });
  }
});
