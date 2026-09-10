<script setup lang="ts">
/**
 * @file InputSection.vue
 * @description Enterprise-grade interactive documentation for the Input & InputField components.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import { Badge, Button, InputField } from "@gwind/ui";
import {
  CircleHelp,
  Info,
  Mail,
  Search,
  Sparkles,
  X,
} from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

// Real-world scenario state
const realKtp = ref("");
const realEmail = ref("");

function loadScenarioData() {
  realKtp.value = "3171020101900005";
  realEmail.value = "budi.santoso@pegadaian.co.id";
}

function resetScenarioData() {
  realKtp.value = "";
  realEmail.value = "";
}

// Clearable field state
const clearableValue = ref("Clear me");

const inputProps: PropRow[] = [
  {
    name: "id",
    type: "string",
    default: "auto-generated",
    description: "Identifier unik elemen DOM untuk relasi label dan pembaca layar (screen reader).",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Teks judul label formal di atas field input. Dapat dikustomisasi via slot #label.",
  },
  {
    name: "fieldSize",
    type: "'short' | 'long'",
    default: "'short'",
    description: "Menentukan dimensi kontrol: 'short' (tinggi 48px input) atau 'long' (textarea min-h-20).",
  },
  {
    name: "caption",
    type: "string",
    default: "undefined",
    description: "Teks keterangan bantuan di bawah field. Otomatis disubstitusi jika prop error aktif.",
  },
  {
    name: "error",
    type: "string",
    default: "undefined",
    description: "Pesan validasi kesalahan. Memicu border merah dan menginjeksi atribut aria-invalid=\"true\".",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi pengguna, menerapkan visual latar belakang muted dan pointer kursor not-allowed.",
  },
  {
    name: "prefix / suffix",
    type: "string",
    default: "undefined",
    description: "Teks ornamen struktural di kiri/kanan input yang dirangkai dalam kontainer grouped.",
  },
  {
    name: "#label-icon",
    type: "Slot",
    isSlot: true,
    description: "Slot icon tepat di sebelah kanan label teks (contoh: tooltip bantuan atau tanda informasi).",
  },
  {
    name: "#left-icon / #right-icon",
    type: "Slot",
    isSlot: true,
    description: "Slot icon di dalam area kontrol input (inset padding horizontal otomatis disesuaikan).",
  },
  {
    name: "#action",
    type: "Slot",
    isSlot: true,
    description: "Slot aksi sekunder interaktif di sisi kanan kontrol (contoh: tombol clear atau toggle password).",
  },
];
</script>

<template>
  <section id="input" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Input & InputField
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Komponen kontrol masukan teks standar enterprise yang mengintegrasikan label dinamis, slot icon prefiks/sufiks, ornamen teks terkelompok (grouped), textarea multi-baris, serta umpan balik status validasi error terstandar WCAG 2.1 AA.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Form Control Primitive</Badge>
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
            Formulir Identitas & Kontak Nasabah
          </h3>
        </div>
        <div class="flex items-center gap-gw-8">
          <Button variant="ghost" size="sm" @click="resetScenarioData">
            Reset
          </Button>
          <Button variant="outline" size="sm" @click="loadScenarioData">
            Isi Contoh
          </Button>
        </div>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Implementasi praktis InputField pada alur onboarding transaksi SBG (Surat Bukti Gadai) dengan tooltip bantuan identitas NIK dan slot icon surel terdaftar.
        </p>
        <div class="grid gap-gw-16 md:grid-cols-2">
          <InputField
            id="input-real-ktp"
            v-model="realKtp"
            label="Nomor Induk Kependudukan (NIK)"
            placeholder="Contoh: 3171020101900005"
            caption="Wajib 16 digit angka sesuai KTP-el resmi nasabah"
          >
            <template #label-icon>
              <CircleHelp class="h-4 w-4 text-foreground-tertiary" />
            </template>
          </InputField>

          <InputField
            id="input-real-email"
            v-model="realEmail"
            label="Alamat Email Terdaftar"
            placeholder="nasabah@example.com"
            caption="Notifikasi status agunan & kwitansi pembayaran digital"
          >
            <template #left-icon>
              <Mail class="h-4 w-4 text-foreground-tertiary" />
            </template>
          </InputField>
        </div>
      </div>
    </div>

    <!-- CARD 2: Sizing Scale & Geometry (Short vs Long Field) -->
    <DocCard
      title="Sizing Scale & Control Geometry"
      description="Perbandingan dimensi kontrol antara field baris tunggal (h-12 / 48px) dan area teks multi-baris (min-h-20 / 80px) untuk input berdensitas tinggi."
      badge="Field Geometry"
      badge-variant="brocoli"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8">
        <!-- Short Field -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputField
              id="input-short"
              label="Title"
              placeholder="Placeholder"
            >
              <template #label-icon>
                <CircleHelp class="h-[18px] w-[18px] text-foreground-tertiary" />
              </template>
            </InputField>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Short Field</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">fieldSize="short"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Standar input satu baris dengan tinggi 48px (<code>h-12</code>), cocok untuk data diskrit seperti nama, kode referensi, atau kata sandi.
            </p>
          </div>
        </div>

        <!-- Long Field -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputField
              id="input-long"
              field-size="long"
              label="Title"
              placeholder="Placeholder"
            >
              <template #label-icon>
                <CircleHelp class="h-[18px] w-[18px] text-foreground-tertiary" />
              </template>
            </InputField>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Long Field</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">fieldSize="long"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Area teks multi-baris (textarea) dengan tinggi minimal 80px (<code>min-h-20</code>) dan <code>resize-none</code> untuk deskripsi atau catatan transaksi.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Desain Responsif:</strong> Seluruh kontrol input secara default memanfaatkan <code>w-full</code> dan fleksibel mengikuti batas kontainer grid induk tanpa horizontal overflow.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Interactive Lifecycle States -->
    <DocCard
      title="Interactive Lifecycle States"
      description="Ragam status visual kontrol input dari placeholder kosong, hover interaktif, nilai terisi (filled), nonaktif (disabled), hingga status validasi kegagalan (error)."
      badge="Lifecycle States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8">
        <!-- Placeholder State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputField
              id="input-placeholder"
              label="Title"
              placeholder="Placeholder"
            >
              <template #label-icon>
                <CircleHelp class="h-[18px] w-[18px] text-foreground-tertiary" />
              </template>
            </InputField>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <span class="block text-sigma font-bold text-foreground">Placeholder State</span>
            <code class="block text-atom font-mono text-foreground-green font-semibold">state="default"</code>
            <span class="block text-omega text-foreground-secondary">Status netral saat nilai masih kosong</span>
          </div>
        </div>

        <!-- Hover State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputField
              id="input-hover"
              label="Title"
              input-class="border-lime-600"
              placeholder="Hover"
            >
              <template #label-icon>
                <CircleHelp class="h-[18px] w-[18px] text-foreground-tertiary" />
              </template>
            </InputField>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <span class="block text-sigma font-bold text-foreground">Hover State</span>
            <code class="block text-atom font-mono text-foreground-green font-semibold">hover:border-lime-600</code>
            <span class="block text-omega text-foreground-secondary">Indikasi kursor hover interaktif</span>
          </div>
        </div>

        <!-- Filled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputField
              id="input-filled"
              label="Title"
              model-value="Text input"
            >
              <template #label-icon>
                <CircleHelp class="h-[18px] w-[18px] text-foreground-tertiary" />
              </template>
            </InputField>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <span class="block text-sigma font-bold text-foreground">Filled State</span>
            <code class="block text-atom font-mono text-foreground-tertiary font-semibold">model-value="Text input"</code>
            <span class="block text-omega text-foreground-secondary">Kontrol berisi teks masukan pengguna</span>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputField
              id="input-disabled"
              label="Title"
              disabled
              model-value="Disabled input"
            >
              <template #label-icon>
                <CircleHelp class="h-[18px] w-[18px] text-foreground-tertiary" />
              </template>
            </InputField>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <span class="block text-sigma font-bold text-foreground">Disabled State</span>
            <code class="block text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            <span class="block text-omega text-foreground-secondary">Field nonaktif dengan latar belakang muted</span>
          </div>
        </div>

        <!-- Error State -->
        <div class="flex flex-col justify-between gap-gw-16 sm:col-span-2 lg:col-span-2">
          <div>
            <InputField
              id="input-error"
              label="Title"
              input-class="border-destructive focus-visible:border-destructive"
              error="This is an error message."
              placeholder="Placeholder"
            >
              <template #label-icon>
                <CircleHelp class="h-[18px] w-[18px] text-foreground-tertiary" />
              </template>
            </InputField>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-destructive">Error State</span>
              <code class="text-atom font-mono text-destructive font-semibold">error="This is an error message."</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menampilkan teks keterangan error berwarna merah dan otomatis menerapkan atribut semantik aksesibilitas <code>aria-invalid="true"</code>.
            </p>
          </div>
        </div>
      </div>
    </DocCard>

    <!-- CARD 4: Affixes, Icons & Adornments -->
    <DocCard
      title="Affixes, Icons & Action Adornments"
      description="Fleksibilitas dekorasi kontrol menggunakan slot icon leading/trailing, prefiks & sufiks teks struktural (grouped mode), serta tombol aksi sekunder."
      badge="Control Adornments"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8">
        <!-- Icon Left -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputField
              id="input-icon-left"
              label="Title"
              placeholder="Placeholder"
            >
              <template #left-icon>
                <Mail class="h-6 w-6 text-foreground-tertiary" />
              </template>
            </InputField>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Icon Left</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">slot="#left-icon"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Icon penjelas di sisi kiri kontrol
            </p>
          </div>
        </div>

        <!-- Icon Right -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputField
              id="input-icon-right"
              label="Title"
              placeholder="Placeholder"
            >
              <template #right-icon>
                <Search class="h-6 w-6 text-foreground-tertiary" />
              </template>
            </InputField>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Icon Right</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">slot="#right-icon"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Icon indikator status di sisi kanan kontrol
            </p>
          </div>
        </div>

        <!-- Prefix Text -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputField
              id="input-prefix"
              label="Title"
              prefix="https://"
              placeholder="Placeholder"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Prefix Text</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">prefix="https://"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Label prefiks terintegrasi grouped
            </p>
          </div>
        </div>

        <!-- Suffix Text -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div>
            <InputField
              id="input-suffix"
              label="Title"
              suffix=".com"
              placeholder="Placeholder"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Suffix Text</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">suffix=".com"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Label sufiks terintegrasi grouped
            </p>
          </div>
        </div>

        <!-- Clearable Field -->
        <div class="flex flex-col justify-between gap-gw-16 sm:col-span-2 lg:col-span-2">
          <div>
            <InputField
              id="input-clearable"
              v-model="clearableValue"
              label="Title"
              placeholder="Ketik teks untuk melihat tombol clear..."
              clearable
            >
              <template v-if="clearableValue" #action>
                <button
                  type="button"
                  class="flex items-center justify-center p-1 rounded hover:bg-background text-foreground-secondary hover:text-foreground transition-colors cursor-pointer"
                  title="Hapus teks"
                  aria-label="Hapus teks masukan"
                  @click="clearableValue = ''"
                >
                  <X class="h-4 w-4" />
                </button>
              </template>
            </InputField>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Clearable Field</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">clearable + #action</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Aksi pembersih cepat dengan tombol silang (<code>X</code>) interaktif yang mereset nilai model kembali kosong.
            </p>
          </div>
        </div>
      </div>
    </DocCard>

    <!-- CARD 5: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk InputField."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="inputProps" />
    </DocCard>
  </section>
</template>
