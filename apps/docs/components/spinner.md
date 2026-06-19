# Spinner

Loading state indicator.

## Installation

```bash
npx gwind-system-ui add spinner
```

## Preview

<ShadowPreview>
  <div class="flex items-center gap-4">
    <GwSpinner size="sm" />
    <GwSpinner />
    <GwSpinner size="lg" />
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <Spinner label="Loading data" />
</template>
```
