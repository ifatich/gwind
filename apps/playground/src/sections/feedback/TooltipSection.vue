<script setup lang="ts">
/**
 * @file TooltipSection.vue
 * @description Enterprise-grade interactive showcase for Tooltip assistive hints and definitions.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@gwind/ui";
import { CircleHelp, Sparkles, Info, HelpCircle, ArrowUp, ArrowDown, ArrowRight } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const tooltipProps: PropRow[] = [
  {
    name: "delayDuration",
    type: "number",
    default: "700",
    description: "Durasi penundaan (dalam milidetik) sebelum konten tooltip muncul saat kursor diarahkan.",
  },
  {
    name: "side",
    type: "'top' | 'right' | 'bottom' | 'left'",
    default: "'top'",
    description: "Sisi penempatan gelembung tooltip relatif terhadap elemen pemicu.",
  },
  {
    name: "align",
    type: "'start' | 'center' | 'end'",
    default: "'center'",
    description: "Penjajaran titik pusat gelembung tooltip terhadap sumbu elemen pemicu.",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "4",
    description: "Jarak celah (dalam piksel) antara panah penunjuk tooltip dan tepi elemen pemicu.",
  },
  {
    name: "title",
    type: "string",
    default: "undefined",
    description: "Teks judul tebal opsional di bagian atas konten tooltip.",
  },
  {
    name: "class",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk memodifikasi tampilan TooltipContent.",
  },
  {
    name: "header",
    type: "Slot",
    isSlot: true,
    description: "Slot kustom untuk merender tata letak header tooltip yang kompleks.",
  },
  {
    name: "default",
    type: "Slot",
    isSlot: true,
    description: "Slot utama untuk konten teks penjelasan atau petunjuk bantuan kontekstual.",
  },
];
</script>

<template>
  <section id="tooltip" class="playground-section playground-panel space-y-5">
    <!-- Section Header -->
    <div>
      <p class="playground-eyebrow">Assistive Hints & Definitions</p>
      <h2 class="text-xl font-bold text-foreground">Tooltip</h2>
      <p class="text-sigma text-foreground-secondary">
        Petunjuk mikro berbasis hover dan fokus keyboard dengan dukungan panah arah otomatis, penataan posisi multi-arah, dan judul definisi kontekstual.
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
          <h3 class="text-sigma font-extrabold text-foreground">Bantuan & Definisi Istilah Fintech Gadai</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Assistive Micro Tips</span>
      </div>
      <div class="playground-case-body">
        <div class="flex flex-wrap items-center gap-4">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button id="btn-tooltip-biaya-titip" variant="ghost" class="text-foreground-green font-semibold">
                <CircleHelp class="h-4 w-4" />
                Apa itu Biaya Titip Emas?
              </Button>
            </TooltipTrigger>
            <TooltipContent id="tooltip-content-biaya-titip" title="Biaya Titip Emas Batangan">
              Biaya titip fasilitas brankas aman Rp 2.500 per bulan per akun rekening tabungan emas aktif.
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <Button id="btn-tooltip-sewa-modal" variant="ghost" class="text-foreground-green font-semibold">
                <HelpCircle class="h-4 w-4" />
                Rumus Sewa Modal
              </Button>
            </TooltipTrigger>
            <TooltipContent id="tooltip-content-sewa-modal" title="Formula Perhitungan Sewa Modal">
              (Uang Pinjaman x Tarif Sewa Modal Golongan x Jangka Waktu) / 15 Hari.
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <Button id="btn-tooltip-grace-period" variant="ghost" class="text-foreground-green font-semibold">
                <Info class="h-4 w-4" />
                Masa Tenggang SBG
              </Button>
            </TooltipTrigger>
            <TooltipContent id="tooltip-content-grace-period" title="Masa Tenggang Lelang">
              Nasabah memperoleh waktu toleransi pelunasan selama 7 hari kalender pasca jatuh tempo sebelum lelang agunan.
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Penempatan Arah Tooltip"
      description="Pengaturan penempatan sisi kompas (Top, Bottom, Right) untuk memandu pengguna tanpa menutupi konten penting lainnya."
      badge="Tooltip Directions"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Top Placement -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Tooltip>
              <TooltipTrigger as-child>
                <Button id="btn-tooltip-top" variant="outline" class="w-full justify-center">
                  <ArrowUp class="h-4 w-4" />
                  Arah Atas (Top)
                </Button>
              </TooltipTrigger>
              <TooltipContent id="tooltip-content-top" side="top" title="Tooltip Atas">
                Muncul di atas pemicu, arah umum untuk tombol aksi toolbar.
              </TooltipContent>
            </Tooltip>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Top Placement</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">side="top"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Posisi standar bawaan yang paling sering digunakan pada elemen tombol atau ikon form.
            </p>
          </div>
        </div>

        <!-- Varian 2: Bottom Placement -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Tooltip>
              <TooltipTrigger as-child>
                <Button id="btn-tooltip-bottom" variant="outline" class="w-full justify-center">
                  <ArrowDown class="h-4 w-4" />
                  Arah Bawah (Bottom)
                </Button>
              </TooltipTrigger>
              <TooltipContent id="tooltip-content-bottom" side="bottom" title="Tooltip Bawah">
                Muncul di bawah elemen, ideal untuk header bar dan menu navigasi atas.
              </TooltipContent>
            </Tooltip>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Bottom Placement</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">side="bottom"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Mencegah gelembung tooltip terpotong saat elemen berada persis di dekat batas atas layar.
            </p>
          </div>
        </div>

        <!-- Varian 3: Right Placement -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Tooltip>
              <TooltipTrigger as-child>
                <Button id="btn-tooltip-right" variant="outline" class="w-full justify-center">
                  <ArrowRight class="h-4 w-4" />
                  Arah Samping (Right)
                </Button>
              </TooltipTrigger>
              <TooltipContent id="tooltip-content-right" side="right" title="Tooltip Kanan">
                Muncul di samping kanan pemicu, sangat sesuai untuk menu sidebar vertikal.
              </TooltipContent>
            </Tooltip>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Right Placement</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">side="right"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Sangat pas dimanfaatkan pada ikon panel samping (sidebar) dan bilah navigasi vertikal.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Aksesibilitas Tooltip:</strong> Terpicu secara konsisten melalui kursor mouse (hover) maupun fokus keyboard (Tab), dan secara otomatis menautkan atribut <code>aria-describedby</code> ke elemen pemicu.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Tooltip."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="tooltipProps" />
    </DocCard>
  </section>
</template>
