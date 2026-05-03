# Development Guide — Gwind UI

Dokumen ini menjelaskan alur kerja untuk mengembangkan dan memelihara komponen di Gwind Design System.

## 🛠️ Menyiapkan Lingkungan Lokal

1.  Clone repository.
2.  Install dependensi:
    ```bash
    pnpm install
    ```
3.  Jalankan dokumentasi secara lokal:
    ```bash
    pnpm dev:docs
    ```

## 🧩 Alur Penambahan Komponen Baru

Ikuti langkah-langkah ini untuk memastikan komponen baru terintegrasi dengan CLI dan Dokumentasi:

### 1. Buat Struktur Folder
Misal untuk komponen `Toast`:
```
packages/ui/src/components/ui/toast/
├── Toast.vue
└── index.ts
```

### 2. Standar Kode (Wajib)
Pastikan komponen menggunakan pola **`delegatedProps`** agar integrasi dengan Reka UI berjalan mulus:

```vue
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '../../../lib/utils'

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <Primitive v-bind="delegatedProps" :class="cn('your-styles', props.class)">
    <slot />
  </Primitive>
</template>
```

### 3. Update Registry
Setelah komponen selesai, Anda **harus** membangun ulang registry agar CLI bisa menemukan komponen tersebut:
```bash
pnpm build:registry
```
Script ini akan:
-   Membaca semua komponen di `packages/ui`.
-   Mengekstrak source code ke dalam file JSON di folder `registry/`.
-   Mendeteksi dependensi (seperti `reka-ui`) secara otomatis.

### 4. Tambahkan Dokumentasi
1.  Buat file `apps/docs/components/toast.md`.
2.  Gunakan komponen `<GwToast />` untuk preview.
3.  Sertakan blok kode **Installation** (CLI & Manual).

## 🚀 Memperbarui CLI
Jika Anda melakukan perubahan pada logika CLI di `packages/cli`, Anda bisa mengujinya secara langsung tanpa mem-publish ke NPM menggunakan `tsx`:
```bash
npx tsx packages/cli/src/index.ts add toast
```

## 📝 Commit Convention
Gunakan standar [Conventional Commits](https://www.conventionalcommits.org/):
-   `feat(ui): add toast component`
-   `fix(cli): handle relative paths correctly`
-   `docs: update installation guide`
