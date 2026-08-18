---
title: Textarea
description: Multi-line entry surface for capturing longer user input with character counter support.
---

<script setup lang="ts">
import { ref } from 'vue'
const demoValue = ref('')
const counterValue = ref('Catatan transaksi nasabah...')
const disabledValue = ref('1.000.000')
const errorValue = ref('10.000')
</script>

# Textarea

Multi-line entry surface for capturing longer user input, with support for labels, captions, error states, and flexible character counters.

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

Use the `TextareaField` component for a fully composed text area that includes a label, counter, and a caption/error message. For a raw text area without any label, use the primitive `Textarea` component.

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
    :maxlength="200"
    caption="Maximum 200 characters."
  />
</template>
```

---

## States & Variants

### With Character Counter (Auto-enabled with `:maxlength`)
Passing `:maxlength` automatically activates the character counter in the bottom-right corner. You can also explicitly control it with `show-count` or disable the visual counter using `:show-count="false"`.

<ShadowPreview class="gwind-docs-preview">
  <GwTextareaField
    id="state-counter"
    v-model="counterValue"
    label="Keterangan Transaksi"
    placeholder="Tuliskan keterangan..."
    :maxlength="100"
    caption="Maksimal 100 karakter."
  />
</ShadowPreview>

```vue
<!-- Counter otomatis aktif ketika maxlength didefinisikan -->
<TextareaField
  v-model="notes"
  label="Keterangan"
  placeholder="Tuliskan keterangan..."
  :maxlength="100"
/>

<!-- Atau sembunyikan counter visual jika hanya butuh limit karakter bawaan -->
<TextareaField
  v-model="notes"
  :maxlength="100"
  :show-count="false"
/>
```

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

### Props (`Textarea` & `TextareaField`)

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | `useId()` | Unique identifier for the textarea and its label. |
| `label` | `string` | `undefined` | The label text displayed above the textarea (*TextareaField*). |
| `caption` | `string` | `undefined` | Assistive text displayed below the textarea (*TextareaField*). |
| `error` | `string` | `undefined` | Error message displayed below the textarea. Triggers red border. |
| `disabled` | `boolean` | `false` | Disables textarea interaction and applies disabled styles. |
| `maxlength` / `maxLength` | `number \| string` | `undefined` | Maximum allowed character length and counter denominator. |
| `showCount` / `counter` | `boolean` | `false` | When true, renders character counter at the bottom-right corner. |
| `counterClass` | `string \| HTMLAttributes['class']` | `undefined` | Custom styling classes for the counter badge. |
| `defaultValue` | `string \| number` | `undefined` | Initial value when uncontrolled. |
| `modelValue` | `string \| number` | `undefined` | Bound `v-model` reactive value. |

### Slots

| Name | Scoped Props | Description |
| :--- | :--- | :--- |
| `label` | — | Custom label content (*TextareaField*). |
| `label-icon` | — | Optional icon slot next to label (*TextareaField*). |
| `caption` | — | Custom caption or error container content (*TextareaField*). |
| `counter` | `{ count: number, max?: number }` | Custom bottom-right counter element. |

### Emits

| Name | Payload | Description |
| :--- | :--- | :--- |
| `update:modelValue` | `string \| number` | Emitted when textarea content changes. |
