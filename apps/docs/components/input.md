# Input

Input is the base field family for text entry, grouped input shells, file upload, and functional input variants.

## Installation

```bash
npx gwind-system-ui add input
```

## Preview

<ShadowPreview>
  <div class="grid w-full gap-4 md:grid-cols-2">
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-overview-field" label="Input Field" type="text" placeholder="Placeholder">
        <template #label-icon><span class="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black-500 text-[11px] text-black-500">?</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-overview-icon" label="Input Icon" type="text" placeholder="Placeholder">
        <template #left-icon><span class="text-omicron leading-6">@</span></template>
        <template #right-icon><span class="text-omicron leading-6">O</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-overview-affix" prefix="Rupiah" type="text" placeholder="Placeholder">
        <template #right-icon><span class="text-omicron leading-6">X</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputRupiah id="input-overview-rupiah" label="Input Rupiah" :model-value="1000000" />
    </div>
  </div>
</ShadowPreview>

---

## Variants

| Variant | Route | Use case |
| --- | --- | --- |
| Input Field | [/components/input-field](/components/input-field) | Standard labeled text field with states and sizes. |
| Input Icons | [/components/input-icons](/components/input-icons) | Field with left icon, right icon, and label action. |
| Input Affix | [/components/input-affix](/components/input-affix) | Prefix and suffix input shell. |
| Input File | [/components/input-file](/components/input-file) | Native file input with Gwind styling. |
| Input Rupiah | [/components/input-rupiah](/components/input-rupiah) | Functional currency input with integer emit and thousands separator. |

## Component Strategy

- Keep variants inside `InputField` when they are only visual composition, such as icon, action, prefix, or suffix.
- Create a dedicated component when the variant has its own data contract or behavior, such as `InputRupiah` emitting `number | null`.
- Functional variants should expose the same field ergonomics as `InputField`: label, caption, error, disabled state, slots, and class escape hatches.

## Base Usage

```vue
<script setup lang="ts">
import { Input, InputField } from '@/components/ui/input'
</script>

<template>
  <InputField label="Title" type="email" placeholder="Placeholder text" />
</template>
```
