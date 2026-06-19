<script setup lang="ts">
import { ref } from 'vue'

const rupiahValue = ref<number | null>(1000000)
const emptyValue = ref<number | null>(null)
const errorValue = ref<number | null>(10000)
const disabledValue = ref<number | null>(1000000)
</script>

# Input Rupiah

Functional input for Indonesian Rupiah amounts. It displays thousands separators and emits an integer value.

## Installation

```bash
npx gwind-system-ui add input-rupiah
```

## Preview

<ShadowPreview>
  <div class="grid w-full gap-4 md:grid-cols-2">
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputRupiah id="input-rupiah-preview" v-model="rupiahValue" label="Rupiah" placeholder="Placeholder">
        <template #right-icon><span class="text-omicron leading-6">X</span></template>
      </GwInputRupiah>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="grid gap-2">
        <div class="text-omega font-bold leading-[18px] text-black-600">Emit value</div>
        <code class="block rounded-md bg-black-900 px-3 py-2 text-omega font-semibold leading-[18px] text-white">
          {{ rupiahValue === null ? 'null' : rupiahValue }}
        </code>
      </div>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputRupiah id="input-rupiah-empty-preview" v-model="emptyValue" label="Empty" placeholder="Placeholder" />
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputRupiah id="input-rupiah-error-preview" v-model="errorValue" label="Error" error="This is an error message." />
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputRupiah id="input-rupiah-disabled-preview" v-model="disabledValue" label="Disabled" disabled />
    </div>
  </div>
</ShadowPreview>

---

## Behavior

- `modelValue` and `defaultValue` use `number | null`.
- Display value is formatted with Indonesian thousands separators, for example `1000000` becomes `1.000.000`.
- Keyboard input blocks non-digit characters.
- Paste input is normalized, so `Rp 1.250.000` emits `1250000`.
- Empty value emits `null`.

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { InputRupiah } from '@/components/ui/input-rupiah'

const amount = ref<number | null>(1000000)
</script>

<template>
  <InputRupiah id="input-rupiah" v-model="amount" label="Rupiah" placeholder="Placeholder text" />
</template>
```

---

## States

### Default
```vue
<InputRupiah id="input-rupiah-default" label="Rupiah" placeholder="Placeholder text" />
```

### Filled
```vue
<InputRupiah id="input-rupiah-filled" label="Rupiah" :model-value="1000000" />
```

### Error
```vue
<InputRupiah id="input-rupiah-error" label="Rupiah" :model-value="10000" error="This is an error message." />
```

### Disabled
```vue
<InputRupiah id="input-rupiah-disabled" label="Rupiah" :model-value="1000000" disabled />
```

### Right Icon
```vue
<InputRupiah id="input-rupiah-icon" label="Rupiah" :model-value="1000000">
  <template #right-icon>
    <X class="h-6 w-6" />
  </template>
</InputRupiah>
```

---

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | generated id | Input id and label target. |
| `defaultValue` | `number | null` | `null` | The uncontrolled integer value. |
| `modelValue` | `number | null` | `null` | The controlled integer value. |
| `disabled` | `boolean` | `false` | Disables the field. |
| `placeholder` | `string` | `'Placeholder'` | Placeholder text. |
| `label` | `string` | `undefined` | Field label text. |
| `caption` | `string` | `undefined` | Helper text. |
| `error` | `string` | `undefined` | Error caption text. |
| `class` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes. |
| `inputClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the inner input. |
| `labelClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the label. |
| `captionClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for helper or error text. |
| `prefixClass` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes for the Rupiah prefix segment. |

## Slots

| Name | Description |
| --- | --- |
| `label` | Replaces the label text. |
| `label-icon` | Adds the 18px icon next to the label. |
| `left-icon` | Adds a 24px icon inside the left side of the field. |
| `right-icon` | Adds a 24px icon inside the right side of the field. |
| `action` | Adds the label action inside the right side of the field. |
| `caption` | Replaces helper or error caption content. |

## Emits

| Name | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `number | null` | Emitted with the parsed integer value. |
