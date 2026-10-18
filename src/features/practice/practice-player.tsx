import { useState } from 'react';
import { View } from 'react-native';

import { Chip, Row, Text } from '@/components/ui';
import { getTaskType, type Item, type Response, type ScoreResult } from '@/core';
import { scoreResponse } from '@/services/ai-scoring';
import { recordAttempt } from '@/services/app-state';

import { rendererFor } from './renderers';
import { ScoreCard } from './shared';

/** Practice flow for one item: render → submit → score → feedback → retry/next. */
export function PracticePlayer({ item, onNext }: { item: Item; onNext?: () => void }) {
  const spec = getTaskType(item.type);
  const Renderer = rendererFor(item);
  const [round, setRound] = useState(0);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [scoring, setScoring] = useState(false);

  // Writing tasks may go to the AI service (ADR-008); everything else resolves at once on-device.
  const submit = async (response: Response) => {
    setScoring(true);
    const r = await scoreResponse(item, response);
    recordAttempt(item, response, r);
    setScoring(false);
    setResult(r);
  };

  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 6 }}>
        <Row>
          <Chip label={spec.code} selected />
          <Chip label={['', 'Easy', 'Medium', 'Hard'][item.difficulty]} />
          {item.exams?.length === 1 && <Chip label={item.exams[0] === 'pte-core' ? 'Core only' : 'Academic only'} />}
        </Row>
        <Text variant="heading">{item.title}</Text>
        <Text tone="muted">{spec.instructions}</Text>
      </View>
      <Renderer key={`${item.id}-${round}`} item={item} mode="practice" onSubmit={submit} result={result} />
      {scoring && (
        <Text tone="muted" accessibilityLiveRegion="polite">
          Scoring your answer…
        </Text>
      )}
      {result && (
        <ScoreCard
          result={result}
          answerLabel={spec.hasModelAnswer ? 'Model answer' : 'Correct answer'}
          onRetry={() => {
            setResult(null);
            setRound((n) => n + 1);
          }}
          onNext={onNext}
        />
      )}
    </View>
  );
}
