import type { BackupError, MergeSummary } from '@/core';

/** Pure text helpers for the backup UI. Kept free of React Native so they can be unit-tested. */

const KB = 1024;
const MB = KB * KB;

/** Storage size in characters (about bytes for Qimma's ASCII JSON). */
export function formatSize(chars: number): string {
  if (chars === 0) return '0 KB';
  if (chars < KB) return '<1 KB';
  if (chars < MB) return `${Math.round(chars / KB)} KB`;
  return `${(chars / MB).toFixed(1)} MB`;
}

const pad = (n: number) => String(n).padStart(2, '0');

export function lastBackupLabel(ts: number | null, now: number): string {
  if (ts == null) return 'Last backup: never';
  const d = new Date(ts);
  const n = new Date(now);
  const sameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  if (sameDay(d, n)) return 'Last backup: today';
  const yesterday = new Date(n.getFullYear(), n.getMonth(), n.getDate() - 1);
  if (sameDay(d, yesterday)) return 'Last backup: yesterday';
  return `Last backup: ${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export function importSummary(s: MergeSummary, skipped: number): string {
  const parts: string[] = [];
  if (s.attemptsAdded > 0) parts.push(`+${plural(s.attemptsAdded, 'attempt', 'attempts')}`);
  if (s.mocksAdded > 0) parts.push(`+${plural(s.mocksAdded, 'mock', 'mocks')}`);
  if (s.cardsUpdated > 0) parts.push(plural(s.cardsUpdated, 'card updated', 'cards updated'));
  if (s.bookmarksAdded > 0) parts.push(`+${plural(s.bookmarksAdded, 'bookmark', 'bookmarks')}`);
  parts.push('settings replaced');
  const base = parts.join(', ');
  return skipped > 0 ? `${base} (${plural(skipped, 'damaged entry skipped', 'damaged entries skipped')})` : base;
}

const IMPORT_ERRORS: Record<BackupError, string> = {
  'not-json': 'That file is not valid JSON.',
  'not-qimma': 'That file is not a Qimma backup.',
  'newer-version': 'This backup was made by a newer version of Qimma. Update the app first.',
  'bad-shape': 'This backup file is damaged.',
};

export function importErrorMessage(e: BackupError): string {
  return IMPORT_ERRORS[e];
}
