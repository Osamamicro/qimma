import { useEffect, type ReactNode } from 'react';
import { Pressable, ScrollView, View, type ScrollViewProps, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useReducedMotion, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MAX_WIDTH, motion, radius, space, useColors } from '@/theme';

import { PressableScale } from './pressable-scale';
import { Text } from './text';

/**
 * Scrollable page with centred, width-limited content. Use as the first child of a route.
 * Set `headerless` on routes without a navigation header (the tabs): Android draws edge to edge
 * and `contentInsetAdjustmentBehavior` only works on iOS, so the status bar inset is added here.
 */
export function Screen({
  children,
  contentContainerStyle,
  headerless = false,
  ...rest
}: ScrollViewProps & { children: ReactNode; headerless?: boolean }) {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const topInset = headerless && process.env.EXPO_OS === 'android' ? insets.top : 0;
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor: c.background }}
      {...rest}
      contentContainerStyle={[
        {
          paddingHorizontal: space.lg,
          paddingTop: space.xl + topInset,
          paddingBottom: space.xxl * 2,
          gap: space.xl,
          width: '100%',
          maxWidth: MAX_WIDTH,
          alignSelf: 'center',
        },
        contentContainerStyle,
      ]}>
      {children}
    </ScrollView>
  );
}

/** A bordered container. Use it when grouping needs an edge; plain spacing is often enough. */
export function Card({
  children,
  style,
  onPress,
  tone = 'default',
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  tone?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
}) {
  const c = useColors();
  const bg = { default: c.surface, primary: c.primarySoft, success: c.successSoft, danger: c.dangerSoft, warning: c.warningSoft }[tone];
  const base: ViewStyle = {
    backgroundColor: bg,
    borderRadius: radius.lg,
    borderCurve: 'continuous',
    borderWidth: 1,
    borderColor: tone === 'default' ? c.border : 'transparent',
    padding: space.lg,
    gap: space.md,
  };
  if (!onPress) return <View style={[base, style]}>{children}</View>;
  return (
    <PressableScale
      accessibilityRole="button"
      onPress={onPress}
      pressedScale={0.985}
      style={({ pressed }) => [base, pressed && tone === 'default' ? { backgroundColor: c.surfaceAlt } : null, style]}>
      {children}
    </PressableScale>
  );
}

export function Row({ children, style, gap = space.sm }: { children: ReactNode; style?: StyleProp<ViewStyle>; gap?: number }) {
  return <View style={[{ flexDirection: 'row', alignItems: 'center', gap, flexWrap: 'wrap' }, style]}>{children}</View>;
}

/**
 * Small tag or toggle. Interactive chips are filters and options (selected = ink fill);
 * static chips label things (task code, difficulty) and stay quiet.
 */
export function Chip({
  label,
  selected,
  onPress,
  color,
}: {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  color?: string;
}) {
  const c = useColors();
  const fill = selected ? (color ?? c.ink) : onPress ? 'transparent' : c.surfaceAlt;
  const fg = selected ? (color ? c.surface : c.inkText) : (color ?? (onPress ? c.text : c.textMuted));
  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : 'text'}
      accessibilityState={{ selected: !!selected }}
      disabled={!onPress}
      onPress={onPress}
      // Visual size stays compact; the hit area reaches ~44pt when the chip is interactive.
      hitSlop={onPress ? 8 : undefined}
      style={({ pressed }) => ({
        minHeight: onPress ? 32 : undefined,
        justifyContent: 'center',
        paddingVertical: onPress ? 6 : 2,
        paddingHorizontal: onPress ? 12 : 7,
        borderRadius: radius.sm,
        borderWidth: onPress ? 1 : 0,
        borderColor: selected ? fill : c.border,
        backgroundColor: pressed && !selected ? c.surfaceAlt : fill,
      })}>
      <Text variant="caption" style={{ color: fg, fontWeight: onPress ? '500' : '600', fontVariant: ['tabular-nums'] }}>
        {label}
      </Text>
    </Pressable>
  );
}

