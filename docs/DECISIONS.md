# Decision log (ADRs)

Each decision records the context, the options considered, the call and its consequences.
The orchestrator decides after hearing the council (`council-pedagogy`, `council-engineering`);
their written input lives in `docs/council/`.

---

## ADR-001 — One Expo codebase for web, iOS and Android

**Context.** The product must run on the web and on phones with the same features, and the
owner wants to test the mobile app in an emulator on their PC right after `git pull`.

**Options.** (a) Expo/React Native with react-native-web; (b) Next.js web + separate React Native
app sharing a package; (c) Flutter; (d) .NET MAUI + Blazor.

**Decision.** (a) Expo SDK 58 + Expo Router. One set of screens, file-based routes that work as
URLs on the web, and Expo Go on an Android emulator or a real phone with no native build step.
Web-only niceties live in `*.web.tsx` files.

**Consequences.** Web output is a static SPA (`expo export --platform web`) that can be hosted
on GitHub Pages. Anything that needs native code outside Expo Go needs a development build (see
ADR-004).

## ADR-002 — Clean-room rebuild, original content, own brand

**Context.** The brief was to "reverse engineer" an existing PTE practice platform.

**Decision.** We rebuild the *feature set* from public information only (marketing pages, store
listings, published PTE task formats and scoring criteria) and implement everything ourselves.
We do not decompile, scrape or copy the competitor's apps, question bank, audio, text, UI copy
or branding, and we do not use "real exam question" memory dumps. Our brand is
*Qimma*; the app states it is not affiliated with Pearson.

The `rea` reverse-engineering toolkit is reserved for software we own or are authorised to
examine — e.g. auditing our own Android/web bundles for size, leaked secrets or dead code.

**Consequences.** Content must be authored (team content agents + human review). See
`docs/FEATURE-MAP.md` for the public feature map and our status per feature.

## ADR-003 — On-device, transparent heuristic scoring in a pure TypeScript core

**Context.** Learners need instant feedback on every task, including offline.

**Decision.** `src/core/scoring` scores everything locally: exact PTE rules for objective tasks
(negative marking for MCMA/HIW, adjacent pairs for re-order, per-word for dictation) and
trait-level heuristics for speaking/writing that mirror the official traits (content, form,
grammar, vocabulary, spelling, fluency, pronunciation …). Heuristic results are labelled
"AI ESTIMATE" and explain *why* (missed key points, word count, grammar slips).

**Consequences.** Fast, private, testable. Accuracy is limited; ADR-008 adds an optional
server-side LLM scorer for writing and speaking.

## ADR-004 — Speech: Web Speech API on the web, record + self-review in Expo Go

**Context.** Speaking scoring needs a transcript. Expo Go has no speech-recognition module.

**Decision.** v0.1 runs the browser's speech recogniser (Chrome/Edge/Safari) in parallel with an
`expo-audio` recording. On iOS/Android in Expo Go we record, play back, show the model answer
and let the learner self-rate content; fluency/pronunciation stay unscored rather than faked.
The recogniser is behind `services/speech-recognition(.web).ts`, so a native recogniser or a
server STT can be plugged in without touching scorers.

**Open question for the council:** next step for native speech scoring — (a) development build
with an on-device recogniser module, (b) server STT (e.g. Whisper) behind our API, (c) both.
Answered by ADR-015: (b), with a local Whisper server first.

## ADR-005 — Listening audio from on-device text-to-speech

**Decision.** Items store scripts, and `expo-speech` reads them (multiple voices/pitches for
group discussions). No third-party audio is shipped. Items may set `audio` to a recorded file,
which takes precedence — the path to studio-quality audio later.

## ADR-006 — Local-first data

**Decision.** Settings, attempts, vocabulary SRS state and mock history live on the device
(`localStorage` on web, the `expo-sqlite` localStorage polyfill on native). No account needed.

**Open question for the council:** when to add accounts + cloud sync (Supabase is available):
(a) next milestone, (b) only after content reaches ~1,000 items, (c) only when teacher mode lands.

## ADR-007 — Agent team: Opus orchestrator, Haiku implementers, council for decisions

