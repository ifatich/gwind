# Input Affix

InputField composition variants with prefix and suffix segments.

## Installation

```bash
npx gwind-system-ui add input
```

## Preview

<ShadowPreview>
  <div class="grid w-full gap-4 md:grid-cols-2">
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-affix-prefix-preview" prefix="Rupiah" type="text" placeholder="Placeholder">
        <template #right-icon><span class="text-omicron leading-6">X</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-affix-suffix-preview" suffix="%" type="text" placeholder="Placeholder" />
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-affix-prefix-filled-preview" prefix="Rupiah" type="text" value="1000000" />
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-affix-suffix-disabled-preview" suffix="%" type="text" value="12" disabled />
    </div>
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { InputField } from '@/components/ui/input'
</script>

<template>
  <InputField id="input-prefix" prefix="Rupiah" placeholder="Placeholder text" />
  <InputField id="input-suffix" suffix="%" placeholder="Placeholder text" />
</template>
```

---

## Variants

### Prefix
```vue
<InputField id="input-prefix" prefix="Rupiah" placeholder="Placeholder text" />
```

### Suffix
```vue
<InputField id="input-suffix" suffix="%" placeholder="Placeholder text" />
```

### Prefix Slot
```vue
<InputField id="input-prefix-slot" placeholder="Placeholder text">
  <template #prefix>Rp</template>
</InputField>
```

### Suffix Slot
```vue
<InputField id="input-suffix-slot" placeholder="Placeholder text">
  <template #suffix>%</template>
</InputField>
```

---

## Functional Variant

Use `InputAffix` composition when the prefix or suffix is only visual. Create a dedicated component when the affix defines behavior or value shape.

For Rupiah currency input, use [Input Rupiah](/components/input-rupiah) because it emits `number | null` and formats thousands separators.

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `prefix` | `string` | `undefined` | Left nominal segment text. |
| `suffix` | `string` | `undefined` | Right nominal segment text. |
| `prefixClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the prefix segment. |
| `suffixClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the suffix segment. |

## Slots

| Name | Description |
| --- | --- |
| `prefix` | Replaces the prefix segment content. |
| `suffix` | Replaces the suffix segment content. |
