import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import { Button, Card, Row, Text } from '@/components/ui';
import { modelAnswerFor, type Item } from '@/core';
import { useSettings } from '@/services/app-state';
import { speakUtterances, type SpeakHandle } from '@/services/tts';
import { space } from '@/theme';

/** Practice only: reveal the model answer to build on, and hear it read aloud. */
export function ModelAnswer({ item }: { item: Item }) {
  const text = modelAnswerFor(item);
  const settings = useSettings();
  const [open, setOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const handle = useRef<SpeakHandle | null>(null);
  useEffect(() => () => handle.current?.cancel(), []);
  if (!text) return null;

  const listen = () => {
    if (speaking) {
      handle.current?.cancel();
      setSpeaking(false);
      return;
    }
    setSpeaking(true);
    handle.current = speakUtterances([{ speaker: 'Model', text }], { rate: settings.speechRate, onDone: () => setSpeaking(false) });
  };

  return (
    <View style={{ gap: space.sm }}>
      <Row>
        <Button label={open ? 'Hide model answer' : 'Show model answer'} variant="secondary" size="sm" onPress={() => setOpen(!open)} />
        <Button label={speaking ? '■ Stop' : '🔊 Listen'} variant="secondary" size="sm" onPress={listen} />
      </Row>
      {open && (
        <Card tone="primary">
          <Text variant="small" tone="muted" style={{ fontWeight: '600' }}>
            Model answer
          </Text>
          <Text selectable>{text}</Text>
        </Card>
      )}
    </View>
  );
}
