# Input

Displays a form input field or a component that looks like an input field.

## Preview

<ShadowPreview>
  <div class="grid w-full gap-4 md:grid-cols-2">
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-short-preview" label="Title" type="text" placeholder="Placeholder">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-long-preview" field-size="long" label="Title" type="text" placeholder="Placeholder">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-placeholder-preview" label="Title" type="text" placeholder="Placeholder">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-hover-preview" label="Title" input-class="border-lime-600" type="text" placeholder="Hover">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-filled-preview" label="Title" type="text" value="Text input">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-disabled-preview" label="Title" disabled type="text" value="Disabled input">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-600 text-[11px] text-black-600">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-error-preview" label="Title" error="This is an error message." type="text" placeholder="Placeholder">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-icon-left-preview" label="Title" type="text" placeholder="Placeholder">
        <template #left-icon><span class="text-omicron leading-6">@</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-icon-right-preview" label="Title" type="text" placeholder="Placeholder">
        <template #right-icon><span class="text-omicron leading-6">O</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-icon-both-preview" label="Title" type="text" placeholder="Placeholder">
        <template #left-icon><span class="text-omicron leading-6">@</span></template>
        <template #right-icon><span class="text-omicron leading-6">X</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-action-preview" label="Title" type="text" placeholder="Placeholder">
        <template #action><button type="button">Action</button></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-icon-action-preview" label="Title" type="text" placeholder="Placeholder">
        <template #left-icon><span class="text-omicron leading-6">@</span></template>
        <template #action><button type="button">Action</button></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-prefix-preview" prefix="Rupiah" type="text" placeholder="Placeholder">
        <template #right-icon><span class="text-omicron leading-6">X</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-suffix-preview" suffix="%" type="text" placeholder="Placeholder" />
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4 md:col-span-2">
      <div class="grid w-full items-center gap-1">
        <GwLabel for="file-preview">File Upload</GwLabel>
        <GwInput id="file-preview" type="file" />
      </div>
    </div>
  </div>
</ShadowPreview>

---

## States

- Default input uses `#eeeeef` border, white background, and `black-500` placeholder.
- Hover uses `lime-600`, while focus uses `lime-500` border without an additional focus ring.
- Disabled uses `#eeeeef` background and muted `black-600` text.
- Error uses red caption text with `omega` size, while the field border follows the active field state.
- File input keeps the same 48px input shell.
- `fieldSize="long"` renders the 80px long field from the Figma size variant.
- `prefix` and `suffix` render the nominal input variants with separated left or right segments.

## Usage

```vue
<script setup lang="ts">
import { Input, InputField } from '@/components/ui/input'
</script>

<template>
  <InputField label="Title" type="email" placeholder="Placeholder text" />
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

---

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

## Variants

### Text Only
```vue
<InputField id="input-text-only" label="Title" placeholder="Placeholder text" />
```

### Icon Left
```vue
<InputField id="input-icon-left" label="Title" placeholder="Placeholder text">
  <template #left-icon>
    <Mail class="h-6 w-6" />
  </template>
</InputField>
```

### Icon Right
```vue
<InputField id="input-icon-right" label="Title" placeholder="Placeholder text">
  <template #right-icon>
    <Search class="h-6 w-6" />
  </template>
</InputField>
```

### Icon Left Right
```vue
<InputField id="input-icon-both" label="Title" placeholder="Placeholder text">
  <template #left-icon><Mail class="h-6 w-6" /></template>
  <template #right-icon><X class="h-6 w-6" /></template>
</InputField>
```

### Text And Label Action
```vue
<InputField id="input-action" label="Title" placeholder="Placeholder text">
  <template #action>
    <button type="button">Action</button>
  </template>
</InputField>
```

### Text Icon And Label Action
```vue
<InputField id="input-icon-action" label="Title" placeholder="Placeholder text">
  <template #left-icon><Mail class="h-6 w-6" /></template>
  <template #action><button type="button">Action</button></template>
</InputField>
```

### Prefix
```vue
<InputField id="input-prefix" prefix="Rupiah" placeholder="Placeholder text" />
```

### Suffix
```vue
<InputField id="input-suffix" suffix="%" placeholder="Placeholder text" />
```

---

## Examples

### File Input
```vue
<div class="grid w-full max-w-sm items-center gap-1.5">
  <Label for="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>
```

---

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | generated id | Input id and label target. |
| `type` | `string` | `undefined` | Native input type for short/grouped input. |
| `defaultValue` | `string | number` | `undefined` | The default value. |
| `modelValue` | `string | number` | `undefined` | The value of the input. |
| `disabled` | `boolean` | `false` | Disables the field. |
| `class` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes. |
| `label` | `string` | `undefined` | InputField label text. |
| `caption` | `string` | `undefined` | InputField helper text. |
| `error` | `string` | `undefined` | InputField error caption text. |
| `fieldSize` | `'short' | 'long'` | `'short'` | InputField visual size. |
| `prefix` | `string` | `undefined` | Left nominal segment text. |
| `suffix` | `string` | `undefined` | Right nominal segment text. |
| `inputClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the inner input. |
| `labelClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the label. |
| `captionClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for helper or error text. |
| `prefixClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the prefix segment. |
| `suffixClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the suffix segment. |

## Slots

| Name | Description |
| --- | --- |
| `label` | Replaces the label text. |
| `label-icon` | Adds the 18px icon next to the label. |
| `left-icon` | Adds a 24px icon inside the left side of the field. |
| `right-icon` | Adds a 24px icon inside the right side of the field. |
| `action` | Adds the lime label action inside the right side of the field. |
| `caption` | Replaces helper or error caption content. |
| `prefix` | Replaces the prefix segment content. |
| `suffix` | Replaces the suffix segment content. |

## Emits

| Name | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string | number` | Emitted when the input value changes. |
