# Micro-interactions & Animations — Inventory dan Rencana

Dokumen ini merinci micro-interaction/animasi yang sudah ada di repo, sumbernya, dan potensi yang bisa ditambahkan ke library `packages/ui`.

**Ringkasan singkat**
- Sudah ada: accordion open/close animation, dialog overlay animations, ripple directive, datepicker slide animations, banyak komponen menggunakan `transition`/`transition-colors` untuk hover/focus.
- Token animasi terdefinisi di paket token (`gwind-token`).
- Potensi: standardized motion tokens, composable/directive API (`useMotion`/`v-motion`), presets (fade/slide/scale), global reduced-motion toggle, lazy-loading engine.

---

## 1. Apa yang sudah ada (per sumber)

- Accordion (open/close animation)
  - Implementasi: [packages/ui/src/components/ui/accordion/AccordionContent.vue](packages/ui/src/components/ui/accordion/AccordionContent.vue)
    - Class: `data-[state=closed]:animate-accordion-up` dan `data-[state=open]:animate-accordion-down` dan `transition-all` pada konten.
  - Animation tokens / keyframes: [gwind-token/src/tokens/scheme.ts](gwind-token/src/tokens/scheme.ts#L62-L87)
    - Mendefinisikan `keyframes` untuk `accordion-down` dan `accordion-up` serta `animation` dengan durasi `0.2s ease-out`.

- Dialog overlay / modal
  - Contoh penggunaan data-state animate: [gwind-vue/src/components/dialog/DialogScrollContent.vue](gwind-vue/src/components/dialog/DialogScrollContent.vue)
    - Menggunakan `data-[state=open]:animate-in` dan `data-[state=closed]:animate-out` + fade classes.

- Datepicker (slide enter/leave)
  - File: [gwind-vue/src/components/datepicker/Datepicker.vue](gwind-vue/src/components/datepicker/Datepicker.vue)
    - Memiliki kelas `.slide-up-enter-active`, `.slide-up-leave-active`, dsb. (CSS transitions klasik untuk enter/leave).

- Ripple effect (klik)
  - Directive: [gwind-vue/src/directives/ripple.ts](gwind-vue/src/directives/ripple.ts)
    - Mengatur transform + opacity transitions untuk efek ripple pada tombol.

- Transisi warna / hover / focus
  - Banyak komponen memakai helper kelas seperti `transition`, `transition-colors`, `transition-opacity`, contohnya tombol, select, pagination, dll.
  - Contoh: [gwind-vue/src/components/button/index.ts](gwind-vue/src/components/button/index.ts) (variant memakai `transition-colors`) dan berbagai komponen lain menggunakan `transition`.

- Prefers-reduced-motion availability
  - Repo mencantumkan utility terkait preferensi reduced motion (auto-imports hint): usePreferredReducedMotion ada di auto-imports (bisa digunakan).
  - File: [gwind-vue/auto-imports.d.ts](gwind-vue/auto-imports.d.ts)

- Dokumentasi/Stories
  - Ada dokumentasi contoh Accordion: [apps/docs/components/accordion.md](apps/docs/components/accordion.md)

---

## 2. Rinci: behavior micro-interaction per base component (yang ditemukan)

- Accordion
  - Behavior: expand/collapse dengan animasi height (keyframes mengandalkan `--radix-accordion-content-height`).
  - Saat terbuka: `animate-accordion-down` (height dari 0 ke isi).
  - Saat tutup: `animate-accordion-up`.

- Button / Click
  - Behavior: ripple (visual) pada klik; hover/focus color transitions.
  - Implementasi: ripple directive + `transition-colors` pada variants.

- Dialog / Popover / Modal
  - Behavior: overlay fade in/out, content animate-in/out.

- Datepicker / Dropdown-like
  - Behavior: slide-up/slide-down enter/leave transitions.

- Select, Pagination, Checkbox, Tabs, dll.
  - Behavior umum: hover/active color transitions, focus rings, small opacity/transform transitions.

---

## 3. Motion tokens & theme

- Source token file: [gwind-token/src/tokens/scheme.ts](gwind-token/src/tokens/scheme.ts)
  - Menyediakan `keyframes` dan `animation` definitions.
  - Rekomendasi: expose timing tokens (`--motion-duration-fast`, `--motion-duration-medium`, `--motion-easing`) di paket token supaya konsisten.

---

## 4. Potensi penambahan (dengan detail implementasi)

1. Standar Motion Tokens
   - Apa: Tambah tokens untuk durasi (fast/medium/slow), easing presets, dan named animations (fade, slide, scale, accordion).
   - Kenapa: konsistensi dan tema-friendly (ganti dari token saja untuk seluruh library).
   - Lokasi: `gwind-token/src/tokens/*`.

2. CSS-only Presets
   - Apa: Tambah utility classes (contoh: `.animate-fade`, `.animate-slide-up`, `.animate-scale`) yang memakai keyframes yang ada.
   - Keuntungan: zero-js fallback, kecil, berguna untuk server-side rendered markup.

3. Composable / API (`useMotion`) dan Directive (`v-motion`)
   - Apa: expose composable yang meng-handle enter/exit/visibility/state-driven animations; directive untuk DOM-level animations.
   - Contoh API:
     - `useMotion(el, { type: 'fade'|'slide', duration, easing, disabled })`
     - `v-motion="{ name: 'fade', duration: 200 }"`
   - Implementasi: berbasis Web Animations API (WAAPI) atau kecil seperti `motion` dari `@motionone/dom`.
   - Benefit: control lebih halus (interrupt, play/pause, seek).

4. Integrasi ringan (optional): `@vueuse/motion` atau `motion` (Motion One)
   - Kenapa: implementasi animasi kompleks lebih mudah, performa bagus.
   - Cara: buat adapter kecil agar dependency cuma di-consumer atau lazy-load di runtime.

5. Global reduced-motion toggle
   - Apa: global provider/context yang mematikan animasi saat `prefers-reduced-motion` atau user setting.
   - Cara: token `--motion-disabled: 1` atau gunakan CSS `@media (prefers-reduced-motion: reduce)`.

6. Animation presets per component
   - Accordion: current is good. Tambah props: `duration`, `easing`, `reducedMotion`.
   - Tooltip/Popover: small fade+translate.
   - Toasts: slide/fade with exit animation.

7. Lazy-loading animation engine
   - Jika memakai Motion One atau sejenis, lazy-load hanya bila komponen butuh animasi kompleks.

8. Tests & Visual Regression
   - Tambah stories di `apps/docs`/Storybook yang menampilkan animations.
   - Visual regression (Chromatic / Percy) untuk memastikan tidak ada regresi visual.

---

## 5. Accessibility checklist
- Selalu hormati `prefers-reduced-motion`.
- Pastikan animasi tidak mengganggu fokus keyboard (hindari transform yang memindahkan fokus elemen secara tiba-tiba).
- Sediakan opsi per-komponen untuk mematikan animasi (prop `motion: 'reduced' | 'full'` atau `disableAnimation` boolean).

---

## 6. Implementation plan (recommended minimal path)
1. Standardize tokens: tambahkan duration/easing tokens di `gwind-token`.
2. Add CSS presets: `animate-fade`, `animate-slide`, `animate-scale` di token/build.
3. Provide tiny directive `v-ripple` (already exists) and `v-motion` wrapper (simple WAAPI fallback to CSS-only if reduced motion).
4. Update components incrementally: add `motion` props to Accordion/Popover/Tooltip.
5. Add docs/stories and note accessibility behaviors.

---

## 7. Next steps saya bisa bantu
- Implement contoh: tambahkan `motion` prop di `packages/ui/src/components/ui/accordion/AccordionContent.vue` dan fallback CSS (contoh ready-to-review PR).
- Buat composable `useMotion` sederhana atau directive `v-motion`.

Mau saya implementasikan contoh di `packages/ui/src/components/ui/accordion/AccordionContent.vue` sekarang? Jika ya, saya akan membuat perubahan contoh dan tests/docs kecil.
