<script setup lang="ts">
import TokenColorPalettes from '../components/previews/tokens/TokenColorPalettes.vue'
import TokenDarkElevation from '../components/previews/tokens/TokenDarkElevation.vue'
import TokenSemanticList from '../components/previews/tokens/TokenSemanticList.vue'
import TokenTypographyList from '../components/previews/tokens/TokenTypographyList.vue'
import TokenSpacingScale from '../components/previews/tokens/TokenSpacingScale.vue'
import TokenRadiusMotion from '../components/previews/tokens/TokenRadiusMotion.vue'
</script>

# Design Tokens

Arsitektur design token resmi Gwind bersumber dari package `gwind-v2` (`^0.3.1`) dan terintegrasi langsung dengan utility-first **Tailwind CSS v4**. Seluruh token dirancang untuk menjamin konsistensi visual, aksesibilitas tinggi, serta kesesuaian dengan standar desain fintech dan enterprise modern di lingkungan PT Pegadaian.

---

## 1. Sistem Warna & Skala Alias (Color Palettes)

Gwind mengadopsi **Dual-Scale Alias System** yang menghubungkan dua konvensi penamaan:

- **Hundreds Scale (`100`–`900`)**: Konvensi standar Tailwind CSS modern (contoh: `bg-lime-500`, `text-broccoli-600`, `bg-black-200`).
- **Tens Scale (`10`–`90`)**: Konvensi token Figma dan desain mobile (contoh: `bg-lime-50`, `text-broccoli-60`, `bg-black-20`).

Kedua format mereferensikan variabel CSS yang identik (`--lime-500` adalah alias langsung ke `--lime-50`) dan dapat digunakan secara bergantian tanpa memengaruhi bundle size.

> [!TIP]
> **Figma ke Code Mapping**:
> Jika di inspect Figma tertera token warna `black-20`, di kode Tailwind Anda dapat menuliskan `bg-black-200` atau `bg-black-20` secara setara. Keduanya merujuk ke nilai `#EEEEEE`.

Tersedia **14 rumpun rona (*hue families*)** dengan total **90+ swatches** (menghasilkan **180+ entri alias**). Klik swatch warna di bawah untuk menyalin variabel CSS:

<TokenColorPalettes />

### Ringkasan Rumpun Palet

| Rumpun Palet | Total Steps | Skala Hundreds | Skala Tens | Peran & Rekomendasi Penggunaan |
|--------------|:-----------:|:--------------:|:----------:|--------------------------------|
| **Lime** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | **Primary Brand Anchor**: Tombol aksi utama, badge aktif, navbar highlight |
| **Lime Dark** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | **Dark Mode Accent**: Hijau kontras tinggi khusus latar belakang gelap pekat |
| **Broccoli** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | **Secondary Corporate Green**: Header tabel, teks penekanan korporat, sidebar gelap |
| **Pear** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | Hijau kekuningan untuk badge kategori, chart grafis, dan aksen sekunder |
| **Kiwi** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | Hijau cerah untuk visualisasi data dan indikator progres |
| **Red** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | **Standard Destructive**: Status error, tombol hapus, badge jatuh tempo |
| **Red Dark** | 1 | 500 | 50 | **Dark Mode Destructive**: Merah desaturasi khusus dark mode agar tidak silau |
| **Orange** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | **Warning & Caution**: Peringatan kadaluarsa, tagihan belum lunas |
| **Yellow** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | Status perhatian ringan, highlight pencarian, chart data |
| **Gold** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | **Fintech Gold**: Portofolio Tabungan Emas, sertifikat mulia, tier membership |
| **Turquoise** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | Aksen segar untuk kategori pinjaman mikro dan kemitraan |
| **Blue** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | **Informational**: Link navigasi eksternal, info banner bantuan |
| **Purple** | 7 | 100, 200, 400, 500, 600, 800, 900 | 10, 20, 40, 50, 60, 80, 90 | Fitur loyalty, poin apresiasi, dan program loyalitas nasabah |
| **Black** | 6 | 100, 200, 400, 500, 600, 800 | 10, 20, 40, 50, 60, 80 | **Neutral Surfaces & Ink**: Border kontainer, background input, teks paragraf |

---

## 2. Dark Mode Elevation Surfaces (`grey-*`)

