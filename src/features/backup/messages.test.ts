import { describe, expect, it } from 'vitest';

import { formatSize, importErrorMessage, importSummary, lastBackupLabel } from './messages';

const NOW = new Date(2026, 9, 18, 9).getTime();
const ZERO = { attemptsAdded: 0, mocksAdded: 0, cardsUpdated: 0, bookmarksAdded: 0 };

describe('formatSize', () => {
  it('handles zero, sub-KB, KB and MB', () => {
    expect(formatSize(0)).toBe('0 KB');
    expect(formatSize(1)).toBe('<1 KB');
    expect(formatSize(1023)).toBe('<1 KB');
    expect(formatSize(1024)).toBe('1 KB');
    expect(formatSize(1536)).toBe('2 KB');
    expect(formatSize(1024 * 1024 - 1)).toBe('1024 KB');
    expect(formatSize(1024 * 1024)).toBe('1.0 MB');
    expect(formatSize(1.5 * 1024 * 1024)).toBe('1.5 MB');
  });
});

describe('lastBackupLabel', () => {
  it('reports never when there is no backup', () => {
    expect(lastBackupLabel(null, NOW)).toBe('Last backup: never');
  });

  it('reports today for the same local calendar day', () => {
    expect(lastBackupLabel(new Date(2026, 9, 18, 0, 0).getTime(), NOW)).toBe('Last backup: today');
    expect(lastBackupLabel(new Date(2026, 9, 18, 23, 59).getTime(), NOW)).toBe('Last backup: today');
  });

  it('reports yesterday for the previous calendar day', () => {
    expect(lastBackupLabel(new Date(2026, 9, 17, 23, 59).getTime(), NOW)).toBe('Last backup: yesterday');
  });

  it('reports the local date otherwise, zero-padded', () => {
    expect(lastBackupLabel(new Date(2026, 9, 10, 9).getTime(), NOW)).toBe('Last backup: 2026-10-10');
    expect(lastBackupLabel(new Date(2026, 0, 3, 9).getTime(), NOW)).toBe('Last backup: 2026-01-03');
  });
});

describe('importSummary', () => {
  it('lists non-zero counts with plurals and always ends with settings replaced', () => {
    expect(importSummary({ attemptsAdded: 3, mocksAdded: 1, cardsUpdated: 2, bookmarksAdded: 0 }, 0)).toBe(
      '+3 attempts, +1 mock, 2 cards updated, settings replaced',
    );
  });

  it('uses singular forms for one', () => {
    expect(importSummary({ attemptsAdded: 1, mocksAdded: 1, cardsUpdated: 1, bookmarksAdded: 1 }, 0)).toBe(
      '+1 attempt, +1 mock, 1 card updated, +1 bookmark, settings replaced',
    );
  });

  it('omits zero counts', () => {
    expect(importSummary(ZERO, 0)).toBe('settings replaced');
  });

  it('inserts bookmarks before settings, after cards', () => {
    expect(importSummary({ ...ZERO, cardsUpdated: 2, bookmarksAdded: 4 }, 0)).toBe(
      '2 cards updated, +4 bookmarks, settings replaced',
    );
  });

  it('appends the skipped count with singular and plural wording', () => {
    expect(importSummary(ZERO, 1)).toBe('settings replaced (1 damaged entry skipped)');
    expect(importSummary(ZERO, 5)).toBe('settings replaced (5 damaged entries skipped)');
  });
});

describe('importErrorMessage', () => {
  it('maps every error code', () => {
    expect(importErrorMessage('not-json')).toBe('That file is not valid JSON.');
    expect(importErrorMessage('not-qimma')).toBe('That file is not a Qimma backup.');
    expect(importErrorMessage('newer-version')).toBe(
      'This backup was made by a newer version of Qimma. Update the app first.',
    );
    expect(importErrorMessage('bad-shape')).toBe('This backup file is damaged.');
  });
});
