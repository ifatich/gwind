<script setup lang="ts">
/**
 * @file RadioGroupSection.vue
 * @description Enterprise-grade documentation for RadioGroup and RadioGroupField components.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import { Badge, RadioGroup, RadioGroupField } from "@gwind/ui";
import { Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const metodePengiriman = ref("cabang");
const radioHorizontal = ref("horizontal-a");
const radioVertical = ref("vertical-a");
const radioDisabled = ref("opsi-1");

const radioProps: PropRow[] = [
  {
    name: "modelValue",
    type: "string | number | boolean",
    default: "undefined",
    description: "Nilai radio yang sedang aktif terpilih dalam grup via v-model.",
  },
  {
    name: "alignment",
    type: "'horizontal' | 'vertical'",
    default: "'vertical'",
    description: "Orientasi arah tata letak turunan opsi radio dalam kontainer.",
  },
  {
    name: "value",
    type: "string | number | boolean",
    isRequired: true,
    description: "Nilai unik representasi untuk setiap RadioGroupField.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Teks judul di sebelah tombol radio.",
  },
  {
    name: "caption",
    type: "string",
    default: "undefined",
    description: "Teks deskripsi sekunder penjelas detail opsi radio.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi pada satu opsi atau seluruh grup radio.",
  },
];
</script>

<template>
  <section id="radio-group" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Radio Group
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Kontrol seleksi tunggal saling eksklusif (mutually exclusive) dengan navigasi panah keyboard sesuai standar WAI-ARIA, tata letak horizontal maupun vertikal, serta opsi deskripsi keterangan bantuan.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Selection Primitive</Badge>
    </div>

    <!-- CARD 1: Real-World Scenario Showcase -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-gw-8">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Real-World Scenario
          </span>
          <h3 class="text-sigma font-extrabold text-foreground-primary">
            Metode Pengambilan Barang Gadai Lunas
          </h3>
        </div>
        <div class="flex items-center gap-gw-8">
          <span class="text-omega font-semibold text-foreground-secondary">Opsi Terpilih:</span>
          <code class="rounded-md bg-black-900 px-2.5 py-1 font-mono text-atom font-bold text-lime-400">
            {{ metodePengiriman }}
          </code>
        </div>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Penetapan alur penyerahan fisik marhun bagi nasabah yang telah melunasi akad pinjaman gadai.
        </p>
        <RadioGroup v-model="metodePengiriman" class="grid gap-gw-16 md:grid-cols-2">
          <RadioGroupField
            id="radio-metode-cabang"
            value="cabang"
            label="Ambil Langsung di Kantor Cabang"
            caption="Bebas biaya antar, fisik barang dapat diverifikasi langsung di hadapan penaksir."
          />
          <RadioGroupField
            id="radio-metode-kurir"
            value="kurir"
            label="Kirim via Ekspedisi Khusus Berasuransi"
            caption="Estimasi tiba 1-2 hari kerja dengan perlindungan asuransi pengiriman penuh."
          />
        </RadioGroup>
      </div>
    </div>

    <!-- CARD 2: Alignment & Layout Options -->
    <DocCard
      title="Alignment & Structural Orientations"
      description="Fleksibilitas arah penataan pilihan secara horizontal maupun vertikal untuk efisiensi ruang layar."
      badge="Orientation States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gw-24 py-gw-8">
        <!-- Horizontal Alignment -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <span class="block text-sigma font-bold text-foreground mb-gw-16">Horizontal Flow</span>
            <RadioGroup
              v-model="radioHorizontal"
              alignment="horizontal"
              class="gap-gw-16"
            >
              <RadioGroupField id="radio-h-1" value="horizontal-a" label="Pilihan A" />
              <RadioGroupField id="radio-h-2" value="horizontal-b" label="Pilihan B" />
            </RadioGroup>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Horizontal</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">alignment="horizontal"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Opsi berjejer ke samping
            </p>
          </div>
        </div>

        <!-- Vertical Alignment -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <span class="block text-sigma font-bold text-foreground mb-gw-16">Vertical Stack</span>
            <RadioGroup
              v-model="radioVertical"
              alignment="vertical"
              class="gap-gw-16"
            >
              <RadioGroupField id="radio-v-1" value="vertical-a" label="Opsi Reguler" caption="Proses standar 24 jam" />
              <RadioGroupField id="radio-v-2" value="vertical-b" label="Opsi Kilat" caption="Proses instan 15 menit" />
            </RadioGroup>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Vertical</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">alignment="vertical"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Opsi menumpuk dengan keterangan
            </p>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <span class="block text-sigma font-bold text-foreground mb-gw-16">Disabled Group</span>
            <RadioGroup
              v-model="radioDisabled"
              disabled
              alignment="vertical"
              class="gap-gw-16"
            >
              <RadioGroupField id="radio-d-1" value="opsi-1" label="Metode Transfer Bank" />
              <RadioGroupField id="radio-d-2" value="opsi-2" label="Tunai di Kasir" />
            </RadioGroup>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Seluruh opsi terkunci nonaktif
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Navigasi Keyboard:</strong> Gunakan tombol panah <kbd class="px-1 py-0.5 bg-card border border-border rounded text-atom">↑</kbd> <kbd class="px-1 py-0.5 bg-card border border-border rounded text-atom">↓</kbd> atau <kbd class="px-1 py-0.5 bg-card border border-border rounded text-atom">←</kbd> <kbd class="px-1 py-0.5 bg-card border border-border rounded text-atom">→</kbd> untuk berpindah pilihan radio tanpa menggunakan mouse.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk RadioGroup dan RadioGroupField."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="radioProps" />
    </DocCard>
  </section>
</template>
