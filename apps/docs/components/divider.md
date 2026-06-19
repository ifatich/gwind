# Divider

Horizontal and vertical separator.

## Installation

```bash
npx gwind-system-ui add divider
```

## Preview

<ShadowPreview>
  <div class="grid gap-4">
    <div class="grid gap-3">
      <div class="text-omicron font-extrabold leading-6 text-black-800">Horizontal</div>
      <GwDivider />
      <div class="text-sigma font-semibold leading-5 text-black-600">Separated content</div>
    </div>
    <div class="flex h-12 items-center gap-4">
      <span class="text-sigma font-semibold text-black-800">Left</span>
      <GwDivider orientation="vertical" />
      <span class="text-sigma font-semibold text-black-800">Right</span>
    </div>
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { Divider } from '@/components/ui/divider'
</script>

<template>
  <Divider />
  <Divider orientation="vertical" />
</template>
```
