# Gwind Design System 🌬️

Gwind adalah sistem desain modern berbasis Vue 3 yang dibangun di atas **Reka UI** dan **Tailwind CSS v4**. Gwind mengikuti model distribusi "source-code distribution" yang dipopulerkan oleh **shadcn/ui**, memberikan Anda kontrol penuh atas komponen yang Anda gunakan.

## 🚀 Cara Penggunaan

Gwind dirancang agar sangat mudah digunakan. Ikuti langkah-langkah berikut:

### 1. Inisialisasi Proyek (Sekali saja)
Langkah ini akan menyiapkan utility `cn` dan file konfigurasi `gwind.json`.
```bash
npx gwind-system-ui init
```

### 2. Tambahkan Komponen
Pilih komponen yang Anda butuhkan (misal: Button).
```bash
npx gwind-system-ui add button
```

### 3. Gunakan di Kode Anda
Komponen akan terpasang di `src/components/ui/`. Anda bisa langsung mengimpor dan menggunakannya:

```vue
<script setup>
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <div class="flex gap-4 p-8">
    <Button variant="default">Klik Saya</Button>
    <Badge variant="secondary">Label Baru</Badge>
  </div>
</template>
```

## 🏗️ Arsitektur Proyek

Gwind dikelola menggunakan struktur monorepo untuk menjaga konsistensi antara komponen, alat bantu CLI, dan dokumentasi:

-   `packages/ui`: Library komponen inti. Di sinilah semua source code komponen berada.
-   `packages/cli`: Alat baris perintah (`gwind-system-ui`) untuk menginisialisasi dan menambahkan komponen ke proyek lain.
-   `registry/`: Database metadata komponen dalam format JSON yang dikonsumsi oleh CLI.
-   `apps/docs`: Situs dokumentasi interaktif yang dibangun dengan VitePress.

## 🛠️ Tech Stack

-   **Framework**: Vue 3 (Composition API)
-   **Styling**: Tailwind CSS v4
-   **Primitives**: Reka UI (Headless components)
-   **Variants**: Class Variance Authority (CVA)
-   **Documentation**: VitePress

## 🎨 Code Style & Standards

1.  **Vue 3 Composition API**: Gunakan `<script setup lang="ts">`.
2.  **Props & Defaults**: Gunakan `withDefaults` dan `HTMLAttributes['class']`.
3.  **Pola `delegatedProps`**: Selalu pisahkan styling dari atribut elemen dasar.
4.  **Tailwind CSS v4**: Gunakan variabel CSS (`var(--gw-*)`) untuk theming.

## 📖 Cara Menambah Komponen Baru
1.  Buat folder komponen di `packages/ui/src/components/ui/`.
2.  Implementasikan komponen menggunakan standar code style di atas.
3.  Ekspor komponen melalui `index.ts` di dalam folder tersebut.
4.  Jalankan `pnpm build:registry` untuk memperbarui database CLI.
5.  Tambahkan dokumentasi di `apps/docs/components/`.

---
*Dibuat dengan ❤️ oleh F.I.Al.Arasy untuk Pegadaian.*
