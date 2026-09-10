<script setup lang="ts">
/**
 * @file AddAmountSection.vue
 * @description Enterprise-grade documentation for AddAmount quantity stepper component.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { computed, ref } from "vue";
import { AddAmount, Badge, Button } from "@gwind/ui";
import { Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const addAmountVal1 = ref(1);
const addAmountVal2 = ref(2);
const addAmountValMax = ref(10);
const addAmountValDisabled = ref(1);
const gramEmas = ref(5);

const totalBeliEmas = computed(() =>
  ((gramEmas.value || 0) * 1450000).toLocaleString("id-ID")
);

function setGramasi(val: number) {
  gramEmas.value = val;
}

const addAmountProps: PropRow[] = [
  {
    name: "modelValue",
    type: "number",
    default: "1",
    description: "Nilai kuantitas numerik saat ini yang terikat dua arah via v-model.",
  },
  {
    name: "min",
    type: "number",
    default: "1",
    description: "Batas nilai minimum. Tombol minus otomatis dinonaktifkan saat mencapai nilai ini.",
  },
  {
    name: "max",
    type: "number",
    default: "Infinity",
    description: "Batas nilai maksimum. Tombol plus otomatis dinonaktifkan saat mencapai nilai ini.",
  },
  {
    name: "step",
    type: "number",
    default: "1",
    description: "Besaran kelipatan penambahan atau pengurangan angka per klik tombol.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan kontrol secara menyeluruh dengan opasitas dan visual muted.",
  },
  {
    name: "readonly",
    type: "boolean",
    default: "false",
    description: "Mode hanya-baca tanpa mengizinkan perubahan nilai lewat klik tombol stepper.",
  },
];
</script>

<template>
  <section id="add-amount" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Add Amount
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Kontrol kuantitas bertahap (numeric stepper) dengan validasi batas batas minimum/maksimum otomatis, proteksi overflow, serta sinkronisasi nilai dua arah untuk transaksi ritel & investasi emas.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Quantity Stepper Primitive</Badge>
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
            Pembelian Gramasi Emas Batangan Galeri 24
          </h3>
        </div>
        <div class="flex items-center gap-gw-8">
          <span class="text-omega font-semibold text-foreground-secondary">Acuan Harga:</span>
          <span class="text-omega font-bold text-foreground-primary">Rp 1.450.000 / gram</span>
        </div>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Pilih pecahan kuantitas keping emas murni 24 Karat dengan kalkulator estimasi total transaksi live.
        </p>

        <!-- Quick Presets -->
        <div class="flex flex-wrap items-center gap-gw-8 mb-gw-16">
          <span class="text-omega text-foreground-secondary">Keping Populer:</span>
          <Button variant="outline" size="sm" @click="setGramasi(1)">1 Gram</Button>
          <Button variant="outline" size="sm" @click="setGramasi(5)">5 Gram</Button>
          <Button variant="outline" size="sm" @click="setGramasi(10)">10 Gram</Button>
          <Button variant="outline" size="sm" @click="setGramasi(25)">25 Gram</Button>
          <Button variant="outline" size="sm" @click="setGramasi(50)">50 Gram</Button>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-gw-16 pt-gw-16 border-t border-border-subtle">
          <div>
            <h4 class="text-sigma font-bold text-foreground">Tentukan Jumlah Gramasi</h4>
            <p class="text-omega text-foreground-secondary">Batas kuantitas 1 gram hingga 100 gram per faktur.</p>
          </div>
          <div class="flex flex-wrap items-center gap-gw-24">
            <AddAmount v-model="gramEmas" :min="1" :max="100" class="w-36" />
            <div class="text-right min-w-[140px]">
              <span class="block text-atom text-foreground-secondary font-semibold uppercase tracking-wider">Total Estimasi</span>
              <span class="text-kappa font-black text-foreground-primary">Rp {{ totalBeliEmas }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Interactive Lifecycle States -->
    <DocCard
      title="Interactive Lifecycle States"
      description="Perilaku tombol plus/minus terhadap batas nilai minimum (decrement dinonaktifkan), batas maksimum, dan status kontrol terkunci (disabled)."
      badge="Boundary States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gw-24 py-gw-8">
        <!-- Min Boundary (Default = 1) -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="py-gw-8 flex items-center justify-center">
            <AddAmount v-model="addAmountVal1" :min="1" :max="10" class="w-36" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Min Boundary (1)</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:min="1" (minus disabled)</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Tombol kurang nonaktif di batas bawah
            </p>
          </div>
        </div>

        <!-- Active Range (Value = 2) -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="py-gw-8 flex items-center justify-center">
            <AddAmount v-model="addAmountVal2" :min="1" :max="10" class="w-36" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Active Range</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">1 &lt; value &lt; 10</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Kedua tombol plus & minus aktif
            </p>
          </div>
        </div>

        <!-- Max Boundary (Value = 10) -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="py-gw-8 flex items-center justify-center">
            <AddAmount v-model="addAmountValMax" :min="1" :max="10" class="w-36" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Max Boundary (10)</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:max="10" (plus disabled)</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Tombol tambah nonaktif di batas atas
            </p>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="py-gw-8 flex items-center justify-center">
            <AddAmount v-model="addAmountValDisabled" disabled class="w-36" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Seluruh interaksi stepper terkunci
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Keamanan Input:</strong> AddAmount mencegah masukan nilai di luar rentang <code>[min, max]</code> serta mendukung properti <code>step</code> untuk kelipatan bertahap kustom.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk AddAmount."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="addAmountProps" />
    </DocCard>
  </section>
</template>
