import type { Item, ScoreResult, TraitScore } from '../content/types';
import { getTaskType } from '../exams/registry';
import type { TraitSpec } from '../exams/types';
import { scoreItem } from './index';
import { clamp } from './text';

/*
 * AI writing scoring (ADR-008). The service grades only the judgement traits; this module keeps
 * the PTE rules in the app: Form comes from the on-device word-count rules, Form 0 or Content 0
 * zeroes every other trait, and each AI score is clamped to the trait maximum in src/core/exams.
 */

export type AiWritingItem = Extract<
  Item,
  { type: 'summarize-written-text' | 'write-essay' | 'summarize-spoken-text' | 'write-email' }
>;

export function isAiWritingItem(item: Item): item is AiWritingItem {
  return (
    item.type === 'summarize-written-text' ||
    item.type === 'write-essay' ||
    item.type === 'summarize-spoken-text' ||
    item.type === 'write-email'
  );
}

/** Body for the score-writing function (supabase/functions/score-writing/rubric.ts). */
export interface AiScoreRequest {
  taskType: AiWritingItem['type'];
  task: string;
  keyPoints: string[];
  register?: 'formal' | 'semi-formal' | 'informal';
  modelAnswer: string;
  traits: TraitSpec[];
  response: string;
}

export interface AiScoreReply {
  scores: Record<string, number>;
  feedback: string[];
}

export function aiScoreRequest(item: AiWritingItem, text: string): AiScoreRequest {
  const traits = getTaskType(item.type).traits.filter((t) => t.id !== 'form');
  const base = { taskType: item.type, modelAnswer: item.modelAnswer, traits, response: text };
  switch (item.type) {
    case 'summarize-written-text':
      return { ...base, task: item.passage, keyPoints: item.keyPoints.map((k) => k.label) };
    case 'write-essay':
      return { ...base, task: item.prompt, keyPoints: item.keyPoints.map((k) => k.label) };
    case 'summarize-spoken-text':
      return { ...base, task: item.script, keyPoints: item.keyPoints.map((k) => k.label) };
    case 'write-email':
      return { ...base, task: item.situation, keyPoints: item.bulletPoints.map((k) => k.label), register: item.register };
  }
}

export const AI_SCORED_NOTE = 'Scored by AI: an estimate, not an official PTE score.';

/**
 * Builds the ScoreResult from an AI reply. When on-device Form is 0 the AI scores are ignored,
 * exactly as PTE scores nothing else on a response with the wrong form.
 */
export function mergeAiScore(item: AiWritingItem, text: string, reply: AiScoreReply): ScoreResult {
  const local = scoreItem(item, { kind: 'text', text });
  const form = local.traits.find((t) => t.id === 'form');
  if (!form || form.score === 0) return local;

  const contentZero = Math.round(reply.scores.content ?? 0) <= 0;
  const traits: TraitScore[] = local.traits.map((t) => {
    if (t.id === 'form') return t;
    if (contentZero && t.id !== 'content') return { ...t, score: 0 };
    return { ...t, score: clamp(Math.round(reply.scores[t.id] ?? 0), 0, t.max) };
  });
  const total = traits.reduce((s, t) => s + t.score, 0);
  const max = traits.reduce((s, t) => s + t.max, 0);
  return {
    traits,
    total,
    max,
    percent: max === 0 ? 0 : total / max,
    estimated: true,
    feedback: [AI_SCORED_NOTE, ...reply.feedback.slice(0, 4)],
    answer: local.answer,
  };
}
