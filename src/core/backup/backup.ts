import { EXAMS, isTaskTypeId } from '../exams/registry';
import type { ExamId } from '../exams/types';
import type { Attempt, MockRecord, Settings } from '../progress/records';
import { DEFAULT_SETTINGS, MAX_ATTEMPTS, MAX_MOCKS } from '../progress/records';
import { reviewedAt, type SrsCard } from '../srs/sm2';

/** Progress export/import (ADR-013): file format, validation and merge rules. */

export const BACKUP_VERSION = 1;

export interface BackupData {
  settings: Settings;
  attempts: Attempt[];
  vocab: Record<string, SrsCard>;
  bookmarks: string[];
  mocks: MockRecord[];
}

export interface BackupFile {
  app: 'qimma';
  version: number;
  exportedAt: string;
  data: BackupData;
}

export type BackupError = 'not-json' | 'not-qimma' | 'newer-version' | 'bad-shape';

export type ParseResult =
  | { ok: true; data: BackupData; exportedAt: string | null; skipped: number }
  | { ok: false; error: BackupError };

export interface MergeSummary {
  attemptsAdded: number;
  mocksAdded: number;
  cardsUpdated: number;
  bookmarksAdded: number;
}

export function createBackup(data: BackupData, now: number): BackupFile {
  return { app: 'qimma', version: BACKUP_VERSION, exportedAt: new Date(now).toISOString(), data };
}

/** `qimma-backup-YYYY-MM-DD.json`, using the local date. */
export function backupFileName(now: number): string {
  const d = new Date(now);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `qimma-backup-${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}.json`;
}

// ---------- validation ----------

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => typeof v === 'object' && v !== null && !Array.isArray(v);
const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const isStr = (v: unknown): v is string => typeof v === 'string';
const isExamId = (v: unknown): v is ExamId => isStr(v) && Object.hasOwn(EXAMS, v);

/** Unknown or wrongly typed fields fall back to the default, so a damaged file never breaks the app. */
function sanitizeSettings(v: unknown): Settings {
  const s = isObj(v) ? v : {};
  const d = DEFAULT_SETTINGS;
  return {
    examId: isExamId(s.examId) ? s.examId : d.examId,
    targetId: isStr(s.targetId) || s.targetId === null ? s.targetId : d.targetId,
    targetScore: isNum(s.targetScore) ? s.targetScore : d.targetScore,
    examDate: (isStr(s.examDate) && /^\d{4}-\d{2}-\d{2}$/.test(s.examDate)) || s.examDate === null ? s.examDate : d.examDate,
    dailyMinutes: isNum(s.dailyMinutes) && s.dailyMinutes > 0 ? s.dailyMinutes : d.dailyMinutes,
    examMode: typeof s.examMode === 'boolean' ? s.examMode : d.examMode,
    speechRate: isNum(s.speechRate) && s.speechRate > 0 ? s.speechRate : d.speechRate,
    onboarded: typeof s.onboarded === 'boolean' ? s.onboarded : d.onboarded,
  };
}

function isAttempt(v: unknown): v is Attempt {
  return (
    isObj(v) &&
    isStr(v.id) &&
    isStr(v.itemId) &&
    isStr(v.taskType) &&
    isTaskTypeId(v.taskType) &&
    isNum(v.at) &&
    isNum(v.total) &&
    isNum(v.max) &&
    isNum(v.percent) &&
    typeof v.estimated === 'boolean' &&
    (v.mockId === undefined || isStr(v.mockId))
  );
}

function isScoreResult(v: unknown): boolean {
  return (
    isObj(v) &&
    Array.isArray(v.traits) &&
    isNum(v.total) &&
    isNum(v.max) &&
    isNum(v.percent) &&
    typeof v.estimated === 'boolean' &&
    Array.isArray(v.feedback)
  );
}

function isMock(v: unknown): v is MockRecord {
  return (
    isObj(v) &&
    isStr(v.id) &&
    isExamId(v.examId) &&
    isStr(v.kind) &&
    isNum(v.startedAt) &&
    isNum(v.finishedAt) &&
    Array.isArray(v.results) &&
    v.results.every((r) => isObj(r) && isStr(r.itemId) && isStr(r.taskType) && isTaskTypeId(r.taskType) && isScoreResult(r.result))
  );
}

