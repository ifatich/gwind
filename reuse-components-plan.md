# Gwind Reuse Plan (from gwind-vue)

## Goal
Reuse komponen `gwind-vue` ke `gwind` secara bertahap tanpa merusak API CLI dan konsistensi token `gwind-v2`.

## Reuse Buckets

### Low Effort (langsung eksekusi)
- `label`

Kriteria:
- Wrapper ringan di atas `reka-ui`
- Dependency sudah ada di `gwind`
- Styling mudah dipetakan ke semantic token (`text-foreground`, `peer-disabled:*`)

### Medium Effort (batch berikutnya)
- `accordion`, `alert`, `checkbox`, `popover`, `tooltip`, `textarea`, `progress`, `radio`, `breadcrumb`, `combobox`, `tabs` variants

Kriteria:
- Sudah dekat dengan pola `gwind`, tapi butuh normalisasi API dan class token.

### High Effort (refactor lebih dalam)
- `table` (datatables/jquery), `date-range-picker`, `carousel` lanjutan, komponen domain-spesifik (`add-amount`, dll)

Kriteria:
- Ada coupling kuat ke dependency lama/proyek spesifik.

## Migration Rules
- Gunakan semantic utility class (`bg-primary`, `text-foreground`, `border-input`) bukan token legacy.
- Ikuti struktur `packages/ui/src/components/ui/<name>`.
- Harus lolos:
  - `pnpm --filter @gwind/ui lint`
  - `pnpm --filter @gwind/ui build:registry`
  - `pnpm build`

## Low Effort Execution Log
- [x] Tambah komponen `label` ke `@gwind/ui`
- [x] Tambah docs page `components/label.md`
- [x] Register komponen untuk preview docs
- [x] Rebuild registry CLI
