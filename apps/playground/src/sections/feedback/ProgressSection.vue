<script setup lang="ts">
/**
 * @file ProgressSection.vue
 * @description Enterprise-grade documentation for the Progress bar component.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import { ref } from "vue";
import { Button, Progress } from "@gwind/ui";
import { Sparkles, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const progressValue = ref(85);

const progressProps: PropRow[] = [
  {
    name: "modelValue",
    type: "number",
    default: "0",
    description: "Nilai persentase progres saat ini (antara 0 hingga 100).",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "Nilai batas maksimum rentang perhitungan progres.",
  },
  {
    name: "getValueLabel",
    type: "(value: number, max: number) => string",
    default: "undefined",
    description: "Fungsi kustom untuk memformat label nilai aksesibilitas aria-valuetext.",
  },
  {
    name: "class",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi tinggi (misal: h-2, h-3) atau warna trek latar.",
  },
];
</script>

<template>
  <section id="progress" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Deterministic Loaders</p>
      <h2 class="text-xl font-bold text-foreground">Progress Bar</h2>
      <p class="text-sigma text-foreground-secondary">
        Bilah penanda progres deterministik untuk mencerminkan persentase kelengkapan pengisian form, tahapan verifikasi KYC, serta status upload berkas persyaratan.
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
          <h3 class="text-sigma font-extrabold text-foreground">Kelengkapan Data Verifikasi Nasabah (KYC)</h3>
        </div>
        <span class="text-omega font-mono font-bold text-foreground-green bg-lime-100 px-2.5 py-0.5 rounded-full">
          {{ progressValue }}% Selesai
        </span>
      </div>
      <div class="playground-case-body space-y-4">
        <Progress id="progress-real-kyc" :model-value="progressValue" />
        <div class="pt-2 flex flex-wrap items-center justify-between gap-4">
          <span class="text-omega text-foreground-secondary">Simulasi perubahan tahapan verifikasi data nasabah:</span>
          <div class="flex items-center gap-1.5 flex-wrap">
            <Button
              id="btn-prog-minus-25"
              size="sm"
              variant="outline"
              :disabled="progressValue <= 0"
              @click="progressValue = Math.max(0, progressValue - 25)"
            >
              -25%
            </Button>
            <Button
              id="btn-prog-plus-25"
              size="sm"
              variant="outline"
              :disabled="progressValue >= 100"
              @click="progressValue = Math.min(100, progressValue + 25)"
            >
              +25%
            </Button>
            <Button
              id="btn-prog-100"
              size="sm"
              variant="outline"
              @click="progressValue = 100"
            >
              100% (Selesai)
            </Button>
            <Button
              id="btn-prog-reset"
              size="sm"
              variant="ghost"
              @click="progressValue = 0"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Variasi Nilai Progres"
      description="Eksplorasi representasi nilai 25% (tahap awal), 60% (sedang berjalan), 100% (penuh), serta variasi ketebalan bilah."
      badge="Progress States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Tahap Awal (25%) -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-16">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Tahap Awal</span>
              <span class="text-atom font-mono font-bold text-foreground-secondary">25%</span>
            </div>
            <Progress id="progress-var-25" :model-value="25" class="h-2.5" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Early Step</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:model-value="25"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Indikasi fase pengunggahan dokumen dasar KTP dan nomor telepon nasabah.
            </p>
          </div>
        </div>

        <!-- Varian 2: Sedang Berjalan (60%) -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-16">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Sedang Berjalan</span>
              <span class="text-atom font-mono font-bold text-foreground-green">60%</span>
            </div>
            <Progress id="progress-var-60" :model-value="60" class="h-2.5" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">In Progress</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:model-value="60"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Indikasi proses penilaian taksiran karatase fisik emas oleh petugas cabang.
            </p>
          </div>
        </div>

        <!-- Varian 3: Lengkap Sempurna (100%) -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-16">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Selesai Penuh</span>
              <span class="text-atom font-mono font-bold text-foreground-green">100%</span>
            </div>
            <Progress id="progress-var-100" :model-value="100" class="h-2.5" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Completed</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:model-value="100"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Indikasi dana pinjaman telah berhasil dicairkan penuh ke rekening bank.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Animasi Halus:</strong> Perubahan nilai <code>modelValue</code> secara otomatis menggunakan animasi transisi CSS cubic-bezier sepanjang 660ms tanpa jitter.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Progress Bar."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="progressProps" />
    </DocCard>
  </section>
</template>