function isCard(v: unknown): v is SrsCard {
  return isObj(v) && isNum(v.ease) && isNum(v.interval) && isNum(v.repetitions) && isNum(v.due);
}

/** Keeps the valid entries of a list and counts the dropped ones. */
function keep<T>(list: unknown, ok: (v: unknown) => v is T): { items: T[]; dropped: number } {
  if (!Array.isArray(list)) return { items: [], dropped: 0 };
  const items = list.filter(ok);
  return { items, dropped: list.length - items.length };
}

export function parseBackup(text: string): ParseResult {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return { ok: false, error: 'not-json' };
  }
  if (!isObj(raw) || raw.app !== 'qimma') return { ok: false, error: 'not-qimma' };
  if (!isNum(raw.version) || !Number.isInteger(raw.version) || raw.version < 1) return { ok: false, error: 'bad-shape' };
  // Older versions would be migrated here; version 1 is the first.
  if (raw.version > BACKUP_VERSION) return { ok: false, error: 'newer-version' };
  const d = raw.data;
  if (!isObj(d)) return { ok: false, error: 'bad-shape' };

  const attempts = keep(d.attempts, isAttempt);
  const mocks = keep(d.mocks, isMock);
  const bookmarks = keep(d.bookmarks, isStr);
  const vocab: Record<string, SrsCard> = {};
  let vocabDropped = 0;
  if (isObj(d.vocab)) {
    for (const [id, card] of Object.entries(d.vocab)) {
      if (isCard(card)) vocab[id] = { ease: card.ease, interval: card.interval, repetitions: card.repetitions, due: card.due };
      else vocabDropped++;
    }
  }

  return {
    ok: true,
    exportedAt: isStr(raw.exportedAt) ? raw.exportedAt : null,
    skipped: attempts.dropped + mocks.dropped + bookmarks.dropped + vocabDropped,
    data: {
      settings: sanitizeSettings(d.settings),
      attempts: attempts.items,
      vocab,
      bookmarks: [...new Set(bookmarks.items)],
      mocks: mocks.items,
    },
  };
}

// ---------- merge ----------

function unionById<T extends { id: string }>(local: T[], incoming: T[], time: (x: T) => number, cap: number) {
  const ids = new Set(local.map((x) => x.id));
  const added: T[] = [];
  for (const x of incoming) {
    if (ids.has(x.id)) continue;
    ids.add(x.id);
    added.push(x);
  }
  const merged = [...local, ...added].sort((a, b) => time(b) - time(a)).slice(0, cap);
  return { merged, added: added.length };
}

/**
 * Merges an imported backup into local data (ADR-013). Attempts and mocks are unioned by id,
 * newest first and capped; for each vocab card the most recently reviewed one wins (ties keep
 * local); bookmarks are unioned; settings come from the file. Merging the same file twice is a
 * no-op the second time.
 */
export function mergeBackup(local: BackupData, incoming: BackupData): { data: BackupData; summary: MergeSummary } {
  const attempts = unionById(local.attempts, incoming.attempts, (a) => a.at, MAX_ATTEMPTS);
  const mocks = unionById(local.mocks, incoming.mocks, (m) => m.finishedAt, MAX_MOCKS);

  const vocab = { ...local.vocab };
  let cardsUpdated = 0;
  for (const [id, card] of Object.entries(incoming.vocab)) {
    const mine = vocab[id];
    if (!mine || reviewedAt(card) > reviewedAt(mine)) {
      vocab[id] = card;
      cardsUpdated++;
    }
  }

  const bookmarkSet = new Set(local.bookmarks);
  const newBookmarks = incoming.bookmarks.filter((b) => !bookmarkSet.has(b));

  return {
    data: {
      settings: incoming.settings,
      attempts: attempts.merged,
      vocab,
      bookmarks: [...local.bookmarks, ...newBookmarks],
      mocks: mocks.merged,
    },
    summary: { attemptsAdded: attempts.added, mocksAdded: mocks.added, cardsUpdated, bookmarksAdded: newBookmarks.length },
  };
}
