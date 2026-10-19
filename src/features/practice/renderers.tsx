import { createElement, type ComponentType } from 'react';

import { Card, Text } from '@/components/ui';
import type { Item } from '@/core';

import { listeningRenderers } from './listening';
import { readingRenderers } from './reading';
import { speakingRenderers } from './speaking';
import type { RendererMap, RendererProps } from './types';
import { writingRenderers } from './writing';

const ALL: RendererMap = { ...speakingRenderers, ...writingRenderers, ...readingRenderers, ...listeningRenderers };

function Unsupported({ item }: RendererProps) {
  return (
    <Card tone="warning">
      <Text>“{item.type}” practice is coming soon.</Text>
    </Card>
  );
}

/** Renders the task renderer for `props.item.type` (one static component for the players). */
export function ItemRenderer(props: RendererProps<Item>) {
  return createElement((ALL[props.item.type] as ComponentType<RendererProps> | undefined) ?? Unsupported, props);
}
