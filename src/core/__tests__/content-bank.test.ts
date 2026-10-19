import { describe, expect, it } from 'vitest';

import { ALL_ITEMS, guides, vocabEntries } from '@/content';
import { keyPointCoverage, tokenize } from '../scoring/text';
import { parseHiw, validateBank, validateGuides, validateItem, validateVocab, type Item } from '@/core';

describe('content bank', () => {
  it('every item passes schema validation', () => {
    expect(validateBank(ALL_ITEMS)).toEqual([]);
  });

  it('every model answer covers its own key points', () => {
    const gaps = ALL_ITEMS.flatMap((i) => {
      const kps = 'keyPoints' in i ? i.keyPoints : 'bulletPoints' in i ? i.bulletPoints : null;
      if (!kps || !('modelAnswer' in i)) return [];
      const { missed } = keyPointCoverage(i.modelAnswer, kps);
      return missed.length ? [`${i.id}: ${missed.map((k) => k.label).join(', ')}`] : [];
    });
    expect(gaps).toEqual([]);
  });

  it('no two items share the same prompt text', () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    for (const i of ALL_ITEMS) {
      const fields = ['passage', 'text', 'script', 'transcript', 'lecture', 'sentence', 'situation', 'prompt', 'question'];
      const raw = fields.map((f) => (i as unknown as Record<string, unknown>)[f]).find((v) => typeof v === 'string');
      if (typeof raw !== 'string') continue;
      const key = `${i.type}:${tokenize(raw).join(' ')}`;
      if (seen.has(key)) dupes.push(`${seen.get(key)} = ${i.id}`);
      else seen.set(key, i.id);
    }
    expect(dupes).toEqual([]);
  });

  it('vocabulary entries are complete and unique', () => {
    expect(validateVocab(vocabEntries)).toEqual([]);
  });

  it('guides have enough tips', () => {
    expect(validateGuides(guides)).toEqual([]);
  });

  it('parses highlight-incorrect-words markup', () => {
    const parsed = parseHiw('Reefs cover less than [one|two] percent, yet [many|few] species.');
    expect(parsed.shown.join(' ')).toBe('Reefs cover less than one percent, yet many species.');
    expect(parsed.spoken).toBe('Reefs cover less than two percent, yet few species.');
    expect(parsed.incorrect).toEqual([4, 7]);
  });
});

describe('key point validation', () => {
  const sgd = (speaker: string): Item => ({
    id: 'sgd-x',
    type: 'summarize-group-discussion',
    title: 'x',
    difficulty: 1,
    turns: [
      { speaker: 'Ana', text: 'a' },
      { speaker: 'Ben', text: 'b' },
      { speaker: 'Ana', text: 'c' },
    ],
    keyPoints: [
      { label: 'A', keywords: ['a'] },
      { label: 'B', keywords: ['b'], speaker },
      { label: 'C', keywords: ['c'], sameSentence: ['Rose'] },
    ],
    modelAnswer: 'x',
  });

  it('rejects a key point speaker who is not in the discussion and upper-case words', () => {
    const errors = validateItem(sgd('Cara')).join(' ');
    expect(errors).toContain('speaker "Cara" is not in the discussion');
    expect(errors).toContain('"C" words must be lower-case');
  });

  it('accepts a speaker from the turns', () => {
    expect(validateItem(sgd('Ben')).join(' ')).not.toContain('speaker');
  });
});
