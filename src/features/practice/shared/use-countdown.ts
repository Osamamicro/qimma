import { useEffect, useRef, useState } from 'react';

/** Counts down from `seconds` while `running`; calls `onDone` once at zero. */
export function useCountdown(seconds: number, running: boolean, onDone?: () => void) {
  const [left, setLeft] = useState(seconds);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    setLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!running) return;
    // Always count from the full window: a stale `left` (e.g. 0 from an earlier run) would end
    // the countdown on the first tick.
    setLeft(seconds);
    const started = Date.now();
    const id = setInterval(() => {
      const next = Math.max(0, seconds - Math.floor((Date.now() - started) / 1000));
      setLeft(next);
      if (next === 0) {
        clearInterval(id);
        doneRef.current?.();
      }
    }, 250);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return { left, reset: () => setLeft(seconds) };
}

export function formatClock(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}
