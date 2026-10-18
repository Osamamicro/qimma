import {
  RecordingPresets,
  requestRecordingPermissionsAsync,
  setAudioModeAsync,
  useAudioRecorder,
} from 'expo-audio';
import { useCallback, useMemo, useRef, useState } from 'react';

import type { SpeechResponse } from '@/core';
import { createRecognizer } from '@/services/speech-recognition';
import { transcribeRecording, transcriptionEnabled } from '@/services/speech-to-text';

/**
 * Records the microphone (for playback) and, where available, runs speech
 * recognition in parallel (for scoring). Where there is no live recogniser (phones),
 * the recording is transcribed by the local Whisper server when one is configured
 * (ADR-015). Returns a SpeechResponse on stop.
 */
export function useSpeechCapture() {
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recognizer = useMemo(() => createRecognizer(), []);
  const [recording, setRecording] = useState(false);
  const [live, setLive] = useState('');
  const [error, setError] = useState<string | null>(null);
  const startedAt = useRef(0);
  const audioOk = useRef(false);

  const start = useCallback(async (): Promise<boolean> => {
    setError(null);
    setLive('');
    try {
      const perm = await requestRecordingPermissionsAsync();
      if (!perm.granted) {
        setError('Microphone permission is needed for speaking tasks.');
        return false;
      }
      await setAudioModeAsync({ playsInSilentMode: true, allowsRecording: true });
      await recorder.prepareToRecordAsync();
      recorder.record();
      audioOk.current = true;
    } catch {
      // Recording can fail (e.g. insecure origin) while recognition still works.
      audioOk.current = false;
    }
    if (recognizer.supported) {
      try {
        recognizer.start(setLive);
      } catch {
        // Recogniser busy or blocked; we still have the audio.
      }
    }
    if (!audioOk.current && !recognizer.supported) {
      setError('Could not access the microphone.');
      return false;
    }
    startedAt.current = Date.now();
    setRecording(true);
    return true;
  }, [recorder, recognizer]);

  const stop = useCallback(async (): Promise<SpeechResponse> => {
    const durationMs = Date.now() - startedAt.current;
    setRecording(false);
    const [, recognised] = await Promise.all([
      audioOk.current ? recorder.stop().catch(() => undefined) : Promise.resolve(),
      recognizer.supported ? recognizer.stop() : Promise.resolve(null),
    ]);
    try {
      await setAudioModeAsync({ allowsRecording: false });
    } catch {
      // ignore
    }
    const audioUri = audioOk.current ? recorder.uri : null;
    if (recognised) {
      return { kind: 'speech', transcript: recognised.transcript, confidence: recognised.confidence ?? null, transcriptSource: 'browser', durationMs, audioUri };
    }
    const whisper = audioUri ? await transcribeRecording(audioUri) : null;
    return {
      kind: 'speech',
      // null = no transcript this time (no recogniser, no server, or it failed): the panel asks for self-review.
      transcript: whisper ? whisper.transcript : null,
      confidence: whisper?.confidence ?? null,
      transcriptSource: whisper ? 'whisper' : undefined,
      durationMs,
      audioUri,
    };
  }, [recorder, recognizer]);

  const cancel = useCallback(() => {
    setRecording(false);
    recognizer.abort();
    if (audioOk.current) recorder.stop().catch(() => undefined);
  }, [recorder, recognizer]);

  return { start, stop, cancel, recording, live, error, recognitionSupported: recognizer.supported, transcriptionAvailable: transcriptionEnabled() };
}
