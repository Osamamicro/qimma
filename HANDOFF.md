# Qimma — handoff for the next Claude Code session

Read this first. It gives you everything you need to continue after cloning, without the
original conversation.

## 1. What Qimma is

**Qimma** (قمّة, Arabic for *summit*) is an original English exam trainer for **web, Android
and iOS** from one Expo codebase. The owner is Osama, a .NET team lead in Riyadh who works on
Windows. His goal: help himself and others reach **Superior** English — the top level in the
Australian Home Affairs scale, R69 L70 S88 W85 on PTE Academic.

- **v0.1 (done):** PTE Academic and PTE Core.
- **Later:** other exams (IELTS, TOEFL, Duolingo), MOOC-style courses and study materials.

## 2. Where things stand (v0.1 complete)

| Area | State |
| --- | --- |
| Code | Repository `Osamamicro/qimma`, app at the root, `main` branch. It began in `Osamamicro/Osamamicro.github.io` (PR #7) and moved here with ADR-010. |
| Web | GitHub Pages: https://osamamicro.github.io/qimma/ (deployed by `.github/workflows/pages.yml` on every push to `main`). |
| CI | `.github/workflows/ci.yml` runs typecheck, tests and the web build on every PR and push. |
| Task types | All 22 PTE Academic types + PTE Core *Write Email*. One renderer per type in `src/features/practice/{speaking,writing,reading,listening}`. |
| Content | 1,000 original items (every type covers several full mocks without repeats), 220 vocabulary entries, a strategy guide per task type (`src/content/`). |
| Scoring | Exact PTE rules for objective tasks. Trait-level heuristic estimates for speaking and writing, with a 25% on-topic floor (`src/core/scoring`). |
| Official data | Pearson weighting (Aug 2025), DHA 2025 targets and test-structure ranges, all in `src/core/exams/`. |
| Features | Practice player, full/mini/section mocks + report, vocab SRS (SM-2), daily plan, progress, settings, progress backup (JSON export/import with merge, storage-failure banner; ADR-013). |
| Quality | `tsc` clean, ESLint clean (`expo lint`, in CI), Vitest 302/302, web export OK; the main flows were checked manually and with headless Playwright during development at a 390px viewport (no e2e specs are committed). |
| Emulator | `scripts/setup-android-emulator.{ps1,sh}` (one-time setup) + `npm run emulator:android`. |
| Phone STT | Optional local Whisper server `tools/stt-server` (ADR-015): speaking tasks on phones get content scores when `EXPO_PUBLIC_LOCAL_STT_URL` is set. |

**Verified on the owner's Windows PC (2026-10-18):** the setup script, the emulator launcher,
the app in Expo Go (SDK 58) on an Android 36 emulator, Repeat Sentence text-to-speech, and
microphone recording and playback. iOS and a physical phone are still unverified.

**Last check (2026-10-18, owner's Windows PC):** `npm run check` (tsc clean, 302/302) and the
web build are green. Item 2 (backup) works in the browser (export, import with merge preview,
storage-failure banner) and in the Android emulator (share-sheet export, file-picker import).

## 3. First 10 minutes

```bash
git clone https://github.com/Osamamicro/qimma.git
cd qimma
npm install
npx expo start --web --port 8099   # once, then Ctrl+C: generates .expo/types for typed routes
npm run check                      # typecheck + lint + 302 tests; must be green before you change anything
npm run web                        # Chrome/Edge (speech scoring needs the Web Speech API)
npm run emulator:android           # after the one-time setup script; see docs/EMULATOR.md
```

## 4. Read these next (in order)

1. `docs/team/BRIEF.md` — the contracts and rules every contributor follows.
2. `docs/ARCHITECTURE.md` — layers, the renderer contract, data flow.
3. `docs/DECISIONS.md` — ADR-001…013 and the council outcomes. Do not re-open settled decisions
   without new information.
4. `docs/SCORING.md`, `docs/FEATURE-MAP.md`, `docs/ROADMAP.md`, `docs/EMULATOR.md`.

Key contracts:

- `src/core/content/types.ts` — items, responses and `ScoreResult`.
- `src/features/practice/types.ts` — `RendererProps`.
- `src/core/exams/pte.ts` — task specs, weights and blueprints.

## 5. How work is done here

- **Team model.** Agents are defined in `.claude/agents/` (see `docs/TEAM.md`):
  - You act as the **orchestrator**. You plan, write contracts and reference code, review and
    integrate.
  - **Implementer** and **content-author** agents run on Haiku and work in parallel, each on
    files nobody else owns.
  - **council-pedagogy** and **council-engineering** answer open decisions. Record the outcome
    as an ADR.
- **Skills** are in `.claude/skills/`: expo-router, expo-native-ui, vercel-react-native-skills,
  web-design-guidelines and webapp-testing. They were found with the `find-skills` workflow.
  Look for more with `npx skills find <topic>`, and check the source and install count before
  adding anything.
- **Expo SDK 58.** Read `AGENTS.md` and fetch the versioned docs before touching Expo APIs.
  Install packages with `npx expo install`.
- **Before every commit:** run `npm run check`. For UI changes, also run `npm run build:web` and
  take a screenshot at 390px and 1280px widths.
- **Work on a branch, open a PR** (CI must be green), then merge to `main`, which deploys the web app.

### Non-negotiables

- **Clean room (ADR-002).** Every question, text, audio file and UI string is original. Never copy
  from other prep platforms, and never use "real exam" recall or "prediction" files. Do not name
  competitors in the app.
- **Pearson disclaimer.** Keep the "not affiliated with Pearson; PTE is a trademark of Pearson"
  notice. Never present estimates as official scores.
- **`src/core` stays pure TypeScript** (no React Native imports). Every scoring or plan change
  ships with a Vitest test.
- **Exam facts live only in `src/core/exams/`:** weights, ranges, timings and targets.

## 6. Backlog (v0.2), in priority order

Each item lists *done when*.

1. **Verify on the owner's PC. Done 2026-10-18.** Fixes and results: `docs/LOCAL-PC.md` §3.
2. **Progress export/import (ADR-006, decided in ADR-013). Done 2026-10-18,** verified on the web
   and in the Android emulator (share sheet export, file-picker import with merge preview). Code:
   `src/core/backup/`, `src/services/backup-file{,.web}.ts`, `src/features/backup/`.
3. **AI scoring, writing first (ADR-008, ADR-014). Built 2026-10-18; release gate open.** Open-weight
   models only. Local: set `EXPO_PUBLIC_LOCAL_LLM_URL=http://localhost:11434` (Ollama, `qwen3:8b`,
   ~40 s per essay, verified end to end in the browser). Hosted: Supabase project `qimma`
   (`fsdpabhmcyaaybvrwznm`), function `score-writing` v2 deployed but idle (no `LLM_API_KEY`).
   Remaining: calibrate on 100+ human-rated responses (`npm run calibrate:writing`).
4. **Speech-to-text for phones (ADR-004, ADR-015). Built 2026-10-19** with a local Whisper server
   (`tools/stt-server`, .NET 10 + Whisper.net, Vulkan GPU, ~3-5 s per answer), verified end to
   end in the Android emulator (upload, transcription, content score, fluency and pronunciation
   "not scored"). Setup: `docs/EMULATOR.md` §2.5. Remaining: a physical phone over Wi-Fi, and
   calibrating fluency and pronunciation for Whisper transcripts.
5. **Meaning-aware Describe Image key points (ADR-011). Done 2026-10-19.** `KeyPoint.sameSentence`:
   a figure counts only with its trend word in the same sentence; all chart items use it.
6. **Summarize Group Discussion note grid (ADR-011). Done 2026-10-19.** One note column per
   speaker; key points carry `speaker` and missed views are named.
7. **Content to 1,000 items. Done 2026-10-19** (nine content-author agents, then three
   adversarial answer-key reviews; ~40 fixes applied). Bank gates: model answers cover their own
   key points, no repeated prompts; options are shown in a stable shuffle. Remaining: a human pass
   with `docs/CONTENT-REVIEW.md`, and recorded listening audio (needs voice talent; the `audio`
   field overrides text-to-speech).
8. **Tooling. Done 2026-10-19.** ESLint (`eslint-config-expo`, flat config) runs in
   `npm run check` and CI; the React Compiler rule findings it raised were fixed, not silenced.
9. **Later:** accounts and sync (Supabase anonymous auth), teacher mode, then IELTS, TOEFL and
   DET as new `ExamSpec`s.

## 7. Decisions waiting on the owner

- **AI services.** Hosted scoring needs an open-model provider key (`LLM_API_KEY` secret); local Ollama needs none. The unused `ANTHROPIC_API_KEY` secret can be deleted.

## 8. Gotchas

- Store hooks are `store.useValue()`, never a method named `use`. The React Compiler treats `use()`
  calls like React's `use`, may skip them, and that broke hook order whenever the theme or window
  size changed (the Today screen went blank).
- Design system (2026-10-18 redesign): tokens in `src/theme` (neutral ink, one vermilion accent,
  colour-blind-safe skill colours, IBM Plex Sans, radius 6/8/12); kit in `src/components/ui`
  (`ScoreScale` 10-90 ruler, `ListGroup`/`ListRow`, `Segmented`, `PressableScale`). Motion is
  Reanimated, state-only, 140-480 ms, and respects reduced motion. No uppercase eyebrow labels,
  no em-dashes in UI copy.
- Web builds for Pages use `EXPO_BASE_URL=/qimma` (read by `app.config.js`). Local dev leaves it
  unset, so the app runs at `/`. Deep links on Pages return HTTP 404 with the app shell
  (`404.html`); they render correctly.
- Typed routes only exist after `expo start` has generated `.expo/types`. Without them, `tsc`
  does not check `router.push` paths.
- Expo Go must match SDK 58. If the emulator has an old Expo Go, `npx expo start --android`
  offers to reinstall it.
- Web speech recognition: Chrome and Edge only, and it needs https or localhost. A fatal error
  falls back to self-review, by design.
- The `expo-sqlite/localStorage/install` polyfill does nothing on the web (the browser's
  `localStorage` is used). Storage keys use the `qimma:` prefix.
- `RecordPanel` asks for a self-rating whenever there is no transcript, mock mode included, so
  answers are never stored unscored.
- PTE Core weights are **approximate** (`weightsSource: 'approximate'`) until Pearson publishes
  official figures.

## 9. Kickoff prompt for a new session

> You are continuing the Qimma project (`Osamamicro/qimma`). Read `HANDOFF.md`, then `docs/team/BRIEF.md` and
> `docs/DECISIONS.md`. Run the "First 10 minutes" commands and report the results. Then take
> backlog item 1 (or the next unfinished one). Use the team workflow in `docs/TEAM.md`: plan as
> orchestrator, delegate file-owned pieces to Haiku implementers, and verify with
> `npm run check`, a web build and screenshots. Then open a PR, get CI green and merge.

You can also run the project skill **`/continue-qimma`**, which does the same.
