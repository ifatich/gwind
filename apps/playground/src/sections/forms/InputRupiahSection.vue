<script setup lang="ts">
/**
 * @file InputRupiahSection.vue
 * @description Enterprise-grade documentation for InputRupiah currency component.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import { Badge, Button, InputRupiah } from "@gwind/ui";
import { Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const rupiahValue = ref<number | null>(1000000);
const simulasiPinjaman = ref<number | null>(15000000);
const tabunganEmas = ref<number | null>(500000);
const rupiahError = ref<number | null>(10000);
const rupiahDisabled = ref<number | null>(5000000);

function setPreset(amount: number) {
  simulasiPinjaman.value = amount;
}

function resetSimulasi() {
  simulasiPinjaman.value = 10000000;
  tabunganEmas.value = 500000;
}

const inputRupiahProps: PropRow[] = [
  {
    name: "modelValue",
    type: "number | null",
    default: "null",
    description: "Nilai integer murni mata uang (tanpa pemisah titik/koma) yang diikat secara dua arah via v-model.",
  },
  {
    name: "id",
    type: "string",
    default: "auto-generated",
    description: "Identifier unik elemen DOM untuk binding label & atribut aksesibilitas.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Teks label formal di atas field input mata uang.",
  },
  {
    name: "caption",
    type: "string",
    default: "undefined",
    description: "Keterangan bantuan di bawah field (contoh: limit transaksi atau informasi biaya).",
  },
  {
    name: "error",
    type: "string",
    default: "undefined",
    description: "Pesan error validasi batas minimal/maksimal plafon pinjaman.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi kontrol dan memberi visual permukaan muted.",
  },
];
</script>

<template>
  <section id="input-rupiah" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Input Rupiah
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Komponen input nominal mata uang khusus ekosistem fintech dengan pemformat ribuan otomatis (<code>id-ID</code>), normalisasi teks salin-tempel (paste), dan emisi nilai integer mentah untuk pemrosesan kalkulasi keuangan terpadu.
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
            Simulasi Pengajuan Pinjaman Gadai Emas
          </h3>
        </div>
        <div class="flex flex-wrap items-center gap-gw-8">
          <span class="text-omega font-semibold text-foreground-secondary">Raw Integer:</span>
          <code class="rounded-md bg-black-900 px-2.5 py-1 font-mono text-atom font-bold text-lime-400">
            {{ simulasiPinjaman === null ? 'null' : simulasiPinjaman }}
          </code>
        </div>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Kalkulasi real-time uang pinjaman marhun bih dan saldo top-up tabungan emas nasabah dengan preset nominal cepat.
        </p>

        <!-- Quick Presets -->
        <div class="flex flex-wrap items-center gap-gw-8 mb-gw-16">
          <span class="text-omega text-foreground-secondary">Pilihan Cepat:</span>
          <Button variant="outline" size="sm" @click="setPreset(5000000)">Rp 5 Jt</Button>
          <Button variant="outline" size="sm" @click="setPreset(15000000)">Rp 15 Jt</Button>
          <Button variant="outline" size="sm" @click="setPreset(50000000)">Rp 50 Jt</Button>
          <Button variant="ghost" size="sm" @click="resetSimulasi">Reset</Button>
        </div>

        <div class="grid gap-gw-16 md:grid-cols-2">
          <InputRupiah
            id="input-rupiah-simulasi"
            v-model="simulasiPinjaman"
            label="Uang Pinjaman Diajukan"
            placeholder="Masukkan nominal rupiah"
            caption="Rentang pinjaman: Rp 50.000 - Rp 100.000.000"
          />
          <InputRupiah
            id="input-rupiah-tabungan"
            v-model="tabunganEmas"
            label="Top-Up Saldo Tabungan Emas"
            placeholder="Nominal top up"
            caption="Otomatis terkonversi ke gramasi emas murni 24K"
          />
        </div>
      </div>
    </div>

    <!-- CARD 2: Interactive Lifecycle States -->
    <DocCard
      title="Interactive Lifecycle States"
      description="Ragam status operasional InputRupiah dari nilai awal terformat, validasi batas limit nominal (error), hingga mode baca-saja nonaktif (disabled)."
      badge="Currency States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gw-24 py-gw-8">
        <!-- Default State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputRupiah
              id="input-rupiah-default"
              v-model="rupiahValue"
              label="Nominal Standar"
              placeholder="Placeholder"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Default State</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:modelValue="1000000"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Otomatis terformat Rp 1.000.000
            </p>
          </div>
        </div>

        <!-- Error State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputRupiah
              id="input-rupiah-error"
              v-model="rupiahError"
              label="Batas Minimum Pinjaman"
              input-class="border-destructive focus-visible:border-destructive"
              error="Jumlah pinjaman minimal Rp 50.000"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-destructive">Error Validation State</span>
              <code class="text-atom font-mono text-destructive font-semibold">error="Jumlah pinjaman..."</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menampilkan keterangan batas validasi
            </p>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputRupiah
              id="input-rupiah-disabled"
              v-model="rupiahDisabled"
              label="Maksimum Limit Plafon"
              disabled
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Field terkunci dengan latar muted
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Integritas Data:</strong> Komponen ini memisahkan representasi tampilan (<em>Display Value</em>, e.g. <code>15.000.000</code>) dari model data (<em>Raw Value</em> integer <code>15000000</code>).</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk InputRupiah."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="inputRupiahProps" />
    </DocCard>
  </section>
</template>
