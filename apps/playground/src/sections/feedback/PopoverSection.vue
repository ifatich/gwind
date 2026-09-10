<script setup lang="ts">
/**
 * @file PopoverSection.vue
 * @description Enterprise-grade interactive showcase for Popover floating surfaces.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import {
  Button,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@gwind/ui";
import { Sparkles, Info, TrendingUp, Filter, MoreHorizontal, Check } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const popoverProps: PropRow[] = [
  {
    name: "open",
    type: "boolean",
    default: "false",
    description: "Status visibilitas popover secara terkontrol (controlled state v-model:open).",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "Status keterbukaan awal popover secara tidak terkontrol (uncontrolled).",
  },
  {
    name: "modal",
    type: "boolean",
    default: "false",
    description: "Menentukan apakah interaksi di luar area popover diblokir saat popover terbuka.",
  },
  {
    name: "side",
    type: "'top' | 'right' | 'bottom' | 'left'",
    default: "'bottom'",
    description: "Sisi penempatan gelembung popover relatif terhadap elemen pemicu.",
  },
  {
    name: "align",
    type: "'start' | 'center' | 'end'",
    default: "'center'",
    description: "Penjajaran tepi popover terhadap sumbu referensi elemen pemicu.",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "4",
    description: "Jarak celah (dalam piksel) antara wadah popover dan elemen trigger.",
  },
  {
    name: "title",
    type: "string",
    default: "undefined",
    description: "Judul teks opsional yang otomatis merender header di dalam PopoverContent.",
  },
  {
    name: "class",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi wadah PopoverContent.",
  },
  {
    name: "header",
    type: "Slot",
    isSlot: true,
    description: "Slot kustom untuk menggantikan tata letak header PopoverContent bawaan.",
  },
  {
    name: "default",
    type: "Slot",
    isSlot: true,
    description: "Slot konten utama yang menampung rincian informasi atau elemen interaktif.",
  },
];
</script>

<template>
  <section id="popover" class="playground-section playground-panel space-y-5">
    <!-- Section Header -->
    <div>
      <p class="playground-eyebrow">Floating Surfaces & Overlays</p>
      <h2 class="text-xl font-bold text-foreground">Popover</h2>
      <p class="text-sigma text-foreground-secondary">
        Permukaan mengambang (floating surface) non-modal dengan penempatan presisi, dukungan header bawaan, pemosisian anchor, serta penutupan otomatis saat klik di luar area.
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
          <h3 class="text-sigma font-extrabold text-foreground">Rincian Taksiran Kadar Emas & Harga Acuan</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Card-Styled Floating Surface</span>
      </div>
      <div class="playground-case-body">
        <div class="flex flex-wrap items-center gap-4">
          <Popover>
            <PopoverAnchor as-child>
              <span class="inline-flex h-9 items-center rounded-full bg-background px-3 text-sigma font-bold text-foreground border border-border-subtle">
                Anchor SBG: #2026-88
              </span>
            </PopoverAnchor>
            <PopoverTrigger as-child>
              <Button id="btn-popover-real">
                <TrendingUp class="h-4 w-4" />
                Lihat Rincian Taksiran Emas
              </Button>
            </PopoverTrigger>
            <PopoverContent id="popover-content-real" class="w-80" title="Rincian Taksiran Emas (24K)">
              <div class="space-y-2 text-sigma text-foreground-secondary">
                <div class="flex justify-between text-omega">
                  <span>Kadar Kemurnian</span>
                  <strong class="text-foreground">99.99% (24 Karat)</strong>
                </div>
                <div class="flex justify-between text-omega">
                  <span>Berat Bersih</span>
                  <strong class="text-foreground">10.50 gram</strong>
                </div>
                <div class="flex justify-between text-omega">
                  <span>Nilai Taksiran Pasar</span>
                  <strong class="text-foreground-green">Rp 15.225.000</strong>
                </div>
                <p class="text-omega text-foreground-secondary pt-2 border-t border-border-subtle">
                  Nilai taksiran mengikuti harga acuan pasar emas resmi Pegadaian hari ini pukul 09:00 WIB.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Variasi Penempatan Popover"
      description="Eksplorasi variasi alignment dan sumbu koordinat popover untuk kebutuhan panel filter, ringkasan profil, maupun menu opsi."
      badge="Popover Alignments"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Center Alignment -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Popover>
              <PopoverTrigger as-child>
                <Button id="btn-popover-center" variant="secondary" class="w-full justify-center">
                  Tampilkan Ringkasan Akun
                </Button>
              </PopoverTrigger>
              <PopoverContent id="popover-content-center" align="center" side="bottom" class="w-72" title="Informasi Nasabah">
                <div class="space-y-2 text-omega text-foreground-secondary">
                  <div class="flex justify-between">
                    <span>CIF Nasabah</span>
                    <strong class="text-foreground font-mono">00918231</strong>
                  </div>
                  <div class="flex justify-between">
                    <span>Status KYC</span>
                    <span class="inline-flex items-center gap-1 font-bold text-foreground-green">
                      <Check class="h-3 w-3" /> Terverifikasi
                    </span>
                  </div>
                  <div class="flex justify-between">
                    <span>Cabang Domisili</span>
                    <strong class="text-foreground">CP Salemba</strong>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Center Alignment</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">align="center"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Penjajaran simetris di tengah pemicu, cocok untuk kartu data ringkas dan dialog mikro.
            </p>
          </div>
        </div>

        <!-- Varian 2: Start Alignment -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Popover>
              <PopoverTrigger as-child>
                <Button id="btn-popover-start" variant="outline" class="w-full justify-center">
                  <Filter class="h-4 w-4" />
                  Filter Transaksi
                </Button>
              </PopoverTrigger>
              <PopoverContent id="popover-content-start" align="start" side="bottom" class="w-72" title="Penyaringan Data">
                <div class="space-y-2 text-omega">
                  <p class="text-foreground-secondary">Pilih kategori status pinjaman:</p>
                  <div class="space-y-1 text-sigma">
                    <label class="flex items-center gap-2 text-foreground cursor-pointer">
                      <input type="checkbox" checked class="accent-lime-600 rounded" />
                      Aktif Berjalan
                    </label>
                    <label class="flex items-center gap-2 text-foreground cursor-pointer">
                      <input type="checkbox" class="accent-lime-600 rounded" />
                      Jatuh Tempo (H-7)
                    </label>
                    <label class="flex items-center gap-2 text-foreground cursor-pointer">
                      <input type="checkbox" class="accent-lime-600 rounded" />
                      Lunas Selesai
                    </label>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Start Alignment</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">align="start"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Sejajar dengan sisi tepi awal tombol trigger, sangat ideal untuk dropdown filter dan form popover.
            </p>
          </div>
        </div>

        <!-- Varian 3: End Alignment / Top Placement -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Popover>
              <PopoverTrigger as-child>
                <Button id="btn-popover-end" variant="tertiary" class="w-full justify-center">
                  <MoreHorizontal class="h-4 w-4" />
                  Menu Opsi Ekstra
                </Button>
              </PopoverTrigger>
              <PopoverContent id="popover-content-end" align="end" side="top" class="w-64" title="Tindakan Pinjaman">
                <div class="space-y-1.5 text-omega">
                  <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-background text-foreground font-medium transition-colors">
                    Cetak Ulang Bukti SBG
                  </button>
                  <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-background text-foreground font-medium transition-colors">
                    Kirim Salinan via Email
                  </button>
                  <button type="button" class="w-full text-left px-2 py-1.5 rounded hover:bg-background text-red-600 font-medium transition-colors">
                    Laporkan Kehilangan Surat
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">End Alignment (Top)</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">side="top" align="end"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Muncul mengambang ke arah atas dengan tepi kanan sejajar, menghindari pemotongan layar di tepi tabel.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Interaktivitas Popover:</strong> Menutup otomatis saat pengguna mengklik area luar (click-outside) atau menekan tombol <code>Esc</code> pada keyboard, mempertahankan alur interaksi natural.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Popover."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="popoverProps" />
    </DocCard>
  </section>
</template>