Untuk mencegah kelelahan mata dan pergeseran rona (*chromatic shift*) pada mode gelap, Gwind menyediakan **5 tingkat elevasi netral monokromatik**:

<TokenDarkElevation />

| Level Elevasi | Token Class | Nilai Hex | Peran Arsitektur UI |
|:-------------:|-------------|:---------:|---------------------|
| **Level 0** | `bg-grey-darkest` | `#242429` | **Base Canvas**: Background paling dasar (`body` atau viewport aplikasi) |
| **Level 1** | `bg-grey-darker` | `#2E2E34` | **Cards & Surface Bases**: Kontainer kartu konten, sidebar, panel tabel |
| **Level 2** | `bg-grey-dark` | `#37373F` | **Popovers & Modals**: Dialog modal, dropdown list, datepicker floating panel |
| **Level 3** | `bg-grey-lighter` | `#42424B` | **Elevated Tabs & Dividers**: Tab trigger aktif, badge elevasi, garis batas halus |
| **Level 4** | `bg-grey-light` | `#55555E` | **Interactive Hover**: Latar belakang hover baris tabel, muted icon backdrops |

---

## 3. Token Semantik Kontekstual (Semantic Tokens)

Token semantik memisahkan logika antarmuka dari nilai warna heksadesimal mentah. Saat membuat komponen UI, utamakan token semantik ini daripada utility primitif agar otomatis beradaptasi antara tema terang dan gelap:

<TokenSemanticList />

### A. Surfaces & Layout
| Token Semantik | Variabel CSS | Deskripsi & Peran |
|----------------|--------------|-------------------|
| `background` | `var(--background)` | Background root canvas aplikasi |
| `card` | `var(--card)` | Background kontainer card dan panel |
| `card-foreground` | `var(--card-foreground)` | Teks primer di atas permukaan card |
| `popover` | `var(--popover)` | Background floating menu, dropdown, dan popover |
| `popover-foreground` | `var(--popover-foreground)` | Teks primer di dalam floating popover |

### B. Content & Typography
| Token Semantik | Variabel CSS | Deskripsi & Peran |
|----------------|--------------|-------------------|
| `foreground` | `var(--foreground)` | Teks isi default untuk seluruh aplikasi |
| `foreground-primary` | `var(--foreground-primary)` | Teks headline tebal dan judul halaman |
| `foreground-secondary`| `var(--foreground-secondary)`| Teks sekunder, label pendukung, caption |
| `foreground-tertiary` | `var(--foreground-tertiary)` | Teks placeholder, petunjuk subtil, status non-aktif |
| `foreground-green` | `var(--foreground-green)` | Penekanan teks dengan warna brand hijau Pegadaian |

### C. Brand & Primary Actions
| Token Semantik | Variabel CSS | Deskripsi & Peran |
|----------------|--------------|-------------------|
| `primary` | `var(--primary)` | Background tombol aksi utama (Call to Action) |
| `primary-foreground` | `var(--primary-foreground)` | Teks di atas tombol aksi primer |
| `primary-on-text` | `var(--primary-on-text)` | Teks tautan interaktif brand primer |
| `secondary` | `var(--secondary)` | Background tombol atau kontrol sekunder |
| `secondary-foreground` | `var(--secondary-foreground)` | Teks di atas kontrol aksi sekunder |
| `accent` | `var(--accent)` | Warna aksen lembut untuk hover atau pill seleksi |
| `accent-foreground` | `var(--accent-foreground)` | Teks di atas area aksen |
| `muted` | `var(--muted)` | Latar belakang komponen non-interaktif yang diredam |
| `muted-foreground` | `var(--muted-foreground)` | Teks metadata di area yang diredam |

### D. Feedback & Semantic States
| Token Semantik | Variabel CSS | Deskripsi & Peran |
|----------------|--------------|-------------------|
| `success` | `var(--success)` | Status sukses, pembayaran berhasil, verifikasi valid |
| `success-foreground` | `var(--success-foreground)` | Teks di atas banner/badge status sukses |
| `warning` | `var(--warning)` | Peringatan hati-hati, konfirmasi jatuh tempo |
| `warning-foreground` | `var(--warning-foreground)` | Teks di atas banner peringatan |
| `destructive` | `var(--destructive)` | Tombol aksi berbahaya, notifikasi pembatalan |
| `destructive-foreground` | `var(--destructive-foreground)` | Teks di atas tombol destructive |
| `destructive-on-text` | `var(--destructive-on-text)` | Teks link merah tanpa background |
| `info` | `var(--info)` | Banner informasi, panduan operasional |
| `info-foreground` | `var(--info-foreground)` | Teks di atas background informasi |

