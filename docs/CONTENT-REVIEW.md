# Content review checklist

Every new item is checked by `content-bank.test.ts` (schema, word counts, option counts, model
answers that cover their own key points, no repeated prompts). A machine cannot check the rest.
Before an item counts as reviewed, a person reads it against this list.

## Every item

- [ ] **Original.** Not recalled from a real exam, a prep platform, a textbook or a website
  (ADR-002). If it feels familiar, rewrite it.
- [ ] **Natural English** a lecturer, journalist or colleague would say or write. No awkward
  phrasing, no regional slang, consistent spelling (British or American within one item).
- [ ] **Fair and neutral.** No content that relies on local knowledge, stereotypes a group, or
  touches sensitive topics (religion, politics, tragedy) without need.
- [ ] **Difficulty label fits** (1 everyday, 2 general academic, 3 dense or technical).
- [ ] **Exam tag fits.** `pte-core` only for everyday or workplace items; academic-only items
  are tagged `pte-academic`.

## Objective items (reading, listening)

- [ ] **Exactly one defensible answer** (or exactly the marked set for multiple-answer tasks).
  Read each distractor and ask: could a strong candidate argue for it?
- [ ] Fill-in-the-blank distractors are wrong for grammar, collocation or meaning, not just less
  common.
- [ ] Reorder Paragraphs has a single order, forced by the topic sentence, pronouns and
  connectives.
- [ ] Highlight Incorrect Words changes are audible (different words, not near-homophones).

## Speaking and writing items with key points

- [ ] Key points are what a good answer must say, not trivia from the prompt.
- [ ] Keywords include common synonyms a learner would use.
- [ ] Describe Image figure points use `sameSentence` trend words; topic and conclusion points
  do not.
- [ ] Summarize Group Discussion view points name their `speaker`; each participant has one.
- [ ] The model answer is a realistic high-band answer within the time or word limit, not a
  copy of the prompt.

Record the review by adding the item id to the batch's pull request description with
"reviewed" and any fixes made.
