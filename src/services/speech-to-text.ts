/*
 * Speech-to-text for recordings made where no live recogniser exists (phones), ADR-015/016.
 * - Local: EXPO_PUBLIC_LOCAL_STT_URL points at the qimma-stt server (tools/stt-server: Whisper on
 *   the owner's PC). Takes precedence, like the local LLM in ai-scoring.
 * - Hosted: EXPO_PUBLIC_STT_API_URL points at the transcribe Edge Function (open-weight Whisper
 *   via an OpenAI-compatible provider), called with the public Supabase key.
 * Neither stores the audio. Any failure returns null, and the app falls back to self-review,
 * so a learner is never stuck.
 */

export interface SttConfig {
  /** Local qimma-stt base URL. */
  url?: string;
  /** Hosted transcribe function URL. */
  hostedUrl?: string;
  /** Supabase publishable (anon) key: public by design, it only identifies the project. */
  key?: string;
  fetch: typeof fetch;
  timeoutMs?: number;
  /** Turns the recording URI into an uploadable Blob (injected in tests). */
  part?: (uri: string) => Promise<Blob>;
}

export interface Transcription {
  transcript: string;
  confidence: number | null;
}

// Warm Vulkan transcription was ~3 s for 5 s of speech; a 40 s answer on a cold start needs more.
const TIMEOUT_MS = 60_000;

const defaultConfig = (): SttConfig => ({
  url: process.env.EXPO_PUBLIC_LOCAL_STT_URL,
  hostedUrl: process.env.EXPO_PUBLIC_STT_API_URL,
  key: process.env.EXPO_PUBLIC_SUPABASE_KEY,
  // Bound: browsers throw "Illegal invocation" when fetch is called as a method of another object.
  fetch: globalThis.fetch.bind(globalThis),
});

export function transcriptionEnabled(config = defaultConfig()): boolean {
  return Boolean(config.url || config.hostedUrl);
}

/** Upload name with the recording's extension, so the server picks the right decoder. */
function fileName(uri: string): string {
  return `answer.${/\.(\w+)(?:\?.*)?$/.exec(uri)?.[1]?.toLowerCase() ?? 'm4a'}`;
}

/**
 * The recording as a Blob for multipart upload. SDK 58's fetch (expo/fetch) rejects React Native's
 * old { uri, name, type } parts ("Unsupported FormDataPart implementation"); a File from
 * expo-file-system implements Blob and is the supported way. Web recordings are blob: URLs.
 */
async function recordingPart(uri: string, fetchImpl: typeof fetch): Promise<Blob> {
  if (uri.startsWith('blob:') || uri.startsWith('data:')) return (await fetchImpl(uri)).blob();
  const { File } = await import('expo-file-system');
  return new File(uri) as unknown as Blob;
}

/** Uploads one recording and returns its transcript, or null when transcription is unavailable. */
export async function transcribeRecording(audioUri: string, config = defaultConfig()): Promise<Transcription | null> {
  const endpoint = config.url ? `${config.url.replace(/\/$/, '')}/v1/audio/transcriptions` : config.hostedUrl;
  if (!endpoint) return null;
  const headers = !config.url && config.key ? { apikey: config.key, Authorization: `Bearer ${config.key}` } : undefined;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), config.timeoutMs ?? TIMEOUT_MS);
  try {
    const form = new FormData();
    const part = await (config.part ?? ((uri: string) => recordingPart(uri, config.fetch)))(audioUri);
    form.append('file', part, fileName(audioUri));
    form.append('language', 'en');
    const res = await config.fetch(endpoint, {
      method: 'POST',
      headers,
      body: form,
      signal: controller.signal,
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { text?: unknown; confidence?: unknown };
    if (typeof data.text !== 'string') return null;
    return { transcript: data.text.trim(), confidence: typeof data.confidence === 'number' ? data.confidence : null };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
