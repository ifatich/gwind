# Input Field

Standard labeled input field with size and state variants.

## Installation

```bash
npx gwind-system-ui add input
```

## Preview

<ShadowPreview>
  <div class="grid w-full gap-4 md:grid-cols-2">
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-field-short-preview" label="Title" type="text" placeholder="Placeholder">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-field-long-preview" field-size="long" label="Title" type="text" placeholder="Placeholder">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-field-filled-preview" label="Title" type="text" value="Text input">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-field-disabled-preview" label="Title" disabled type="text" value="Disabled input">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-600 text-[11px] text-black-600">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-field-error-preview" label="Title" error="This is an error message." type="text" placeholder="Placeholder">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-field-helper-preview" label="Title" caption="This is a helper text." type="text" value="Text input">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
  </div>
</ShadowPreview>

---

## States

- Default input uses `#eeeeef` border, white background, and `black-500` placeholder.
- Hover uses `lime-600`, while focus uses `lime-500` border without an additional focus ring.
- Disabled uses `#eeeeef` background and muted `black-600` text.
- Error uses red caption text with `omega` size.
- `fieldSize="long"` renders the 80px textarea-style field.

## Usage

```vue
<script setup lang="ts">
import { InputField } from '@/components/ui/input'
</script>

<template>
  <InputField id="input-field" label="Title" placeholder="Placeholder text" />
</template>
```

---

## Sizes

### Short
```vue
<InputField id="input-short" label="Title" placeholder="Placeholder text" />
```

### Long
```vue
<InputField id="input-long" field-size="long" label="Title" placeholder="Placeholder text" />
```

## States

### Placeholder
```vue
<InputField id="input-placeholder" label="Title" placeholder="Placeholder text" />
```

### Hover
```vue
<InputField id="input-hover" label="Title" input-class="border-lime-600" placeholder="Hover" />
```

### Focused
```vue
<InputField id="input-focused" label="Title" input-class="border-lime-500" placeholder="Placeholder text" />
```

### Filled
```vue
<InputField id="input-filled" label="Title" value="Text input" />
```

### Disabled
```vue
<InputField id="input-disabled" label="Title" disabled value="Disabled input" />
```

### Error
```vue
<InputField id="input-error" label="Title" error="This is an error message." placeholder="Placeholder text" />
```

### Helper Text
```vue
<InputField id="input-helper" label="Title" caption="This is a helper text." value="Text input" />
```

---

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | generated id | Input id and label target. |
| `type` | `string` | `undefined` | Native input type. |
| `defaultValue` | `string | number` | `undefined` | The default value. |
| `modelValue` | `string | number` | `undefined` | The value of the input. |
| `disabled` | `boolean` | `false` | Disables the field. |
| `class` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes. |
| `label` | `string` | `undefined` | InputField label text. |
| `caption` | `string` | `undefined` | InputField helper text. |
| `error` | `string` | `undefined` | InputField error caption text. |
| `fieldSize` | `'short' | 'long'` | `'short'` | InputField visual size. |
| `inputClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the inner input. |
| `labelClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the label. |
| `captionClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for helper or error text. |

## Emits

| Name | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string | number` | Emitted when the input value changes. |
