# Theming & Kustomisasi

Gwind dibangun di atas fondasi **Tailwind CSS v4** dengan arsitektur **CSS-first**. Seluruh token warna, tipografi, dan elevasi didefinisikan sebagai variabel CSS native dari package `gwind-v2`, yang kemudian dipetakan ke dalam blok `@theme`.

> [!NOTE]
> Mencari daftar lengkap palet warna, tipografi 12 tingkat, spasi, dan elevasi?
> Silakan kunjungi katalog resmi di [Design Tokens](/guide/tokens). Halaman ini berfokus pada **arsitektur konfigurasi dan cara kustomisasi tema**.

---

## 1. Arsitektur CSS-First

Arsitektur theming Gwind terbagi menjadi dua lapisan:

1. **Layer Variabel CSS (`gwind-v2/base.css`)**:
   Menyimpan nilai mentah palet warna (skala ratusan `100`–`900` dan alias puluhan `10`–`90`), token semantik, serta permukaan elevasi dark mode (`grey-*`).
2. **Layer Pemetaan Tailwind (`gwind-v2/theme.css`)**:
   Mendaftarkan variabel CSS tersebut ke dalam blok `@theme` Tailwind CSS v4 agar dapat digunakan sebagai utility class (misalnya `bg-primary`, `text-foreground`, `border-border`).

```css
/* Konsep internal gwind-v2/theme.css */
@theme {
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* Seluruh palet warna dan token semantik dipetakan di sini */
}
```

---

## 2. Kustomisasi Tema di Aplikasi Consumer

Jika aplikasi Anda memerlukan penyesuaian identitas brand (misalnya mengubah warna aksi primer dari Lime ke Broccoli atau warna korporat lain), Anda tidak perlu memodifikasi kode komponen. Cukup **override variabel CSS** di file CSS utama proyek Anda di dalam `@layer base`.

### Contoh Override Token Semantik

```css
@import "tailwindcss";
@import "gwind-v2/base.css";
@import "gwind-v2/theme.css";

@layer base {
  :root {
    /* Mengubah warna aksi primer dari Lime-500 ke Broccoli-500 */
    --primary: var(--broccoli-500);
    --primary-foreground: #ffffff;

    /* Menyesuaikan border radius default komponen */
    --radius: 0.375rem; /* 6px */
  }

  /* Kustomisasi khusus Dark Mode */
  .dark {
    --primary: var(--broccoli-400);
    --primary-foreground: #000000;
  }
}
```

### Kustomisasi Warna Brand dengan Hex Baru

Jika brand atau produk Anda memiliki warna heksadesimal spesifik di luar palet standar Gwind:

```css
@layer base {
  :root {
    --primary: #00875a; /* Hijau korporat kustom */
    --primary-foreground: #ffffff;
    --ring: rgba(0, 135, 90, 0.35);
  }
}
```

Semua komponen Gwind yang menggunakan role `primary` (seperti `Button variant="primary"`, `Checkbox`, `Switch`, dsb.) akan otomatis menerapkan warna baru tersebut secara konsisten.

---

## 3. Konfigurasi Dark Mode

Gwind mendukung dark mode secara native melalui strategi selector class `.dark` atau media query `prefers-color-scheme`.

### Bagaimana Token Semantik Berpindah (Theme Switching)

Secara default, token semantik Gwind dirancang untuk beradaptasi secara otomatis antara light mode dan dark mode tanpa perubahan markup:

```css
:root {
  --background: #ffffff;
  --foreground: var(--black-800);
  --card: #ffffff;
  --card-foreground: var(--black-800);
  --border: var(--black-200);
  --primary: var(--lime-500);
}

.dark {
  --background: var(--grey-darkest);   /* #242429 - Level 0 Base Canvas */
  --foreground: var(--white);
  --card: var(--grey-darker);          /* #2E2E34 - Level 1 Surface */
  --card-foreground: var(--white);
  --border: var(--grey-lighter);       /* #42424B - Level 3 Border */
  --primary: var(--lime-dark-500);     /* Varian kontras tinggi khusus dark mode */
}
```

### Mengaktifkan Dark Mode di Proyek

Gwind mendeteksi class `.dark` pada elemen root `<html>`:

```html
<!-- Light Mode -->
<html lang="id">
...
</html>

<!-- Dark Mode Aktif -->
<html lang="id" class="dark">
...
</html>
```

Jika aplikasi Anda menggunakan toggle interaktif dengan deteksi preferensi sistem otomatis, gunakan composable `useDark` dari `@vueuse/core` (dependency resmi Gwind):

```vue
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    type="button"
    class="px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer"
    @click="toggleDark()"
  >
    Mode: {{ isDark ? 'Gelap 🌙' : 'Terang ☀️' }}
  </button>
</template>
```

---

## 4. Best Practices Penerapan Theming

1. **Utamakan Token Semantik**: Selalu gunakan kelas seperti `bg-background`, `bg-card`, `text-foreground`, `border-border`, dan `bg-primary` pada layout dan komponen aplikasi. Hindari langsung menulis kelas primitif seperti `bg-[#ffffff]` atau `bg-black-800` pada kontainer yang harus berganti tema di dark mode.
2. **Manfaatkan Dual-Scale**: Saat membutuhkan warna palet spesifik, Anda bebas memilih skala ratusan (`bg-lime-500`) atau skala puluhan (`bg-lime-50`). Keduanya merujuk ke variabel CSS yang identik.
3. **Elevasi Dark Mode**: Di dark mode, hindari menggunakan drop shadow pekat sebagai pemisah utama. Manfaatkan 5 tingkat elevasi tonal `grey-*` (`grey-darkest` hingga `grey-light`) untuk membedakan kedalaman permukaan antarmuka.

---

> [!TIP]
> Untuk melihat daftar lengkap seluruh variabel CSS, nilai heksadesimal, perbandingan skala alias, dan live preview interaktif, buka [Katalog Design Tokens](/guide/tokens).
