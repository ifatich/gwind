<script setup>
import { ref } from 'vue'
const email = ref('')
</script>

# Input

Displays a form input field.

## Preview

### Default

<div class="gw-preview">
  <div class="gw-preview-col" style="max-width: 360px;">
    <GwInput placeholder="Email address" v-model="email" />
    <GwInput type="password" placeholder="Password" />
    <GwInput placeholder="Disabled" disabled />
  </div>
</div>

## Installation

### 1. CLI Installation

```bash
npx gwind-system-ui add input
```

### 2. Manual Installation

Copy the following code into your `src/components/ui/input/Input.vue` file:

```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  type?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    v-model="modelValue"
    :type="type"
    :class="
      cn(
        'flex w-full rounded-md border border-input bg-background px-3 py-[11px] text-omicron ring-offset-background file:border-0 file:bg-transparent file:text-omicron file:font-default file-placeholder:text-black-50 placeholder:text-black-50 focus-visible:outline-none focus-visible:border-lime-50 focus-visible:ring-ring focus-visible:ring-offset-2 hover:border-lime-500 transition-all duration-100 focus:border-lime-500',
        'disabled:cursor-not-allowed disabled:bg-black-200 disabled:text-black-600 disabled:focus:border-transparent disabled:hover:border-transparent',
        props.class,
      )
    "
  />
</template>
```

## Usage

```vue
<script setup>
import { Input } from '@/components/ui/input'
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <Input v-model="email" placeholder="Email address" />
  <Input type="password" placeholder="Password" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| number` | — | Bound value (v-model) |
| `defaultValue` | `string \| number` | — | Initial value |
| `type` | `string` | `'text'` | HTML input type |
| `class` | `string` | — | Additional CSS classes |
