<script setup lang="ts">
/**
 * @file SelectSection.vue
 * @description Enterprise-grade documentation for the Select dropdown family.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import {
  Badge,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@gwind/ui";
import { Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const jenisJaminan = ref("emas-batangan");
const kantorWilayah = ref("");
const statusNasabah = ref("nasabah-aktif");

const selectProps: PropRow[] = [
  {
    name: "modelValue / v-model",
    type: "string | number | boolean",
    default: "undefined",
    description: "Nilai opsi aktif yang dipilih dalam dropdown Select.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi pada trigger dan menutup popover.",
  },
  {
    name: "open / v-model:open",
    type: "boolean",
    default: "false",
    description: "Mengontrol visibilitas popover dropdown secara programmatic.",
  },
  {
    name: "SelectTrigger",
    type: "Component",
    default: "button",
    description: "Komponen pemicu dropdown dengan chevron panah bawah dan status aria-expanded.",
  },
  {
    name: "SelectValue",
    type: "Component",
    default: "span",
    description: "Menampilkan teks label dari opsi terpilih atau teks placeholder saat kosong.",
  },
  {
    name: "SelectContent",
    type: "Component",
    default: "div (portal)",
    description: "Kontainer melayang (floating surface) yang memuat daftar opsi item.",
  },
  {
    name: "SelectItem",
    type: "Component",
    default: "div",
    description: "Item pilihan individu dengan indikator tanda centang saat aktif terpilih.",
  },
  {
    name: "SelectGroup / SelectLabel",
    type: "Component",
    default: "div",
    description: "Pengelompokan opsi berdasarkan kategori semantik dengan judul label pembeda.",
  },
  {
    name: "SelectSeparator",
    type: "Component",
    default: "div",
    description: "Garis pembatas visual antar kelompok opsi dalam dropdown listbox.",
  },
];
</script>

<template>
  <section id="select" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Select
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Komponen menu dropdown seleksi nilai tunggal berbasis Reka UI Headless dengan penataan kategori terkelompok (grouped), label bagian, pemisah visual (separator), serta kepatuhan aksesibilitas keyboard navigation.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Dropdown Primitive</Badge>
    </div>

    <!-- CARD 1: Real-World Scenario Showcase -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-gw-8">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Real-World Scenario
          </span>
          <h3 class="text-sigma font-extrabold text-foreground-primary">
            Kategori Barang Jaminan Gadai (Marhun)
          </h3>
        </div>
        <div class="flex items-center gap-gw-8">
          <span class="text-omega font-semibold text-foreground-secondary">Value:</span>
          <code class="rounded-md bg-black-900 px-2.5 py-1 font-mono text-atom font-bold text-lime-400">
            {{ jenisJaminan }}
          </code>
        </div>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Pemilihan komoditas agunan gadai terbagi dalam kelompok Logam Mulia, Kendaraan, dan Elektronik.
        </p>
        <div class="max-w-md space-y-gw-8">
          <Label for="select-case-jaminan">Pilih Jenis Agunan</Label>
          <Select id="select-case-jaminan" v-model="jenisJaminan">
            <SelectTrigger class="w-full bg-card">
              <SelectValue placeholder="Pilih jenis jaminan" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Logam Mulia & Perhiasan</SelectLabel>
                <SelectItem value="emas-batangan">Emas Batangan (Antam / UBS / Galeri 24)</SelectItem>
                <SelectItem value="perhiasan-emas">Perhiasan Emas (Kalung / Cincin / Gelang)</SelectItem>
                <SelectItem value="dinar-dirham">Koin Dinar & Dirham</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Kendaraan Bermotor</SelectLabel>
                <SelectItem value="bpkb-mobil">BPKB Mobil Penumpang</SelectItem>
                <SelectItem value="bpkb-motor">BPKB Sepeda Motor</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Elektronik & Gadget</SelectLabel>
                <SelectItem value="smartphone">Smartphone & Tablet</SelectItem>
                <SelectItem value="laptop">Laptop / MacBook Pro</SelectItem>
                <SelectItem value="kamera">Kamera DSLR / Mirrorless</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>

    <!-- CARD 2: Interactive Variations & States -->
    <DocCard
      title="Interactive Variations & States"
      description="Ragam konfigurasi Select dari keadaan placeholder kosong, nilai terdefinisi awal (pre-selected), hingga status dinonaktifkan (disabled)."
      badge="Dropdown States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gw-24 py-gw-8">
        <!-- Placeholder Empty -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Label for="select-state-wilayah">Kantor Wilayah</Label>
            <Select id="select-state-wilayah" v-model="kantorWilayah">
              <SelectTrigger class="w-full bg-card">
                <SelectValue placeholder="Pilih Kantor Wilayah..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kanwil-1">Kanwil I Medan</SelectItem>
                <SelectItem value="kanwil-2">Kanwil II Pekanbaru</SelectItem>
                <SelectItem value="kanwil-8">Kanwil VIII Jakarta 1</SelectItem>
                <SelectItem value="kanwil-9">Kanwil IX Jakarta 2</SelectItem>
                <SelectItem value="kanwil-10">Kanwil X Bandung</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Placeholder State</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">placeholder="..."</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Status netral nilai belum dipilih
            </p>
          </div>
        </div>

        <!-- Pre-selected Value -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Label for="select-state-status">Status Keanggotaan</Label>
            <Select id="select-state-status" v-model="statusNasabah">
              <SelectTrigger class="w-full bg-card">
                <SelectValue placeholder="Pilih status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nasabah-aktif">Nasabah Aktif</SelectItem>
                <SelectItem value="nasabah-prioritas">Nasabah Prioritas (Emerald)</SelectItem>
                <SelectItem value="agen-resmi">Agen Pegadaian</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Selected State</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">v-model="statusNasabah"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menampilkan label opsi aktif
            </p>
          </div>
        </div>

        <!-- Disabled Select -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Label for="select-state-disabled" class="text-foreground-tertiary">Mata Uang Transaksi</Label>
            <Select id="select-state-disabled" disabled model-value="idr">
              <SelectTrigger class="w-full bg-card" disabled>
                <SelectValue placeholder="IDR - Rupiah Indonesia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="idr">IDR - Indonesian Rupiah</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menu dropdown terkunci nonaktif
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Manajemen Posisi:</strong> Popover konten dropdown secara otomatis menghitung ruang viewport yang tersedia (<em>collision-aware</em>) agar tidak terpotong tepi layar.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Select."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="selectProps" />
    </DocCard>
  </section>
</template>
