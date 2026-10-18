import 'expo-sqlite/localStorage/install';

import { useSyncExternalStore } from 'react';

/*
 * Tiny reactive key-value store. On web it is the browser's localStorage; on
 * iOS/Android expo-sqlite installs a synchronous localStorage polyfill.
 * Values are cached so useSyncExternalStore gets a stable snapshot.
 */

type Listener = () => void;
const listeners = new Map<string, Set<Listener>>();
const cache = new Map<string, unknown>();
const keys = new Set<string>();
const PREFIX = 'qimma:';

function read<T>(key: string, fallback: T): T {
  if (cache.has(key)) return cache.get(key) as T;
  let value = fallback;
  try {
    const raw = globalThis.localStorage?.getItem(PREFIX + key);
    if (raw != null) value = JSON.parse(raw) as T;
  } catch {
    // Corrupt or unavailable storage: fall back to the default.
  }
  cache.set(key, value);
  return value;
}

/** Keys whose last write failed. The in-memory value is kept, so export still captures it (ADR-013). */
const failedKeys = new Set<string>();
const statusListeners = new Set<Listener>();

function write<T>(key: string, value: T): boolean {
  cache.set(key, value);
  const hadFailures = failedKeys.size > 0;
  let ok = true;
  try {
    globalThis.localStorage?.setItem(PREFIX + key, JSON.stringify(value));
    failedKeys.delete(key);
  } catch {
    // Storage full or blocked (private mode); keep the in-memory value and say so.
    failedKeys.add(key);
    ok = false;
  }
  listeners.get(key)?.forEach((l) => l());
  if (hadFailures !== failedKeys.size > 0) statusListeners.forEach((l) => l());
  return ok;
}

export type StorageStatus = 'ok' | 'failed';

export function storageStatus(): StorageStatus {
  return failedKeys.size > 0 ? 'failed' : 'ok';
}

export function useStorageStatus(): StorageStatus {
  return useSyncExternalStore(
    (cb) => {
      statusListeners.add(cb);
      return () => statusListeners.delete(cb);
    },
    storageStatus,
    storageStatus,
  );
}

/** Characters stored under the app's keys (a close proxy for bytes; the data is mostly ASCII JSON). */
export function storageUsage(): number {
  let total = 0;
  for (const key of keys) {
    try {
      total += globalThis.localStorage?.getItem(PREFIX + key)?.length ?? 0;
    } catch {
      // Unavailable storage counts as empty.
    }
  }
  return total;
}

function subscribe(key: string, listener: Listener) {
  if (!listeners.has(key)) listeners.set(key, new Set());
  listeners.get(key)!.add(listener);
  return () => listeners.get(key)?.delete(listener);
}

export interface Store<T> {
  get: () => T;
  /** Returns false when the value could not be persisted (it is still kept in memory). */
  set: (value: T) => boolean;
  update: (fn: (prev: T) => T) => boolean;
  use: () => T;
}

export function createStore<T>(key: string, fallback: T): Store<T> {
  keys.add(key);
  const get = () => read(key, fallback);
  const set = (value: T) => write(key, value);
  return {
    get,
    set,
    update: (fn) => set(fn(get())),
    // eslint-disable-next-line react-hooks/rules-of-hooks
    use: () => useSyncExternalStore((cb) => subscribe(key, cb), get, get),
  };
}
