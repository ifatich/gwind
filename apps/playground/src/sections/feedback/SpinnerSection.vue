<script setup lang="ts">
/**
 * @file SpinnerSection.vue
 * @description Enterprise-grade documentation for the Spinner activity indicator component.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import { Button, Spinner } from "@gwind/ui";
import { Sparkles, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const spinnerProps: PropRow[] = [
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Skala dimensi lingkaran spinner: 'sm' (16px), 'md' (24px), atau 'lg' (32px).",
  },
  {
    name: "label",
    type: "string",
    default: "'Loading'",
    description: "Label aksesibilitas pembaca layar (screen reader) yang disematkan pada aria-label.",
  },
  {
    name: "class",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi warna teks border (border-current).",
  },
];
</script>

<template>
  <section id="spinner" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Activity Indicators</p>
      <h2 class="text-xl font-bold text-foreground">Spinner</h2>
      <p class="text-sigma text-foreground-secondary">
        Indikator aktivitas berputar CSS-driven ringkas untuk mencerminkan status pemuatan operasi asinkron, perhitungan nilai taksiran emas, serta pengiriman data formulir.
      </p>
    </div>

    <!-- CARD 1: Real-World Case -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-2.5">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Real-World Scenario
          </span>
          <h3 class="text-sigma font-extrabold text-foreground">Sinkronisasi Taksiran Emas & Async Button Trigger</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Asynchronous State Feedback</span>
      </div>
      <div class="playground-case-body">
        <div class="flex flex-wrap items-center gap-6">
          <div class="flex items-center gap-3">
            <Spinner id="spin-real-sm" size="sm" class="text-foreground-green" />
            <span class="text-omega font-semibold text-foreground-secondary">Sinkronisasi Mini (sm)</span>
          </div>
          <div class="flex items-center gap-3">
            <Spinner id="spin-real-md" size="md" class="text-foreground-green" />
            <span class="text-omega font-semibold text-foreground-secondary">Koneksi Server (md)</span>
          </div>
          <div class="flex items-center gap-3">
            <Spinner id="spin-real-lg" size="lg" class="text-foreground-green" />
            <span class="text-omega font-semibold text-foreground-secondary">Proses Verifikasi (lg)</span>
          </div>
          <Button
            id="btn-spin-real-async"
            :loading="true"
            loading-label="Menghitung taksiran emas..."
            size="md"
          >
            Simulasi Taksiran
          </Button>
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik Skala Ukuran & Pewarnaan Spinner"
      description="Eksplorasi dimensi Small (16px), Medium (24px), Large (32px), pewarnaan adaptif border-current, serta integrasi di dalam tombol aksi."
      badge="Size & Color Scales"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Skala Ukuran -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Skala Dimensi</span>
            <div class="flex items-center gap-6 pt-gw-8 text-foreground-green">
              <Spinner id="spin-var-sm" size="sm" />
              <Spinner id="spin-var-md" size="md" />
              <Spinner id="spin-var-lg" size="lg" />
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Hierarchy Scale</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">size="sm | md | lg"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Ukuran 16px untuk inline badge/button, 24px untuk dialog box, dan 32px untuk page loader.
            </p>
          </div>
        </div>

        <!-- Varian 2: Adaptasi Pewarnaan Token -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Pewarnaan Semantik</span>
            <div class="flex items-center gap-6 pt-gw-8">
              <Spinner id="spin-color-green" class="text-foreground-green" />
              <Spinner id="spin-color-blue" class="text-blue-600" />
              <Spinner id="spin-color-orange" class="text-amber-500" />
              <Spinner id="spin-color-gray" class="text-foreground-tertiary" />
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Inherited Color</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">text-current</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Garis border spinner secara otomatis mengadopsi warna teks elemen induknya.
            </p>
          </div>
        </div>

        <!-- Varian 3: Integrasi Button Loading -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Integrasi Tombol Aksi</span>
            <div class="flex flex-wrap items-center gap-2 pt-gw-8">
              <Button id="btn-spin-loading-outline" variant="outline" size="sm" :loading="true">
                Menyimpan
              </Button>
              <Button id="btn-spin-loading-primary" size="sm" :loading="true">
                Memproses
              </Button>
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Button Loading Prop</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:loading="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Komponen Button otomatis menyematkan Spinner internal dan mengunci interaksi klik.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Standar Aksesibilitas:</strong> Elemen ini dilengkapi atribut bawaan <code>role="status"</code> serta label teks tersembunyi <code>&lt;span class="sr-only"&gt;Loading&lt;/span&gt;</code> untuk pengguna screen reader.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Spinner."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="spinnerProps" />
    </DocCard>
  </section>
</template>
