<script setup lang="ts">
/**
 * @file CheckboxSection.vue
 * @description Enterprise-grade documentation for Checkbox and CheckboxField components.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import { Badge, Checkbox, CheckboxField } from "@gwind/ui";
import { Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const asuransiBarang = ref(true);
const syaratKetentuan = ref(true);
const checkboxPrimitiveChecked = ref(true);
const checkboxPrimitiveIndeterminate = ref<boolean | "indeterminate">("indeterminate");
const checkboxWebsiteActive = ref(true);
const checkboxWebsiteCaption = ref(false);
const checkboxError = ref(false);
const checkboxDisabled = ref(true);

const checkboxProps: PropRow[] = [
  {
    name: "modelValue",
    type: "boolean | 'indeterminate'",
    default: "false",
    description: "Status keterpilihan kotak centang saat ini yang terikat via v-model.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Teks deskriptif di samping kotak centang (khusus CheckboxField).",
  },
  {
    name: "caption",
    type: "string",
    default: "undefined",
    description: "Teks sekunder bantuan di bawah label (khusus CheckboxField).",
  },
  {
    name: "error",
    type: "string",
    default: "undefined",
    description: "Pesan validasi yang menggantikan teks caption dengan warna peringatan merah.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi klik dan merender visual muted.",
  },
  {
    name: "styleMode",
    type: "'website' | 'mobile-apps'",
    default: "'website'",
    description: "Penyesuaian tata letak perataan antara mode desktop dan aplikasi seluler.",
  },
];
</script>

<template>
  <section id="checkbox" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Checkbox
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Kontrol seleksi pilihan ganda dan konsen hukum akad transaksi dengan dukungan status tercentang (checked), kosong (unchecked), sebagian (indeterminate), serta perataan teks keterangan bantuan.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Selection Primitive</Badge>
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
            Opsi Proteksi Asuransi & Persetujuan Akad Gadai Syariah
          </h3>
        </div>
        <span class="text-omega font-semibold text-foreground-secondary">
          Consent & Multi-Option Selection
        </span>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Implementasi persetujuan klausul akad dan proteksi barang jaminan nasabah pada konfirmasi pencairan dana.
        </p>
        <div class="grid gap-gw-16 md:grid-cols-2">
          <CheckboxField
            id="chk-real-asuransi"
            v-model="asuransiBarang"
            label="Asuransi Barang Ekstra"
            caption="Perlindungan ganti rugi 100% nilai taksiran pasar barang jaminan."
          />
          <CheckboxField
            id="chk-real-syarat"
            v-model="syaratKetentuan"
            label="Saya menyetujui seluruh ketentuan akad gadai syariah"
            caption="Tunduk pada Fatwa DSN-MUI dan regulasi OJK yang berlaku."
          />
        </div>
      </div>
    </div>

    <!-- CARD 2: Checkbox Primitives -->
    <DocCard
      title="Checkbox Primitives"
      description="Elemen kontrol kotak centang murni untuk penempatan atomik pada tabel baris, kartu daftar, atau tata letak kompak."
      badge="Primitive Control"
      badge-variant="outline"
    >
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-gw-24 py-gw-8">
        <!-- Unchecked -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px]">
            <Checkbox id="chk-primitive-off" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle w-full">
            <span class="block text-sigma font-bold text-foreground">Unchecked</span>
            <code class="block text-atom font-mono text-foreground-secondary font-semibold">:modelValue="false"</code>
            <span class="block text-omega text-foreground-secondary">Status netral kosong</span>
          </div>
        </div>

        <!-- Checked -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px]">
            <Checkbox id="chk-primitive-on" v-model="checkboxPrimitiveChecked" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle w-full">
            <span class="block text-sigma font-bold text-foreground">Checked</span>
            <code class="block text-atom font-mono text-foreground-green font-semibold">:modelValue="true"</code>
            <span class="block text-omega text-foreground-secondary">Terpilih aktif</span>
          </div>
        </div>

        <!-- Indeterminate -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px]">
            <Checkbox id="chk-primitive-indet" v-model="checkboxPrimitiveIndeterminate" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle w-full">
            <span class="block text-sigma font-bold text-foreground">Indeterminate</span>
            <code class="block text-atom font-mono text-foreground-tertiary font-semibold">'indeterminate'</code>
            <span class="block text-omega text-foreground-secondary">Sebagian sub-opsi terpilih</span>
          </div>
        </div>

        <!-- Disabled -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px]">
            <Checkbox id="chk-primitive-disabled" disabled />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle w-full">
            <span class="block text-sigma font-bold text-foreground">Disabled</span>
            <code class="block text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            <span class="block text-omega text-foreground-secondary">Terkunci interaksi</span>
          </div>
        </div>
      </div>
    </DocCard>

    <!-- CARD 3: CheckboxField Form Variations -->
    <DocCard
      title="CheckboxField Form Variations"
      description="Penyatuan kotak centang dengan label deskriptif, teks keterangan bantuan sekunder (caption), pesan validasi kesalahan, dan status disabled."
      badge="Form Integration"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8">
        <!-- Standard Active -->
        <div class="flex flex-col justify-between gap-gw-16">
          <CheckboxField
            id="chk-desktop-a"
            v-model="checkboxWebsiteActive"
            label="Opsi Terpilih (Active State)"
          />
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Simple Field</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">label="Opsi Terpilih"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Baris centang tunggal sejajar label
            </p>
          </div>
        </div>

        <!-- With Caption -->
        <div class="flex flex-col justify-between gap-gw-16">
          <CheckboxField
            id="chk-desktop-caption"
            v-model="checkboxWebsiteCaption"
            label="Opsi dengan Keterangan"
            caption="Sub-teks penjelas tambahan yang informatif dan relevan bagi nasabah."
          />
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Field with Caption</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">caption="Sub-teks..."</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Keterangan bantuan di bawah label
            </p>
          </div>
        </div>

        <!-- Error State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <CheckboxField
            id="chk-desktop-error"
            v-model="checkboxError"
            label="Persetujuan Kebijakan Privasi"
            error="Anda wajib mencentang persetujuan kebijakan sebelum melanjutkan."
          />
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-destructive">Error State</span>
              <code class="text-atom font-mono text-destructive font-semibold">error="Wajib mencentang..."</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Pesan peringatan validasi form
            </p>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <CheckboxField
            id="chk-desktop-disabled"
            v-model="checkboxDisabled"
            disabled
            label="Klausul Khusus Nasabah Prioritas"
            caption="Opsi ini otomatis berlaku berdasarkan tier keanggotaan Anda."
          />
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Kontrol dan label terkunci nonaktif
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Fokus Aksesibel:</strong> Kotak centang terhubung dengan labelnya sehingga pengguna dapat mengeklik seluruh area teks label untuk mengubah status centang.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 4: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Checkbox dan CheckboxField."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="checkboxProps" />
    </DocCard>
  </section>
</template>
