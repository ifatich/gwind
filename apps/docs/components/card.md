# Card

Displays a card with header, content, and footer.

## Preview

### Basic Card

<div class="gw-preview">
  <div style="max-width: 380px;">
    <GwCard>
      <GwCardHeader>
        <GwCardTitle>Card Title</GwCardTitle>
        <GwCardDescription>Card description goes here. This is a brief summary of the card content.</GwCardDescription>
      </GwCardHeader>
      <GwCardContent>
        <p class="text-sm">This is the main content area of the card. You can place any content here.</p>
      </GwCardContent>
      <GwCardFooter>
        <GwButton variant="outline" size="sm">Cancel</GwButton>
        <GwButton size="sm" class="ml-auto">Save</GwButton>
      </GwCardFooter>
    </GwCard>
  </div>
</div>

## Installation

### 1. CLI Installation

```bash
npx gwind-system-ui add card
```

### 2. Manual Installation

Create a folder `src/components/ui/card/` and copy the source code for each file.

Main `Card.vue` source:

```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('p-4 rounded-md bg-white text-black-800 drop-shadow-1', props.class)"
  >
    <slot />
  </div>
</template>
```

`CardTitle.vue` source:

```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3 :class="cn('!text-omicron font-bold leading-none tracking-tight', props.class)">
    <slot />
  </h3>
</template>
```

## Usage

```vue
<script setup>
import {
  Card, CardHeader, CardTitle,
  CardDescription, CardContent, CardFooter
} from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Project Settings</CardTitle>
      <CardDescription>Configure your project.</CardDescription>
    </CardHeader>
    <CardContent>
      <!-- Your content -->
    </CardContent>
    <CardFooter>
      <Button>Save changes</Button>
    </CardFooter>
  </Card>
</template>
```

## Sub-components

| Component | Description |
|-----------|-------------|
| `Card` | The container with rounded corners and drop-shadow-1 |
| `CardHeader` | Flex column wrapper with gap-y-2 |
| `CardTitle` | Bold title with text-omicron typography |
| `CardDescription` | Secondary text below the title |
| `CardContent` | The main content area |
| `CardFooter` | Flex row at the bottom for actions |
