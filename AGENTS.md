# Gwind Design System — Tech Stack & Architecture

> Referensi cepat untuk AI agent agar memahami struktur project tanpa perlu
> meng-explore ulang. Selalu baca file ini terlebih dahulu sebelum memulai task.

---

## Ringkasan Project

**Gwind** (`gwind-monorepo`) adalah **design system** internal berbasis Vue 3 +
Tailwind CSS v4 yang dibangun sebagai pnpm monorepo. Tujuannya menyediakan
komponen UI reusable yang bisa di-install per komponen via CLI (`npx gwind-system-ui add <component>`).

---

## Tech Stack Inti

| Layer          | Teknologi                                     |
|----------------|-----------------------------------------------|
| Framework      | **Vue 3.5+** (`<script setup>` + TypeScript)  |
| Styling        | **Tailwind CSS v4** (utility-first, `@theme`/`@utility` syntax) |
| CSS Base       | `gwind-v2` (custom token package)             |
| Headless UI    | **Reka UI** (accessible primitives)           |
| Utility        | `clsx` + `tailwind-merge` (via `cn()`)        |
| Variant        | `class-variance-authority` (CVA)              |
| Composable     | `@vueuse/core`                                |
| Icon           | `lucide-vue-next` (sudah ada di dependencies) |
| Font           | `Nunito Sans` via `@fontsource/nunito-sans`   |
| Build          | **Vite 6** + `@vitejs/plugin-vue`             |
| Monorepo       | **pnpm** workspaces + **Turborepo**           |
| Package Manager| `pnpm@10.15.0`                                |
| Docs           | **VitePress** (latest)                        |
| CLI Build      | `tsup` (ESM)                                  |

---

## Struktur Monorepo

```
gwind/
├── apps/
│   ├── docs/                    # VitePress documentation site (:5173)
│   │   ├── .vitepress/
│   │   │   ├── config.ts        # Sidebar, nav, head config
│   │   │   └── theme/
│   │   │       ├── index.ts     # Global component registration (Gw* prefix)
│   │   │       ├── ShadowPreview.vue  # Isolated preview wrapper
│   │   │       └── custom.css   # VitePress style overrides
│   │   ├── components/          # Per-component markdown docs (*.md)
│   │   │   └── previews/        # Complex preview Vue components
│   │   ├── guide/               # Getting started, design, theming, motion
│   │   └── package.json         # deps: @gwind/ui (workspace:*)
│   │
│   └── playground/              # Live playground app (:3000)
│       └── src/
│           ├── App.vue          # Semua komponen di-demo di satu SPA
│           ├── main.ts          # Entry point
│           └── styles.css       # Playground-specific styles
│
├── packages/
│   ├── ui/                      # @gwind/ui — core component library
│   │   ├── src/
│   │   │   ├── index.ts         # Public API — semua export keluar dari sini
│   │   │   ├── components/ui/   # Komponen UI (1 folder = 1 komponen)
│   │   │   │   ├── index.ts     # Barrel export semua komponen
│   │   │   │   ├── button/      # Contoh: Button.vue + index.ts
│   │   │   │   ├── dialog/      # Multi-file: Dialog*.vue + index.ts
│   │   │   │   ├── input/       # Nested: input-persentase/, input-rupiah/
│   │   │   │   └── ...          # 31 komponen (lihat daftar di bawah)
│   │   │   ├── lib/
│   │   │   │   ├── utils.ts     # cn() — clsx + tailwind-merge + gwind font
│   │   │   │   ├── portal.ts    # Teleport helper
│   │   │   │   └── directives/
│   │   │   │       └── ripple.ts  # v-ripple directive
│   │   │   └── styles/
│   │   │       └── main.css     # Design tokens, @theme, @utility, @keyframes
│   │   ├── vite.config.ts       # Library build config (ESM, externals: vue, reka-ui)
│   │   └── package.json         # @gwind/ui
│   │
│   └── cli/                     # gwind-system-ui — CLI tool (npm published)
│       ├── src/index.ts         # CLI entry (cac-based)
│       └── package.json         # gwind-system-ui (bin: gwind-ui, gwind-system-ui)
│
├── registry/                    # Component registry untuk CLI
│   ├── index.json               # Manifest: daftar komponen + file-file-nya
│   ├── components/              # Per-component JSON (source code snapshot)
│   │   └── *.json               # e.g. button.json, dialog.json
│   └── styles/
│       └── gwind.css            # Distributable CSS (copy dari main.css)
│
├── .agents/                     # AI agent rules & skills
│   ├── micro_commit.md          # Commit convention rules
│   └── skills/                  # Agent skills
│
├── turbo.json                   # Turborepo pipeline config
├── pnpm-workspace.yaml          # Workspace: apps/*, packages/*
└── package.json                 # Root scripts: dev, build, lint, format
```

