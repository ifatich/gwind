<script setup lang="ts">
import PaginationPreview from './previews/PaginationPreview.vue'
</script>

# Pagination

Data-driven pagination for desktop and section-based mobile pagination.

## Installation

```bash
npx gwind-system-ui add pagination
```

## Preview

<PaginationPreview />

---

## Usage

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Pagination } from "@/components/ui/pagination";

const page = ref(1);
</script>

<template>
  <Pagination v-model="page" :total-pages="20" />
</template>
```

## Props

| Name         | Type                      | Default        | Description                                       |
| ------------ | ------------------------- | -------------- | ------------------------------------------------- |
| `modelValue` | `number`                  | required       | Active page for `v-model`.                        |
| `totalPages` | `number`                  | required       | Total page count.                                 |
| `disabled`   | `boolean`                 | `false`        | Disables all pagination actions.                  |
| `ariaLabel`  | `string`                  | `'Pagination'` | Accessible label for the navigation landmark.     |
| `class`      | `HTMLAttributes['class']` | `undefined`    | Additional class for the root navigation element. |

## Events

| Name                | Payload  | Description                           |
| ------------------- | -------- | ------------------------------------- |
| `update:modelValue` | `number` | Emitted when the active page changes. |
| `change`            | `number` | Emitted after a page change.          |