**Decision.** The orchestrator (Opus) owns architecture, contracts, reference implementations,
review and integration. Implementers and content authors run on Haiku in parallel with strict,
non-overlapping file ownership (`docs/team/BRIEF.md`). Two Haiku council members review open
decisions. Agent definitions live in `.claude/agents/`; vetted skills in `.claude/skills/`
(found with the `find-skills` workflow, see `docs/TEAM.md`).

## ADR-008 — Optional AI scoring service (proposed)

**Context.** Heuristics cannot judge argument quality or pronunciation well.

**Proposal.** A small API (Cloudflare Worker or ASP.NET Core minimal API — the owner is a .NET
lead) that (1) transcribes audio with an STT model and (2) asks a Claude model to grade writing
and transcripts against the trait rubric, returning the same `ScoreResult` shape. The app calls
it only when `EXPO_PUBLIC_SCORING_API_URL` is set and falls back to on-device scoring.

**Open question for the council:** build this before or after expanding the question bank?

## ADR-009 — Official weighting, test structure and DHA targets drive estimates and plans

**Context.** The owner supplied Pearson's published *question-type weighting* for PTE Academic
(Aug 2025), the *typical test structure* (item-count ranges and section times) and the
Australian Department of Home Affairs score requirements effective 7 August 2025.

**Decision.**
- `TaskTypeSpec.skills` and `ExamSpec.weights` hold the official per-skill and overall shares
  (e.g. Describe Image = 31% of Speaking; Read Aloud now feeds Speaking only; Answer Short
  Question feeds Listening only). Skill estimates are weight-averaged per task type, not per attempt.
- Mock tests draw item counts inside the official `[min, max]` ranges; sections use
  76–84 / 23–30 / 31–39 minutes.
- Goals are per skill. Presets: DHA Functional (overall 24), Vocational (R33 L36 S24 W29),
  Competent (R47 L48 S54 W51), Proficient (R58 L59 S76 W69), Superior (R69 L70 S88 W85),
  or a custom overall score.
- The daily plan ranks task types by *weight × gap to target ÷ minutes per item*, so a learner
  aiming for Superior is steered to Describe Image, Summarize Group Discussion and Repeat Sentence
  for Speaking (S88 is the hardest bar).

**Consequences.** PTE Core has no published weighting; it reuses Academic shares for shared
task types and is labelled "approximate" in the UI until Pearson publishes Core figures.

---

## Council round 1 — outcomes (orchestrator's call)

Full input: `docs/council/pedagogy.md`, `docs/council/engineering.md`.

| # | Question | Pedagogy | Engineering | **Decision** |
| --- | --- | --- | --- | --- |
| ADR-004 | Native speech scoring | Dev build + on-device recogniser | Server STT, keep Expo Go | **Server STT first** (inside the ADR-008 service), on-device recogniser as a v0.3 offline option. Keeps the owner's emulator/Expo Go workflow and gives web and phones one transcript engine. Audio is processed transiently and never stored. Fluency/pronunciation on phones stay hidden until calibrated (≥50 rater-scored recordings). |
| ADR-006 | Accounts + sync | Right after v0.2 (attempts, mocks) | Next milestone, anonymous auth, no audio | **v0.2:** JSON export/import (cheap device-loss cover). **v0.3:** Supabase anonymous auth + sync of attempts, mocks and SRS. Audio is never synced. Identity also rate-limits the scoring API. |
| ADR-008 | Scoring service: when / stack | Before bank expansion, writing first, calibrate | Supabase Edge Functions (TS) | **Before expanding the bank, writing first.** Supabase Edge Functions in TypeScript, so the rubric types are shared with `src/core`. Model/STT keys only in function secrets, never `EXPO_PUBLIC_*`. Timeout/offline/non-2xx falls back to on-device scoring with a note. Release gated on ≥100 human-rated responses; model version pinned; trait bands shown as ranges. |
| ADR-010 | Web hosting | — | GitHub Pages project site, `baseUrl` | **Move the app to its own repo** (as was done with the triathlon prototype) and deploy with GitHub Actions to `osamamicro.github.io/qimma/` (`experiments.baseUrl: "/qimma"`, SPA `404.html`). This user-site repo serves its root from `main` and its `qimma/` folder holds source, so hosting here would need Pages switched to Actions — **owner's choice**. |
| ADR-011 | v0.2 learner features | Image-based DI; plan v2 with weekly minimums; SGD note grid | — | **Accepted, in that order.** Plan v2 anchors shipped now (daily DI, one long task per day on rotation). |

