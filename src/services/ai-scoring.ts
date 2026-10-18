import { aiScoreRequest, isAiWritingItem, mergeAiScore, scoreItem, type AiScoreReply, type Item, type Response, type ScoreResult } from '@/core';

import { SYSTEM_PROMPT, buildUserMessage, outputSchema, parseReply, replyFormat } from '../../supabase/functions/score-writing/rubric';

/*
 * Optional AI scoring for writing tasks (ADR-008, ADR-014), with open-weight models only.
 *
 * - Local: EXPO_PUBLIC_LOCAL_LLM_URL points at an Ollama server (e.g. http://localhost:11434, or
 *   http://10.0.2.2:11434 from the Android emulator). The app sends the rubric prompt itself, with
 *   thinking off and a JSON-schema `format`. Nothing leaves the machine.
 * - Hosted: EXPO_PUBLIC_SCORING_API_URL points at the score-writing Edge Function, which calls any
 *   OpenAI-compatible open-model provider.
 *
 * Any failure (offline, timeout, non-2xx, bad reply) falls back to the on-device scorer with a
 * note, so a learner is never left without a score.
 */

export const FALLBACK_NOTE = 'AI scoring was unavailable, so this is the on-device estimate.';
const HOSTED_TIMEOUT_MS = 20_000;
// A local 8B model on a laptop CPU took ~35 s for an essay; allow headroom for a cold start.
const LOCAL_TIMEOUT_MS = 90_000;

export interface AiScoringConfig {
  /** Hosted score-writing function. */
  url?: string;
  /** Supabase publishable (anon) key: public by design, it only identifies the project. */
  key?: string;
  /** Local Ollama server; takes precedence over the hosted function when set. */
  localUrl?: string;
  localModel?: string;
  fetch: typeof fetch;
  timeoutMs?: number;
}

const defaultConfig = (): AiScoringConfig => ({
  url: process.env.EXPO_PUBLIC_SCORING_API_URL,
  key: process.env.EXPO_PUBLIC_SUPABASE_KEY,
  localUrl: process.env.EXPO_PUBLIC_LOCAL_LLM_URL,
  localModel: process.env.EXPO_PUBLIC_LOCAL_LLM_MODEL,
  // Bound: browsers throw "Illegal invocation" when fetch is called as a method of another object.
  fetch: globalThis.fetch.bind(globalThis),
});

export function aiScoringEnabled(config = defaultConfig()): boolean {
  return Boolean(config.localUrl || config.url);
}

function isReply(v: unknown): v is AiScoreReply {
  const r = v as AiScoreReply;
  return typeof r?.scores === 'object' && r.scores !== null && Array.isArray(r.feedback);
}

async function localReply(config: AiScoringConfig, request: ReturnType<typeof aiScoreRequest>, signal: AbortSignal): Promise<AiScoreReply> {
  const res = await config.fetch(`${config.localUrl!.replace(/\/$/, '')}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: config.localModel || 'qwen3:8b',
      stream: false,
      // Thinking off: it multiplied latency by ~4 on qwen3 without better scores.
      think: false,
      format: outputSchema(request.traits),
      options: { temperature: 0, num_ctx: 4096 },
      messages: [
        { role: 'system', content: `${SYSTEM_PROMPT}\n\n${replyFormat(request.traits)}` },
        { role: 'user', content: buildUserMessage(request) },
      ],
    }),
    signal,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = (await res.json()) as { message?: { content?: string } };
  const reply = parseReply(data.message?.content ?? '', request.traits);
  if (!reply) throw new Error('Unexpected reply');
  return reply;
}

async function hostedReply(config: AiScoringConfig, request: ReturnType<typeof aiScoreRequest>, signal: AbortSignal): Promise<AiScoreReply> {
  const res = await config.fetch(config.url!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(config.key ? { apikey: config.key, Authorization: `Bearer ${config.key}` } : {}),
    },
    body: JSON.stringify(request),
    signal,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const reply: unknown = await res.json();
  if (!isReply(reply)) throw new Error('Unexpected reply');
  return reply;
}

/** Scores any response; writing tasks go to the AI scorer when one is configured. */
export async function scoreResponse(item: Item, response: Response, config = defaultConfig()): Promise<ScoreResult> {
  if (!aiScoringEnabled(config) || !isAiWritingItem(item) || response.kind !== 'text') return scoreItem(item, response);

  const local = Boolean(config.localUrl);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), config.timeoutMs ?? (local ? LOCAL_TIMEOUT_MS : HOSTED_TIMEOUT_MS));
  try {
    const request = aiScoreRequest(item, response.text);
    const reply = await (local ? localReply : hostedReply)(config, request, controller.signal);
    return mergeAiScore(item, response.text, reply);
  } catch {
    const fallback = scoreItem(item, response);
    return { ...fallback, feedback: [FALLBACK_NOTE, ...fallback.feedback] };
  } finally {
    clearTimeout(timer);
  }
}
