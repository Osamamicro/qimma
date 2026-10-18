import * as DocumentPicker from 'expo-document-picker';
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

/** Returns the picked file's text, or null when the learner cancels. */
export async function pickBackupFile(): Promise<string | null> {
  const result = await DocumentPicker.getDocumentAsync({ type: ['application/json', 'text/plain', '*/*'], copyToCacheDirectory: true });
  if (result.canceled) return null;
  return new File(result.assets[0].uri).text();
}
