import { View } from 'react-native';
import Animated, { FadeInUp, ReduceMotion } from 'react-native-reanimated';

import { Button, Card, Chip, ProgressBar, Row, Text } from '@/components/ui';
import { getTaskType, toPteScale, type ScoreResult, type SkillId, type TaskTypeId, type WordMark } from '@/core';
import { motion, space, useColors } from '@/theme';

export interface ScoreCardProps {
  result: ScoreResult;
  /** Shows which PTE skills the question counts toward, with its share of each. */
  taskType?: TaskTypeId;
  answerLabel?: string;
  onRetry?: () => void;
  onNext?: () => void;
}

// The result rises into place once, so the learner sees that their answer was scored.
const ENTER = FadeInUp.duration(motion.base).reduceMotion(ReduceMotion.System);

export function ScoreCard({ result, taskType, answerLabel = 'Answer', onRetry, onNext }: ScoreCardProps) {
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
            <View style={{ gap: 2 }}>
              {/* PTE reports every score on 10–90; the same linear scale as the progress estimate. */}
              <Row gap={space.sm} style={{ alignItems: 'baseline' }}>
                <Text variant="title" style={{ color: scoreColor, fontVariant: ['tabular-nums'] }}>
                  {toPteScale(result.percent)}
                </Text>
                <Text tone="muted" style={{ fontVariant: ['tabular-nums'] }}>
                  / 90
                </Text>
              </Row>
              <Text variant="small" tone="muted" style={{ fontVariant: ['tabular-nums'] }}>
                {`${result.total} of ${result.max} points · ${pct}%`}
              </Text>
            </View>
          )}
          {result.estimated && <Chip label="Estimate" />}
        </Row>

        {taskType && result.max > 0 && <SkillShares taskType={taskType} />}

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

        {result.marks && <ReadingMarks marks={result.marks} />}

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

/** The reference text coloured word by word: missed, heard differently, and long pauses. */
function ReadingMarks({ marks }: { marks: WordMark[] }) {
  const c = useColors();
  const look = (m: WordMark) =>
    m.status === 'missed'
      ? { color: c.danger, backgroundColor: c.dangerSoft, textDecorationLine: 'line-through' as const }
      : m.status === 'wrong'
        ? { color: c.warning, backgroundColor: c.warningSoft, textDecorationLine: 'underline' as const }
        : undefined;
  const issues = marks.some((m) => m.status !== 'ok' || m.pauseAfter);
  return (
    <View style={{ gap: space.xs }}>
      <Text variant="small" tone="muted" style={{ fontWeight: '600' }}>
        What you read
      </Text>
      <Text selectable style={{ lineHeight: 26 }}>
        {marks.map((m, i) => (
          <Text key={i}>
            <Text style={look(m)}>{m.text}</Text>
            {m.status === 'wrong' && m.heard ? <Text variant="small" style={{ color: c.warning }}>{` (${m.heard})`}</Text> : null}
            {m.pauseAfter ? <Text style={{ color: c.danger, fontWeight: '700' }}>{' |'}</Text> : null}
            {i < marks.length - 1 ? ' ' : ''}
          </Text>
        ))}
      </Text>
      <Text variant="small" tone="muted">
        {issues
          ? 'Red crossed out: missed. Orange underlined: heard as the word in brackets. | : long pause.'
          : 'Every word was read in order with no long pauses.'}
      </Text>
    </View>
  );
}

const SKILL_NAME: Record<SkillId, string> = { speaking: 'Speaking', writing: 'Writing', reading: 'Reading', listening: 'Listening' };

/** The skills this task type feeds in PTE Academic, with its share of each (official weighting). */
function SkillShares({ taskType }: { taskType: TaskTypeId }) {
  const shares = Object.entries(getTaskType(taskType).skills) as [SkillId, number][];
  if (shares.length === 0) return null;
  return (
    <Text variant="small" tone="muted">
      {`Counts toward ${shares.map(([skill, pct]) => `${SKILL_NAME[skill]} (${pct}%)`).join(' and ')}`}
    </Text>
  );
}