---

## Daftar Komponen (31 komponen)

accordion, alert, avatar, badge, breadcrumb, button, card, carousel,
checkbox, combobox, datepicker, dialog, divider, dropdown, file-picker,
image-picker, input, input-persentase, input-rupiah, label, link,
pagination, popover, progress, radio-group, select, spinner, switch,
table, tabs, textarea, toast, tooltip

---

## Pola & Konvensi Penting

### Struktur Komponen Baru

```
packages/ui/src/components/ui/<nama-komponen>/
├── <NamaKomponen>.vue     # Komponen utama
├── <SubKomponen>.vue      # Opsional, sub-komponen
└── index.ts               # Barrel export
```

Setiap komponen baru **wajib**:
1. Punya folder sendiri di `components/ui/`
2. Punya `index.ts` barrel export
3. Di-re-export dari `components/ui/index.ts`
4. Di-re-export dari `src/index.ts`

### Utility `cn()`

```ts
import { cn } from '../../../lib/utils'
// cn() = clsx() + tailwind-merge + auto-inject font class
```

Semua komponen menggunakan `cn()` untuk class merging. **Jangan** pakai
`clsx` atau `twMerge` secara langsung di dalam komponen.

### Design Tokens (Tailwind v4)

Didefinisikan di `packages/ui/src/styles/main.css`:

- **Typography scale:** `text-alpha` (4.5rem) → `text-atom` (0.625rem)
  Urutan: alpha, beta, gamma, delta, epsilon, zeta, kappa, lambda, omicron, sigma, omega, atom
- **Motion tokens:** `--gwind-motion-duration-*`, `--gwind-motion-ease-*`
- **Animation utilities:** `animate-in`, `animate-out`, `fade-in-0`, `zoom-in-95`, dll
- **Color:** Menggunakan `gwind-v2` dual-scale system (`100`–`900` & `10`–`90` termasuk `--black-10`, `--black-20` native)
- **Shadow:** `shadow-drop-1`, `shadow-drop-2` via token mapping `var(--shadow-drop-*)`

### VitePress Docs — Registrasi Komponen

Komponen dari `@gwind/ui` di-register secara **global** dengan prefix `Gw`
di `apps/docs/.vitepress/theme/index.ts`. Saat menulis docs:

```md
<GwButton variant="primary">Click me</GwButton>
```

Preview yang butuh isolasi CSS dibungkus `<ShadowPreview>`.

### Playground

File `apps/playground/src/App.vue` adalah SPA tunggal berisi demo semua
komponen. Import langsung dari `@gwind/ui` (workspace link). Setiap
komponen punya section dengan `id` di template.

### Registry & CLI

- `registry/index.json` — manifest komponen (nama + daftar file)
- `registry/components/*.json` — snapshot source per komponen (base64/raw)
- `registry/styles/gwind.css` — CSS yang di-copy CLI saat `add`
- Build registry: `pnpm build:registry` (menjalankan `tsx scripts/build-registry.ts`)

---

## Perintah Penting

| Perintah                    | Fungsi                                          |
|-----------------------------|--------------------------------------------------|
| `pnpm dev`                  | Jalankan semua dev server (turbo)                |
| `pnpm dev:docs`             | Docs saja (VitePress, :5173)                     |
| `pnpm dev:playground`       | Playground saja (Vite, :3000)                    |
| `pnpm build`                | Build semua packages + apps                      |
| `pnpm build:registry`       | Generate registry JSON dari source               |
| `pnpm lint`                 | Lint semua (vue-tsc)                             |
| `pnpm format`               | Format semua file (prettier)                     |

---

## Dependency Graph

```
playground ──► @gwind/ui (workspace:*)
docs ────────► @gwind/ui (workspace:*, direct source import)
cli ─────────► registry/ (copies files at build time)
@gwind/ui ──► reka-ui, @vueuse/core, lucide-vue-next, gwind-v2, cva, clsx, tailwind-merge
```

---

## Styling & Design Tokens (gwind-v2)

**ATURAN KRITIS**: Jangan hardcode nilai styling. Gunakan token dari `gwind-v2`.

- **Color**: Gunakan semantic utility class (`bg-black-200`, `text-lime-500`).
  Hindari arbitrary hex (`[#eeeeef]`). **Penting**: Figma pakai format puluhan
  (`black-20`), `gwind-v2` pakai format ratusan (`black-200`) — nilainya sama.
