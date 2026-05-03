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

### File Input

<div class="gw-preview">
  <div class="gw-preview-col" style="max-width: 360px;">
    <GwInput type="file" />
  </div>
</div>

### With Label

<div class="gw-preview">
  <div class="gw-preview-col" style="max-width: 360px;">
    <div>
      <label class="text-sm font-medium mb-1.5 block">Email</label>
      <GwInput placeholder="you@example.com" v-model="email" />
      <p class="text-xs text-[var(--gw-muted-foreground)] mt-1.5">We'll never share your email.</p>
    </div>
  </div>
</div>

## Installation

### 1. CLI Installation

```bash
npx @ifatich/gwind-ui add input
```

### 2. Manual Installation

Copy the following code into your `src/components/ui/input/Input.vue` file:

```vue
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed, useAttrs } from 'vue'

interface Props {
  modelValue?: string | number
  defaultValue?: string | number
  class?: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const attrs = useAttrs()

const modelValue = computed({
  get: () => props.modelValue ?? props.defaultValue ?? '',
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <input
    v-model="modelValue"
    v-bind="attrs"
    :type="type"
    :class="
      cn(
        'flex h-9 w-full rounded-md border border-[var(--gw-input)] bg-transparent px-3 py-1 text-sm shadow-xs transition-colors duration-200',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--gw-foreground)]',
        'placeholder:text-[var(--gw-muted-foreground)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gw-ring)] focus-visible:ring-offset-1',
        'disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  />
</template>
```

## Usage

```vue
<script setup>
import { Input } from '@/components/ui'
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <Input v-model="email" placeholder="Email address" />
  <Input type="password" placeholder="Password" />
  <Input disabled placeholder="Disabled" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| number` | — | Bound value (v-model) |
| `defaultValue` | `string \| number` | — | Initial value |
| `type` | `string` | `'text'` | HTML input type |
| `class` | `string` | — | Additional CSS classes |
