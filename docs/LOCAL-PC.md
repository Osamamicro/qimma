# Continue Qimma on the owner's Windows PC

Target folder: `C:\Users\GACA-IT\Desktop\GACA Projects\repos\qimma`

## Status at handoff (2026-10-18, cloud session)

- Qimma moved to its own repo, `Osamamicro/qimma` (ADR-010). The app is at the repo root on `main`.
- The baseline was checked again in a Linux container. `npm install` worked, typed routes were
  generated, and `npm run check` passed: tsc clean, 237/237 tests.
- No app code changed. Backlog item 1 cannot run in the cloud: there is no KVM for the emulator
  and no PowerShell. It now needs this PC. Items 2 and 3 have not started.

## 1. Get the code (PowerShell)

If `repos\qimma` does not exist yet:

```powershell
cd "C:\Users\GACA-IT\Desktop\GACA Projects\repos"
git clone https://github.com/Osamamicro/qimma.git
cd qimma
```

If it already exists, run `git checkout main` and `git pull`.

Run every npm command in `repos\qimma`, which contains `package.json`.

## 2. Baseline (about 5 minutes)

```powershell
npm install
npx expo start --web --port 8099   # wait for "Waiting on http://localhost:8099", then Ctrl+C
npm run check                      # expect a clean typecheck and 237 passing tests
```

## 3. Backlog item 1: emulator (only this PC can do it)

You need Android Studio (Standard setup), **Windows Hypervisor Platform** turned on (admin
rights and a reboot), and about 10 GB of free disk.

```powershell
powershell -ExecutionPolicy Bypass -File scripts\setup-android-emulator.ps1
npm run emulator:android
```

Then, on the emulator:

1. Open Extended controls (`...`) > Microphone and turn on **Virtual microphone uses host audio input**.
2. Go to Practice > Repeat Sentence and open an item. The audio should play.
3. Record an answer and play it back.

*Done when* the app opens in Expo Go, Repeat Sentence plays its audio, and the microphone
records. Afterwards, update HANDOFF §2 (remove "Not verified yet") and add anything new to the
troubleshooting table in `docs/EMULATOR.md`.

### Check these first

These came from reading the scripts. **None of them has been confirmed on Windows yet.**

| # | Risk | What you would see | Likely fix |
| --- | --- | --- | --- |
| 1 | A fresh Android Studio install sets neither `JAVA_HOME` nor `PATH` for Java | Setup stops at "Java 17 or newer is needed" | Quick: `$env:JAVA_HOME = 'C:\Program Files\Android\Android Studio\jbr'`, then run again. Lasting: make `Get-JavaMajor` in `setup-android-emulator.ps1` detect that folder and set `$env:JAVA_HOME` for the session, because `sdkmanager.bat` needs it too |
| 2 | The command-line tools are in `cmdline-tools\<version>\bin`, not `latest` | "Command-line tools are missing" | Fall back to the newest `cmdline-tools\*\bin\sdkmanager.bat` |
| 3 | The emulator's host-microphone toggle resets on every boot | Recordings are silent after a restart | Check whether `emulator -help-all` lists `-allow-host-audio`. If it does, add it to the args in `bootEmulator` (`scripts/emulator.mjs`) |
| 4 | Command-line AVDs default to `hw.keyboard=no` | You cannot type essays with the PC keyboard | Set `hw.keyboard=yes` in `%USERPROFILE%\.android\avd\Qimma_Pixel.avd\config.ini`, and make the setup script write it |
| 5 | A detached `emulator.exe` opens a blank console window | An extra empty window appears | Add `windowsHide: true` to the `spawn` options in `bootEmulator` |
| 6 | The first `adb devices` call can hang while adb starts its server | The launcher waits a long time on its first run | Run `adb start-server` once with `stdio: 'ignore'` before polling |
| 7 | Expo uses a different SDK than the launcher found | Expo cannot find the device | Pass `env: { ...process.env, ANDROID_HOME: sdk }` to the Expo child in `startExpo` |

**Corporate PC notes:**

- Turning on Windows Hypervisor Platform needs admin rights.
- If Group Policy blocks `-ExecutionPolicy Bypass`, ask IT, or follow the manual steps in
  `docs/EMULATOR.md`.
- Behind a corporate proxy, set `HTTPS_PROXY` for npm. For sdkmanager, pass
  `--proxy=http --proxy_host=<host> --proxy_port=<port>`.
- If OneDrive syncs the Desktop, or the space in "GACA Projects" breaks a tool, move the
  repo to a short path such as `C:\dev\qimma`. A synced Desktop can make `npm install` fail
  with `EPERM`.

## 4. Backlog item 2: progress export/import, decided in ADR-013 (not started)

