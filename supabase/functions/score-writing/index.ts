import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Anthropic from 'npm:@anthropic-ai/sdk';

import { SYSTEM_PROMPT, buildUserMessage, outputSchema, parseReply, validateRequest } from './rubric.ts';

/*
 * score-writing (ADR-008): grades a PTE writing response with Claude and returns trait scores
 * plus feedback. The app turns them into a ScoreResult and falls back to on-device scoring on any
 * failure. ANTHROPIC_API_KEY lives only in the function's secrets.
 */

// Pinned so scores stay comparable across calibration runs (ADR-008). Change it only with a new
// calibration run.
const MODEL = 'claude-opus-5-5';

const client = new Anthropic({ apiKey: Deno.env.get('ANTHROPIC_API_KEY'), timeout: 25_000, maxRetries: 1 });

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

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: 'Body must be JSON.' });
  }
  const request = validateRequest(body);
  if (typeof request === 'string') return json(400, { error: request });

  try {
    const message = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 4000,
      // Grading is a bounded judgement task; medium keeps latency inside the app's timeout.
      output_config: { effort: 'medium', format: { type: 'json_schema', schema: outputSchema(request.traits) } },
      // On a safety-classifier decline, the API re-runs the request on its recommended fallback.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: buildUserMessage(request) }],
    });
    if (message.stop_reason === 'refusal' || message.stop_reason === 'max_tokens') {
      return json(502, { error: `Model stopped: ${message.stop_reason}.` });
    }
    const text = message.content.find((b) => b.type === 'text');
    const reply = text && text.type === 'text' ? parseReply(text.text, request.traits) : null;
    if (!reply) return json(502, { error: 'Model reply did not match the schema.' });
    return json(200, { ...reply, model: message.model });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) return json(429, { error: 'Scoring is busy; try again shortly.' });
    if (error instanceof Anthropic.APIError) return json(502, { error: `Model API error ${error.status ?? ''}`.trim() });
    return json(500, { error: 'Unexpected scoring error.' });
  }
});
