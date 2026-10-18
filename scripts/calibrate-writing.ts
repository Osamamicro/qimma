/**
 * Calibrates the AI writing scorer against human ratings (ADR-008 release gate).
 *
 *   SCORING_API_URL=https://<ref>.supabase.co/functions/v1/score-writing \
 *   SUPABASE_KEY=<publishable key> \
 *   npm run calibrate:writing -- calibration/writing.jsonl
 *
 * Input: one JSON object per line: { "itemId": "...", "response": "...", "human": { "<trait>": n } }.
 * Each row is scored through the deployed function and merged with the app's rules (mergeAiScore),
 * then compared with the human scores per trait. The release gate needs at least 100 rows.
 */
import { readFileSync } from 'node:fs';

import { getItem } from '@/content';
import { aiScoreRequest, isAiWritingItem, mergeAiScore, type AiScoreReply } from '@/core';

const GATE = 100;

interface Row {
  itemId: string;
  response: string;
  human: Record<string, number>;
}

async function main() {
  const [file] = process.argv.slice(2);
  const url = process.env.SCORING_API_URL;
  const key = process.env.SUPABASE_KEY;
  if (!file || !url) {
    console.error('Usage: SCORING_API_URL=... [SUPABASE_KEY=...] npm run calibrate:writing -- <file.jsonl>');
    process.exit(1);
  }
  const rows: Row[] = readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l));

  const diffs: Record<string, number[]> = {};
  const totals: [number, number][] = [];
  let failed = 0;

  for (const [i, row] of rows.entries()) {
    const item = getItem(row.itemId);
    if (!item || !isAiWritingItem(item)) {
      console.warn(`row ${i + 1}: ${row.itemId} is not a writing item; skipped`);
      failed++;
      continue;
    }
    let reply: AiScoreReply;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(key ? { apikey: key, Authorization: `Bearer ${key}` } : {}) },
        body: JSON.stringify(aiScoreRequest(item, row.response)),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
      reply = (await res.json()) as AiScoreReply;
    } catch (error) {
      console.warn(`row ${i + 1}: ${error instanceof Error ? error.message : error}`);
      failed++;
      continue;
    }
    const result = mergeAiScore(item, row.response, reply);
    let humanTotal = 0;
    for (const t of result.traits) {
      const h = row.human[t.id];
      if (h === undefined) continue;
      humanTotal += h;
      (diffs[t.id] ??= []).push(t.score - h);
    }
    totals.push([result.total, humanTotal]);
    process.stdout.write('.');
  }
  process.stdout.write('\n');

  console.log('trait               n    MAE   bias  exact  within-1');
  for (const [trait, d] of Object.entries(diffs)) {
    const n = d.length;
    const mae = d.reduce((s, x) => s + Math.abs(x), 0) / n;
    const bias = d.reduce((s, x) => s + x, 0) / n;
    const exact = d.filter((x) => x === 0).length / n;
    const within = d.filter((x) => Math.abs(x) <= 1).length / n;
    console.log(
      `${trait.padEnd(18)} ${String(n).padStart(3)}  ${mae.toFixed(2)}  ${bias >= 0 ? '+' : ''}${bias.toFixed(2)}  ${(exact * 100).toFixed(0).padStart(4)}%  ${(within * 100).toFixed(0).padStart(6)}%`,
    );
  }
  console.log(`total-score correlation (Pearson): ${pearson(totals).toFixed(3)} over ${totals.length} rows; ${failed} failed`);
  if (totals.length < GATE) console.log(`Release gate NOT met: ${totals.length}/${GATE} human-rated responses.`);
}

function pearson(pairs: [number, number][]): number {
  const n = pairs.length;
  if (n < 2) return NaN;
  const mx = pairs.reduce((s, [x]) => s + x, 0) / n;
  const my = pairs.reduce((s, [, y]) => s + y, 0) / n;
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (const [x, y] of pairs) {
    sxy += (x - mx) * (y - my);
    sxx += (x - mx) ** 2;
    syy += (y - my) ** 2;
  }
  return sxy / Math.sqrt(sxx * syy);
}

main();
