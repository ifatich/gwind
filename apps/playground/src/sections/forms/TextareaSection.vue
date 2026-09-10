<script setup lang="ts">
/**
 * @file TextareaSection.vue
 * @description Enterprise-grade documentation for Textarea and TextareaField multi-line components.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import { Badge, Button, TextareaField } from "@gwind/ui";
import { CircleHelp, Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const catatanTransaksi = ref(
  "Harap sertakan kwitansi pelunasan dan bukti transfer saat barang diantar ke alamat nasabah."
);
const defaultText = ref("");
const filledText = ref("Barang agunan berupa perhiasan emas 18K dalam kondisi prima tanpa goresan.");
const disabledText = ref("Data catatan ini telah terkunci dan tidak dapat disunting kembali oleh nasabah.");

function resetCatatan() {
  catatanTransaksi.value = "";
}

function loadSampleCatatan() {
  catatanTransaksi.value = "Pengiriman barang agunan dijadwalkan pada hari kerja pukul 10:00 - 14:00 WIB.";
}

const textareaProps: PropRow[] = [
  {
    name: "modelValue",
    type: "string | number",
    default: "undefined",
    description: "Nilai teks yang diikat secara dua arah via v-model.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Teks judul label formal di atas textarea.",
  },
  {
    name: "maxlength / maxLength",
    type: "number | string",
    default: "undefined",
    description: "Batas kuota karakter maksimal yang dapat dimasukkan pengguna.",
  },
  {
    name: "counter / showCount",
    type: "boolean | string",
    default: "undefined",
    description: "Mengaktifkan tampilan indikator teks hitungan karakter di bawah textarea.",
  },
  {
    name: "caption",
    type: "string",
    default: "undefined",
    description: "Teks keterangan bantuan di bawah field.",
  },
  {
    name: "error",
    type: "string",
    default: "undefined",
    description: "Pesan validasi kesalahan yang memicu border merah dan penandaan aksesibilitas.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan pengeditan teks dan memberi gaya visual muted.",
  },
];
</script>

<template>
  <section id="textarea" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Textarea
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Komponen masukan teks multi-baris terintegrasi dengan pelacak kuota karakter dinamis (<code>maxlength</code>), integrasi label formal, tooltip informasi bantuan, serta umpan balik status validasi error WCAG 2.1 AA.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Multi-Line Input Primitive</Badge>
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
            Instruksi Pengantaran & Catatan Transaksi Khusus
          </h3>
        </div>
        <div class="flex items-center gap-gw-8">
          <Button variant="ghost" size="sm" @click="resetCatatan">Reset</Button>
          <Button variant="outline" size="sm" @click="loadSampleCatatan">Isi Contoh</Button>
        </div>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Pengisian catatan khusus alur penebusan agunan gadai dengan validasi batas kuota maksimal 100 karakter dan counter otomatis.
        </p>
        <TextareaField
          id="textarea-catatan"
          v-model="catatanTransaksi"
          label="Instruksi Pengantaran / Catatan Khusus"
          placeholder="Tuliskan catatan detail untuk petugas kurir atau penaksir..."
          :maxlength="100"
          counter
        >
          <template #label-icon>
            <CircleHelp class="h-4 w-4 text-foreground-tertiary" />
          </template>
        </TextareaField>
      </div>
    </div>

    <!-- CARD 2: Interactive Lifecycle States -->
    <DocCard
      title="Interactive Lifecycle States"
      description="Ragam visual TextareaField dari placeholder kosong, nilai terisi dengan counter, batas validasi error, hingga status terkunci (disabled)."
      badge="Lifecycle States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8">
        <!-- Default State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <TextareaField
              id="textarea-default"
              v-model="defaultText"
              label="Keterangan Agunan (Placeholder)"
              placeholder="Jelaskan kondisi fisik barang jaminan secara ringkas..."
              :maxlength="150"
              counter
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Placeholder State</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:maxlength="150" + counter</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Status netral dengan pelacak kuota karakter kosong
            </p>
          </div>
        </div>

        <!-- Filled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <TextareaField
              id="textarea-filled"
              v-model="filledText"
              label="Deskripsi Agunan Terisi"
              :maxlength="150"
              counter
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Filled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">v-model="filledText"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Teks pengguna terisi dengan perhitungan live counter
            </p>
          </div>
        </div>

        <!-- Error State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <TextareaField
              id="textarea-error"
              label="Catatan Keluhan Layanan"
              input-class="border-destructive focus-visible:border-destructive"
              error="Deskripsi keluhan wajib diisi minimal 20 karakter."
              placeholder="Tuliskan kendala yang Anda alami..."
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-destructive">Error Validation State</span>
              <code class="text-atom font-mono text-destructive font-semibold">error="Deskripsi keluhan..."</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menampilkan keterangan kegagalan validasi
            </p>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <TextareaField
              id="textarea-disabled"
              label="Syarat Tambahan (Terkunci)"
              disabled
              :model-value="disabledText"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Mode baca saja dengan visual background muted
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Kenyamanan Pengguna:</strong> TextareaField secara otomatis membatasi input pengguna agar tidak melebihi <code>maxlength</code> dan menampilkan rasio karakter <code>[panjang]/[maksimal]</code> di sudut kanan bawah.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk TextareaField."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="textareaProps" />
    </DocCard>
  </section>
</template>
