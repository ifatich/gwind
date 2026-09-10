<script setup lang="ts">
/**
 * @file InputPersentaseSection.vue
 * @description Enterprise-grade documentation for InputPersentase rate component.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import { Badge, Button, InputPersentase } from "@gwind/ui";
import { Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const bungaPinjaman = ref<number | null>(1.15);
const diskonPromo = ref<number | null>(15);
const defaultPersen = ref<number | null>(2.5);
const errorPersen = ref<number | null>(3.75);
const disabledPersen = ref<number | null>(0.75);

function setBunga(rate: number) {
  bungaPinjaman.value = rate;
}

function resetForm() {
  bungaPinjaman.value = 1.15;
  diskonPromo.value = 15;
}

const inputPersentaseProps: PropRow[] = [
  {
    name: "modelValue",
    type: "number | null",
    default: "null",
    description: "Nilai float numerik persentase yang diikat secara dua arah via v-model.",
  },
  {
    name: "id",
    type: "string",
    default: "auto-generated",
    description: "Identifier unik elemen DOM untuk binding label dan keterbacaan screen reader.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Teks judul label formal di atas field input persentase.",
  },
  {
    name: "caption",
    type: "string",
    default: "undefined",
    description: "Teks keterangan bantuan atau ketentuan suku bunga di bawah field.",
  },
  {
    name: "error",
    type: "string",
    default: "undefined",
    description: "Pesan validasi batas regulasi bunga yang memicu indikator border merah.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan field dan mencegah interaksi modifikasi rasio nilai.",
  },
];
</script>

<template>
  <section id="input-persentase" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Input Persentase
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Komponen masukan rasio persentase khusus perhitungan bunga pinjaman, margin sewa modal gadai, dan diskon transaksi dengan ornamen sufiks (<code>%</code>) otomatis serta pemisahan nilai koma/desimal terstandar.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Fintech Component</Badge>
    </div>

    <!-- CARD 1: Real-World Scenario Showcase -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-gw-8">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Fintech Scenario
          </span>
          <h3 class="text-sigma font-extrabold text-foreground-primary">
            Perhitungan Tarif Sewa Modal & Promo
          </h3>
        </div>
        <div class="flex flex-wrap items-center gap-gw-8">
          <span class="text-omega font-semibold text-foreground-secondary">Emitted Rate:</span>
          <code class="rounded-md bg-black-900 px-2.5 py-1 font-mono text-atom font-bold text-lime-400">
            {{ bungaPinjaman === null ? 'null' : `${bungaPinjaman}%` }}
          </code>
        </div>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Simulasi penetapan rasio sewa modal per 15 hari kalender dan diskon biaya administrasi pinjaman nasabah.
        </p>

        <!-- Quick Presets -->
        <div class="flex flex-wrap items-center gap-gw-8 mb-gw-16">
          <span class="text-omega text-foreground-secondary">Preset Sewa Modal:</span>
          <Button variant="outline" size="sm" @click="setBunga(0.75)">0.75% (KCA Reguler)</Button>
          <Button variant="outline" size="sm" @click="setBunga(1.15)">1.15% (Krasida)</Button>
          <Button variant="outline" size="sm" @click="setBunga(1.25)">1.25% (Kreasi)</Button>
          <Button variant="ghost" size="sm" @click="resetForm">Reset</Button>
        </div>

        <div class="grid gap-gw-16 md:grid-cols-2">
          <div class="space-y-gw-8">
            <InputPersentase
              id="input-persentase-bunga"
              v-model="bungaPinjaman"
              label="Tarif Sewa Modal Bulanan"
              placeholder="0.00"
              caption="Perhitungan bunga efektif berbasis regulasi OJK"
            />
          </div>

          <div class="space-y-gw-8">
            <InputPersentase
              id="input-persentase-diskon"
              v-model="diskonPromo"
              label="Persentase Diskon Promo"
              placeholder="0.00"
              caption="Potongan langsung biaya administrasi akad gadai"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Interactive Lifecycle States -->
    <DocCard
      title="Interactive Lifecycle States"
      description="Status operasional komponen dari nilai standar terisi, validasi peringatan regulasi OJK (error), hingga mode terkunci (disabled)."
      badge="Rate States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gw-24 py-gw-8">
        <!-- Default State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputPersentase
              id="input-persentase-default"
              v-model="defaultPersen"
              label="Tarif Standar"
              placeholder="0.00"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Default State</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:modelValue="2.5"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Terbaca sebagai 2.5%
            </p>
          </div>
        </div>

        <!-- Error State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputPersentase
              id="input-persentase-error"
              v-model="errorPersen"
              label="Tarif Sewa Modal"
              input-class="border-destructive focus-visible:border-destructive"
              error="Maksimum tarif sewa modal OJK adalah 2.50%"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-destructive">Error Validation State</span>
              <code class="text-atom font-mono text-destructive font-semibold">error="Maksimum tarif..."</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Peringatan validasi batas legal
            </p>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputPersentase
              id="input-persentase-disabled"
              v-model="disabledPersen"
              label="Tarif Khusus Karyawan"
              disabled
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Field terkunci untuk hak akses tertentu
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Format Desimal:</strong> Mendukung tanda koma (<code>,</code>) maupun titik (<code>.</code>) saat pengetikan dan otomatis dinormalisasi menjadi float standar.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk InputPersentase."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="inputPersentaseProps" />
    </DocCard>
  </section>
</template>
