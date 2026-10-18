import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

import { SYSTEM_PROMPT, buildUserMessage, parseReply, replyFormat, validateRequest } from './rubric.ts';

/*
 * score-writing (ADR-008, ADR-014): grades a PTE writing response with an open-weight model and
 * returns trait scores plus feedback. The app turns them into a ScoreResult and falls back to
 * on-device scoring on any failure.
 *
 * Any OpenAI-compatible chat-completions endpoint works (Groq, OpenRouter, Together, Hugging Face,
 * or a self-hosted vLLM / Ollama server), chosen by function secrets:
 *   LLM_API_KEY   required
 *   LLM_BASE_URL  default https://api.groq.com/openai/v1
 *   LLM_MODEL     default openai/gpt-oss-120b (Apache-2.0 open weights)
 * Keep the model pinned: change it only together with a new calibration run.
 */

const BASE_URL = (Deno.env.get('LLM_BASE_URL') ?? 'https://api.groq.com/openai/v1').replace(/\/$/, '');
const MODEL = Deno.env.get('LLM_MODEL') ?? 'openai/gpt-oss-120b';
const API_KEY = Deno.env.get('LLM_API_KEY');
const TIMEOUT_MS = 18_000;

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json(405, { error: 'Use POST.' });
  if (!API_KEY) return json(503, { error: 'Scoring is not configured.' });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: 'Body must be JSON.' });
  }
  const request = validateRequest(body);
  if (typeof request === 'string') return json(400, { error: request });

  try {
    const res = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0,
        max_tokens: 2000,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: `${SYSTEM_PROMPT}\n\n${replyFormat(request.traits)}` },
          { role: 'user', content: buildUserMessage(request) },
        ],
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (res.status === 429) return json(429, { error: 'Scoring is busy; try again shortly.' });
    if (!res.ok) {
      console.error('score-writing: provider HTTP', res.status, (await res.text()).slice(0, 300));
      return json(502, { error: `Model API error ${res.status}` });
    }
    const data = (await res.json()) as { model?: string; choices?: { message?: { content?: string | null } }[] };
    const reply = parseReply(data.choices?.[0]?.message?.content ?? '', request.traits);
    if (!reply) return json(502, { error: 'Model reply did not match the expected format.' });
    return json(200, { ...reply, model: data.model ?? MODEL });
  } catch (error) {
    // Logged server-side only; the reply stays generic.
    console.error('score-writing failed:', error instanceof Error ? `${error.name}: ${error.message}` : error);
    return json(500, { error: 'Unexpected scoring error.' });
  }
});
