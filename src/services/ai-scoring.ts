import { aiScoreRequest, isAiWritingItem, mergeAiScore, scoreItem, type AiScoreReply, type Item, type Response, type ScoreResult } from '@/core';

/*
 * Optional AI scoring for writing tasks (ADR-008). Active only when EXPO_PUBLIC_SCORING_API_URL is
 * set. Any failure (offline, timeout, non-2xx, bad reply) falls back to the on-device scorer with
 * a note, so a learner is never left without a score.
 */

export const FALLBACK_NOTE = 'AI scoring was unavailable, so this is the on-device estimate.';
const TIMEOUT_MS = 20_000;

export interface AiScoringConfig {
  url: string | undefined;
  /** Supabase publishable (anon) key: public by design, it only identifies the project. */
  key: string | undefined;
  fetch: typeof fetch;
  timeoutMs?: number;
}

const defaultConfig = (): AiScoringConfig => ({
  url: process.env.EXPO_PUBLIC_SCORING_API_URL,
  key: process.env.EXPO_PUBLIC_SUPABASE_KEY,
  // Bound: browsers throw "Illegal invocation" when fetch is called as a method of another object.
  fetch: globalThis.fetch.bind(globalThis),
});

export function aiScoringEnabled(config = defaultConfig()): boolean {
  return Boolean(config.url);
}

function isReply(v: unknown): v is AiScoreReply {
  const r = v as AiScoreReply;
  return typeof r?.scores === 'object' && r.scores !== null && Array.isArray(r.feedback);
}

/** Scores any response; writing tasks go to the AI service when it is configured. */
export async function scoreResponse(item: Item, response: Response, config = defaultConfig()): Promise<ScoreResult> {
  if (!config.url || !isAiWritingItem(item) || response.kind !== 'text') return scoreItem(item, response);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), config.timeoutMs ?? TIMEOUT_MS);
  try {
    const res = await config.fetch(config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(config.key ? { apikey: config.key, Authorization: `Bearer ${config.key}` } : {}),
      },
      body: JSON.stringify(aiScoreRequest(item, response.text)),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const reply: unknown = await res.json();
    if (!isReply(reply)) throw new Error('Unexpected reply');
    return mergeAiScore(item, response.text, reply);
  } catch {
    const local = scoreItem(item, response);
    return { ...local, feedback: [FALLBACK_NOTE, ...local.feedback] };
  } finally {
    clearTimeout(timer);
  }
}