### E. Borders, Focus & Controls
| Token Semantik | Variabel CSS | Deskripsi & Peran |
|----------------|--------------|-------------------|
| `border` | `var(--border)` | Garis batas standar kontainer dan card |
| `border-subtle` | `var(--border-subtle)` | Garis pembatas halus (divider) antar item list |
| `input` | `var(--input)` | Garis outline default untuk input formulir |
| `input-focus` | `var(--input-focus)` | Ring outline saat field input sedang aktif |
| `ring` | `var(--ring)` | Indikator fokus aksesibilitas navigasi keyboard |

---

## 4. Hierarki Tipografi 12-Tingkat (Typography Hierarchy)

Tipografi Gwind menggunakan font **Nunito Sans** dengan 12 tingkatan hirarki matematis proporsional dari Display Hero (`alpha`) hingga Micro Caption (`atom`).

Klik sembarang baris di bawah untuk menyalin class utility tipografi:

<TokenTypographyList />

### Ringkasan Ukuran & Spesifikasi

| Level | Class Utility | Ukuran Font (px / rem) | Line Height (px / rem) | Rekomendasi Penggunaan |
|:-----:|---------------|:----------------------:|:----------------------:|------------------------|
| **alpha** | `text-alpha` | 72px (`4.5rem`) | 108px (`6.75rem`) | Billboard display, landing page display hero |
| **beta** | `text-beta` | 60px (`3.75rem`) | 90px (`5.625rem`) | Display medium, hero marketing showcase |
| **gamma** | `text-gamma` | 48px (`3rem`) | 72px (`4.5rem`) | Display hero small, nominal saldo emas besar |
| **delta** | `text-delta` | 36px (`2.25rem`) | 54px (`3.375rem`) | **Header H1**: Judul utama halaman web/aplikasi |
| **epsilon** | `text-epsilon` | 30px (`1.875rem`) | 45px (`2.8125rem`) | **Header H2**: Judul section besar atau sub-halaman |
| **zeta** | `text-zeta` | 24px (`1.5rem`) | 36px (`2.25rem`) | **Header H3**: Judul modal besar, headline panel |
| **kappa** | `text-kappa` | 20px (`1.25rem`) | 30px (`1.875rem`) | **Header H4**: Judul kartu produk, modal title standar |
| **lambda** | `text-lambda` | 18px (`1.125rem`) | 27px (`1.6875rem`) | Judul sheet bottomsheet, subheader dialog |
| **omicron** | `text-omicron` | 16px (`1rem`) | 24px (`1.5rem`) | **Body Default**: Isi teks standar, field input teks |
| **sigma** | `text-sigma` | 14px (`0.875rem`) | 20px (`1.25rem`) | **Body Small**: Data sel tabel, tombol standar, label form |
| **omega** | `text-omega` | 12px (`0.75rem`) | 18px (`1.125rem`) | **Caption**: Helper text input, badge compact, metadata |
| **atom** | `text-atom` | 10px (`0.625rem`) | 14px (`0.875rem`) | **Micro**: Tag status kecil, notifikasi dot counter |

> [!NOTE]
> Utility `text-*` pada Gwind sudah mengikutsertakan nilai `line-height` bawaan secara otomatis. Hindari menimpa `leading-*` secara manual kecuali dibutuhkan secara spesifik.

---

## 5. Sistem Jarak (Spacing Scale)

Gwind menyediakan utility spacing standar Tailwind (kelipatan 4px) serta utility skala khusus `gw-*` untuk presisi Figma:

<TokenSpacingScale />