/** Two to four mutually exclusive options in one control (e.g. the exam switch). */
export function Segmented<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  const c = useColors();
  return (
    <View
      accessibilityRole="radiogroup"
      accessibilityLabel={label}
      style={{ flexDirection: 'row', backgroundColor: c.surfaceAlt, borderRadius: radius.md, padding: 3, alignSelf: 'flex-start' }}>
      {options.map((o) => {
        const on = o.value === value;
        return (
          <Pressable
            key={o.value}
            accessibilityRole="radio"
            accessibilityState={{ checked: on }}
            onPress={() => onChange(o.value)}
            style={{
              paddingVertical: 7,
              paddingHorizontal: 14,
              borderRadius: radius.sm,
              backgroundColor: on ? c.surface : 'transparent',
              borderWidth: 1,
              borderColor: on ? c.border : 'transparent',
            }}>
            <Text variant="small" style={{ color: on ? c.text : c.textMuted, fontWeight: on ? '600' : '500' }}>
              {o.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

/**
 * Width eases to a new value, so a score change reads as change. It starts at the real value:
 * no load-time animation, and a slow device never shows a misleading partial bar.
 */
function useAnimatedPct(value: number) {
  const reduce = useReducedMotion();
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 1000) / 10;
  const width = useSharedValue(pct);
  useEffect(() => {
    width.value = reduce ? pct : withTiming(pct, { duration: motion.reveal, easing: Easing.out(Easing.cubic) });
  }, [pct, reduce, width]);
  const style = useAnimatedStyle(() => ({ width: `${width.value}%` }));
  return { pct, style };
}

export function ProgressBar({ value, color, height = 6 }: { value: number; color?: string; height?: number }) {
  const c = useColors();
  const { pct, style } = useAnimatedPct(value);
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(pct) }}
      style={{ height, borderRadius: height, backgroundColor: c.surfaceAlt, overflow: 'hidden' }}>
      <Animated.View style={[{ height: '100%', backgroundColor: color ?? c.primary, borderRadius: height }, style]} />
    </View>
  );
}

const SCALE_MIN = 10;
const SCALE_MAX = 90;
const TICKS = [10, 30, 50, 70, 90];
const toRatio = (score: number) => (score - SCALE_MIN) / (SCALE_MAX - SCALE_MIN);

/**
 * A PTE score ruler (10-90): the learner's estimate as a filled line in the skill colour, the
 * goal as an accent notch. Reads like the score report, not like a generic progress bar.
 */
export function ScoreScale({
  label,
  score,
  target,
  color,
  note,
}: {
  label: string;
  score: number | null;
  target: number;
  color: string;
  note?: string;
}) {
  const c = useColors();
  const { style } = useAnimatedPct(score === null ? 0 : toRatio(score));
  const met = score !== null && score >= target;
  const summary =
    score === null ? `${label}: no estimate yet, goal ${target}` : `${label}: ${score} of 90, goal ${target}${met ? ', reached' : ''}`;
  return (
    <View accessible accessibilityLabel={summary} style={{ gap: 6 }}>
      <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
        <Text variant="small" style={{ fontWeight: '500', textTransform: 'capitalize' }}>
          {label}
        </Text>
        <Text variant="small" tone="muted" style={{ fontVariant: ['tabular-nums'] }}>
          {score === null ? (
            <Text variant="small" tone="faint">
              {`No estimate yet · goal ${target}`}
            </Text>
          ) : (
            <>
              <Text variant="small" style={{ fontWeight: '600', color: met ? c.success : c.text }}>
                {score}
              </Text>
              {` / goal ${target}`}
            </>
          )}
        </Text>
      </Row>
      <View style={{ height: 14, justifyContent: 'center' }}>
        <View style={{ height: 2, backgroundColor: c.border, borderRadius: 1 }} />
        {TICKS.map((t) => (
          <View
            key={t}
            style={{ position: 'absolute', left: `${toRatio(t) * 100}%`, width: 1, height: 6, marginLeft: t === 90 ? -1 : 0, backgroundColor: c.border }}
          />
        ))}
        <Animated.View style={[{ position: 'absolute', left: 0, height: 4, borderRadius: 2, backgroundColor: color }, style]} />
        <View
          style={{
            position: 'absolute',
            left: `${toRatio(target) * 100}%`,
            marginLeft: -1,
            width: 3,
            height: 14,
            borderRadius: 1.5,
            backgroundColor: c.primary,
          }}
        />
      </View>
      {note ? (
        <Text variant="caption" tone="faint">
          {note}
        </Text>
      ) : null}
    </View>
  );
}

export function SectionTitle({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <Row style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
      <Text variant="heading">{title}</Text>
      {action}
    </Row>
  );
}

export function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  const c = useColors();
  return (
    <View style={{ flexGrow: 1, flexBasis: 120, gap: 2 }}>
      <Text variant="small" tone="muted">
        {label}
      </Text>
      <Text variant="title" style={{ color: color ?? c.text, fontVariant: ['tabular-nums'] }}>
        {value}
      </Text>
    </View>
  );
}
