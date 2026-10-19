import { useRef, useState } from 'react';
import { View } from 'react-native';

import { Button, Chip, Row, Text } from '@/components/ui';
import { getTaskType, type Item, type Response, type ScoreResult } from '@/core';
import { scoreResponse } from '@/services/ai-scoring';
import { recordAttempt } from '@/services/app-state';

import { ItemRenderer } from './renderers';
import { ScoreCard } from './shared';

/** Practice flow for one item: render → submit → score → feedback → retry/next. */
export function PracticePlayer({ item, onNext }: { item: Item; onNext?: () => void }) {
  const spec = getTaskType(item.type);
  const [round, setRound] = useState(0);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [scoring, setScoring] = useState(false);
  const cancelRef = useRef<AbortController | null>(null);

  // Writing tasks may go to the AI scorer (ADR-008/014); everything else resolves at once on-device.
  // A local model can take ~40 s, so the learner can stop waiting and take the on-device score.
  const submit = async (response: Response) => {
    const cancel = new AbortController();
    cancelRef.current = cancel;
    setScoring(true);
    const r = await scoreResponse(item, response, undefined, cancel.signal);
    cancelRef.current = null;
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
      <ItemRenderer key={`${item.id}-${round}`} item={item} mode="practice" onSubmit={submit} result={result} />
      {scoring && (
        <Row style={{ justifyContent: 'space-between' }}>
          <Text tone="muted" accessibilityLiveRegion="polite">
            Scoring your answer…
          </Text>
          <Button label="Use on-device score" variant="secondary" size="sm" onPress={() => cancelRef.current?.abort()} />
        </Row>
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
