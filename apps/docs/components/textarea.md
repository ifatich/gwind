---
title: Textarea
description: Multi-line entry surface for capturing longer user input.
---

<script setup lang="ts">
import { ref } from 'vue'
const demoValue = ref('')
const disabledValue = ref('1.000.000')
const errorValue = ref('10.000')
</script>

# Textarea

Multi-line entry surface for capturing longer user input, with support for labels, captions, and error states.

## Installation

```bash
npx gwind-system-ui add textarea
```

## Preview

<ShadowPreview class="gwind-docs-preview">
  <GwTextareaField
    id="preview-textarea"
    v-model="demoValue"
    label="Title"
    placeholder="Placeholder"
    caption="Assistive text"
  />
</ShadowPreview>

---

## Behavior / Usage

Use the `TextareaField` component for a fully composed text area that includes a label and a caption/error message. For a raw text area without any label, use the primitive `Textarea` component.

```vue
<script setup lang="ts">
import { TextareaField } from '@/components/ui/textarea'
import { ref } from 'vue'

const description = ref('')
</script>

<template>
  <TextareaField
    id="description"
    v-model="description"
    label="Description"
    placeholder="Write a short description..."
    caption="Maximum 500 characters."
  />
</template>
```

---

## States

### Default & Empty
The default state allows the user to input text. The placeholder is visible when empty.

<ShadowPreview class="gwind-docs-preview">
  <GwTextareaField
    id="state-empty"
    label="Title"
    placeholder="Placeholder"
  />
</ShadowPreview>

### Error
When the input is invalid, provide an `error` message string. This will automatically highlight the border in red and display the message below the text area.

<ShadowPreview class="gwind-docs-preview">
  <GwTextareaField
    id="state-error"
    v-model="errorValue"
    label="Title"
    placeholder="Placeholder"
    error="This is an error message."
  />
</ShadowPreview>

### Disabled
When `disabled` is set to true, the text area becomes inactive and greyed out, preventing user interaction.

<ShadowPreview class="gwind-docs-preview">
  <GwTextareaField
    id="state-disabled"
    v-model="disabledValue"
    label="Title"
    placeholder="Placeholder"
    caption="Assistive text"
    disabled
  />
</ShadowPreview>

---

## API Reference

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | `useId()` | The unique identifier for the text area and label. |
| `label` | `string` | `undefined` | The label text displayed above the text area. |
| `caption` | `string` | `undefined` | Assistive text displayed below the text area. |
| `error` | `string` | `undefined` | Error message displayed below the text area. Triggers error styling. |
| `disabled` | `boolean` | `false` | Disables the text area interaction. |
| `defaultValue` | `string \| number` | `undefined` | The default value when initially rendered. |
| `modelValue` | `string \| number` | `undefined` | The bound v-model value. |

### Emits

| Name | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string \| number` | Emitted when the text area value changes. |
