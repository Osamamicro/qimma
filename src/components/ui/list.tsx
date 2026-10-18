import type { ReactNode } from 'react';
import { View } from 'react-native';

import { radius, space, useColors } from '@/theme';

import { Row } from './layout';
import { PressableScale } from './pressable-scale';
import { Text } from './text';

/** One bordered group for related rows; rows are separated by hairlines, not boxed one by one. */
export function ListGroup({ children }: { children: ReactNode }) {
  const c = useColors();
  return (
    <View style={{ backgroundColor: c.surface, borderWidth: 1, borderColor: c.border, borderRadius: radius.lg, borderCurve: 'continuous', overflow: 'hidden' }}>
      {children}
    </View>
  );
}

export function ListRow({
  leading,
  leadingWidth = 18,
  title,
  detail,
  meta,
  footer,
  onPress,
  last = false,
  accessibilityLabel,
}: {
  leading?: ReactNode;
  /** Fixed leading column so titles align across rows (e.g. task-code tags of 2-3 letters). */
  leadingWidth?: number;
  title: string;
  detail?: string;
  meta?: string;
  footer?: ReactNode;
  onPress: () => void;
  last?: boolean;
  accessibilityLabel?: string;
}) {
  const c = useColors();
  return (
    <PressableScale
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? [title, meta, detail].filter(Boolean).join(', ')}
      onPress={onPress}
      pressedScale={0.99}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: space.md,
        paddingVertical: space.md + 2,
        paddingHorizontal: space.lg,
        backgroundColor: pressed ? c.surfaceAlt : 'transparent',
        borderBottomWidth: last ? 0 : 1,
        borderBottomColor: c.border,
      })}>
      {leading ? <View style={{ width: leadingWidth, paddingTop: 2, alignItems: 'flex-start' }}>{leading}</View> : null}
      <View style={{ flex: 1, gap: 4 }}>
        <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }} gap={space.md}>
          <Text style={{ fontWeight: '600', flexShrink: 1 }}>{title}</Text>
          {meta ? (
            <Text variant="small" tone="muted" numberOfLines={1} style={{ flexShrink: 0, fontVariant: ['tabular-nums'] }}>
              {meta}
            </Text>
          ) : null}
        </Row>
        {detail ? (
          <Text variant="small" tone="muted">
            {detail}
          </Text>
        ) : null}
        {footer}
      </View>
    </PressableScale>
  );
}
