import { View } from 'react-native';
import Animated, { FadeInUp, ReduceMotion } from 'react-native-reanimated';

import { Button, Card, Chip, ProgressBar, Row, Text } from '@/components/ui';
import type { ScoreResult } from '@/core';
import { motion, space, useColors } from '@/theme';

export interface ScoreCardProps {
  result: ScoreResult;
  answerLabel?: string;
  onRetry?: () => void;
  onNext?: () => void;
}

// The result rises into place once, so the learner sees that their answer was scored.
const ENTER = FadeInUp.duration(motion.base).reduceMotion(ReduceMotion.System);

export function ScoreCard({ result, answerLabel = 'Answer', onRetry, onNext }: ScoreCardProps) {
  const c = useColors();
  const pct = Math.round(result.percent * 100);
  const scoreColor = result.max === 0 ? c.text : pct >= 79 ? c.success : pct >= 50 ? c.text : c.warning;
  return (
    <Animated.View entering={ENTER}>
      <Card>
        <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
          {result.max === 0 ? (
            <Text variant="heading">Self-review saved</Text>
          ) : (
            <Row gap={space.sm} style={{ alignItems: 'baseline' }}>
              <Text variant="title" style={{ color: scoreColor, fontVariant: ['tabular-nums'] }}>
                {`${result.total}/${result.max}`}
              </Text>
              <Text tone="muted" style={{ fontVariant: ['tabular-nums'] }}>
                {`${pct}%`}
              </Text>
            </Row>
          )}
          {result.estimated && <Chip label="Estimate" />}
        </Row>

        {result.traits.length > 1 && (
          <View style={{ gap: space.sm }}>
            {result.traits.map((t) => (
              <Row key={t.id} gap={space.md} style={{ flexWrap: 'nowrap' }}>
                <Text variant="small" style={{ width: 132 }} numberOfLines={2}>
                  {t.label}
                </Text>
                <View style={{ flex: 1 }}>
                  <ProgressBar value={t.unscored ? 0 : t.score / t.max} height={4} color={c.ink} />
                </View>
                <Text variant="small" tone="muted" style={{ width: 64, textAlign: 'right', fontVariant: ['tabular-nums'] }}>
                  {t.unscored ? 'not scored' : `${t.score}/${t.max}`}
                </Text>
              </Row>
            ))}
          </View>
        )}

        {result.feedback.length > 0 && (
          <View style={{ gap: space.xs }}>
            {result.feedback.map((f, i) => (
              <Text key={i} variant="small" selectable>
                • {f}
              </Text>
            ))}
          </View>
        )}

        {result.answer ? (
          <View style={{ gap: space.xs, paddingTop: space.sm, borderTopWidth: 1, borderTopColor: c.border }}>
            <Text variant="small" tone="muted" style={{ fontWeight: '600' }}>
              {answerLabel}
            </Text>
            <Text selectable>{result.answer}</Text>
          </View>
        ) : null}

        {(onRetry || onNext) && (
          <Row>
            {onRetry && <Button label="Try again" variant="secondary" onPress={onRetry} />}
            {onNext && <Button label="Next question" onPress={onNext} />}
          </Row>
        )}
      </Card>
    </Animated.View>
  );
}
