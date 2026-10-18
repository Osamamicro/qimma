import { router } from 'expo-router';
import { useMemo } from 'react';
import { View } from 'react-native';

import { Button, Card, ListGroup, ListRow, Row, ScoreScale, Screen, Segmented, SectionTitle, Text } from '@/components/ui';
import { buildDailyPlan, getExam, getTarget, getTaskType, isDue, streakDays, EXAM_LIST, type ExamId } from '@/core';
import { vocabEntries } from '@/content';
import { useAttempts, useEstimate } from '@/features/stats';
import { selectExam, skillTargets, useSettings, vocabStore } from '@/services/app-state';
import { space, useColors } from '@/theme';

/** Plan order is a real sequence, so the rows carry their number. */
function Index({ n }: { n: number }) {
  return (
    <Text variant="small" tone="faint" style={{ fontWeight: '600', fontVariant: ['tabular-nums'] }}>
      {n}
    </Text>
  );
}

export default function TodayScreen() {
  const c = useColors();
  const settings = useSettings();
  const exam = getExam(settings.examId);
  const attempts = useAttempts();
  const estimate = useEstimate();
  const cards = vocabStore.useValue();
  const now = Date.now();
  const dueVocab = vocabEntries.filter((v) => cards[v.id] && isDue(cards[v.id], now)).length;
  const targets = skillTargets(settings);
  const preset = getTarget(settings.targetId);
  const plan = useMemo(
    () => buildDailyPlan(exam, { ...settings, skillTargets: targets }, estimate, dueVocab, now),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exam, settings.targetId, settings.targetScore, settings.examDate, settings.dailyMinutes, estimate, dueVocab],
  );
  const streak = streakDays(attempts, now);
  const todayCount = attempts.filter((a) => new Date(a.at).toDateString() === new Date(now).toDateString()).length;
  const goal = preset ? `Goal: ${preset.name}` : `Goal: ${settings.targetScore} in every skill`;
  const examLine = plan.daysLeft === null ? 'Exam date not set' : plan.daysLeft === 1 ? '1 day to the exam' : `${plan.daysLeft} days to the exam`;

  const scores = (
    <View style={{ gap: space.lg, flexGrow: 1, flexBasis: 340 }}>
      <View style={{ gap: space.xs }}>
        <Row gap={space.md} style={{ alignItems: 'flex-end', flexWrap: 'nowrap' }}>
          {estimate.overall !== null && (
            <Text variant="display" style={{ fontVariant: ['tabular-nums'] }}>
              {estimate.overall}
            </Text>
          )}
          <View style={{ paddingBottom: 6, flexShrink: 1 }}>
            <Text variant={estimate.overall === null ? 'heading' : 'small'} tone={estimate.overall === null ? 'default' : 'muted'}>
              {estimate.overall === null ? 'No estimate yet' : 'Estimated overall, 10 to 90'}
            </Text>
            <Text variant="small" style={{ fontWeight: '600' }}>
              {goal}
            </Text>
          </View>
        </Row>
        <Text variant="small" tone="muted">
          {`${streak}-day streak · ${examLine}`}
        </Text>
      </View>
      <View style={{ gap: space.md }}>
        {estimate.skills.map((s) => (
          <ScoreScale key={s.skill} label={s.skill} score={s.score} target={targets[s.skill]} color={c.skill(s.skill)} />
        ))}
      </View>
      <Text variant="caption" tone="faint">
        Estimates come from your recent practice. They are a study guide, not an official PTE score.
      </Text>
    </View>
  );

  const today = (
    <View style={{ gap: space.md, flexGrow: 1, flexBasis: 340 }}>
      <SectionTitle title="Today’s plan" action={<Text variant="small" tone="muted">{`${todayCount} done today`}</Text>} />
      {plan.focusSkill && (
        <Text variant="small" tone="muted">
          {'Focus on '}
          <Text variant="small" style={{ color: c.skill(plan.focusSkill), fontWeight: '600', textTransform: 'capitalize' }}>
            {plan.focusSkill}
          </Text>
          {plan.gaps[plan.focusSkill] ? `, ${plan.gaps[plan.focusSkill]} points below your goal.` : '.'}
        </Text>
      )}
      <ListGroup>
        {plan.tasks.map((t, i) => (
          <ListRow
            key={t.taskType}
            leading={<Index n={i + 1} />}
            title={getTaskType(t.taskType).name}
            detail={t.reason}
            meta={`${t.count} ${t.count === 1 ? 'item' : 'items'} · ${t.minutes} min`}
            onPress={() => router.push({ pathname: '/practice/[type]', params: { type: t.taskType } })}
          />
        ))}
        <ListRow
          leading={<Index n={plan.tasks.length + 1} />}
          title="Vocabulary review"
          meta={`${plan.vocabReviews} due`}
          onPress={() => router.push('/vocab/review')}
          last
        />
      </ListGroup>
    </View>
  );

  return (
    <Screen headerless>
      <View style={{ gap: space.md }}>
        <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
          <Text variant="title">Today</Text>
          <Button label="Settings" variant="secondary" size="sm" onPress={() => router.push('/settings')} />
        </Row>
        <Segmented<ExamId>
          label="Exam"
          options={EXAM_LIST.map((e) => ({ value: e.id, label: e.name }))}
          value={exam.id}
          onChange={selectExam}
        />
      </View>

      {!settings.onboarded && (
        <Card tone="primary">
          <Text variant="subheading">Set your goal</Text>
          <Text>Add your target score and exam date. The daily plan then starts with your weakest skill.</Text>
          <Button label="Set goal and date" onPress={() => router.push('/settings')} style={{ alignSelf: 'flex-start' }} />
        </Card>
      )}

      {/* Two columns when both fit at 340+ each, one column otherwise: pure flex-wrap, no JS breakpoint. */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', columnGap: space.xxl, rowGap: space.xl, alignItems: 'flex-start' }}>
        {scores}
        {today}
      </View>
    </Screen>
  );
}
