<script setup lang="ts">
/**
 * @file LinkSection.vue
 * @description Enterprise-grade interactive documentation for the Link component.
 * Strictly consumes Gwind Design Tokens for colors, typography, spacing, radius, and shadows.
 */
import { Badge, Link } from "@gwind/ui";
import { ExternalLink, Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const linkProps: PropRow[] = [
  {
    name: "href",
    type: "string",
    default: "'#'",
    description: "URL tujuan navigasi hyperlink.",
  },
  {
    name: "target",
    type: "'_blank' | '_self' | '_parent' | '_top'",
    default: "undefined",
    description: "Konteks penjelajahan jendela/tab peramban.",
  },
  {
    name: "rel",
    type: "string",
    default: "undefined",
    description: "Hubungan relasi dokumen (otomatis diinjeksi 'noreferrer' saat target='_blank').",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan aksi klik, mematikan cursor pointer, dan menghapus atribut href.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Delegasi render DOM ke elemen anak melalui Reka UI Headless Primitive.",
  },
];
</script>

<template>
  <section id="link" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">02 • General & Actions</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">Link</h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Tautan teks semantik inline dan eksternal dengan transisi hover underline, proteksi keamanan <code>target="_blank"</code> otomatis (<code>rel="noreferrer"</code>), serta kepatuhan status keyboard focus-visible.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Navigation Action</Badge>
    </div>

    <!-- CARD 1: Real-World Scenario: Syarat & Ketentuan -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-gw-8">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Real-World Scenario
          </span>
          <h3 class="text-sigma font-extrabold text-foreground-primary">Persetujuan Syarat & Ketentuan Akad Gadai</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Inline & External Links</span>
      </div>
      <div class="playground-case-body">
        <p class="text-sigma text-foreground-secondary leading-relaxed">
          Dengan menekan tombol submit pengajuan, nasabah menyatakan telah membaca dan menyetujui
          <Link href="#">Syarat & Ketentuan Layanan</Link> serta
          <Link href="#">Kebijakan Privasi Nasabah</Link> yang berlaku di PT Pegadaian.
        </p>
      </div>
    </div>

    <!-- CARD 2: Interactive Variants & Navigation Targets -->
    <DocCard
      title="Interactive Variants & Target Behaviors"
      description="Ragam varian tautan standar internal, tautan eksternal dengan icon indikator, dan status link dinonaktifkan."
      badge="Hyperlink Behaviors"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-gw-24 py-gw-8">
        <!-- Default Internal Link -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[40px]">
            <Link href="#">Lihat Riwayat SBG</Link>
          </div>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Internal Link</span>
            <code class="block text-atom font-mono text-foreground-green font-semibold">href="#"</code>
            <span class="block text-omega text-foreground-secondary">Navigasi satu domain</span>
          </div>
        </div>

        <!-- External Link with Icon -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[40px]">
            <Link href="https://pegadaian.co.id" target="_blank">
              Portal Resmi <ExternalLink class="h-3.5 w-3.5 ml-0.5 text-foreground-green" />
            </Link>
          </div>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">External Portal</span>
            <code class="block text-atom font-mono text-foreground-tertiary">target="_blank"</code>
            <span class="block text-omega text-foreground-secondary">Tab baru aman</span>
          </div>
        </div>

        <!-- Disabled Link -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[40px]">
            <Link href="#" disabled>Tautan Nonaktif</Link>
          </div>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Disabled State</span>
            <code class="block text-atom font-mono text-foreground-tertiary">:disabled="true"</code>
            <span class="block text-omega text-foreground-secondary">Klik dinonaktifkan</span>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Keamanan Web:</strong> Komponen <code>Link</code> secara otomatis menginjeksikan <code>rel="noreferrer"</code> saat mendeteksi <code>target="_blank"</code> untuk mencegah eksploitasi <em>reverse tabnabbing</em>.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Inline Flow & Paragraph Integration -->
    <DocCard
      title="Inline Context & Typographical Flow"
      description="Perilaku tautan ketika disematkan langsung di dalam teks paragraf multi-baris dengan underline-offset."
      badge="Typography Integration"
      badge-variant="outline"
    >
      <div class="py-gw-8 space-y-gw-16 max-w-2xl">
        <p class="text-omicron text-foreground leading-relaxed">
          Untuk informasi lebih lanjut mengenai simulasi perhitungan bunga gadai emas dan biaya titip, Anda dapat membaca
          <Link href="#">Panduan Lengkap Taksiran Emas</Link> atau mengunjungi
          <Link href="https://pegadaian.co.id" target="_blank">Kantor Cabang Terdekat <ExternalLink class="h-3 w-3 inline" /></Link>
          pada jam operasional kerja hari Senin sampai Jumat.
        </p>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Aksesibilitas Inline:</strong> Tautan inline memiliki <code>underline-offset-4</code> untuk memastikan keterbacaan garis bawah tidak memotong huruf g, j, p, q, dan y.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 4: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Link."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="linkProps" />
    </DocCard>
  </section>
</template>
