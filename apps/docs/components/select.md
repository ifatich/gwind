<script setup>
import { ref } from 'vue'
const framework = ref('')
const country = ref('')
</script>

# Select

Displays a list of options for the user to pick from — triggered by a button.

## Preview

### Basic Select

<div class="gw-preview">
  <div style="max-width: 280px;">
    <GwSelect
      v-model="framework"
      placeholder="Select a framework..."
      :options="[
        { value: 'vue', label: 'Vue.js' },
        { value: 'react', label: 'React' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'solid', label: 'SolidJS' },
      ]"
    />
    <p class="text-xs text-[var(--gw-muted-foreground)] mt-2" v-if="framework">
      Selected: <strong>{{ framework }}</strong>
    </p>
  </div>
</div>

### Grouped Select

<div class="gw-preview">
  <div style="max-width: 280px;">
    <GwSelect
      v-model="country"
      placeholder="Select a country..."
      :groups="[
        {
          label: 'Asia',
          items: [
            { value: 'id', label: 'Indonesia' },
            { value: 'jp', label: 'Japan' },
            { value: 'kr', label: 'South Korea' },
          ],
        },
        {
          label: 'Europe',
          items: [
            { value: 'de', label: 'Germany' },
            { value: 'fr', label: 'France' },
            { value: 'gb', label: 'United Kingdom' },
          ],
        },
      ]"
    />
  </div>
</div>

## Usage

```vue
<script setup>
import { Select } from '@/components/ui'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <Select
    v-model="value"
    placeholder="Choose..."
    :options="[
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2' },
    ]"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | — | Selected value (v-model) |
| `placeholder` | `string` | `'Select an option...'` | Placeholder text |
| `options` | `{ value: string, label: string, disabled?: boolean }[]` | `[]` | Flat list of options |
| `groups` | `{ label: string, items: Option[] }[]` | `[]` | Grouped options |
| `disabled` | `boolean` | `false` | Disable the select |
| `class` | `string` | — | Additional CSS classes |
