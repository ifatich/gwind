# File Picker

Komponen `FilePicker` digunakan untuk mengunggah file non-gambar (seperti PDF, CSV, Excel, dll).

## Default

Secara default, FilePicker menolak file dengan tipe `image/*`.

<script setup>
import { ref } from 'vue'

const file1 = ref(null)
const file2 = ref(null)

const handleError = (msg) => {
  console.error(msg)
}
</script>

<ShadowPreview>
  <div class="mt-4">
    <GwFilePicker
      v-model="file1"
      title="Upload Dokumen"
      @error="handleError"
    />
  </div>
</ShadowPreview>

```vue
<script setup>
import { ref } from 'vue'
import { FilePicker } from '@gwind/ui'

const file = ref(null)
</script>

<template>
  <FilePicker
    v-model="file"
    title="Upload Dokumen"
  />
</template>
```

## Dengan Filter Spesifik (Misal: PDF saja)

Gunakan properti `accept` untuk membatasi file yang bisa dipilih, contohnya `accept=".pdf"`.

<ShadowPreview>
  <div class="mt-4">
    <GwFilePicker
      v-model="file2"
      title="Upload PDF"
      accept=".pdf"
      rightAction
      @action-click="() => console.log('Action clicked')"
      @error="handleError"
    />
  </div>
</ShadowPreview>

```vue
<template>
  <FilePicker
    v-model="file"
    title="Upload PDF"
    accept=".pdf"
    rightAction
    @action-click="handleAction"
  />
</template>
```

## Props

| Prop          | Type                  | Default     | Description                                                     |
|---------------|-----------------------|-------------|-----------------------------------------------------------------|
| `modelValue`  | `File \| null`        | `null`      | File yang dipilih (v-model).                                    |
| `title`       | `string`              | `'Title'`   | Label atau judul di atas picker.                                |
| `accept`      | `string`              | `''`        | Spesifikasi file yang diterima, misal `.pdf,.csv`.              |
| `maxSize`     | `number`              | `5242880`   | Ukuran maksimal file dalam bytes (default: 5MB).                |
| `disabled`    | `boolean`             | `false`     | Menonaktifkan input.                                            |
| `error`       | `string`              | `undefined` | Pesan error kustom untuk ditampilkan.                           |
| `rightAction` | `boolean`             | `false`     | Menampilkan tombol aksi tambahan di kanan atas pada state empty.|

## Events

- `@update:modelValue`: (file: File | null)
- `@change`: (file: File | null)
- `@remove`: ()
- `@error`: (message: string)
- `@action-click`: ()
