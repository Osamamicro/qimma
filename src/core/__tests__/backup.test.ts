import { describe, expect, it } from 'vitest';

import {
  backupFileName,
  createBackup,
  DEFAULT_SETTINGS,
  MAX_ATTEMPTS,
  mergeBackup,
  newCard,
  parseBackup,
  review,
  reviewedAt,
  type Attempt,
  type BackupData,
  type MockRecord,
} from '@/core';

const DAY = 24 * 60 * 60 * 1000;
const NOW = new Date(2026, 9, 18, 9).getTime();

const attempt = (id: string, at: number): Attempt => ({
  id,
  itemId: 'ra-001',
  taskType: 'read-aloud',
  at,
  total: 10,
  max: 15,
  percent: 10 / 15,
  estimated: true,
});

const mock = (id: string, finishedAt: number): MockRecord => ({
  id,
  examId: 'pte-academic',
  kind: 'mini',
  startedAt: finishedAt - 60_000,
  finishedAt,
  results: [
    {
      itemId: 'wfd-001',
      taskType: 'write-from-dictation',
      result: { traits: [], total: 3, max: 5, percent: 0.6, estimated: false, feedback: [] },
    },
  ],
});

const empty = (): BackupData => ({ settings: DEFAULT_SETTINGS, attempts: [], vocab: {}, bookmarks: [], mocks: [] });

const sample = (): BackupData => ({
  settings: { ...DEFAULT_SETTINGS, targetId: 'dha-superior', examDate: '2026-12-01', onboarded: true },
  attempts: [attempt('a2', NOW), attempt('a1', NOW - DAY)],
  vocab: { mitigate: review(newCard(NOW - DAY), 'good', NOW - DAY) },
  bookmarks: ['ra-001'],
  mocks: [mock('m1', NOW)],
});

const roundTrip = (data: BackupData) => parseBackup(JSON.stringify(createBackup(data, NOW)));

describe('backup file', () => {
  it('round-trips every store unchanged', () => {
    const data = sample();
    const parsed = roundTrip(data);
    expect(parsed).toEqual({ ok: true, data, exportedAt: new Date(NOW).toISOString(), skipped: 0 });
  });

  it('names the file after the local date', () => {
    expect(backupFileName(new Date(2026, 0, 5, 23).getTime())).toBe('qimma-backup-2026-01-05.json');
  });

  it('rejects corrupt JSON, other apps, newer versions and a missing data block', () => {
    expect(parseBackup('{oops')).toEqual({ ok: false, error: 'not-json' });
    expect(parseBackup('{"app":"other","version":1,"data":{}}')).toEqual({ ok: false, error: 'not-qimma' });
    expect(parseBackup('[1,2]')).toEqual({ ok: false, error: 'not-qimma' });
    expect(parseBackup('{"app":"qimma","version":2,"data":{}}')).toEqual({ ok: false, error: 'newer-version' });
    expect(parseBackup('{"app":"qimma","version":"1","data":{}}')).toEqual({ ok: false, error: 'bad-shape' });
    expect(parseBackup('{"app":"qimma","version":1}')).toEqual({ ok: false, error: 'bad-shape' });
  });

  it('drops and counts malformed entries but keeps the valid ones', () => {
    const file = createBackup(sample(), NOW) as unknown as { data: Record<string, unknown> };
    file.data.attempts = [attempt('ok', NOW), { id: 'bad' }, { ...attempt('x', NOW), taskType: 'no-such-task' }];
    file.data.mocks = [mock('m1', NOW), { ...mock('m2', NOW), examId: 'ielts' }];
    file.data.vocab = { good: newCard(NOW), bad: { ease: 'high' } };
    file.data.bookmarks = ['ra-001', 42, 'ra-001'];
    const parsed = parseBackup(JSON.stringify(file));
    if (!parsed.ok) throw new Error('expected ok');
    expect(parsed.skipped).toBe(2 + 1 + 1 + 1);
    expect(parsed.data.attempts.map((a) => a.id)).toEqual(['ok']);
    expect(parsed.data.mocks.map((m) => m.id)).toEqual(['m1']);
    expect(Object.keys(parsed.data.vocab)).toEqual(['good']);
    expect(parsed.data.bookmarks).toEqual(['ra-001']);
  });

  it('falls back to defaults for unknown or invalid settings fields', () => {
    const file = createBackup(sample(), NOW) as unknown as { data: Record<string, unknown> };
    file.data.settings = { examId: 'toefl', dailyMinutes: -5, examDate: 'soon', examMode: true, extra: 1 };
    const parsed = parseBackup(JSON.stringify(file));
    if (!parsed.ok) throw new Error('expected ok');
    expect(parsed.data.settings).toEqual({ ...DEFAULT_SETTINGS, examMode: true });
  });
});

