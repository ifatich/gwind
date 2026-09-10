<script setup lang="ts">
/**
 * @file DialogSection.vue
 * @description Enterprise-grade interactive showcase for Dialog modal overlays and focus-trap sheets.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import { ref } from "vue";
import {
  Button,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@gwind/ui";
import { Sparkles, Info, FileText, CheckCircle2, ShieldCheck, Image as ImageIcon } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const isPelunasanModalOpen = ref(false);
const isResponsiveModalOpen = ref(false);
const isMediaModalOpen = ref(false);
const isMinimalModalOpen = ref(false);

const dialogProps: PropRow[] = [
  {
    name: "open",
    type: "boolean",
    default: "false",
    description: "Status visibilitas modal dialog secara terkontrol (v-model:open).",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "Status visibilitas awal modal dialog secara tidak terkontrol (uncontrolled).",
  },
  {
    name: "modal",
    type: "boolean",
    default: "true",
    description: "Menentukan apakah interaksi elemen di luar dialog dinonaktifkan dan trap focus aktif.",
  },
  {
    name: "class",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk wadah DialogContent.",
  },
  {
    name: "update:open",
    type: "(open: boolean) => void",
    isEvent: true,
    description: "Event emisi yang dipicu saat status keterbukaan modal dialog berubah.",
  },
  {
    name: "default",
    type: "Slot",
    isSlot: true,
    description: "Slot untuk DialogTrigger, DialogContent, DialogHeader, DialogBody, dan DialogFooter.",
  },
];
</script>

<template>
  <section id="dialog" class="playground-section playground-panel space-y-5">
    <!-- Section Header -->
    <div>
      <p class="playground-eyebrow">Modal Overlays & Focus Trap</p>
      <h2 class="text-xl font-bold text-foreground">Dialog</h2>
      <p class="text-sigma text-foreground-secondary">
        Modal dialog aksesibel dengan penguncian fokus (focus trap), overlay backdrop peredup, dukungan adaptif bottom-sheet di layar mobile, serta struktur konten terstandarisasi.
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
          <h3 class="text-sigma font-extrabold text-foreground">Konfirmasi Pelunasan Pinjaman Gadai SBG</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Modal Overlay & Transaction Breakdown</span>
      </div>
      <div class="playground-case-body">
        <div class="flex flex-wrap items-center gap-4">
          <Dialog v-model:open="isPelunasanModalOpen">
            <DialogTrigger as-child>
              <Button id="btn-dialog-pelunasan">
                <FileText class="h-4 w-4" />
                Konfirmasi Pelunasan Gadai
              </Button>
            </DialogTrigger>
            <DialogContent id="dialog-content-pelunasan">
              <DialogHeader>
                <DialogTitle>Konfirmasi Pelunasan Pinjaman</DialogTitle>
                <DialogDescription>
                  Periksa rincian pelunasan sebelum menyelesaikan transaksi pembayaran pinjaman.
                </DialogDescription>
              </DialogHeader>
              <DialogBody class="text-sigma text-foreground space-y-3">
                <div class="rounded-lg bg-background border border-border-subtle p-3 space-y-1.5">
                  <div class="flex justify-between text-omega">
                    <span class="text-foreground-secondary">No. Surat Bukti Gadai</span>
                    <span class="font-bold font-mono text-foreground">SBG-882193</span>
                  </div>
                  <div class="flex justify-between text-omega">
                    <span class="text-foreground-secondary">Pokok Pinjaman</span>
                    <span class="font-bold text-foreground">Rp 15.000.000</span>
                  </div>
                  <div class="flex justify-between text-omega">
                    <span class="text-foreground-secondary">Sewa Modal (Bunga)</span>
                    <span class="font-bold text-foreground">Rp 180.000</span>
                  </div>
                  <div class="flex justify-between text-omega pt-1 border-t border-border-subtle font-bold">
                    <span class="text-foreground">Total Tagihan</span>
                    <span class="text-foreground-green">Rp 15.180.000</span>
                  </div>
                </div>
                <p class="text-omega text-foreground-secondary">
                  Setelah pembayaran berhasil diverifikasi, fisik barang jaminan dapat langsung diambil di kantor cabang terdaftar dengan membawa KTP asli.
                </p>
              </DialogBody>
              <DialogFooter>
                <DialogClose as-child>
                  <Button id="btn-dialog-pelunasan-cancel" variant="outline">Batalkan</Button>
                </DialogClose>
                <Button id="btn-dialog-pelunasan-confirm" @click="isPelunasanModalOpen = false">
                  <CheckCircle2 class="h-4 w-4" />
                  Konfirmasi Bayar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Variasi Spektrum Dialog"
      description="Eksplorasi variasi modal dialog: formulir data cabang, modal edukasi berilustrasi media, dan dialog konfirmasi minimalis."
      badge="Dialog Modalities"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Form / Branch Info -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Dialog v-model:open="isResponsiveModalOpen">
              <DialogTrigger as-child>
                <Button id="btn-dialog-responsive" variant="secondary" class="w-full justify-center">
                  <FileText class="h-4 w-4" />
                  Formulir Pengajuan
                </Button>
              </DialogTrigger>
              <DialogContent id="dialog-content-responsive">
                <DialogHeader>
                  <DialogTitle>Pengajuan Penaksiran Emas</DialogTitle>
                  <DialogDescription>
                    Pilih kantor cabang Pegadaian terdekat untuk penjadwalan uji karatase emas fisik.
                  </DialogDescription>
                </DialogHeader>
                <DialogBody class="space-y-3 text-sigma">
                  <div class="space-y-1">
                    <label class="text-omega font-bold text-foreground">Kantor Cabang Terpilih</label>
                    <div class="p-2.5 rounded-md border border-border-subtle bg-background text-foreground font-medium">
                      CP Kramat Raya — Jakarta Pusat
                    </div>
                  </div>
                  <div class="space-y-1">
                    <label class="text-omega font-bold text-foreground">Estimasi Berat Perhiasan</label>
                    <div class="p-2.5 rounded-md border border-border-subtle bg-background text-foreground font-medium">
                      10.50 gram (Kadar 75% / 18 Karat)
                    </div>
                  </div>
                </DialogBody>
                <DialogFooter>
                  <DialogClose as-child>
                    <Button id="btn-dialog-responsive-cancel" variant="outline">Tutup</Button>
                  </DialogClose>
                  <Button id="btn-dialog-responsive-submit" @click="isResponsiveModalOpen = false">
                    Kirim Jadwal
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Responsive Modal</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">DialogContent</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Otomatis bertransformasi menjadi Bottom Sheet di layar ponsel dan popup terpusat di layar desktop.
            </p>
          </div>
        </div>

        <!-- Varian 2: Rich Media Dialog -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Dialog v-model:open="isMediaModalOpen">
              <DialogTrigger as-child>
                <Button id="btn-dialog-media" variant="outline" class="w-full justify-center">
                  <ImageIcon class="h-4 w-4" />
                  Dialog Panduan Media
                </Button>
              </DialogTrigger>
              <DialogContent id="dialog-content-media">
                <DialogHeader>
                  <DialogTitle>Panduan Pengambilan Jaminan</DialogTitle>
                  <DialogDescription>Ketentuan pengambilan fisik agunan emas.</DialogDescription>
                </DialogHeader>
                <DialogBody class="space-y-3">
                  <div class="h-28 w-full overflow-hidden rounded-lg bg-background border border-border-subtle flex items-center justify-center text-foreground-secondary text-omega">
                    <div class="text-center space-y-1">
                      <ShieldCheck class="h-8 w-8 text-foreground-green mx-auto" />
                      <span class="font-bold">Verifikasi Identitas Nasabah</span>
                    </div>
                  </div>
                  <p class="text-sigma font-bold text-foreground">Wajib Tunjukkan KTP Asli & Lembar SBG</p>
                  <p class="text-omega text-foreground-secondary">
                    Pengambilan barang jaminan tidak dapat diwakilkan kepada pihak ketiga tanpa surat kuasa bermaterai sah.
                  </p>
                </DialogBody>
                <DialogFooter>
                  <DialogClose as-child>
                    <Button id="btn-dialog-media-close" variant="outline">Tutup</Button>
                  </DialogClose>
                  <Button id="btn-dialog-media-understand" @click="isMediaModalOpen = false">
                    Saya Mengerti
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Media & Panduan</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">DialogBody</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Mendukung penyematan ilustrasi grafis, banner foto, dan instruksi alur kerja verifikasi.
            </p>
          </div>
        </div>

        <!-- Varian 3: Minimal Dialog -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Dialog v-model:open="isMinimalModalOpen">
              <DialogTrigger as-child>
                <Button id="btn-dialog-minimal" variant="tertiary" class="w-full justify-center">
                  <ShieldCheck class="h-4 w-4" />
                  Disclaimer Keamanan
                </Button>
              </DialogTrigger>
              <DialogContent id="dialog-content-minimal">
                <DialogHeader>
                  <DialogTitle>Informasi Pengamanan Data</DialogTitle>
                  <DialogDescription>Enkripsi transaksi dan data privasi nasabah.</DialogDescription>
                </DialogHeader>
                <DialogBody class="text-sigma text-foreground-secondary space-y-2">
                  <p>
                    Seluruh pertukaran data antara aplikasi nasabah dan core banking Pegadaian dienkripsi menggunakan protokol TLS 1.3 dengan sertifikasi standar ISO 27001.
                  </p>
                  <p class="text-omega">
                    Klik tombol silang di pojok kanan atas atau area latar belakang untuk menutup dialog ini.
                  </p>
                </DialogBody>
                <DialogFooter>
                  <DialogClose as-child>
                    <Button id="btn-dialog-minimal-close" variant="outline">Selesai</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Minimalist Dialog</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">DialogHeader</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Dialog kompak tanpa tombol konfirmasi ganda, cocok untuk pengumuman regulasi atau disclaimer.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Aksesibilitas Dialog:</strong> Menggunakan penguncian fokus (focus trap) otomatis, penekanan tombol <code>Esc</code> untuk menutup dialog, dan pemetaan atribut <code>aria-modal="true"</code>.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Dialog."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="dialogProps" />
    </DocCard>
  </section>
</template>
