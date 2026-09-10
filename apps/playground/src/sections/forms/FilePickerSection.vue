<script setup lang="ts">
/**
 * @file FilePickerSection.vue
 * @description Enterprise-grade documentation for the FilePicker document uploader component.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import { Badge, FilePicker } from "@gwind/ui";
import { Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const filePickerFile1 = ref<File | null>(null);
const filePickerFile2 = ref<File | null>(null);
const fileSampleError = ref<File | null>(null);

const filePickerProps: PropRow[] = [
  {
    name: "modelValue",
    type: "File | null",
    default: "null",
    description: "Objek berkas JavaScript File terpilih yang terikat dua arah via v-model.",
  },
  {
    name: "title",
    type: "string",
    default: "'Title'",
    description: "Teks instruksi judul yang tampil di dalam area dropzone.",
  },
  {
    name: "accept",
    type: "string",
    default: "''",
    description: "Filter ekstensi dokumen yang diizinkan (contoh: '.pdf,.xlsx').",
  },
  {
    name: "maxSize",
    type: "number",
    default: "5242880 (5MB)",
    description: "Batas ukuran berkas maksimum dalam satuan bytes.",
  },
  {
    name: "rightAction",
    type: "boolean",
    default: "false",
    description: "Menampilkan tombol aksi sekunder di sudut kanan dropzone.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi drag & drop serta klik pada dropzone.",
  },
  {
    name: "error",
    type: "string",
    default: "undefined",
    description: "Pesan validasi kesalahan yang memicu border merah.",
  },
  {
    name: "@remove",
    type: "Event",
    isEvent: true,
    description: "Dipancarkan saat pengguna menekan tombol hapus/reset pada berkas yang terunggah.",
  },
];
</script>

<template>
  <section id="file-picker" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          File Picker
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Komponen dropzone pengunggah berkas dokumen non-gambar (PDF, CSV, XLSX, DOCX) dengan deteksi seret-lepas (drag-and-drop), validasi batas ukuran (<code>maxSize</code>), pembatasan tipe MIME, serta aksi hapus berkas terintegrasi.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Upload Primitive</Badge>
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
            Unggah Dokumen Persyaratan & Bukti Finansial Nasabah
          </h3>
        </div>
        <span class="text-omega font-semibold text-foreground-secondary">
          MIME Type Restriction & Right Action
        </span>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Pengunggahan berkas digital legalitas pemohon pinjaman gadai bisnis dengan validasi format dokumen.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-16">
          <!-- PDF Only -->
          <div class="space-y-gw-16">
            <div>
              <h4 class="text-sigma font-bold text-foreground">Rekening Koran 3 Bulan Terakhir</h4>
              <p class="text-omega text-foreground-secondary">Khusus menerima dokumen resmi berformat <code>.pdf</code> maksimal 5MB.</p>
            </div>
            <FilePicker
              v-model="filePickerFile2"
              title="Upload Rekening Koran (PDF)"
              accept=".pdf"
              right-action
            />
          </div>

          <!-- General Documents -->
          <div class="space-y-gw-16">
            <div>
              <h4 class="text-sigma font-bold text-foreground">Berkas Legalitas Usaha (SIUP / NIB)</h4>
              <p class="text-omega text-foreground-secondary">Menerima berkas dokumen pendukung (PDF, Word, Excel).</p>
            </div>
            <FilePicker
              v-model="filePickerFile1"
              title="Upload Dokumen Pendukung"
              accept=".pdf,.doc,.docx,.xlsx"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Interactive Variations & States -->
    <DocCard
      title="Interactive Variations & States"
      description="Ragam konfigurasi FilePicker dari status kosong, dengan tombol aksi sekunder, peringatan batas ukuran (error), hingga status disabled."
      badge="Upload States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8">
        <!-- Error State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <span class="block text-sigma font-bold text-foreground mb-gw-16">Validasi Kegagalan / Batas Kuota</span>
            <FilePicker
              v-model="fileSampleError"
              title="Upload Bukti Potong Pajak (PPh 21)"
              error="Ukuran berkas melebihi batas maksimum 5MB. Silakan kompres berkas Anda."
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-destructive">Error State</span>
              <code class="text-atom font-mono text-destructive font-semibold">error="Ukuran berkas melebihi..."</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Border merah dengan pesan validasi
            </p>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <span class="block text-sigma font-bold text-foreground mb-gw-16">Berkas Terverifikasi (Terkunci)</span>
            <FilePicker
              disabled
              title="Formulir Aplikasi Gadai (Terkunci)"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Dropzone tidak menerima drag & click
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Proteksi Format:</strong> Komponen <code>FilePicker</code> secara tegas memblokir berkas bertipe gambar (<code>image/*</code>) dan mengarahkan kebutuhan foto ke komponen <code>ImagePicker</code>.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk FilePicker."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="filePickerProps" />
    </DocCard>
  </section>
</template>
