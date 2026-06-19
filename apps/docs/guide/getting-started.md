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

### 2. Inisialisasi Gwind

Jalankan CLI dari root aplikasi. Perintah `init` membuat `gwind.json`, utility `cn`, direktori komponen, dan `gwind.css` di sebelah CSS global yang Anda pilih.

```bash
npx gwind-system-ui init
```

CLI otomatis menambahkan import berikut ke CSS global:

```css
@import "tailwindcss";
@import "./gwind.css";
```

File `gwind.css` berisi import `gwind-v2`, motion utilities, reduced-motion rules, dan `@source` yang mengarah ke direktori komponen. Anda tidak perlu mengimpor `packages/ui/dist/gwind-ui.css`.

`init` tidak menimpa utility yang sudah ada, tetapi memperbarui file fondasi `gwind.css` agar sesuai dengan versi registry CLI. Tetap periksa diff ketika menjalankannya ulang.

### 3. Tambahkan Komponen

Tambahkan source component melalui CLI:

```bash
# Tambahkan komponen button
npx gwind-system-ui add button
```

CLI menampilkan dependency tambahan yang dibutuhkan oleh komponen. Instal dependency yang belum ada menggunakan package manager project Anda.

Komponen dan stylesheet diambil dari snapshot registry yang dibundel bersama versi CLI, sehingga hasil instalasi tidak berubah hanya karena branch repository diperbarui.

File komponen yang sudah ada tidak ditimpa secara default. Gunakan `--overwrite` hanya ketika Anda memang ingin memperbarui source component dari registry:

```bash
npx gwind-system-ui add button --overwrite
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
    ├── main.css         # Entry point CSS; mengimpor ./gwind.css
    └── gwind.css        # Token, theme, motion, dan component source scan
```
