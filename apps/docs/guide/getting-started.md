# Getting Started

Gwind adalah Vue 3 Design System yang dibangun di atas **Reka UI** dan **Tailwind CSS v4**, mengikuti model distribusi source-code **shadcn/ui**.

## Prasyarat

- **Node.js** ≥ 18
- **Vue 3** ≥ 3.5
- **Tailwind CSS v4** terinstal di proyek Anda
- **pnpm** (direkomendasikan)

## Instalasi

### 1. Instal Design Tokens

Instal dependency dasar yang digunakan oleh source component Gwind:

```bash
pnpm add @fontsource/nunito-sans clsx tailwind-merge gwind-v2
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

### 3. Inisialisasi Gwind

Gunakan package CLI `gwind-system-ui`. Perintah `init` membuat `gwind.json`, utility `cn` beserta import font, dan direktori komponen sesuai jawaban prompt. Perintah ini dapat menimpa file konfigurasi dan utility pada path yang dipilih, jadi periksa perubahan sebelum menjalankannya ulang.

```bash
npx gwind-system-ui init
```

### 4. Tambahkan Komponen

Tambahkan source component melalui CLI:

```bash
# Tambahkan komponen button
npx gwind-system-ui add button
```

CLI menampilkan dependency tambahan yang dibutuhkan oleh komponen. Instal dependency yang belum ada menggunakan package manager project Anda.

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
