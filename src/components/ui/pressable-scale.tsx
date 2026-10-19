import { useState } from 'react';
import { Pressable, type PressableProps, type PressableStateCallbackType, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useReducedMotion, useSharedValue, withTiming } from 'react-native-reanimated';

import { motion } from '@/theme';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const OUT = Easing.out(Easing.quad);

type Props = Omit<PressableProps, 'style'> & {
  pressedScale?: number;
  style?: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
};

/**
 * Pressable with a physical push: scales to `pressedScale` while held. State feedback only;
 * skipped when the system asks for reduced motion. The pressed state is tracked here and the
 * style resolved to a plain value, because an animated Pressable ignores function styles on web.
 */
export function PressableScale({ pressedScale = 0.97, onPressIn, onPressOut, style, ...rest }: Props) {
  const reduce = useReducedMotion();
  const [pressed, setPressed] = useState(false);
  const scale = useSharedValue(1);
  const animated = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
  const resolved = typeof style === 'function' ? style({ pressed, hovered: false } as PressableStateCallbackType) : style;
  return (
    <AnimatedPressable
      {...rest}
      onPressIn={(e) => {
        setPressed(true);
        if (!reduce) scale.set(withTiming(pressedScale, { duration: motion.fast, easing: OUT }));
        onPressIn?.(e);
      }}
      onPressOut={(e) => {
        setPressed(false);
        if (!reduce) scale.set(withTiming(1, { duration: motion.base, easing: OUT }));
        onPressOut?.(e);
      }}
      style={[resolved, animated]}
    />
  );
}
