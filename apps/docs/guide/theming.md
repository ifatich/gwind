# Theming

Gwind menggunakan sistem konfigurasi CSS-first dari **Tailwind CSS v4**. Seluruh design token didefinisikan sebagai variabel CSS murni, yang kemudian didaftarkan ke dalam blok `@theme`.

## Warna Brand Pegadaian

Gwind hadir dengan palet warna resmi yang sudah dikonfigurasi di dalam `gwind-v2`. Anda bisa menggunakan warna ini langsung sebagai utility class:

| Nama Warna | Contoh Class | Kegunaan Utama |
|------------|--------------|----------------|
| **Lime** | `bg-lime-500` | Warna identitas utama (Primary) |
| **Broccoli** | `text-broccoli-600` | Warna sekunder / penekanan |
| **Orange** | `border-orange-400` | Warna aksen / warning |
| **Black** | `bg-black-800` | Warna teks dan UI gelap |

## Cara Kerja Tema

Semua warna didaftarkan melalui variabel CSS di `gwind-v2/base.css` dan dipetakan ke Tailwind di `gwind-v2/theme.css`:

```css
/* Di dalam gwind-v2/theme.css */
@theme {
  --color-primary: var(--lime-500);
  --color-secondary: var(--broccoli-500);
  
  /* Palet warna lengkap tersedia secara native */
  --color-lime-500: var(--lime-500);
  --color-broccoli-500: var(--broccoli-500);
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
- **Gwind Spacing**: Jika Anda butuh presisi token Gwind, gunakan prefix `gw-` (misal: `p-gw-16` untuk 16px dari token Gwind).
- **Radius**: Menggunakan variabel `--radius` yang bisa Anda kustomisasi secara global.

```css
:root {
  --radius: 0.75rem; /* Membuat seluruh komponen lebih bulat */
}
```

## Dark Mode

Gwind mendukung dark mode secara otomatis. Anda bisa mengatur variabel khusus untuk dark mode menggunakan media query atau class selector:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: var(--black-800);
    --foreground: var(--white);
    --primary: var(--lime-400); /* Hijau yang lebih terang untuk dark mode */
  }
}
```
