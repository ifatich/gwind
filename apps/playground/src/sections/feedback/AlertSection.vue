<script setup lang="ts">
/**
 * @file AlertSection.vue
 * @description Enterprise-grade documentation for the Alert notification banner family.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import { ref } from "vue";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@gwind/ui";
import {
  AlertCircle,
  Check,
  Sparkles,
  Info as InfoIcon,
  AlertTriangle,
  Info,
} from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const isDismissed = ref(false);

const alertProps: PropRow[] = [
  {
    name: "variant",
    type: "'default' | 'destructive' | 'success' | 'warning' | 'info'",
    default: "'default'",
    description: "Gaya warna semantik untuk merefleksikan tingkat urgensi pesan alert.",
  },
  {
    name: "showClose",
    type: "boolean",
    default: "false",
    description: "Menampilkan tombol 'X' di sudut kanan atas untuk menutup banner alert.",
  },
  {
    name: "class",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi wadah banner alert.",
  },
  {
    name: "close",
    type: "() => void",
    isEvent: true,
    description: "Event emisi yang dipicu saat tombol close ('X') diklik pengguna.",
  },
  {
    name: "default",
    type: "Slot",
    isSlot: true,
    description: "Slot untuk ikon, AlertTitle, dan AlertDescription.",
  },
];
</script>

<template>
  <section id="alert" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">System Banners & Feedback</p>
      <h2 class="text-xl font-bold text-foreground">Alert</h2>
      <p class="text-sigma text-foreground-secondary">
        Spanduk notifikasi inline untuk mengomunikasikan pesan transaksi berhasil, peringatan batas jatuh tempo pinjaman, serta informasi operasional sistem.
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
          <h3 class="text-sigma font-extrabold text-foreground">Notifikasi Sistem & Peringatan Jatuh Tempo SBG</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Inline Banner Feedback</span>
      </div>
      <div class="playground-case-body space-y-4">
        <Alert id="alert-real-success" variant="success">
          <Check class="h-4 w-4 text-foreground-green" />
          <AlertTitle>Pembayaran Angsuran Berhasil Disetujui</AlertTitle>
          <AlertDescription>
            Transaksi pelunasan sewa modal sebesar Rp 150.000 telah diverifikasi otomatis oleh sistem core-banking Pegadaian.
          </AlertDescription>
        </Alert>

        <Alert
          v-if="!isDismissed"
          id="alert-real-destructive"
          variant="destructive"
          show-close
          @close="isDismissed = true"
        >
          <AlertCircle class="h-4 w-4" />
          <AlertTitle>Peringatan Jatuh Tempo Pinjaman</AlertTitle>
          <AlertDescription>
            Masa pinjaman gadai nomor SBG-99210 akan jatuh tempo dalam 3 hari ke depan. Harap segera lakukan perpanjangan atau pelunasan.
          </AlertDescription>
        </Alert>
        <button
          v-else
          type="button"
          class="text-omega font-semibold text-foreground-green hover:underline"
          @click="isDismissed = false"
        >
          Tampilkan kembali peringatan jatuh tempo
        </button>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Variasi Spektrum Alert"
      description="Eksplorasi variasi semantik: Info (biru informasi), Warning (kuning perhatian), serta Destructive (merah kegagalan transaksi)."
      badge="Alert Semantics"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Info Variant -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Alert id="alert-var-info" variant="info">
              <InfoIcon class="h-4 w-4" />
              <AlertTitle>Pemeliharaan Sistem</AlertTitle>
              <AlertDescription>
                Layanan top-up tabungan emas ditutup sementara pukul 23:00 - 01:00 WIB.
              </AlertDescription>
            </Alert>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Info Variant</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">variant="info"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Digunakan untuk pengumuman non-kritis dan jadwal pembaruan operasional.
            </p>
          </div>
        </div>

        <!-- Varian 2: Warning Variant -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Alert id="alert-var-warning" variant="warning">
              <AlertTriangle class="h-4 w-4" />
              <AlertTitle>Batas Taksiran Menipis</AlertTitle>
              <AlertDescription>
                Plafon sisa pinjaman harian untuk cabang ini telah mencapai 90%.
              </AlertDescription>
            </Alert>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Warning Variant</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">variant="warning"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Digunakan untuk mengingatkan batas kuota atau masa tenggang sebelum denda.
            </p>
          </div>
        </div>

        <!-- Varian 3: Destructive Variant -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Alert id="alert-var-destructive" variant="destructive">
              <AlertCircle class="h-4 w-4" />
              <AlertTitle>Koneksi Terputus</AlertTitle>
              <AlertDescription>
                Gagal menghubungi server otentikasi kependudukan Dukcapil.
              </AlertDescription>
            </Alert>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Destructive Variant</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">variant="destructive"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Digunakan saat terjadi kegagalan fatal pada alur transaksi finansial.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Aksesibilitas Alert:</strong> Komponen ini memiliki atribut semantik bawaan <code>role="alert"</code> sehingga pembaca layar akan segera membacakan perubahan pesan kepada pengguna.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Alert."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="alertProps" />
    </DocCard>
  </section>
</template>