- **Pure core** (new `src/core/backup/`):
  - The format is `{ app: 'qimma', version: 1, exportedAt, data: { settings, attempts, vocab,
    bookmarks, mocks } }`.
  - `createBackup(data, now)` builds the file.
  - `parseBackup(text)` returns `{ ok: true, data, skipped }` or
    `{ ok: false, error: 'not-json' | 'not-qimma' | 'newer-version' | 'bad-shape' }`.
  - `mergeBackup(local, incoming)` implements the ADR-013 rules: union by id, newest first,
    caps of 2,000 attempts and 50 mocks, and the SRS card with the later `due - interval * DAY`.
  - `backupFileName(now)` returns `qimma-backup-YYYY-MM-DD.json`.
  - Add `reviewedAt(card)` to `src/core/srs/sm2.ts`.
  - Move `Settings`, `DEFAULT_SETTINGS`, `Attempt`, `MockRecord` and the two caps from
    `src/services/app-state.ts` into core, and re-export them from app-state, because core
    must not import services. Validate task and exam ids against `src/core/exams/`.
- **Tests (Vitest):**
  - A round trip: `parseBackup(JSON.stringify(createBackup(x)))` returns `x`.
  - Error cases: wrong app, newer version, corrupt JSON, and malformed entries dropped and
    counted.
  - Merge cases: idempotent (merging the same file twice), caps applied, SRS last-review
    wins, bookmarks unioned.
- **Storage** (`src/services/storage.ts`):
  - `write()` returns `false` on failure, keeps the in-memory value, and sets a
    `storageStatus` flag (in memory, not persisted).
  - Add a `storageUsage()` helper that returns the serialized length of the `qimma:` keys.
  - Store `lastBackupAt` in settings or its own key.
- **App state** (`src/services/app-state.ts`): add `exportBackup()` and `importBackup(data)`,
  which merges, writes every store and returns whether all the writes succeeded.
- **Files:**
  - Install with `npx expo install expo-file-system expo-sharing expo-document-picker`. All
    three are in Expo Go per the SDK 58 docs.
  - Native code goes in `src/services/backup-file.ts`: write to `Paths.cache` with `File`,
    then `Sharing.shareAsync(uri, { mimeType: 'application/json' })`. Import uses
    `DocumentPicker.getDocumentAsync`, then `new File(uri).text()`.
  - Web code goes in `src/services/backup-file.web.ts`: a Blob plus an anchor download, and a
    hidden `<input type=file>`.
  - Check the exact APIs on docs.expo.dev/versions/v58.0.0/sdk/{filesystem,sharing,document-picker}.
- **UI:**
  - A backup card in Settings: Export, Import (preview, then confirm), "Last backup: date or
    never", and the size.
  - A "Progress not saved: export now" banner on every screen while `storageStatus` reports
    a failure. Put it in the root layout.
  - Delegate the card and the banner to an `implementer`, with file ownership given in the
    assignment.
- *Done when:*
  - the tests pass;
  - `npm run check` and `npm run build:web` are green;
  - there are screenshots at 390px and 1280px;
  - the feature works on the web and in the emulator.

## 5. Backlog item 3: AI scoring, writing first (ADR-008). The owner decides first

- **Before any deploy**, the owner provides:
  - the Supabase project (ref/URL);
  - an Anthropic API key, set only as a function secret
    (`npx supabase secrets set ANTHROPIC_API_KEY=...`). It never goes in `EXPO_PUBLIC_*`.
- **Function**: `supabase/functions/score-writing/index.ts` (TypeScript). It takes
  `{ item, response }`, returns the existing `ScoreResult`, and uses a pinned Claude model id.
  Load the `claude-api` skill before writing the model call.
- **App**:
  - It calls the function only when `EXPO_PUBLIC_SCORING_API_URL` is set.
  - On a timeout, when offline, or on a non-2xx reply, it falls back to the on-device
    `scoreItem` and shows a note. Write a test for the fallback.
- **Release gate**: a calibration script run on at least 100 human-rated responses.
- **Local tooling**: the Supabase CLI (`npx supabase`). `supabase functions serve` needs Docker,
  which may not be allowed on a corporate PC. In that case, test against a deployed staging
  function.

## 6. Kickoff prompt for Claude Code on this PC

> Continue Qimma on my Windows PC. Read `HANDOFF.md` and `docs/LOCAL-PC.md`.
> Run the baseline (npm install, expo start --web once, npm run check) and report the result.
> Then do backlog item 1 with me: run the setup script and the emulator launcher, and fix
> what breaks in `scripts/` and `docs/EMULATOR.md`, starting with the list in LOCAL-PC.md §3.
> Then build item 2 (export/import) from the design in §4. Ask me for the Supabase project
> and API key before item 3.
