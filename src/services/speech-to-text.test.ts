import { describe, expect, it, vi } from 'vitest';

import { transcribeRecording, transcriptionEnabled, type SttConfig } from './speech-to-text';

const ok = (body: unknown) => Promise.resolve(new Response(JSON.stringify(body), { status: 200 }));
const part = () => Promise.resolve(new Blob(['fake-audio'], { type: 'audio/mp4' }));
const cfg = (fetchImpl: SttConfig['fetch'], url = 'http://10.0.2.2:8178/') => ({ url, fetch: fetchImpl, timeoutMs: 50, part });

describe('transcribeRecording', () => {
  it('posts the recording as multipart "file" and returns the transcript', async () => {
    const fetchImpl = vi.fn(() => ok({ text: ' The library will close early. ', confidence: 0.92 }));
    const result = await transcribeRecording('file:///data/cache/recording-1.m4a', cfg(fetchImpl));
    expect(result).toEqual({ transcript: 'The library will close early.', confidence: 0.92 });
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe('http://10.0.2.2:8178/v1/audio/transcriptions');
    expect(init.method).toBe('POST');
    expect((init.body as FormData).get('language')).toBe('en');
    const file = (init.body as FormData).get('file') as File;
    expect(file.name).toBe('answer.m4a');
  });

  it.each([
    ['the server is down', () => Promise.reject(new TypeError('network'))],
    ['the server cannot decode the audio', () => Promise.resolve(new Response('{}', { status: 422 }))],
    ['the reply has no text', () => ok({ nope: true })],
  ])('returns null when %s', async (_label, impl) => {
    expect(await transcribeRecording('file:///a.m4a', cfg(vi.fn(impl)))).toBeNull();
  });

  it('returns null on timeout', async () => {
    const hang: SttConfig['fetch'] = (_url, init) =>
      new Promise((_resolve, reject) => init?.signal?.addEventListener('abort', () => reject(new Error('aborted'))));
    expect(await transcribeRecording('file:///a.m4a', cfg(hang))).toBeNull();
  });

  it('posts to the hosted function with the public key when no local server is set', async () => {
    const fetchImpl = vi.fn(() => ok({ text: 'Hosted words.', confidence: 0.8 }));
    const hosted = { hostedUrl: 'https://x.supabase.co/functions/v1/transcribe', key: 'anon', fetch: fetchImpl, timeoutMs: 50, part };
    expect(transcriptionEnabled(hosted)).toBe(true);
    expect(await transcribeRecording('file:///a.m4a', hosted)).toEqual({ transcript: 'Hosted words.', confidence: 0.8 });
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe('https://x.supabase.co/functions/v1/transcribe');
    expect(init.headers).toEqual({ apikey: 'anon', Authorization: 'Bearer anon' });
  });

  it('prefers the local server over the hosted function and sends it no key', async () => {
    const fetchImpl = vi.fn(() => ok({ text: 'x' }));
    await transcribeRecording('file:///a.m4a', { ...cfg(fetchImpl), hostedUrl: 'https://x/transcribe', key: 'anon' });
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe('http://10.0.2.2:8178/v1/audio/transcriptions');
    expect(init.headers).toBeUndefined();
  });

  it('is off without a URL and never calls the network', async () => {
    const fetchImpl = vi.fn(() => ok({ text: 'x' }));
    expect(transcriptionEnabled(cfg(fetchImpl, ''))).toBe(false);
    expect(await transcribeRecording('file:///a.m4a', cfg(fetchImpl, ''))).toBeNull();
    expect(fetchImpl).not.toHaveBeenCalled();
  });
});
