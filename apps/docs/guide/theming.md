# Theming

Gwind menggunakan sistem konfigurasi CSS-first dari **Tailwind CSS v4**. Seluruh design token didefinisikan sebagai variabel CSS murni, yang kemudian didaftarkan ke dalam blok `@theme`.

## Palet Warna Brand Gwind

Gwind hadir dengan palet warna resmi yang sudah dikonfigurasi di dalam `gwind-v2` (`^0.3.1`). Anda bisa menggunakan warna ini langsung sebagai utility class:

| Nama Warna | Contoh Class (Hundreds / Tens) | Kegunaan Utama |
|------------|--------------------------------|----------------|
| **Lime** | `bg-lime-500` / `bg-lime-50` | Warna identitas utama (Primary) |
| **Lime Dark** | `bg-lime-dark-500` / `bg-lime-dark-50` | Varian kontras tinggi untuk dark mode |
| **Broccoli** | `text-broccoli-600` / `text-broccoli-60` | Warna sekunder / penekanan |
| **Orange** | `border-orange-400` / `border-orange-40` | Warna aksen / warning |
| **Red** | `bg-red-500` / `bg-red-50` | Destructive error standar (light mode) |
| **Red Dark** | `bg-red-dark-500` / `bg-red-dark-50` | Destructive dark mode desaturasi |
| **Black** | `bg-black-800` / `bg-black-80` | Warna teks dan UI neutral gelap |

### Dual-Scale Alias System

Mulai versi `0.3.0`, `gwind-v2` mendukung sistem alias ganda:
- **Hundreds Scale (`100`–`900`)**: Format standar modern Tailwind CSS (contoh: `bg-lime-500`, `text-broccoli-600`).
- **Tens Scale (`10`–`90`)**: Format alias kompatibel (contoh: `bg-lime-50`, `text-broccoli-60`).

Kedua format mereferensikan CSS variable yang sama dan dapat digunakan secara bergantian tanpa batasan.

### Dark Mode Elevation Surfaces (`grey-*`)

Untuk dark mode tanpa pergeseran rona warna (hue shift), Gwind menyediakan 5 level elevasi tonal:
- `grey-darkest` (`#242429`): Level 0 - Base Canvas & Root Background
- `grey-darker` (`#2E2E34`): Level 1 - Cards, Panels & Surface Bases
- `grey-dark` (`#37373F`): Level 2 - Popovers, Modals & Floating Menus
- `grey-lighter` (`#42424B`): Level 3 - Elevated Surfaces, Active Tabs & Borders
- `grey-light` (`#55555E`): Level 4 - Interactive Hover & Muted Layers

## Cara Kerja Tema

Semua warna didaftarkan melalui variabel CSS di `gwind-v2/base.css` dan dipetakan ke Tailwind di `gwind-v2/theme.css`:

```css
/* Di dalam gwind-v2/theme.css */
@theme {
  --color-primary: var(--lime-500);
  --color-secondary: var(--broccoli-500);
  
  /* Palet warna lengkap tersedia secara native (dual-scale) */
  --color-lime-500: var(--lime-500);
  --color-lime-50: var(--lime-50);
  --color-broccoli-500: var(--broccoli-500);
  --color-broccoli-50: var(--broccoli-50);
  /* ... dsb */
}
```

## Kustomisasi Warna

Untuk mengubah tema warna di proyek Anda, Anda cukup menimpa (override) variabel CSS di file CSS utama Anda:

```css
@import "tailwindcss";
@import "gwind-v2/base.css";
@import "gwind-v2/theme.css";

@layer base {
  :root {
    /* Ubah warna primary menjadi Broccoli bukan Lime */
    --primary: var(--broccoli-500);
    
    /* Atau tentukan warna hex kustom */
    --lime-500: #32CD32; 
  }
}
```

## Spacing & Radius

Gwind menggunakan sistem spacing berbasis pixel yang dikonversi ke `rem`. Selain itu, Gwind juga tetap mempertahankan spacing standar Tailwind.

- **Spacing Standar**: `p-4` (16px), `m-2` (8px).
- **Gwind Spacing**: Jika Anda butuh presisi token Gwind, gunakan prefix `gw-` (misal: `p-gw-16` untuk 16px, `p-gw-24` untuk 24px, s.d. `p-gw-120`).
- **Radius**: Menggunakan variabel `--radius` yang dikonfigurasi ke utility `rounded-sm` (4px), `rounded-md` (6px), `rounded-lg` (8px), dan `rounded-full` (9999px).

## 12-Level Typography Utilities

Utility typography Gwind mengikuti hierarki 12 tingkat ukuran font dari Display Hero hingga Micro Hint:

| Token | Class | Ukuran & Line Height | Peran Semantik |
|-------|-------|----------------------|----------------|
| `alpha` | `text-alpha` | 72px (4.5rem) / 108px | Display Hero Large |
| `beta` | `text-beta` | 60px (3.75rem) / 90px | Display Hero Medium |
| `gamma` | `text-gamma` | 48px (3rem) / 72px | Display Hero Small |
| `delta` | `text-delta` | 36px (2.25rem) / 54px | Page Headline H1 |
| `epsilon` | `text-epsilon` | 30px (1.875rem) / 45px | Section Header H2 |
| `zeta` | `text-zeta` | 24px (1.5rem) / 36px | Subsection Header H3 |
| `kappa` | `text-kappa` | 20px (1.25rem) / 30px | Card Title H4 |
| `lambda` | `text-lambda` | 18px (1.125rem) / 27px | Dialog & Sheet Title |
| `omicron` | `text-omicron` | 16px (1rem) / 24px | Body Default & Form Inputs |
| `sigma` | `text-sigma` | 14px (0.875rem) / 20px | Body Small & Controls |
| `omega` | `text-omega` | 12px (0.75rem) / 18px | Captions, Metadata & Badges |
| `atom` | `text-atom` | 10px (0.625rem) / 14px | Micro Hints & Tags |

<ShadowPreview>
  <div class="gwind-docs-preview-col">
    <p class="text-omega text-black-500">Omega - helper text dan metadata kecil</p>
    <p class="text-sigma text-black-600">Sigma - teks sekunder dan body kecil</p>
    <p class="text-omicron font-bold text-black-800">Omicron - body default dan teks utama</p>
  </div>
</ShadowPreview>

```html
<p class="text-omicron">Teks utama menggunakan token typography Gwind.</p>
```

## Drop Shadows & Motion Physics

- **Drop Shadows**:
  - `shadow-drop-1`: Elevasi halus untuk card, tombol, dan list items.
  - `shadow-drop-2`: Elevasi mengambang untuk popover, modal, dan dropdown.
- **Motion Dynamics**:
  - `--gwind-motion-scale-press: 0.98`: Kompresi fisik saat tombol ditekan.
  - `--gwind-motion-scale-icon-press: 0.92`: Kompresi fisik untuk kontrol ikonik.

## Dark Mode

Gwind mendukung dark mode secara otomatis melalui pemetaan token semantik:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: var(--grey-darkest);
    --card: var(--grey-darker);
    --foreground: var(--white);
    --primary: var(--lime-dark-500); /* Hijau kontras tinggi untuk dark mode */
  }
}
```
