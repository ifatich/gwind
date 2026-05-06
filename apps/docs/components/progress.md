# Progress

Displays an indicator showing the completion progress of a task.

## Preview

<div class="gw-preview">
  <div class="gw-preview-col">
    <div class="gw-preview-section">
      <div class="gw-preview-label">Loading (33%)</div>
      <GwProgress :model-value="33" />
    </div>
    <div class="gw-preview-section">
      <div class="gw-preview-label">Success Color (66%)</div>
      <GwProgress :model-value="66" class="[&>div]:bg-lime-500" />
    </div>
    <div class="gw-preview-section">
      <div class="gw-preview-label">Destructive (90%)</div>
      <GwProgress :model-value="90" class="[&>div]:bg-destructive" />
    </div>
    <div class="gw-preview-section">
      <div class="gw-preview-label">Indeterminate</div>
      <GwProgress :model-value="null" />
    </div>
  </div>
</div>

---

## Variants

- Numeric values show loading progress.
- `null` renders the indeterminate state.
- Color utilities can be used to visually distinguish statuses.

---

## Usage

```vue
<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
import { ref, onMounted } from 'vue'

const progress = ref(13)

onMounted(() => {
  setTimeout(() => {
    progress.value = 66
  }, 500)
})
</script>

<template>
  <Progress :model-value="progress" class="w-[60%]" />
</template>
```
