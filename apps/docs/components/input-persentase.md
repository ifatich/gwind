<script setup lang="ts">
import { ref } from 'vue'

const persentaseValue = ref<number | null>(50)
const emptyValue = ref<number | null>(null)
const errorValue = ref<number | null>(100)
const disabledValue = ref<number | null>(25)
</script>

# Input Persentase

Functional input for percentage amounts. It displays a percentage suffix and emits a numerical value.

## Installation

```bash
npx gwind-system-ui add input-persentase
```

## Preview

<ShadowPreview>
  <div class="grid w-full gap-4 md:grid-cols-2">
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputPersentase id="input-persentase-preview" v-model="persentaseValue" label="Persentase" placeholder="Placeholder" />
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="grid gap-2">
        <div class="text-omega font-bold leading-[18px] text-black-600">Emit value</div>
        <code class="block rounded-md bg-black-900 px-3 py-2 text-omega font-semibold leading-[18px] text-white">
          {{ persentaseValue === null ? 'null' : persentaseValue }}
        </code>
      </div>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputPersentase id="input-persentase-empty-preview" v-model="emptyValue" label="Empty" placeholder="Placeholder" />
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputPersentase id="input-persentase-error-preview" v-model="errorValue" label="Error" error="This is an error message." />
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputPersentase id="input-persentase-disabled-preview" v-model="disabledValue" label="Disabled" disabled />
    </div>
  </div>
</ShadowPreview>

---

## Behavior

- `modelValue` and `defaultValue` use `number | null`.
- Keyboard input blocks non-digit characters except `.` and `,` for decimals.
- Empty value emits `null`.

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { InputPersentase } from '@/components/ui/input-persentase'

const amount = ref<number | null>(50)
</script>

<template>
  <InputPersentase id="input-persentase" v-model="amount" label="Persentase" placeholder="Placeholder text" />
</template>
```

---

## States

### Default
```vue
<InputPersentase id="input-persentase-default" label="Persentase" placeholder="Placeholder text" />
```

### Filled
```vue
<InputPersentase id="input-persentase-filled" label="Persentase" :model-value="50" />
```

### Error
```vue
<InputPersentase id="input-persentase-error" label="Persentase" :model-value="100" error="This is an error message." />
```

### Disabled
```vue
<InputPersentase id="input-persentase-disabled" label="Persentase" :model-value="25" disabled />
```

### Right Icon
```vue
<InputPersentase id="input-persentase-icon" label="Persentase" :model-value="50">
  <template #right-icon>
    <Search class="h-6 w-6" />
  </template>
</InputPersentase>
```

---

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | generated id | Input id and label target. |
| `defaultValue` | `number \| null` | `null` | The uncontrolled numerical value. |
| `modelValue` | `number \| null` | `null` | The controlled numerical value. |
| `disabled` | `boolean` | `false` | Disables the field. |
| `placeholder` | `string` | `'Placeholder'` | Placeholder text. |
| `label` | `string` | `undefined` | Field label text. |
| `caption` | `string` | `undefined` | Helper text. |
| `error` | `string` | `undefined` | Error caption text. |
| `class` | `string \| HTMLAttributes['class']` | `undefined` | Additional CSS classes. |
| `inputClass` | `string \| HTMLAttributes['class']` | `undefined` | Additional CSS classes for the inner input. |
| `labelClass` | `string \| HTMLAttributes['class']` | `undefined` | Additional CSS classes for the label. |
| `captionClass` | `string \| HTMLAttributes['class']` | `undefined` | Additional CSS classes for helper or error text. |
| `prefixClass` | `string \| HTMLAttributes['class']` | `undefined` | Additional CSS classes for the prefix segment. |
| `suffixClass` | `string \| HTMLAttributes['class']` | `undefined` | Additional CSS classes for the suffix segment. |

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
| `update:modelValue` | `number \| null` | Emitted with the parsed numerical value. |