**Applied immediately from the council's risk review:**
- Phones in mock mode now ask for a self-rating instead of silently recording an unscored answer (`record-panel.tsx`).
- The web recogniser stops on fatal errors (mic blocked, no service) and falls back to self-review instead of a silent 0.
- Template/stock phrases no longer earn content: below 25% key-point coverage, essay content and open-speaking content are 0 (`ON_TOPIC_FLOOR`).
- One grammar slip costs one band at any length (short SWTs were over-penalised).
- Sentence splitting ignores abbreviations ("U.S.", "Dr."), so a valid one-sentence SWT keeps its Form point.

**Backlog from the review:** meaning-aware key points (figure + direction in the same sentence),
storage-full warning + schema version, ESLint config for `expo lint`.

## ADR-012 — Product name: Qimma

**Context.** The working title "Superior English" collided with the DHA "Superior" level we
use as a goal, and the owner asked for a more useful name.

**Decision.** **Qimma** (قمّة, Arabic for *summit*): short and memorable. It carries no exam
name, so it stays valid as IELTS, TOEFL, courses and materials arrive. It nods to the owner's
Riyadh base, and no English-learning app with that name turned up. The project folder, package,
bundle id (`com.osamamicro.qimma`), URL scheme, storage prefix and emulator AVD (`Qimma_Pixel`)
all use `qimma`.

### ADR-010 — outcome

The owner chose a separate repository. Qimma now lives in `Osamamicro/qimma` with the app at the
root, the agent team in `.claude/agents/` and the skills in `.claude/skills/`. The web app
deploys to GitHub Pages at `https://osamamicro.github.io/qimma/` through
`.github/workflows/pages.yml`: `EXPO_BASE_URL=/qimma` via `app.config.js`, with `404.html` as
the SPA fallback. `.github/workflows/ci.yml` gates PRs with typecheck, tests and the web build.


## ADR-013 — Progress export/import: merge on import, visible storage failures

**Context.** ADR-006 puts a JSON export/import in v0.2 as cover for device loss and for moving
between devices (web at work, phone at home) until v0.3 sync. Two questions were open. What
does import do with existing local data? How does the app warn when storage is full?
Council input: `docs/council/*.md`, round 2.

**Decision.**
- **Import merges, after a preview.**
  - Attempts and mocks are unioned by `id`, sorted newest first, and capped at 2,000 attempts
    and 50 mocks.
  - For each SRS word, the card reviewed most recently wins. No new field is needed: the
    last-review time is `due - interval * DAY`, because `review()` sets
    `due = now + interval * DAY`.
  - Bookmarks are unioned. Settings are taken from the file.
  - Before anything is written, the learner sees "+N attempts, +N mocks, N cards updated,
    settings replaced" and confirms. Both council members chose merge, because on a fresh
    device it gives the same result as replace and it never erases another device's work.
- **Storage failures are made visible; there is no size threshold.**
  - `write()` in `src/services/storage.ts` keeps the value in memory, so export still
    captures it, and sets a persistent "not saved" flag.
  - A banner on every screen offers "Export now".
  - Settings shows the backup size and "Last backup: date or never".
  - Engineering preferred adding a proactive size threshold. Pedagogy argued that a guessed
    threshold makes false alarms, and that the native expo-sqlite store has no small quota.
    The orchestrator sided with pedagogy.
- **Files rather than share text.** On native, the export is written as a file and shared,
  and import uses a document picker. A share-sheet text message can exceed Android's ~1 MB
  intent limit once 50 mock reports are stored. `expo-file-system` and `expo-sharing` are
  "Included in Expo Go" per the SDK 58 docs, so no development build is needed. Import uses
  `File.pickFileAsync()` from expo-file-system: in Expo Go, a URI from `expo-document-picker`
  cannot be read with the new `File` API (it fails with "Missing 'READ' permission"). The web uses a Blob download and a file input.
