import { useState } from 'react';
import { Alert } from 'react-native';

import { Button, Card, Row, Text } from '@/components/ui';
import { backupFileName, parseBackup } from '@/core';
import { applyImport, exportBackup, lastBackupStore, markBackedUp, previewImport } from '@/services/app-state';
import { pickBackupFile, saveBackupFile } from '@/services/backup-file';
import { storageUsage } from '@/services/storage';

import { formatSize, importErrorMessage, importSummary, lastBackupLabel } from './messages';

/** Writes a backup file and records the time (ADR-013). Shared with the storage banner. */
export async function exportBackupFile(): Promise<void> {
  const file = exportBackup();
  await saveBackupFile(backupFileName(Date.now()), JSON.stringify(file));
  markBackedUp();
}

const errorText = (e: unknown) => (e instanceof Error ? e.message : String(e));

type Status = { tone: 'danger' | 'success'; text: string } | null;

export function BackupCard() {
  const last = lastBackupStore.use();
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const runExport = async () => {
    setBusy(true);
    setStatus(null);
    try {
      await exportBackupFile();
    } catch (e) {
      setStatus({ tone: 'danger', text: `Export failed: ${errorText(e)}` });
    } finally {
      setBusy(false);
    }
  };

  const runImport = async () => {
    setBusy(true);
    setStatus(null);
    try {
      const text = await pickBackupFile();
      if (text == null) return;
      const parsed = parseBackup(text);
      if (!parsed.ok) {
        setStatus({ tone: 'danger', text: importErrorMessage(parsed.error) });
        return;
      }
      const preview = previewImport(parsed.data);
      const msg = importSummary(preview.summary, parsed.skipped);
      const apply = () => {
        const ok = applyImport(preview.data);
        setStatus(
          ok
            ? { tone: 'success', text: `Imported: ${msg}` }
            : { tone: 'danger', text: 'Imported, but some data could not be saved on this device. Export a backup now.' },
        );
      };
      if (process.env.EXPO_OS === 'web') {
        if (globalThis.confirm?.('Import this backup?\n' + msg)) apply();
      } else {
        Alert.alert('Import this backup?', msg, [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Import', onPress: apply },
        ]);
      }
    } catch (e) {
      setStatus({ tone: 'danger', text: `Import failed: ${errorText(e)}` });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card>
      <Text variant="subheading">Backup</Text>
      <Text variant="small" tone="muted">
        Move your progress between devices or keep a copy. Import merges with what is here; nothing is deleted.
      </Text>
      <Text variant="small" tone="muted">
        {`${lastBackupLabel(last, Date.now())} · Size: ${formatSize(storageUsage())}`}
      </Text>
      <Row>
        <Button label="Export backup" onPress={runExport} disabled={busy} />
        <Button label="Import backup" variant="secondary" onPress={runImport} disabled={busy} />
      </Row>
      {status && (
        <Text variant="small" tone={status.tone}>
          {status.text}
        </Text>
      )}
    </Card>
  );
}
