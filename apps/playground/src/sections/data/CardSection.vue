<script setup lang="ts">
/**
 * @file CardSection.vue
 * @description Enterprise-grade documentation for the Card container family.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Button,
} from "@gwind/ui";
import { Sparkles, ShieldCheck, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const cardProps: PropRow[] = [
  {
    name: "class (Card)",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi kontainer terluar Card.",
  },
  {
    name: "default (Card)",
    type: "Slot",
    isSlot: true,
    description: "Slot utama untuk menyusun elemen CardHeader, CardContent, dan CardFooter.",
  },
  {
    name: "class (CardHeader)",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kustomisasi padding dan tata letak bagian kepala kartu.",
  },
  {
    name: "class (CardTitle)",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kustomisasi tipografi judul utama kartu.",
  },
  {
    name: "class (CardDescription)",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kustomisasi tipografi keterangan sekunder judul kartu.",
  },
  {
    name: "class (CardContent)",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kustomisasi wadah isi/body utama kartu.",
  },
  {
    name: "class (CardFooter)",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kustomisasi wadah tombol aksi bawah pada kartu.",
  },
];
</script>

<template>
  <section id="card" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Surfaces & Containers</p>
      <h2 class="text-xl font-bold text-foreground">Card</h2>
      <p class="text-sigma text-foreground-secondary">
        Kontainer permukaan modular dengan pemisahan struktur kepala (CardHeader), badan (CardContent), dan kaki (CardFooter) untuk menyajikan entitas informasi finansial.
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
          <h3 class="text-sigma font-extrabold text-foreground">Portofolio Tabungan Emas, Promo, & Jaminan Khazanah</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Header, Media, Content, & Action Footer Slots</span>
      </div>
      <div class="playground-case-body">
        <div class="grid gap-gw-16 md:grid-cols-2 lg:grid-cols-3">
          <!-- Variant 1: Portofolio Tabungan Emas -->
          <Card id="card-real-gold" class="h-fit">
            <CardHeader>
              <div class="flex items-center justify-between">
                <div class="space-y-0.5">
                  <CardTitle>Tabungan Emas</CardTitle>
                  <CardDescription>No. Rek: 1234-5678-9101</CardDescription>
                </div>
                <Badge variant="brocoli">Aktif</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div class="rounded-lg bg-lime-100 p-4 border border-lime-200">
                <span class="text-omega font-semibold text-lime-700">Saldo Fisik Emas</span>
                <p class="text-xl font-black text-foreground mt-1">12.5400 gr</p>
                <p class="text-omega text-foreground-secondary mt-0.5">≈ Rp 18.183.000</p>
              </div>
            </CardContent>
            <CardFooter class="flex gap-2">
              <Button id="btn-card-gold-topup" class="w-full" size="md">Top Up</Button>
              <Button id="btn-card-gold-sell" variant="outline" class="w-full" size="md">Jual Emas</Button>
            </CardFooter>
          </Card>

          <!-- Variant 2: Card with Image Promo -->
          <Card id="card-real-promo">
            <CardHeader>
              <CardTitle>Promo Cashback Gadai</CardTitle>
              <CardDescription>Khusus transaksi digital bulan ini</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="mb-4 h-32 w-full overflow-hidden rounded-lg bg-background">
                <img
                  src="https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=600"
                  alt="Promo Gold"
                  class="h-full w-full object-cover"
                />
              </div>
              <p class="text-sigma font-bold text-foreground">Cashback s.d. Rp 500.000</p>
              <p class="mt-1 text-omega text-foreground-secondary">
                Gunakan kode voucher GADAIBERKAH saat pengajuan di aplikasi Digital.
              </p>
            </CardContent>
            <CardFooter>
              <Button id="btn-card-promo-claim" class="w-full" size="md">Klaim Promo</Button>
            </CardFooter>
          </Card>

          <!-- Variant 3: Minimal Card -->
          <Card id="card-real-security" class="h-fit">
            <CardContent class="pt-6">
              <div class="flex items-center gap-3 mb-3">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <ShieldCheck class="h-5 w-5" />
                </div>
                <div>
                  <h4 class="text-sigma font-bold text-foreground">Jaminan Aman 100%</h4>
                  <p class="text-omega text-foreground-secondary">Tersimpan di Khazanah</p>
                </div>
              </div>
              <p class="text-omega text-foreground-secondary leading-relaxed">
                Barang jaminan disimpan di ruang penyimpanan berspesifikasi keamanan tinggi dengan asuransi penuh.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Hierarki Slot Komponen Card"
      description="Eksplorasi komposisi struktur slot Card: Header beraksi, integrasi media visual, serta layout aksi ganda pada footer."
      badge="Composition & Anatomy"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Full Anatomy -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Card id="card-var-full" class="border border-border-subtle bg-card">
              <CardHeader>
                <CardTitle>Akad Pembiayaan</CardTitle>
                <CardDescription>Nomor Kontrak: #SBG-2026-9901</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-omega text-foreground-secondary">
                  Informasi status angsuran dan pencairan pinjaman modal kerja mikro.
                </p>
              </CardContent>
              <CardFooter>
                <Button id="btn-card-var-detail" size="sm" class="w-full">Lihat Rincian</Button>
              </CardFooter>
            </Card>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Full Slot Anatomy</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">Header + Body + Footer</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Struktur lengkap standar kartu entitas data dengan pemicu aksi footer.
            </p>
          </div>
        </div>

        <!-- Varian 2: Headerless Body & Actions -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Card id="card-var-compact" class="border border-border-subtle bg-card">
              <CardContent class="pt-gw-16 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-sigma font-bold text-foreground">Simulasi Gadai</span>
                  <Badge variant="blue">Kalkulator</Badge>
                </div>
                <p class="text-omega text-foreground-secondary">
                  Hitung perkiraan nilai taksiran emas dan uang pinjaman maksimal secara instan.
                </p>
              </CardContent>
              <CardFooter class="pt-0">
                <Button id="btn-card-var-calc" variant="outline" size="sm" class="w-full">Mulai Simulasi</Button>
              </CardFooter>
            </Card>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Compact Content & Footer</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">Content + Footer</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menghemat ruang vertikal untuk widget fungsional dan kartu pengantar alur.
            </p>
          </div>
        </div>

        <!-- Varian 3: Pure Container Content -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Card id="card-var-pure" class="border border-border-subtle bg-card">
              <CardContent class="py-gw-16 space-y-2">
                <span class="text-sigma font-bold text-foreground block">Surat Bukti Gadai</span>
                <p class="text-omega text-foreground-secondary">
                  Wadah permukaan polos murni untuk pengelompokan elemen form atau statistik angka ringkas.
                </p>
              </CardContent>
            </Card>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Pure CardContent</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">Direct Content</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Struktur paling ringkas untuk kartu pembungkus informasi tanpa aksi footer.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Desain Fleksibel:</strong> Sub-komponen Card dapat dikomposisikan secara bebas sesuai kebutuhan visual tanpa batasan hierarki kaku.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Card."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="cardProps" />
    </DocCard>
  </section>
</template>
