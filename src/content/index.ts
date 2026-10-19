import type { Item, ItemOf, TaskTypeId } from '@/core';
import { guides } from './guides';
import { speakingBankAItems } from './speaking-bank-a';
import { speakingBankBItems } from './speaking-bank-b';
import { speakingBankCItems } from './speaking-bank-c';
import { listeningBankAItems } from './listening-bank-a';
import { listeningBankBItems } from './listening-bank-b';
import { readingBankAItems } from './reading-bank-a';
import { readingBankBItems } from './reading-bank-b';
import { writingBankItems } from './writing-bank';
import { listeningItems } from './listening';
import { listeningExtraItems } from './listening-extra';
import { readingItems } from './reading';
import { readingExtraItems } from './reading-extra';
import { speakingItems } from './speaking';
import { speakingExtraItems } from './speaking-extra';
import { speakingVisualItems } from './speaking-visual';
import { vocabEntries } from './vocab';
import { writingItems } from './writing';

export const ALL_ITEMS: Item[] = [
  ...speakingItems,
  ...speakingExtraItems,
  ...speakingVisualItems,
  ...writingItems,
  ...readingItems,
  ...readingExtraItems,
  ...listeningItems,
  ...listeningExtraItems,
  ...speakingBankAItems,
  ...speakingBankBItems,
  ...speakingBankCItems,
  ...listeningBankAItems,
  ...listeningBankBItems,
  ...readingBankAItems,
  ...readingBankBItems,
  ...writingBankItems,
];

const byId = new Map(ALL_ITEMS.map((i) => [i.id, i]));

export function getItem(id: string): Item | undefined {
  return byId.get(id);
}

export function itemsOfType<T extends TaskTypeId>(type: T): ItemOf<T>[] {
  return ALL_ITEMS.filter((i): i is ItemOf<T> => i.type === type);
}

export function countByType(): Partial<Record<TaskTypeId, number>> {
  const counts: Partial<Record<TaskTypeId, number>> = {};
  for (const i of ALL_ITEMS) counts[i.type] = (counts[i.type] ?? 0) + 1;
  return counts;
}

export function guideFor(type: TaskTypeId) {
  return guides.find((g) => g.taskType === type);
}

export { guides, vocabEntries };
