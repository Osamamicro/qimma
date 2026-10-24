import type { Item } from './types';

/**
 * Text a learner can study (and hear read aloud) before or after answering: the passage or
 * sentence for read/repeat tasks, the first accepted answer for short questions, the model answer
 * for open tasks. Null for objective tasks, whose answer is revealed only after submitting.
 */
export function modelAnswerFor(item: Item): string | null {
  switch (item.type) {
    case 'read-aloud':
      return item.text;
    case 'repeat-sentence':
    case 'write-from-dictation':
      return item.sentence;
    case 'answer-short-question':
      return item.answers[0] ?? null;
    default:
      return 'modelAnswer' in item && typeof item.modelAnswer === 'string' ? item.modelAnswer : null;
  }
}
