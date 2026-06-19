# Textarea

A multi-line text input.

## Installation

```bash
npx gwind-system-ui add textarea
```

## Preview

<ShadowPreview class="gwind-docs-preview">
  <GwTextarea placeholder="Type your message here." />
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
  <Textarea placeholder="Type your message here." />
</template>
```

---

## States

### Disabled
<ShadowPreview class="gwind-docs-preview">
  <GwTextarea disabled placeholder="Type your message here." />
</ShadowPreview>

```vue
<Textarea disabled placeholder="Type your message here." />
```
