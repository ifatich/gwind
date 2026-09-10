<script setup lang="ts">
/**
 * @file AccordionSection.vue
 * @description Enterprise-grade documentation for the Accordion collapsible disclosure family.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@gwind/ui";
import { Sparkles, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const accordionProps: PropRow[] = [
  {
    name: "type (Accordion)",
    type: "'single' | 'multiple'",
    default: "'single'",
    description: "Menentukan apakah hanya satu panel yang boleh terbuka bersamaan atau beberapa panel sekaligus.",
  },
  {
    name: "collapsible (Accordion)",
    type: "boolean",
    default: "false",
    description: "Mengizinkan panel yang sedang aktif untuk dapat ditutup kembali pada mode 'single'.",
  },
  {
    name: "defaultValue (Accordion)",
    type: "string | string[]",
    default: "undefined",
    description: "Nilai item awal yang terbuka secara default saat komponen dimuat.",
  },
  {
    name: "modelValue (Accordion)",
    type: "string | string[]",
    default: "undefined",
    description: "Nilai panel aktif yang dikontrol secara reaktif melalui v-model.",
  },
  {
    name: "disabled (Accordion)",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi buka/tutup pada seluruh item accordion.",
  },
  {
    name: "value (AccordionItem)",
    type: "string",
    required: true,
    description: "Pengenal nilai unik untuk setiap baris panel accordion.",
  },
  {
    name: "disabled (AccordionItem)",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi klik khusus pada baris panel tertentu.",
  },
  {
    name: "icon (AccordionTrigger)",
    type: "Slot",
    isSlot: true,
    description: "Slot kustomisasi ikon panah indikator ekspansi (default menggunakan ChevronDown).",
  },
];
</script>

<template>
  <section id="accordion" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Collapsible Disclosures</p>
      <h2 class="text-xl font-bold text-foreground">Accordion</h2>
      <p class="text-sigma text-foreground-secondary">
        Daftar panel lipat interaktif dengan animasi transisi chevron untuk memuat informasi bertingkat, FAQ nasabah, serta rincian klausul perjanjian gadai.
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
          <h3 class="text-sigma font-extrabold text-foreground">Pusat Bantuan & FAQ Layanan Gadai Emas</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Single Collapse & Animated Triggers</span>
      </div>
      <div class="playground-case-body">
        <Accordion
          id="accordion-real-faq"
          type="single"
          collapsible
          default-value="faq-1"
          class="w-full"
        >
          <AccordionItem id="acc-item-real-1" value="faq-1">
            <AccordionTrigger>Apa saja syarat pengajuan Gadai Emas?</AccordionTrigger>
            <AccordionContent>
              Syaratnya sangat mudah: Nasabah cukup membawa fisik barang jaminan (emas batangan atau perhiasan) beserta KTP asli yang masih berlaku ke kantor cabang Pegadaian terdekat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="acc-item-real-2" value="faq-2">
            <AccordionTrigger>Bagaimana cara memperpanjang jangka waktu pinjaman gadai?</AccordionTrigger>
            <AccordionContent>
              Perpanjangan jangka waktu gadai dapat dilakukan dengan membayar sewa modal (bunga) yang telah berjalan langsung melalui aplikasi Digital atau di kasir outlet resmi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="acc-item-real-3" value="faq-3">
            <AccordionTrigger>Apakah emas yang digadaikan dijamin keamanannya?</AccordionTrigger>
            <AccordionContent>
              Ya, barang jaminan emas nasabah disimpan di ruang penyimpanan besi berstandar perbankan (khazanah) dan diasuransikan 100% dari nilai taksiran pasar.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Mode Ekspansi Accordion"
      description="Eksplorasi mode Single Collapsible (hanya 1 terbuka) vs Multiple Mode (bisa buka bersamaan), serta status nonaktif."
      badge="Expansion Modes"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Single Collapsible -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Mode Single Collapsible</span>
            <Accordion
              id="acc-var-single"
              type="single"
              collapsible
              default-value="sbg-info"
              class="w-full"
            >
              <AccordionItem id="acc-var-single-1" value="sbg-info">
                <AccordionTrigger>Klausul Surat Bukti Gadai</AccordionTrigger>
                <AccordionContent>
                  Nasabah menyetujui perhitungan sewa modal 15 hari dan batas masa tenggang penebusan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem id="acc-var-single-2" value="sbg-taksir">
                <AccordionTrigger>Ketentuan Taksiran Karat</AccordionTrigger>
                <AccordionContent>
                  Penetapan standar karatase emas dilakukan oleh penaksir bersertifikat resmi.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Single Mode</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">type="single" collapsible</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Membuka panel baru akan menutup panel aktif sebelumnya secara halus.
            </p>
          </div>
        </div>

        <!-- Varian 2: Multiple Open Mode -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Mode Multiple Expansion</span>
            <Accordion
              id="acc-var-multi"
              type="multiple"
              :default-value="['term-1', 'term-2']"
              class="w-full"
            >
              <AccordionItem id="acc-var-multi-1" value="term-1">
                <AccordionTrigger>Proteksi Asuransi Khazanah</AccordionTrigger>
                <AccordionContent>
                  Klausul pertanggungan ganti rugi fisik barang jaminan selama masa gadai.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem id="acc-var-multi-2" value="term-2">
                <AccordionTrigger>Pelelangan Barang Jaminan</AccordionTrigger>
                <AccordionContent>
                  Pemberitahuan resmi sebelum pelaksanaan lelang jika lewat jatuh tempo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Multiple Mode</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">type="multiple"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Memungkinkan beberapa panel dibuka bersamaan untuk perbandingan informasi paralel.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Keyboard Navigation:</strong> Accordion mendukung tombol <kbd class="px-1 py-0.5 rounded bg-background border border-border-subtle font-mono text-atom">Enter</kbd> atau <kbd class="px-1 py-0.5 rounded bg-background border border-border-subtle font-mono text-atom">Space</kbd> untuk toggling, serta navigasi panah atas/bawah antar header.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Accordion."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="accordionProps" />
    </DocCard>
  </section>
</template>
