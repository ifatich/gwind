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

### Multiple Cards

<div class="gw-preview">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <GwCard>
      <GwCardHeader>
        <GwCardTitle>Notifications</GwCardTitle>
        <GwCardDescription>Manage your notification preferences.</GwCardDescription>
      </GwCardHeader>
      <GwCardContent>
        <p class="text-sm text-[var(--gw-muted-foreground)]">You have 3 unread notifications.</p>
      </GwCardContent>
    </GwCard>
    <GwCard>
      <GwCardHeader>
        <GwCardTitle>Billing</GwCardTitle>
        <GwCardDescription>Manage your billing and payment methods.</GwCardDescription>
      </GwCardHeader>
      <GwCardContent>
        <p class="text-sm text-[var(--gw-muted-foreground)]">Your next payment is due on Jan 1, 2025.</p>
      </GwCardContent>
    </GwCard>
  </div>
</div>

## Installation

### 1. CLI Installation

```bash
npx gwind-system-ui add card
```

### 2. Manual Installation

Create a folder `src/components/ui/card/` and copy the source code for each file from the [GitHub Repository](https://github.com/gwind-ui/ui/tree/main/src/components/ui/card).

Main `Card.vue` source:

```vue
<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border border-[var(--gw-border)] bg-[var(--gw-card)] text-[var(--gw-card-foreground)] shadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
```

## Usage

```vue
<script setup>
import {
  Card, CardHeader, CardTitle,
  CardDescription, CardContent, CardFooter,
  Button,
} from '@/components/ui'
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
| `Card` | The container with border, shadow, and rounded corners |
| `CardHeader` | Flex column wrapper with padding for title and description |
| `CardTitle` | Renders as `h3` with semibold font |
| `CardDescription` | Muted text below the title |
| `CardContent` | Padded content area |
| `CardFooter` | Flex row at the bottom for actions |