- **Typography**: Gunakan token teks gwind (`text-omicron`, `text-sigma`, dll).
  Jangan hardcode `leading` jika token sudah include line-height.
- **Spacing/Sizing**: Gunakan standar Tailwind (`px-5`, `min-h-5`, `w-24`).
  Hindari arbitrary pixel (`w-[98px]`, `h-[18px]`) kecuali benar-benar tidak
  ada token yang sesuai.

---

## Workflow Pembuatan Komponen Baru

Saat membuat komponen baru (contoh: `kebab-case-name`), ikuti langkah
berurutan berikut:

### 1. Implementasi Komponen (`packages/ui`)

1. Buat folder: `packages/ui/src/components/ui/<kebab-case-name>/`
   *(Untuk varian, taruh di dalam folder parent, misal `input/input-rupiah/`)*
2. Buat file `.vue` (`PascalCaseName.vue`) dengan `<script setup lang="ts">`
3. Buat `index.ts` barrel export:
   ```ts
   export { default as PascalCaseName } from './PascalCaseName.vue'
   ```

### 2. Registrasi Export (KRITIS)

Wajib export di **dua** file index agar registry dan docs mengenali komponen:

1. **Internal** — `packages/ui/src/components/ui/index.ts`:
   ```ts
   export * from "./<kebab-case-name>";
   ```
2. **Package** — `packages/ui/src/index.ts`:
   ```ts
   export * from "./components/ui/<kebab-case-name>";
   ```

> Jika terlewat, komponen gagal render di VitePress karena tidak ter-register
> sebagai `GwPascalCaseName`.

### 3. Build Registry

**Jangan** edit file JSON di `registry/` secara manual! Jalankan:

```bash
pnpm run build:registry
```

Script membaca `packages/ui` dan mengupdate `registry/components/*.json`
serta `registry/index.json`.

### 4. Playground (`apps/playground`)

1. Buka `apps/playground/src/App.vue`
2. Import komponen dari `@gwind/ui`
3. Definisikan reactive state yang diperlukan
4. Tambahkan nama komponen ke array `items` navigasi
5. Render komponen di `<template>` dalam section baru.
   **KRITIS**: Demonstrasikan SEMUA behavior, variant, dan state
   (Default, Empty, Error, Disabled, dll).

### 5. Dokumentasi VitePress (`apps/docs`)

1. Buat file: `apps/docs/components/<kebab-case-name>.md`
2. Struktur wajib:
   - `<script setup lang="ts">` untuk variabel lokal docs
   - Title & deskripsi singkat
   - **Installation**: `npx gwind-system-ui add <kebab-case-name>`
   - **Preview**: Bungkus dengan `<ShadowPreview>`, pakai prefix `Gw`
   - **Behavior / Usage**: Penjelasan + code snippet
   - **States**: Render semua state terpisah (Default, Disabled, Error, dll)
   - **Props / Slots / Emits**: Tabel API reference
3. Daftarkan di sidebar — `apps/docs/.vitepress/config.ts`:
   ```ts
   { text: "Title Name", link: "/components/<kebab-case-name>" }
   ```

---

## Aturan untuk AI Agent

1. **Jangan** tambahkan icon package baru — gunakan `lucide-vue-next` yang sudah ada.
2. **Selalu** pakai `<script setup lang="ts">` untuk komponen Vue.
3. **Selalu** pakai `cn()` dari `lib/utils` untuk class merging.
4. **Jangan** pakai `any` di TypeScript — definisikan interface eksplisit.
5. **Ikuti** Conventional Commits (lihat `.agents/micro_commit.md`).
6. **Token CSS** pakai Tailwind v4 syntax (`@theme`, `@utility`), bukan v3.
7. **Barrel export** wajib ada di setiap folder komponen (`index.ts`).
8. Docs VitePress menggunakan prefix `Gw` untuk komponen (e.g. `<GwButton>`).
9. Playground `App.vue` hanya 1 file SPA — tambahkan section baru di sana.
10. Setelah menambah komponen baru, jalankan `pnpm build:registry`.
11. **Jangan** hardcode warna/font/spacing — selalu gunakan token `gwind-v2`.
12. **Figma color mapping**: `black-20` (Figma) = `black-200` (Tailwind).
13. **Jangan** edit file di `registry/` secara manual — selalu via `build:registry`.
14. **Wajib** demonstrasikan semua state/variant di playground & docs.
