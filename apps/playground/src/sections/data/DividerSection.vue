<script setup lang="ts">
/**
 * @file DividerSection.vue
 * @description Enterprise-grade documentation for the Divider separator component.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import { Divider } from "@gwind/ui";
import { Sparkles, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const dividerProps: PropRow[] = [
  {
    name: "orientation",
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: "Arah orientasi garis pemisah: 'horizontal' (lebar penuh) atau 'vertical' (tinggi penuh).",
  },
  {
    name: "decorative",
    type: "boolean",
    default: "true",
    description: "Jika bernilai false, divider diperlakukan sebagai role='separator' dengan aksesibilitas aria-orientation.",
  },
  {
    name: "class",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi ketebalan atau warna garis pembatas.",
  },
];
</script>

<template>
  <section id="divider" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Separators & Boundaries</p>
      <h2 class="text-xl font-bold text-foreground">Divider</h2>
      <p class="text-sigma text-foreground-secondary">
        Garis pemisah visual hairline untuk membedakan segmen data rincian finansial, blok formulir bertingkat, serta penyekat tombol navigasi.
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
          <h3 class="text-sigma font-extrabold text-foreground">Pemisah Rincian Biaya Surat Bukti Gadai (SBG)</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Horizontal & Vertical Segments</span>
      </div>
      <div class="playground-case-body space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-col">
            <span class="text-omega text-foreground-secondary font-medium">Pokok Pinjaman</span>
            <strong class="text-sigma font-bold text-foreground">Rp 15.000.000</strong>
          </div>
          <Divider orientation="vertical" class="hidden sm:block h-10" />
          <div class="flex flex-col">
            <span class="text-omega text-foreground-secondary font-medium">Sewa Modal (15 Hari)</span>
            <strong class="text-sigma font-bold text-foreground">Rp 172.500</strong>
          </div>
          <Divider orientation="vertical" class="hidden sm:block h-10" />
          <div class="flex flex-col">
            <span class="text-omega text-foreground-secondary font-medium">Biaya Administrasi</span>
            <strong class="text-sigma font-bold text-foreground">Rp 35.000</strong>
          </div>
          <Divider orientation="vertical" class="hidden sm:block h-10" />
          <div class="flex flex-col">
            <span class="text-omega text-foreground-green font-semibold">Total Pelunasan</span>
            <strong class="text-omicron font-black text-foreground">Rp 15.207.500</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Orientasi Divider"
      description="Eksplorasi penggunaan pemisah garis horizontal antar seksi formulir serta pemisah vertikal antar metrik ringkasan data."
      badge="Orientations"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Horizontal Divider -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-16">
            <span class="text-sigma font-bold text-foreground block">Pemisah Horizontal</span>
            <div class="space-y-3">
              <div class="text-omega text-foreground-secondary">Bagian 1: Data Nasabah Peminjam</div>
              <Divider id="divider-var-horiz" orientation="horizontal" />
              <div class="text-omega text-foreground-secondary">Bagian 2: Taksiran Fisik Emas Jaminan</div>
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Horizontal Orientation</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">orientation="horizontal"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Rentangan garis horizontal 100% lebar untuk memisahkan bab atau bagian form.
            </p>
          </div>
        </div>

        <!-- Varian 2: Vertical Divider -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-16">
            <span class="text-sigma font-bold text-foreground block">Pemisah Vertikal</span>
            <div class="flex items-center gap-gw-16 h-12">
              <span class="text-omega text-foreground font-semibold">Cabang Senen</span>
              <Divider id="divider-var-vert" orientation="vertical" class="h-8" />
              <span class="text-omega text-foreground font-semibold">Kanwil VIII Jakarta</span>
              <Divider orientation="vertical" class="h-8" />
              <span class="text-omega text-foreground font-semibold">Operasional Aktif</span>
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Vertical Orientation</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">orientation="vertical"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Penyekat vertikal setinggi 100% tinggi kontainer flex untuk membedakan badge atau item header.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Aksesibilitas Semantik:</strong> Apabila divider hanya berfungsi estetis, gunakan <code>:decorative="true"</code> untuk menyembunyikannya dari pengumuman pembaca layar (screen reader).</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Divider."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="dividerProps" />
    </DocCard>
  </section>
</template>
