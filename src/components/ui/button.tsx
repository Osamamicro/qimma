import { ActivityIndicator, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';

import { radius, space, useColors } from '@/theme';

import { PressableScale } from './pressable-scale';
import { Text } from './text';

export interface ButtonProps extends Omit<PressableProps, 'style' | 'children'> {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'md' | 'lg' | 'sm';
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function Button({ label, variant = 'primary', size = 'md', loading, disabled, style, ...rest }: ButtonProps) {
  const c = useColors();
  const bg = { primary: c.primary, secondary: c.surface, ghost: 'transparent', danger: c.danger }[variant];
  const bgPressed = { primary: c.primary, secondary: c.surfaceAlt, ghost: c.surfaceAlt, danger: c.danger }[variant];
  const fg = { primary: c.primaryText, secondary: c.text, ghost: c.primary, danger: c.scheme === 'dark' ? c.background : '#FFFFFF' }[variant];
  const height = { sm: 36, md: 44, lg: 52 }[size];
  return (
    <PressableScale
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled, busy: !!loading }}
      disabled={disabled || loading}
      {...rest}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? bgPressed : bg,
          minHeight: height,
          paddingHorizontal: size === 'sm' ? space.md : space.lg + 2,
          borderRadius: radius.md,
          borderCurve: 'continuous',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: space.sm,
          opacity: disabled ? 0.45 : 1,
          borderWidth: variant === 'secondary' ? 1 : 0,
          borderColor: c.border,
        },
        style,
      ]}>
      {loading ? <ActivityIndicator color={fg} /> : null}
      <Text variant={size === 'sm' ? 'small' : 'body'} numberOfLines={1} style={{ color: fg, fontWeight: '600' }}>
        {label}
      </Text>
    </PressableScale>
  );
}
