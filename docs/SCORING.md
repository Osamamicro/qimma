# How scoring works

All scoring is in `src/core/scoring` (pure TypeScript, unit-tested, runs offline).

## Objective tasks — exact PTE rules

| Task | Rule |
| --- | --- |
| Reading/Listening MCSA, Highlight Correct Summary, Select Missing Word | 1 or 0 |
| Reading/Listening MCMA | +1 per correct option, −1 per wrong option, minimum 0 |
| Re-order Paragraphs | 1 per correctly ordered adjacent pair |
| R&W FIB, Reading FIB, Listening FIB | 1 per correct gap (case-insensitive, exact spelling) |
| Highlight Incorrect Words | +1 per correct word, −1 per wrong word, minimum 0 |
| Write from Dictation | 1 per correctly spelled word of the sentence |
| Answer Short Question | 1 if an accepted answer is said |

## Writing — trait estimates (labelled "AI ESTIMATE")

Traits and maxima mirror the PTE score guide. As in PTE, a Form (or Content) score of 0 zeroes
the other traits.

- **Form**: word-count bands (SWT one sentence 5–75; Essay 200–300; SST 50–70; Email 50–120).
- **Content**: coverage of each item's key points (keywords + simple stemming); essays also
  credit a stated position and examples — but only above the on-topic floor (25% of key
  points). Below it content is 0, so memorised templates cannot earn marks.
- **Grammar**: rule checks (agreement, articles, capitalisation, "could of", repeated words).
- **Vocabulary**: lexical diversity (moving type–token ratio) + academic-word ratio.
- **Spelling**: common learner misspellings list.
- **Development/structure/coherence, linguistic range** (essay): paragraphing, connectives,
  conclusion markers, sentence-length variety, complex structures.
- **Email conventions/organisation** (PTE Core): greeting, sign-off, register, paragraphs.

## Speaking — trait estimates

Needs a transcript (web: browser speech recognition).

- **Read Aloud / Repeat Sentence content**: word alignment with the reference (omissions,
  insertions, substitutions), RS 0–3 as in PTE.
- **Open tasks (DI, RL, SGD, RTS)**: key-point coverage with the same on-topic floor; RTS adds
  politeness/appropriacy markers once the answer is on topic.
- **Describe Image figures** (ADR-011): a figure point counts only when its trend or comparison
  word is in the same sentence ("Solar rose to 40%"), not for a bare list of numbers.
- **Summarize Group Discussion**: views are tagged with their speaker, and missed ones are named
  ("Missing: Daniel: Smell and pests").
- **Fluency**: speaking rate (110–170 wpm best), hesitations, repetitions, use of the window.
- **Pronunciation**: recogniser confidence blended with recognition rate (a proxy, not phonetics).
- Phones with the local Whisper server (ADR-015): the recording is transcribed on the PC and
  scored for **content only**; fluency and pronunciation show "not scored", because those
  heuristics were tuned on browser-recogniser output and are not calibrated for Whisper.
- No transcript (Expo Go on phones without the server, or when it fails): the learner self-rates
  content; fluency and pronunciation are shown as "—" rather than invented.

## AI writing scoring (optional, ADR-008)

Practice answers to Summarize Written Text, Write Essay, Summarize Spoken Text and Write Email can
be scored by an open-weight model (ADR-014), which scores the judgement traits and writes feedback:

- **Local** (`EXPO_PUBLIC_LOCAL_LLM_URL`, e.g. `http://localhost:11434`): the app calls Ollama's
  `/api/chat` itself with thinking off and a JSON-schema `format`. Measured on the owner's laptop
  (i7-12700H, no GPU) with `qwen3:8b`: about 35-45 s per essay; a strong essay scored 26/26, a weak
  one 13/26. Nothing leaves the machine.
- **Hosted** (`EXPO_PUBLIC_SCORING_API_URL`): the `score-writing` Supabase Edge Function calls any
  OpenAI-compatible provider (Groq, OpenRouter, Together, Hugging Face, vLLM) chosen by its
  `LLM_BASE_URL`, `LLM_MODEL` and `LLM_API_KEY` secrets. Without a key it answers 503 and the app
  scores on the device.
- Prompt, reply format and validation are shared: `supabase/functions/score-writing/rubric.ts`.

- The app keeps the PTE rules: Form comes from the on-device word-count rules, Form 0 or Content 0
  zeroes the other traits, and every AI score is clamped to its maximum in `src/core/exams`
  (`mergeAiScore` in `src/core/scoring/ai.ts`).
- Offline, a timeout (90 s local, 20 s hosted), a non-2xx reply or a malformed reply falls back to
  the on-device scorer, with a note in the feedback (`src/services/ai-scoring.ts`).
- Mock tests still score on the device.
- Release gate: `npm run calibrate:writing -- <file.jsonl>` compares AI scores with at least 100
  human-rated responses (MAE, bias, exact and within-1 agreement per trait).

## From items to a 10–90 estimate

`src/core/progress/estimate.ts`: each task type's recent performance (recency-weighted) is
combined using **Pearson's published question-type weighting** (Aug 2025) for each skill and
overall, then mapped linearly to 10–90. Coverage tells you how much of a skill's weight you have
practised. Estimates are a study guide, not an official score.
