import { useEffect, useRef, useState } from 'react';

/** Counts down from `seconds` while `running`; calls `onDone` once at zero. */
export function useCountdown(seconds: number, running: boolean, onDone?: () => void) {
  const [left, setLeft] = useState(seconds);
  const doneRef = useRef(onDone);
  useEffect(() => {
    doneRef.current = onDone;
  });

  // Reset to the full window when it changes or a run starts (adjusting state during render,
  // not in an effect): a stale `left` (e.g. 0 from an earlier run) would end it on the first tick.
  const [prev, setPrev] = useState({ seconds, running });
  if (prev.seconds !== seconds || prev.running !== running) {
    setPrev({ seconds, running });
    if (prev.seconds !== seconds || running) setLeft(seconds);
  }

  useEffect(() => {
    if (!running) return;
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
