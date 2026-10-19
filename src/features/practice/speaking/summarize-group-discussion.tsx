import { useState } from 'react';
import { TextInput, View } from 'react-native';

import { Text } from '@/components/ui';
import { getTaskType, type SummarizeGroupDiscussionItem } from '@/core';
import { radius, space, type as typeScale, useColors } from '@/theme';

import { AudioPrompt, RecordPanel } from '../shared';
import type { RendererProps } from '../types';

/** Summarize Group Discussion: hear several speakers once, then summarize the main points and views. */
export function SummarizeGroupDiscussionRenderer({
  item,
  mode,
  onSubmit,
  result,
}: RendererProps<SummarizeGroupDiscussionItem>) {
  const { timing } = getTaskType(item.type);
  const [heard, setHeard] = useState(false);
  return (
    <View style={{ gap: 16 }}>
      <AudioPrompt item={item} mode={mode} onFinished={() => setHeard(true)} showTranscript={!!result} />
      <SpeakerNotes item={item} showKeyPoints={!!result} />
      <RecordPanel
        prepSec={timing.prepSec ?? 10}
        responseSec={timing.responseSec ?? 120}
        mode={mode}
        ready={heard}
        autoStart
        onComplete={onSubmit}
      />
    </View>
  );
}

/**
 * One note column per speaker (ADR-011), like the erasable noteboard in the test. Notes are never
 * scored or saved. After scoring, each column also lists that speaker's key points.
 */
function SpeakerNotes({ item, showKeyPoints }: { item: SummarizeGroupDiscussionItem; showKeyPoints: boolean }) {
  const c = useColors();
  const speakers = [...new Set(item.turns.map((t) => t.speaker))];
  const [notes, setNotes] = useState<Record<string, string>>({});
  return (
    <View style={{ gap: space.sm }}>
      <Text variant="small" tone="muted" style={{ fontWeight: '600' }}>
        Notes by speaker
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }}>
        {speakers.map((speaker) => {
          const points = item.keyPoints.filter((k) => k.speaker === speaker);
          return (
            <View key={speaker} style={{ flexGrow: 1, flexBasis: 150, gap: 6 }}>
              <Text variant="subheading" numberOfLines={1}>
                {speaker}
              </Text>
              <TextInput
                multiline
                value={notes[speaker] ?? ''}
                onChangeText={(text) => setNotes((n) => ({ ...n, [speaker]: text }))}
                placeholder="Main view, reasons…"
                placeholderTextColor={c.textFaint}
                accessibilityLabel={`Notes for ${speaker}`}
                autoCorrect={false}
                spellCheck={false}
                textAlignVertical="top"
                style={[
                  typeScale.small,
                  { minHeight: 96, color: c.text, backgroundColor: c.surface, borderColor: c.border, borderWidth: 1, borderRadius: radius.md, padding: space.sm },
                ]}
              />
              {showKeyPoints && points.length > 0 ? (
                <Text variant="small" tone="muted" selectable>
                  {points.map((k) => `• ${k.label}`).join('\n')}
                </Text>
              ) : null}
            </View>
          );
        })}
      </View>
    </View>
  );
}
