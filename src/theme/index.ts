import { useColorScheme } from 'react-native';

import type { SkillId } from '@/core';

/*
 * Qimma design tokens. Restrained product palette: true neutrals (no warm or navy tint), one
 * accent (summit-flag vermilion) for primary actions, current selection and the goal marker, and
 * a colour-blind-safe set (after Okabe-Ito) reserved for the four skills. Text tokens meet WCAG AA
 * on both background and surface.
 */

const light = {
  background: '#F6F7F8',
  surface: '#FFFFFF',
  surfaceAlt: '#EEF0F2',
  border: '#DDE1E5',
  text: '#16191D',
  textMuted: '#4E5661',
  textFaint: '#666E7A',
  primary: '#C2410C',
  primaryText: '#FFFFFF',
  primarySoft: '#FDEDE6',
  /** Neutral "strong" fill for selected segments and tags: ink, not accent. */
  ink: '#16191D',
  inkText: '#FFFFFF',
  success: '#1A7F4B',
  successSoft: '#E3F4EA',
  danger: '#B42318',
  dangerSoft: '#FDECEA',
  warning: '#8F5500',
  warningSoft: '#FFF3DC',
};

const dark: typeof light = {
  background: '#0F1113',
  surface: '#171A1D',
  surfaceAlt: '#1F2327',
  border: '#2B3036',
  text: '#ECEEF0',
  textMuted: '#A9B0B8',
  textFaint: '#8A929B',
  primary: '#FF8A5C',
  primaryText: '#1A0D07',
  primarySoft: '#3A1F15',
  ink: '#ECEEF0',
  inkText: '#0F1113',
  success: '#5FD394',
  successSoft: '#13301F',
  danger: '#FF8278',
  dangerSoft: '#3A1916',
  warning: '#F2B84B',
  warningSoft: '#352812',
};

export type Palette = typeof light;

export const SKILL_COLORS: Record<SkillId, { light: string; dark: string }> = {
  speaking: { light: '#A23B72', dark: '#E58FC0' },
  writing: { light: '#00795C', dark: '#4FD1A5' },
  reading: { light: '#0B62A4', dark: '#6FB6F0' },
  listening: { light: '#8A6100', dark: '#E8B64C' },
};

export function useColors(): Palette & { scheme: 'light' | 'dark'; skill: (s: SkillId) => string } {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const palette = scheme === 'dark' ? dark : light;
  return { ...palette, scheme, skill: (s) => SKILL_COLORS[s][scheme] };
}

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;
/** One radius system: controls 8, containers 12, tags 6. Pill only for thin bars. */
export const radius = { sm: 6, md: 8, lg: 12, pill: 999 } as const;
export const MAX_WIDTH = 880;

// On the web the families are CSS stacks, so text shows in the system sans (not the browser's
// serif default) until the webfont arrives. Native needs the bare registered name.
const stack = (name: string) => (process.env.EXPO_OS === 'web' ? `${name}, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` : name);

/** IBM Plex Sans (loaded in the root layout); one family, weights carry the hierarchy. */
export const FONTS = {
  regular: stack('IBMPlexSans_400Regular'),
  medium: stack('IBMPlexSans_500Medium'),
  semibold: stack('IBMPlexSans_600SemiBold'),
  bold: stack('IBMPlexSans_700Bold'),
} as const;

// 1.2 step ratio, fixed sizes (product UI, not fluid).
export const type = {
  display: { fontSize: 44, lineHeight: 48, fontWeight: '600' as const, letterSpacing: -0.8 },
  title: { fontSize: 28, lineHeight: 34, fontWeight: '600' as const, letterSpacing: -0.3 },
  heading: { fontSize: 21, lineHeight: 28, fontWeight: '600' as const },
  subheading: { fontSize: 17, lineHeight: 24, fontWeight: '600' as const },
  body: { fontSize: 16, lineHeight: 24 },
  reading: { fontSize: 17, lineHeight: 28 },
  small: { fontSize: 14, lineHeight: 20 },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '500' as const },
};

/** Motion: short, ease-out, state-only (product register). */
export const motion = { fast: 140, base: 220, reveal: 480 } as const;
