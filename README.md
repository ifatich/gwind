# Gwind Design System 🌬️

Gwind adalah sistem desain modern berbasis Vue 3 yang dibangun di atas **Reka UI** dan **Tailwind CSS v4**. Gwind mengikuti model distribusi "source-code distribution" yang dipopulerkan oleh **shadcn/ui**, memberikan Anda kontrol penuh atas komponen yang Anda gunakan.

## 🏗️ Arsitektur Proyek

Gwind dikelola menggunakan struktur monorepo untuk menjaga konsistensi antara komponen, alat bantu CLI, dan dokumentasi:

-   `packages/ui`: Library komponen inti. Di sinilah semua source code komponen berada.
-   `packages/cli`: Alat baris perintah (`gwind-ui`) untuk menginisialisasi dan menambahkan komponen ke proyek lain.
-   `registry/`: Database metadata komponen dalam format JSON yang dikonsumsi oleh CLI.
-   `apps/docs`: Situs dokumentasi interaktif yang dibangun dengan VitePress.

## 🛠️ Tech Stack

-   **Framework**: Vue 3 (Composition API)
-   **Styling**: Tailwind CSS v4
-   **Primitives**: Reka UI (Headless components)
-   **Variants**: Class Variance Authority (CVA)
-   **Documentation**: VitePress

## 🎨 Code Style & Standards

Untuk menjaga kualitas dan konsistensi, setiap komponen dalam Gwind harus mengikuti standar berikut:

### 1. Vue 3 Composition API
Gunakan `<script setup lang="ts">` untuk semua komponen. Ini memastikan performa terbaik dan integrasi TypeScript yang mulus.

### 2. Definisi Props & Defaults
-   Gunakan interface `Props` yang diekstensi dari `PrimitiveProps` (Reka UI).
-   Gunakan `withDefaults` untuk nilai default yang konsisten.
-   Gunakan `HTMLAttributes['class']` untuk mengetik properti `class`.

```ts
interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
})
```

### 3. Pola `delegatedProps`
Selalu gunakan pola `delegatedProps` untuk memisahkan properti styling (class, variant) dari atribut HTML/Primitive yang harus diteruskan ke elemen dasar. Ini mencegah "extraneous attributes warning".

```ts
const delegatedProps = computed(() => {
  const { class: _, variant: __, ...delegated } = props
  return delegated
})
```

### 4. Tailwind CSS v4 & Theming
-   Hindari hardcoding warna. Gunakan variabel CSS yang didefinisikan di `@theme` (misal: `var(--gw-primary)`).
-   Gunakan utility `cn` (Tailwind Merge + Clsx) untuk penggabungan class yang aman.

### 5. Case-Insensitive Key Comparisons
Sesuai aturan global, selalu gunakan `.toLowerCase()` saat melakukan perbandingan kunci atau tipe untuk memastikan kekokohan logika.

## 🚀 Distribusi via CLI

Gwind didistribusikan melalui alat CLI kustom untuk memberikan pengalaman "copy-paste" yang otomatis.

### Perintah Utama:
-   `gwind-ui init`: Menyiapkan proyek baru (membuat `gwind.json` dan `utils.ts`).
-   `gwind-ui add <component>`: Mengunduh komponen dari registry dan menyesuaikan path import secara otomatis.

## 📖 Cara Menambah Komponen Baru
1.  Buat folder komponen di `packages/ui/src/components/ui/`.
2.  Implementasikan komponen menggunakan standar code style di atas.
3.  Ekspor komponen melalui `index.ts` di dalam folder tersebut.
4.  Jalankan `pnpm build:registry` untuk memperbarui database CLI.
5.  Tambahkan dokumentasi di `apps/docs/components/`.

---
*Dibuat dengan ❤️ oleh Antigravity untuk Pegadaian Project.*
