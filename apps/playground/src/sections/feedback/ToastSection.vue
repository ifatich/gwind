<script setup lang="ts">
/**
 * @file ToastSection.vue
 * @description Enterprise-grade documentation for the Toast snackbar notification component.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import { Toast } from "@gwind/ui";
import { Sparkles, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const toastProps: PropRow[] = [
  {
    name: "title",
    type: "string",
    default: "undefined",
    description: "Teks judul utama pemberitahuan pesan toast.",
  },
  {
    name: "description",
    type: "string",
    default: "undefined",
    description: "Teks penjelasan sekunder mengenai detail status operasi.",
  },
  {
    name: "variant",
    type: "'default' | 'success' | 'warning' | 'error'",
    default: "'default'",
    description: "Warna latar dan batas semantik: netral, sukses, peringatan, atau galat.",
  },
  {
    name: "class",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi wadah toast.",
  },
  {
    name: "title (slot)",
    type: "Slot",
    isSlot: true,
    description: "Slot kustom untuk elemen judul jika membutuhkan formatting khusus.",
  },
  {
    name: "default (slot)",
    type: "Slot",
    isSlot: true,
    description: "Slot konten isi penjelasan jika tidak menggunakan prop description.",
  },
];
</script>

<template>
  <section id="toast" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Ephemeral Feedback</p>
      <h2 class="text-xl font-bold text-foreground">Toast & Snackbars</h2>
      <p class="text-sigma text-foreground-secondary">
        Pemberitahuan mengambang singkat (snackbars) untuk memberikan umpan balik instan atas hasil operasi transaksi finansial di latar belakang.
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
          <h3 class="text-sigma font-extrabold text-foreground">Notifikasi Feedback Transaksi Nasabah</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Toast Notification States</span>
      </div>
      <div class="playground-case-body">
        <div class="grid gap-gw-16 md:grid-cols-2 lg:grid-cols-3">
          <Toast
            id="toast-real-success"
            title="Transaksi Berhasil"
            description="Top up saldo tabungan emas Rp 500.000 sukses diproses."
            variant="success"
          />
          <Toast
            id="toast-real-warning"
            title="Peringatan Limit Harian"
            description="Maksimum sisa transaksi transfer harian tersisa Rp 2.000.000."
            variant="warning"
          />
          <Toast
            id="toast-real-error"
            title="Koneksi Gateway Gagal"
            description="Koneksi ke sistem switching perbankan mitra mengalami timeout."
            variant="error"
          />
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Komposisi Slot Toast"
      description="Eksplorasi varian Default netral, Success konfirmasi, serta penggunaan slot kustom untuk memuat format teks pada judul atau deskripsi."
      badge="Toast Variants"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Default Neutral -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Toast
              id="toast-var-default"
              title="Perubahan Disimpan"
              description="Preferensi notifikasi WhatsApp berhasil diperbarui."
              variant="default"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Default Variant</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">variant="default"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Digunakan untuk notifikasi status standar perubahan profil atau pengaturan akun.
            </p>
          </div>
        </div>

        <!-- Varian 2: Success Variant -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Toast
              id="toast-var-success"
              title="Gadai Dicairkan"
              description="Uang pinjaman Rp 15.000.000 ditransfer ke rekening BNI."
              variant="success"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Success Variant</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">variant="success"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Warna latar hijau muda lembut untuk mengonfirmasi transaksi finansial yang sukses.
            </p>
          </div>
        </div>

        <!-- Varian 3: Warning State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Toast
              id="toast-var-warn"
              title="Koneksi Terputus"
              description="Menghubungkan ulang ke server websocket pasar emas..."
              variant="warning"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Warning Variant</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">variant="warning"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Warna oranye lembut untuk memberi peringatan sementara tanpa menghentikan alur kerja pengguna.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Animasi Masuk:</strong> Toast dilengkapi transisi CSS <code>animate-in fade-in-0 slide-in-from-top-2</code> serta atribut aksesibilitas <code>role="status"</code>.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Toast."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="toastProps" />
    </DocCard>
  </section>
</template>
