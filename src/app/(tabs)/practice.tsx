import { router } from 'expo-router';
import { View } from 'react-native';

import { Chip, ListGroup, ListRow, ProgressBar, Screen, SectionTitle, Text } from '@/components/ui';
import { getExam, getTaskType, itemFitsExam } from '@/core';
import { ALL_ITEMS } from '@/content';
import { useTypeStats } from '@/features/stats';
import { useSettings } from '@/services/app-state';
import { useColors } from '@/theme';

export default function PracticeScreen() {
  const c = useColors();
  const settings = useSettings();
  const exam = getExam(settings.examId);
  const stats = useTypeStats();
  const available = ALL_ITEMS.filter((i) => itemFitsExam(i, exam.id));

  return (
    <Screen headerless>
      <View style={{ gap: 4 }}>
        <Text variant="title">Practice</Text>
        <Text tone="muted">{`${exam.name}: every task type, scored the way PTE scores it.`}</Text>
        <Text variant="small" tone="faint">
          Percentages show how much each task counts toward a skill score
          {exam.weightsSource === 'official' ? ' (Pearson, Aug 2025).' : ' (approximate for PTE Core).'}
        </Text>
      </View>
      {exam.sections.map((section) => (
        <View key={section.id} style={{ gap: 8 }}>
          <SectionTitle title={section.name} action={<Text variant="small" tone="muted">{`${section.minutes} min in the exam`}</Text>} />
          <ListGroup>
            {section.taskTypes.map((id, i) => {
              const spec = getTaskType(id);
              const count = available.filter((item) => item.type === id).length;
              const s = stats[id];
              const weight = exam.weights[id];
              const skillsFed = Object.entries(weight?.skills ?? spec.skills) as [keyof typeof spec.skills, number][];
              const primary = [...skillsFed].sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'speaking';
              const share = skillsFed.map(([skill, pct]) => `${pct}% of ${skill}`).join(', ');
              return (
                <ListRow
                  key={id}
                  leading={<Chip label={spec.code} color={c.skill(primary)} />}
                  leadingWidth={40}
                  title={spec.name}
                  meta={`${count} questions`}
                  detail={s ? `${s.attempts} ${s.attempts === 1 ? 'attempt' : 'attempts'}, average ${Math.round((s.average ?? 0) * 100)}%. Counts for ${share}.` : `Not started. Counts for ${share}.`}
                  footer={s ? <ProgressBar value={Object.keys(s.best).length / Math.max(count, 1)} height={3} color={c.skill(primary)} /> : undefined}
                  onPress={() => router.push({ pathname: '/practice/[type]', params: { type: id } })}
                  last={i === section.taskTypes.length - 1}
                />
              );
            })}
          </ListGroup>
        </View>
      ))}
    </Screen>
  );
}
