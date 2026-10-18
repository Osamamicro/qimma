import { StyleSheet, Text as RNText, type TextProps, type TextStyle } from 'react-native';

import { FONTS, type, useColors } from '@/theme';

type Variant = keyof typeof type;
type Tone = 'default' | 'muted' | 'faint' | 'primary' | 'success' | 'danger' | 'warning';

export interface AppTextProps extends TextProps {
  variant?: Variant;
  tone?: Tone;
}

// Custom fonts ship one file per weight; Android ignores fontWeight on them, so pick the family.
function familyFor(weight: TextStyle['fontWeight']): string {
  switch (String(weight ?? '400')) {
    case '500':
      return FONTS.medium;
    case '600':
      return FONTS.semibold;
    case '700':
    case '800':
    case '900':
    case 'bold':
      return FONTS.bold;
    default:
      return FONTS.regular;
  }
}

export function Text({ variant = 'body', tone = 'default', style, ...rest }: AppTextProps) {
  const c = useColors();
  const color = {
    default: c.text,
    muted: c.textMuted,
    faint: c.textFaint,
    primary: c.primary,
    success: c.success,
    danger: c.danger,
    warning: c.warning,
  }[tone];
  const flat = StyleSheet.flatten([type[variant], { color }, style]) as TextStyle;
  const { fontWeight, ...restStyle } = flat;
  return <RNText {...rest} style={[restStyle, { fontFamily: flat.fontFamily ?? familyFor(fontWeight) }]} />;
}
