<script setup lang="ts">
/**
 * @file ImagePickerSection.vue
 * @description Enterprise-grade documentation for the ImagePicker media upload component.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import { Badge, ImagePicker } from "@gwind/ui";
import { Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const imagePickerSmall = ref<string | File | null>(null);
const imagePickerLarge43 = ref<string | File | null>(null);
const imagePickerLarge11 = ref<string | File | null>(null);
const imagePickerMultiple = ref<File[]>([]);

const imagePickerProps: PropRow[] = [
  {
    name: "modelValue",
    type: "string | File | (string | File)[] | null",
    default: "null",
    description: "Data gambar yang diikat via v-model. Mendukung array berkas saat prop multiple aktif.",
  },
  {
    name: "size",
    type: "'small' | 'large'",
    default: "'large'",
    description: "Ukuran dimensi tampilan: 'small' (80x80px) atau 'large' (area fleksibel).",
  },
  {
    name: "aspectRatio",
    type: "'4:3' | '1:1'",
    default: "'4:3'",
    description: "Rasio aspek bingkai foto saat berukuran large.",
  },
  {
    name: "multiple",
    type: "boolean",
    default: "false",
    description: "Mengizinkan pengunggahan beberapa berkas sekaligus dalam mode carousel slider.",
  },
  {
    name: "metadata",
    type: "{ takenBy?: string; timestamp?: string }",
    default: "undefined",
    description: "Data kontekstual yang disematkan pada tampilan foto (nama pengunggah dan tanggal/jam).",
  },
  {
    name: "maxSize",
    type: "number",
    default: "2097152 (2MB)",
    description: "Batas ukuran maksimum foto per berkas dalam satuan bytes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi pengambilan atau pengunggahan foto.",
  },
];
</script>

<template>
  <section id="image-picker" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Image Picker & Display
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Komponen pengunggah dan penampil aset media visual dengan kontrol rasio aspek (1:1 & 4:3), modal pratinjau resolusi tinggi, integrasi carousel multi-gambar, serta label metadata penaksiran jaminan.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Media Picker Primitive</Badge>
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
            Dokumentasi Foto KTP-el & Fisik Barang Jaminan (Marhun)
          </h3>
        </div>
        <span class="text-omega font-semibold text-foreground-secondary">
          Aspect Ratio 4:3 & Small 80x80
        </span>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Pengambilan foto identitas nasabah dan bukti fisik kondisi perhiasan emas untuk verifikasi penaksir gadai.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-16">
          <!-- Small 80x80 -->
          <div class="space-y-gw-16">
            <div>
              <h4 class="text-sigma font-bold text-foreground">Foto KTP / Identitas (Small 80x80)</h4>
              <p class="text-omega text-foreground-secondary">Ukuran ringkas 80x80px untuk pas foto wajah atau dokumen KTP.</p>
            </div>
            <div class="flex items-center">
              <ImagePicker v-model="imagePickerSmall" size="small" />
            </div>
          </div>

          <!-- Large 4:3 -->
          <div class="space-y-gw-16">
            <div>
              <h4 class="text-sigma font-bold text-foreground">Foto Barang Jaminan (Large 4:3)</h4>
              <p class="text-omega text-foreground-secondary">Rasio aspek 4:3 untuk foto makro perhiasan atau fisik elektronik.</p>
            </div>
            <div class="flex flex-col">
              <ImagePicker v-model="imagePickerLarge43" size="large" aspect-ratio="4:3" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Multi-Image Carousel Slider -->
    <DocCard
      title="Multi-Image Slider dengan Metadata"
      description="Pengunggahan multi-foto fisik agunan dari beragam sudut pandang dengan penandaan metadata nama penaksir dan stempel waktu."
      badge="Multi Upload"
      badge-variant="outline"
    >
      <div class="py-gw-8">
        <ImagePicker
          v-model="imagePickerMultiple"
          size="large"
          aspect-ratio="4:3"
          :metadata="{ takenBy: 'Budi Santoso (Penaksir)', timestamp: '24 Mar 2026 10:30 WIB' }"
          multiple
        />
      </div>
    </DocCard>

    <!-- CARD 3: Sizing Scales & Aspect Ratios -->
    <DocCard
      title="Sizing Scales & Aspect Ratios"
      description="Perbandingan visual rasio aspek bujur sangkar (1:1) dan persegi panjang fotografi (4:3) serta status nonaktif."
      badge="Scale Variations"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8">
        <!-- Square 1:1 -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <span class="block text-sigma font-bold text-foreground mb-gw-16">Square Format (1:1)</span>
            <ImagePicker v-model="imagePickerLarge11" size="large" aspect-ratio="1:1" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Ratio 1:1</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">aspectRatio="1:1"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Cocok untuk katalog aset produk
            </p>
          </div>
        </div>

        <!-- Landscape 4:3 -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <span class="block text-sigma font-bold text-foreground mb-gw-16">Landscape Format (4:3)</span>
            <ImagePicker size="large" aspect-ratio="4:3" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Ratio 4:3</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">aspectRatio="4:3"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Standar foto kamera agunan
            </p>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <span class="block text-sigma font-bold text-foreground mb-gw-16">Disabled State</span>
            <ImagePicker disabled size="large" aspect-ratio="4:3" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Terkunci dari aksi klik & drag
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Pratinjau Layar Penuh:</strong> Mengeklik foto yang sudah terunggah akan membuka dialog modal resolusi tinggi beserta aksi download dan ambil ulang foto.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 4: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk ImagePicker."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="imagePickerProps" />
    </DocCard>
  </section>
</template>
