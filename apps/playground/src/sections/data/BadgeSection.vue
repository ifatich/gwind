<script setup lang="ts">
/**
 * @file BadgeSection.vue
 * @description Enterprise-grade documentation for the Badge taxonomy & status component.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import { ref } from "vue";
import { Badge } from "@gwind/ui";
import { Sparkles, X, Info, ShieldCheck, Clock, AlertTriangle } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const isDismissibleVisible = ref(true);

const badgeProps: PropRow[] = [
  {
    name: "variant",
    type: "'green' | 'brocoli' | 'orange' | 'blue' | 'red' | 'outline'",
    default: "'green'",
    description: "Varian warna semantik untuk merepresentasikan status atau taksonomi data.",
  },
  {
    name: "modelValue",
    type: "boolean",
    default: "true",
    description: "Mengontrol visibilitas badge secara reaktif (berguna untuk mode dismissible).",
  },
  {
    name: "class",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi wadah pill badge.",
  },
  {
    name: "default",
    type: "Slot",
    isSlot: true,
    description: "Konten teks utama atau elemen label di dalam badge.",
  },
  {
    name: "rightIcon",
    type: "Slot",
    isSlot: true,
    description: "Slot opsional untuk elemen ikon di sebelah kanan teks (misal tombol hapus/close).",
  },
];
</script>

<template>
  <section id="badge" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Status Indicators & Taxonomy</p>
      <h2 class="text-xl font-bold text-foreground">Badge</h2>
      <p class="text-sigma text-foreground-secondary">
        Komponen penanda status siklus transaksi, klasifikasi hak akses nasabah, dan taksonomi kategori finansial dengan sistem palet semantik Gwind.
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
          <h3 class="text-sigma font-extrabold text-foreground">Pelacakan Status Transaksi Pinjaman Gadai</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Lifecycle Badges & Status Workflow</span>
      </div>
      <div class="playground-case-body">
        <div class="flex flex-wrap items-center gap-gw-12">
          <Badge id="badge-real-lancar">Lancar (Green)</Badge>
          <Badge id="badge-real-proses" variant="brocoli">Dalam Proses (Broccoli)</Badge>
          <Badge id="badge-real-warning" variant="orange">Mendekati Jatuh Tempo (Orange)</Badge>
          <Badge id="badge-real-verifikasi" variant="blue">Verifikasi Dokumen (Blue)</Badge>
          <Badge id="badge-real-danger" variant="red">Jatuh Tempo / Peringatan (Red)</Badge>
          <Badge id="badge-real-draft" variant="outline">Draft Pengajuan (Outline)</Badge>
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik Spektrum Warna & Interaktivitas"
      description="Eksplorasi spektrum warna status operasional, mode outline netral, serta penambahan aksi interaktif pada slot rightIcon."
      badge="Color Taxonomy"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Status Sukses & Aktif -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Sukses & Kemitraan</span>
            <div class="flex flex-wrap items-center gap-2 pt-gw-8">
              <Badge id="badge-var-green">Pembayaran Sukses</Badge>
              <Badge id="badge-var-brocoli" variant="brocoli">Nasabah Prioritas</Badge>
              <Badge id="badge-var-outline" variant="outline">Akad Standar</Badge>
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Green, Brocoli, & Outline</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">variant="green | brocoli"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Digunakan untuk indikasi transaksi berhasil, status aktif, atau identitas keanggotaan normal.
            </p>
          </div>
        </div>

        <!-- Varian 2: Perhatian, Info, & Bahaya -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Peringatan & Risiko</span>
            <div class="flex flex-wrap items-center gap-2 pt-gw-8">
              <Badge id="badge-var-blue" variant="blue">Tinjauan Analis</Badge>
              <Badge id="badge-var-orange" variant="orange">H-3 Jatuh Tempo</Badge>
              <Badge id="badge-var-red" variant="red">Kredit Macet</Badge>
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Blue, Orange, & Red</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">variant="blue | orange | red"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Digunakan untuk eskalasi prioritas perhatian, tagihan mendesak, hingga pemblokiran akun.
            </p>
          </div>
        </div>

        <!-- Varian 3: Interaktif Slot rightIcon -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Slot Ikon & Dismissible</span>
            <div class="flex flex-wrap items-center gap-2 pt-gw-8">
              <Badge
                v-if="isDismissibleVisible"
                id="badge-var-dismissible"
                variant="brocoli"
              >
                Filter: Emas 24K
                <template #rightIcon>
                  <button
                    type="button"
                    class="hover:opacity-75 focus:outline-none"
                    title="Hapus filter"
                    @click="isDismissibleVisible = false"
                  >
                    <X class="h-3 w-3" />
                  </button>
                </template>
              </Badge>
              <button
                v-else
                type="button"
                class="text-omega font-semibold text-foreground-green hover:underline"
                @click="isDismissibleVisible = true"
              >
                Reset filter
              </button>
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Trailing Icon Action</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">#rightIcon</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Memungkinkan penambahan ikon interaktif seperti tombol silang pembatalan filter pencarian.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Rekomendasi Aksesibilitas:</strong> Hindari menyampaikan informasi status hanya berdasarkan warna badge semata; selalu sertakan teks keterangan deskriptif yang jelas.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Badge."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="badgeProps" />
    </DocCard>
  </section>
</template>
