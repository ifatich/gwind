# Getting Started

Gwind adalah Vue 3 Design System yang dibangun di atas **Reka UI** dan **Tailwind CSS v4**, mengikuti model distribusi source-code **shadcn/ui**.

## Prasyarat

- **Node.js** ≥ 18
- **Vue 3** ≥ 3.5
- **Tailwind CSS v4** terinstal di proyek Anda
- **pnpm** (direkomendasikan)

## Instalasi

### 1. Instal Design Tokens
Gwind menggunakan paket `gwind-v2` untuk mengelola variabel CSS dan tema Tailwind v4.

```bash
pnpm add gwind-v2
```

### 2. Konfigurasi CSS
Impor base style dan tema Gwind di file CSS utama Anda (misal: `src/assets/main.css`). Pastikan Anda menggunakan Tailwind v4.

```css
@import "tailwindcss";

/* Impor Gwind tokens & theme */
@import "gwind-v2/base.css";
@import "gwind-v2/theme.css";

/* Scanning direktori komponen Anda */
@source "./components/ui";
```

### 3. Tambahkan Utility `cn`
Gwind menggunakan utility `cn` untuk penggabungan class yang cerdas. Buat file `src/lib/utils.ts`:

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 4. Tambahkan Komponen
Anda bisa menggunakan CLI untuk menambahkan komponen secara otomatis:

```bash
# Tambahkan komponen button
npx gwind-system-ui add button
```

Atau salin kode sumber secara manual dari halaman dokumentasi masing-masing komponen ke direktori `src/components/ui/`.

## Struktur Proyek

```
src/
├── components/
│   └── ui/              # Komponen Gwind berada di sini
│       ├── button/
│       ├── input/
│       └── ...
├── lib/
│   └── utils.ts         # Utility cn
└── assets/
    └── main.css         # Entry point CSS dengan Tailwind v4
```
