import { File, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';

/*
 * Native backup files (ADR-013): write to the cache and open the share sheet, so the learner
 * can save to Files/Drive or send it. A file, not share text, because text intents cap at ~1 MB.
 */

export async function saveBackupFile(name: string, text: string): Promise<void> {
  const file = new File(Paths.cache, name);
  file.create({ overwrite: true });
  await file.write(text);
  await Sharing.shareAsync(file.uri, { mimeType: 'application/json', dialogTitle: 'Save Qimma backup', UTI: 'public.json' });
}

/**
 * Returns the picked file's text, or null when the learner cancels. Uses the file-system picker,
 * which grants read access to the picked file; a document-picker URI read with `new File(uri)`
 * is rejected in Expo Go ("Missing 'READ' permission").
 */
export async function pickBackupFile(): Promise<string | null> {
  const picked = await File.pickFileAsync({ mimeTypes: ['application/json', 'text/plain', '*/*'] });
  if (picked.canceled) return null;
  return picked.result.text();
}
