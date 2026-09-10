<script setup lang="ts">
/**
 * @file BreadcrumbSection.vue
 * @description Enterprise-grade documentation for the Breadcrumb navigation component family.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@gwind/ui";
import { Sparkles, Info, Slash } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const breadcrumbProps: PropRow[] = [
  {
    name: "as (BreadcrumbLink)",
    type: "string | Component",
    default: "'a'",
    description: "Elemen dasar tag yang dirender sebagai tautan navigasi (contoh: RouterLink atau 'a').",
  },
  {
    name: "asChild (BreadcrumbLink)",
    type: "boolean",
    default: "false",
    description: "Mendelegasikan perilaku tautan ke elemen anak tunggal tanpa wrapper tambahan.",
  },
  {
    name: "class (Breadcrumb)",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kontainer <nav> breadcrumb.",
  },
  {
    name: "default (BreadcrumbSeparator)",
    type: "Slot",
    isSlot: true,
    description: "Slot kustomisasi ikon pemisah antar segmen tautan (default menggunakan ChevronRight).",
  },
  {
    name: "default (BreadcrumbPage)",
    type: "Slot",
    isSlot: true,
    description: "Slot teks label halaman aktif yang ditandai dengan aria-current='page'.",
  },
];
</script>

<template>
  <section id="breadcrumb" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Navigation Trails</p>
      <h2 class="text-xl font-bold text-foreground">Breadcrumb</h2>
      <p class="text-sigma text-foreground-secondary">
        Jejak navigasi hirarkis untuk membantu nasabah memahami lokasi halaman aktif dalam struktur alur transaksi pembiayaan gadai multi-level.
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
          <h3 class="text-sigma font-extrabold text-foreground">Navigasi Hirarki Portofolio Transaksi Gadai</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Multi-Level Trail & Current Page</span>
      </div>
      <div class="playground-case-body">
        <Breadcrumb id="breadcrumb-real-trail">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink id="breadcrumb-real-link-1" href="#breadcrumb">Dashboard Nasabah</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink id="breadcrumb-real-link-2" href="#breadcrumb">Portofolio Gadai Emas</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink id="breadcrumb-real-link-3" href="#breadcrumb">Emas Batangan 10 gr</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage id="breadcrumb-real-current">Detail Surat Bukti Gadai #SBG-88219</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Variasi Jejak Navigasi"
      description="Eksplorasi jejak navigasi standar, pemisah kustom (Slash / Chevron), serta penggunaan BreadcrumbEllipsis untuk jalur bertingkat panjang."
      badge="Navigation Patterns"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Custom Separator Slash -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-16">
            <span class="text-sigma font-bold text-foreground block">Pemisah Karakter Slash</span>
            <Breadcrumb id="breadcrumb-var-slash">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink id="breadcrumb-slash-link-1" href="#breadcrumb">Beranda</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash class="h-3 w-3 text-foreground-tertiary" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink id="breadcrumb-slash-link-2" href="#breadcrumb">Simulasi Gadai</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash class="h-3 w-3 text-foreground-tertiary" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage id="breadcrumb-slash-current">Gadai Tabungan Emas</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Custom Separator</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">&lt;BreadcrumbSeparator&gt;</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Slot default BreadcrumbSeparator dapat diganti dengan ikon lain seperti slash diagonal.
            </p>
          </div>
        </div>

        <!-- Varian 2: Ellipsis Truncation -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-16">
            <span class="text-sigma font-bold text-foreground block">Truncation Jalur Panjang</span>
            <Breadcrumb id="breadcrumb-var-ellipsis">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink id="breadcrumb-ellip-link-1" href="#breadcrumb">Kantor Wilayah</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink id="breadcrumb-ellip-link-2" href="#breadcrumb">Cabang Senen</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage id="breadcrumb-ellip-current">Petugas Kasir</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Ellipsis Collapsing</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">&lt;BreadcrumbEllipsis /&gt;</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menyembunyikan level hirarki di tengah untuk menghemat ruang tampilan pada layar sempit.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Aksesibilitas Web:</strong> Komponen ini membungkus struktur tautan dalam elemen semantik <code>&lt;nav aria-label="breadcrumb"&gt;</code> dengan urutan ordered list <code>&lt;ol&gt;</code>.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Breadcrumb."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="breadcrumbProps" />
    </DocCard>
  </section>
</template>
