import type { ScoreResult } from '../content/types';
import type { ExamId, TaskTypeId } from '../exams/types';

/** Learner data the app persists. Lives in core so backup and (later) sync can reason about it. */

export interface Settings {
  examId: ExamId;
  /** Preset goal id (e.g. 'dha-superior'), or null for a custom overall target. */
  targetId: string | null;
  /** Custom overall target (used when targetId is null). */
  targetScore: number;
  examDate: string | null;
  dailyMinutes: number;
  /** Exam mode: audio plays once, timers enforced, no spellcheck. */
  examMode: boolean;
  /** TTS speaking rate multiplier for listening prompts. */
  speechRate: number;
  onboarded: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
  examId: 'pte-academic',
  targetId: null,
  targetScore: 65,
  examDate: null,
  dailyMinutes: 45,
  examMode: false,
  speechRate: 1,
  onboarded: false,
};

export interface Attempt {
  id: string;
  itemId: string;
  taskType: TaskTypeId;
  at: number;
  total: number;
  max: number;
  percent: number;
  estimated: boolean;
  /** Optional mock-test id when the attempt was part of a mock. */
  mockId?: string;
}

export interface MockRecord {
  id: string;
  examId: ExamId;
  kind: string;
  startedAt: number;
  finishedAt: number;
  results: { itemId: string; taskType: TaskTypeId; result: ScoreResult }[];
}

export const MAX_ATTEMPTS = 2000;
export const MAX_MOCKS = 50;
