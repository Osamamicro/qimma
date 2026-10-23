import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

/*
 * transcribe (ADR-016): speech-to-text for speaking tasks on phones, with an open-weight Whisper
 * model behind any OpenAI-compatible /audio/transcriptions endpoint (Groq by default). Same reply
 * shape as the local tools/stt-server: { text, duration, confidence }. Audio is streamed to the
 * provider and never stored here.
 *
 * Function secrets:
 *   LLM_API_KEY   required (the same provider key as score-writing)
 *   STT_BASE_URL  default https://api.groq.com/openai/v1
 *   STT_MODEL     default whisper-large-v3-turbo (MIT open weights)
 */

const BASE_URL = (Deno.env.get('STT_BASE_URL') ?? 'https://api.groq.com/openai/v1').replace(/\/$/, '');
const MODEL = Deno.env.get('STT_MODEL') ?? 'whisper-large-v3-turbo';
const API_KEY = Deno.env.get('LLM_API_KEY');
const MAX_BYTES = 10 * 1024 * 1024; // a 2-minute AAC answer is ~2 MB
const MAX_SECONDS = 150; // longest PTE speaking window is 120 s
const TIMEOUT_MS = 30_000;
// Whisper invents short phrases ("Thank you.") from silence; drop segments it marks as no speech.
const NO_SPEECH = 0.6;

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
    upstream.append('temperature', '0');
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
    const data = (await res.json()) as { text?: string; duration?: number; segments?: Segment[] };
    if ((data.duration ?? 0) > MAX_SECONDS) return json(400, { error: `Recording longer than ${MAX_SECONDS} s.` });

    const segments = (data.segments ?? []).filter((s) => (s.no_speech_prob ?? 0) < NO_SPEECH);
    const text = data.segments ? segments.map((s) => s.text.trim()).filter(Boolean).join(' ') : (data.text ?? '').trim();
    const probs = segments.map((s) => Math.exp(s.avg_logprob ?? 0));
    return json(200, {
      text,
      duration: data.duration ?? null,
      // Mean segment probability: a rough 0..1 confidence (pronunciation stays unscored on phones).
      confidence: probs.length > 0 ? probs.reduce((a, b) => a + b, 0) / probs.length : null,
    });
  } catch (error) {
    console.error('transcribe failed:', error instanceof Error ? `${error.name}: ${error.message}` : error);
    return json(500, { error: 'Unexpected transcription error.' });
  }
});