- **Format.** `{ app: 'qimma', version: 1, exportedAt, data: { settings, attempts, vocab,
  bookmarks, mocks } }`. Newer versions are rejected, older ones migrated, and malformed
  entries dropped and counted.

**Consequences.** The merge rules are a pure function in `src/core`, unit-tested now and
reused by v0.3 sync. Bookmarks removed on one device can come back after a merge, which is
accepted.

### ADR-008 — build notes (2026-10-18)

Built writing-first as decided, first against a Claude model. ADR-014 replaced the model with
open-weight ones before release. The function scores only the
judgement traits. The app applies Form, the PTE gating and the trait maxima, so exam facts stay in
`src/core/exams`. The client timeout is 20 s rather than the council's 8 s, because an essay graded
with model reasoning takes longer. Mock tests keep on-device scoring for now. Known ceiling: the
endpoint is protected only by the public publishable key plus input-size caps, until v0.3 adds
anonymous auth and per-user rate limits.

## ADR-014 — AI scoring uses open-weight models, local first

**Context.** The owner has no paid model API and prefers open-source models; the sister project
Mudawwin already runs Ollama locally (`qwen3:8b`, `qwen3.5:4b`).

**Decision.**
- **Local first.** With `EXPO_PUBLIC_LOCAL_LLM_URL` set, the app calls an Ollama server directly
  (`/api/chat`, `think: false`, JSON-schema `format`, temperature 0). Default model `qwen3:8b`.
  Thinking is off because it quadrupled latency (153 s vs 35 s on the owner's laptop) without
  better scores.
- **Hosted, optional.** The `score-writing` Edge Function speaks the OpenAI-compatible
  chat-completions API (JSON mode), so any open-model provider or a self-hosted vLLM works by
  changing secrets. Default `openai/gpt-oss-120b` on Groq; idle until a key is set.
- The rubric prompt, reply format and validation live once in `rubric.ts` and are used by both.

**Consequences.** Local scoring only works where Ollama runs (the owner's PC, its emulator, or the
Pages site when Ollama allows that origin). Phones elsewhere fall back to on-device scoring until a
hosted provider is configured. The release gate (calibration on 100+ human-rated responses) still
applies, per model.


## ADR-015 — Phone speech-to-text with local Whisper

**Context.** ADR-004 left phones (Expo Go) on self-review and asked whether native speech scoring
should use an on-device recogniser in a development build, server STT, or both. The owner has no
paid APIs. The sister project Mudawwin already runs Whisper locally (Whisper.net,
`ggml-largev3turbo-q5_0.bin`).

**Decision.** Server STT, local first (option b of ADR-004):
- `tools/stt-server` is a small .NET 10 server (`qimma-stt`) with the OpenAI-style endpoint
  `POST /v1/audio/transcriptions` (multipart `file`, optional `language`). It reuses Mudawwin's
  model and packages, decodes the phone's AAC/M4A with Windows Media Foundation (no FFmpeg),
  prefers the GPU through Vulkan (3 s for 5 s of speech on the owner's laptop, against 34 s on the
  CPU) and handles one request at a time. Audio is written to a temp file and deleted before the
  reply; only timings are logged.
- The app uploads the recording when `EXPO_PUBLIC_LOCAL_STT_URL` is set and no live recogniser
  produced a transcript. Any failure (server off, timeout, decode error) falls back to
  self-review, as before.
- Transcripts from Whisper are marked `transcriptSource: 'whisper'`. They score **content only**;
  fluency and pronunciation stay "not scored" on phones until they are calibrated (ADR-004).

**Consequences.** Phones get content scores while the owner's PC runs the server (emulator:
`http://10.0.2.2:8178`; a phone on the same Wi-Fi: the PC's LAN address, which may need a Windows
Firewall allow rule for port 8178). Elsewhere they keep self-review. Whisper can invent short
phrases ("Thank you.") from near-silence; such answers score 0 content, the same as silence.
Windows only for now; a hosted Whisper behind the same endpoint would need no app change.