describe('mergeBackup', () => {
  it('into an empty device gives the same result as replace', () => {
    const incoming = sample();
    const { data, summary } = mergeBackup(empty(), incoming);
    expect(data).toEqual(incoming);
    expect(summary).toEqual({ attemptsAdded: 2, mocksAdded: 1, cardsUpdated: 1, bookmarksAdded: 1 });
  });

  it('is idempotent: merging the same file twice changes nothing the second time', () => {
    const once = mergeBackup(empty(), sample()).data;
    const twice = mergeBackup(once, sample());
    expect(twice.data).toEqual(once);
    expect(twice.summary).toEqual({ attemptsAdded: 0, mocksAdded: 0, cardsUpdated: 0, bookmarksAdded: 0 });
  });

  it('unions attempts and mocks by id, newest first', () => {
    const local = { ...empty(), attempts: [attempt('l1', NOW - 2 * DAY)], mocks: [mock('ml', NOW - DAY)] };
    const incoming = { ...empty(), attempts: [attempt('i1', NOW), attempt('l1', NOW - 2 * DAY)], mocks: [mock('mi', NOW)] };
    const { data } = mergeBackup(local, incoming);
    expect(data.attempts.map((a) => a.id)).toEqual(['i1', 'l1']);
    expect(data.mocks.map((m) => m.id)).toEqual(['mi', 'ml']);
  });

  it('applies the caps of 2,000 attempts and 50 mocks', () => {
    const many = (n: number, prefix: string) => Array.from({ length: n }, (_, i) => attempt(`${prefix}${i}`, NOW - i));
    const mocks = (n: number, prefix: string) => Array.from({ length: n }, (_, i) => mock(`${prefix}${i}`, NOW - i));
    const { data } = mergeBackup(
      { ...empty(), attempts: many(1500, 'l'), mocks: mocks(40, 'l') },
      { ...empty(), attempts: many(1500, 'i'), mocks: mocks(40, 'i') },
    );
    expect(data.attempts).toHaveLength(MAX_ATTEMPTS);
    expect(data.mocks).toHaveLength(50);
  });

  it('keeps the SRS card that was reviewed most recently', () => {
    const older = review(newCard(NOW - 10 * DAY), 'good', NOW - 10 * DAY);
    const newer = review(older, 'again', NOW - DAY);
    expect(reviewedAt(newer)).toBe(NOW - DAY);
    expect(mergeBackup({ ...empty(), vocab: { w: older } }, { ...empty(), vocab: { w: newer } }).data.vocab.w).toEqual(newer);
    expect(mergeBackup({ ...empty(), vocab: { w: newer } }, { ...empty(), vocab: { w: older } }).data.vocab.w).toEqual(newer);
  });

  it('unions bookmarks and takes settings from the file', () => {
    const local = { ...empty(), bookmarks: ['a', 'b'], settings: { ...DEFAULT_SETTINGS, dailyMinutes: 20 } };
    const incoming = { ...empty(), bookmarks: ['b', 'c'], settings: { ...DEFAULT_SETTINGS, dailyMinutes: 90 } };
    const { data } = mergeBackup(local, incoming);
    expect(data.bookmarks).toEqual(['a', 'b', 'c']);
    expect(data.settings.dailyMinutes).toBe(90);
  });
});
