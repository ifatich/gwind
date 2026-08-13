# Add Amount

`AddAmount` (atau Quantity Counter) adalah komponen kontrol input untuk menambah atau mengurangi jumlah angka kuantitas secara presisi sesuai dengan token dan spesifikasi desain Figma (`controls/add-amount/counter`).

## Installation

```bash
npx gwind-system-ui add add-amount
```

## Preview

<ShadowPreview>
  <div class="flex flex-col gap-4 max-w-sm">
    <div class="rounded-md border border-black-200 bg-white p-4 flex items-center justify-between">
      <span class="text-sigma font-semibold text-black-700">Default (Value = 1):</span>
      <GwAddAmount :default-value="1" class="w-32" />
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4 flex items-center justify-between">
      <span class="text-sigma font-semibold text-black-700">Active State (Value = 2):</span>
      <GwAddAmount :default-value="2" class="w-32" />
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4 flex items-center justify-between">
      <span class="text-sigma font-semibold text-black-700">Disabled:</span>
      <GwAddAmount :default-value="1" disabled class="w-32" />
    </div>
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { AddAmount } from '@gwind/ui'

const quantity = ref(1)
</script>

<template>
  <AddAmount v-model="quantity" :min="1" :max="10" class="w-32" />
</template>
```

---

## API Reference

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `number` | `1` | Nilai kuantitas saat ini (v-model). |
| `defaultValue` | `number` | `1` | Nilai default awal jika modelValue tidak diberikan. |
| `min` | `number` | `1` | Nilai batas minimum kuantitas. |
| `max` | `number` | `Infinity` | Nilai batas maksimum kuantitas. |
| `step` | `number` | `1` | Perubahan nilai tiap tombol ditekan. |
| `disabled` | `boolean` | `false` | Menonaktifkan seluruh interaksi kontrol. |
| `readonly` | `boolean` | `false` | Mencegah perubahan nilai tetapi mempertahankan tampilan aktif. |
| `class` | `string` | `undefined` | Custom class override. |

### Events

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `value: number` | Dipicu ketika nilai kuantitas berubah. |
| `change` | `value: number` | Dipicu setelah user menambah, mengurangi, atau mengedit angka. |