| Token Spacing | Nilai Pixel | Nilai Rem | Rekomendasi Penggunaan |
|:-------------:|:-----------:|:---------:|------------------------|
| `gw-2` | 2px | `0.125rem` | Gap mikro antar icon kecil dan status dot |
| `gw-4` | 4px | `0.25rem` | Padding tombol kecil, tag compact |
| `gw-8` | 8px | `0.5rem` | Gap antar tombol dan badge |
| `gw-16` | 16px | `1rem` | **Base UI Spacing**: Padding default card dan sel tabel |
| `gw-24` | 24px | `1.5rem` | Padding kontainer kartu lapang dan form field group |
| `gw-32` | 32px | `2rem` | Pembatas horizontal antar section konten |
| `gw-40` | 40px | `2.5rem` | Margin separator modul dashboard |
| `gw-48` | 48px | `3rem` | Jarak antar segmen halaman utama |
| `gw-64` | 64px | `4rem` | Margin atas section besar |
| `gw-80` | 80px | `5rem` | Jarak vertikal hero header |
| `gw-120` | 120px | `7.5rem` | Hero banner clearance / margin footer |

---

## 6. Radius, Drop Shadows & Motion Physics

Sistem kelengkungan sudut, elevasi bayangan multi-layer, dan umpan balik fisik tactile:

<TokenRadiusMotion />

### A. Border Radius
- `rounded-sm` (4px): Chip kecil, badge compact, checkbox, tooltip box.
- `rounded-md` (6px): Input text field, dropdown select menu trigger, subkontainer.
- `rounded-lg` (8px): **Default UI Anchor**: Button, Card standar, Alert.
- `rounded-full` (9999px): Avatar bundar, pill status, switch toggle.

### B. Multi-layer Drop Shadows
- `shadow-drop-1`: Elevasi halus untuk kartu daftar, hover tombol, dan panel datar (`0px 0px 2px rgba(0,0,0,0.08), 0px 2px 6px rgba(0,0,0,0.14)`).
- `shadow-drop-2`: Elevasi tinggi dengan blur sebar luas untuk Modal Dialog, Datepicker Calendar, Popover Content (`0px 0px 4px rgba(0,0,0,0.10), 0px 6px 14px rgba(0,0,0,0.16)`).

### C. Motion Physics & Durasi
- **Button Press Scale**: `active:scale-[0.98]` (`--gwind-motion-scale-press: 0.98`)
- **Icon Action Press Scale**: `active:scale-[0.92]` (`--gwind-motion-scale-icon-press: 0.92`)
- **Durasi Standar**: Instant (`80ms`), Fast (`120ms`), Base (`160ms`), Moderate (`200ms`), Slow (`300ms`).

---

## 7. Responsive Breakpoints

Desain antarmuka Gwind mengacu pada 3 breakpoint target utama:

| Breakpoint | Minimum Width | Deskripsi Target Perangkat |
|:----------:|:-------------:|----------------------------|
| **mobile** | `360px` (`22.5rem`) | Ponsel portrait kompak dan smartphone entry-level |
| **tablet** | `640px` (`40rem`) | Tablet portrait, perangkat lipat, layar mini |
| **desktop**| `1028px` (`64.25rem`)| Laptop kantor, workstation desktop Pegadaian |

---

## 8. Contoh Implementasi di Komponen Vue

Berikut contoh penulisan komponen Vue 3 `<script setup>` yang memanfaatkan hierarki token Gwind:

```vue
<script setup lang="ts">
import { Button, Badge } from '@gwind/ui'
</script>

<template>
  <div class="rounded-xl border border-black-200 bg-white p-6 shadow-drop-1 dark:border-black-800 dark:bg-grey-darker">
    <!-- Header dengan tipografi dan badge status -->
    <div class="flex items-center justify-between mb-4">
      <Badge variant="brocoli" class="text-omega font-bold">
        Tabungan Emas Aktif
      </Badge>
      <span class="text-atom font-mono text-black-500">Rek: 0012-9843-1200</span>
    </div>

    <!-- Saldo dengan Skala Tipografi Gamma -->
    <h2 class="text-gamma font-black text-black-900 dark:text-white tracking-tight">
      12.4500 <span class="text-omicron font-bold text-lime-600 dark:text-lime-400">gram</span>
    </h2>

    <p class="text-sigma text-black-600 dark:text-black-400 mt-1">
      Estimasi nilai buyback: <strong class="text-black-800 dark:text-white">Rp 17.500.000</strong>
    </p>

    <!-- Tombol Aksi dengan Tactile Motion -->
    <div class="mt-6 flex items-center gap-3">
      <Button variant="primary" class="transition-transform active:scale-[0.98]">
        Beli Emas
      </Button>
      <Button variant="secondary" class="transition-transform active:scale-[0.98]">
        Gadai Titipan
      </Button>
    </div>
  </div>
</template>
```
