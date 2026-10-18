import { Alert, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, Row, Text } from '@/components/ui';
import { useStorageStatus } from '@/services/storage';
import { space, useColors } from '@/theme';

import { exportBackupFile } from './backup-card';

/** Shown above every screen while a progress write has failed (ADR-013). */
export function StorageBanner() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const status = useStorageStatus();
  if (status === 'ok') return null;

  const exportNow = async () => {
    try {
      await exportBackupFile();
    } catch (e) {
      Alert.alert('Export failed', e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <View
      accessibilityRole="alert"
      style={{
        backgroundColor: c.dangerSoft,
        borderBottomWidth: 1,
        borderBottomColor: c.danger,
        paddingTop: insets.top + space.sm,
        paddingBottom: space.sm,
        paddingHorizontal: space.lg,
      }}>
      <Row style={{ justifyContent: 'space-between' }}>
        <Text variant="small" style={{ color: c.danger, flexShrink: 1 }}>
          Progress not saved on this device (storage is full or blocked).
        </Text>
        <Button label="Export now" size="sm" variant="secondary" onPress={exportNow} />
      </Row>
    </View>
  );
}
