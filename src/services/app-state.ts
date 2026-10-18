import type { Attempt, BackupData, BackupFile, ExamId, Grade, Item, MockRecord, Response, ScoreResult, Settings, SkillId, SrsCard } from '@/core';
import { createBackup, DEFAULT_SETTINGS, getTarget, MAX_ATTEMPTS, MAX_MOCKS, mergeBackup, newCard, resolveSkillTargets, review } from '@/core';

import { createStore } from './storage';

// The record types live in core (backup and sync need them); re-exported for existing imports.
export type { Attempt, MockRecord, Settings } from '@/core';
export { DEFAULT_SETTINGS } from '@/core';

export const settingsStore = createStore<Settings>('settings', DEFAULT_SETTINGS);
export const attemptsStore = createStore<Attempt[]>('attempts', []);
export const vocabStore = createStore<Record<string, SrsCard>>('vocab-srs', {});
export const bookmarksStore = createStore<string[]>('bookmarks', []);
export const mocksStore = createStore<MockRecord[]>('mocks', []);
/** Epoch ms of the last export. Its own key, so importing settings never overwrites it. */
export const lastBackupStore = createStore<number | null>('last-backup', null);

export const uid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

export function updateSettings(patch: Partial<Settings>) {
  settingsStore.update((s) => ({ ...DEFAULT_SETTINGS, ...s, ...patch }));
}

/** Switches exam and drops a goal preset that does not apply to the new exam. */
export function selectExam(examId: ExamId) {
  const current = { ...DEFAULT_SETTINGS, ...settingsStore.get() };
  const preset = getTarget(current.targetId);
  updateSettings({ examId, targetId: preset && !preset.exams.includes(examId) ? null : current.targetId });
}

export function useSettings(): Settings {
  return { ...DEFAULT_SETTINGS, ...settingsStore.useValue() };
}

/** Per-skill minimums for the learner's goal (preset or custom). */
export function skillTargets(settings: Settings): Record<SkillId, number> {
  return resolveSkillTargets(settings.targetId, settings.targetScore);
}

export function recordAttempt(item: Item, _response: Response, result: ScoreResult, mockId?: string): Attempt {
  const attempt: Attempt = {
    id: uid(),
    itemId: item.id,
    taskType: item.type,
    at: Date.now(),
    total: result.total,
    max: result.max,
    percent: result.percent,
    estimated: result.estimated,
    mockId,
  };
  // Self-review speaking attempts without any score are not evidence of ability.
  if (result.max > 0) attemptsStore.update((list) => [attempt, ...list].slice(0, MAX_ATTEMPTS));
  return attempt;
}

export function reviewWord(id: string, grade: Grade) {
  const now = Date.now();
  vocabStore.update((cards) => ({ ...cards, [id]: review(cards[id] ?? newCard(now), grade, now) }));
}

export function toggleBookmark(itemId: string) {
  bookmarksStore.update((list) => (list.includes(itemId) ? list.filter((i) => i !== itemId) : [itemId, ...list]));
}

export function saveMock(record: MockRecord) {
  mocksStore.update((list) => [record, ...list].slice(0, MAX_MOCKS));
}

export function resetAllData() {
  settingsStore.set(DEFAULT_SETTINGS);
  attemptsStore.set([]);
  vocabStore.set({});
  bookmarksStore.set([]);
  mocksStore.set([]);
}

function currentData(): BackupData {
  return {
    settings: { ...DEFAULT_SETTINGS, ...settingsStore.get() },
    attempts: attemptsStore.get(),
    vocab: vocabStore.get(),
    bookmarks: bookmarksStore.get(),
    mocks: mocksStore.get(),
  };
}

export function exportBackup(now = Date.now()): BackupFile {
  return createBackup(currentData(), now);
}

export function markBackedUp(now = Date.now()) {
  lastBackupStore.set(now);
}

/** What an import would do, without writing anything (shown to the learner before confirming). */
export function previewImport(incoming: BackupData) {
  return mergeBackup(currentData(), incoming);
}

/** Writes merged data to every store. Returns false if any store could not be persisted. */
export function applyImport(data: BackupData): boolean {
  const results = [
    settingsStore.set(data.settings),
    attemptsStore.set(data.attempts),
    vocabStore.set(data.vocab),
    bookmarksStore.set(data.bookmarks),
    mocksStore.set(data.mocks),
  ];
  return results.every(Boolean);
}
