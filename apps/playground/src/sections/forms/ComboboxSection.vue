<script setup lang="ts">
/**
 * @file ComboboxSection.vue
 * @description Enterprise-grade documentation for the Combobox autocomplete search component.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import {
  Badge,
  Button,
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxTrigger,
  Label,
} from "@gwind/ui";
import { Check, ChevronDown, Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const selectedCabang = ref("Cabang Kramat Raya - Jakarta Pusat");
const listCabang = [
  "Cabang Kramat Raya - Jakarta Pusat",
  "Cabang Salemba - Jakarta Pusat",
  "Cabang Depok Timur - Depok",
  "Cabang Sudirman - Bandung",
  "Cabang Kayutangan - Malang",
  "Cabang Darmo - Surabaya",
  "Cabang Renon - Denpasar",
  "Cabang Somba Opu - Makassar",
  "Cabang Putri Hijau - Medan",
];

const selectedWilayah = ref("");

const comboboxProps: PropRow[] = [
  {
    name: "modelValue / v-model",
    type: "string | number | object",
    default: "undefined",
    description: "Nilai item terpilih dalam autocomplete combobox yang diikat via v-model.",
  },
  {
    name: "ComboboxAnchor / ComboboxTrigger",
    type: "Component",
    default: "combobox / button",
    description: "Jangkar penempatan popover dan tombol pemicu pembuka daftar pencarian.",
  },
  {
    name: "ComboboxInput",
    type: "Component",
    default: "searchbox",
    description: "Field input teks di dalam popover untuk memasukkan kata kunci filter.",
  },
  {
    name: "ComboboxList",
    type: "Component",
    default: "listbox",
    description: "Kontainer popover mengambang yang menampung seluruh daftar opsi.",
  },
  {
    name: "ComboboxItem",
    type: "Component",
    default: "option",
    description: "Opsi individu yang dapat dipilih dan mendukung event @select.",
  },
  {
    name: "ComboboxEmpty",
    type: "Component",
    default: "status",
    description: "Umpan balik teks saat tidak ada opsi yang sesuai dengan kata kunci pengguna.",
  },
];
</script>

<template>
  <section id="combobox" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Combobox
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Komponen pencarian autolengkap (autocomplete) dengan filter instan dalam popover floating surface, umpan balik hasil nihil (empty feedback), serta penanda centang seleksi aktif sesuai pola WAI-ARIA Combobox.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Search & Filter Primitive</Badge>
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
            Pencarian Kantor Cabang Pegadaian Terdekat
          </h3>
        </div>
        <div class="flex items-center gap-gw-8">
          <span class="text-omega font-semibold text-foreground-secondary">Cabang Terpilih:</span>
          <code class="rounded-md bg-black-900 px-2.5 py-1 font-mono text-atom font-bold text-lime-400 max-w-xs truncate">
            {{ selectedCabang || 'Belum dipilih' }}
          </code>
        </div>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Pencarian kantor cabang tujuan penaksiran barang jaminan dengan filtrasi teks langsung dan penanda centang.
        </p>
        <div class="max-w-md space-y-gw-8">
          <Label for="combobox-case-cabang">Pilih Lokasi Kantor Cabang</Label>
          <Combobox v-model="selectedCabang">
            <ComboboxAnchor>
              <ComboboxTrigger as-child>
                <Button id="combobox-case-cabang" variant="outline" class="w-full justify-between bg-card text-left">
                  <span class="truncate">{{ selectedCabang || 'Cari nama cabang atau kota...' }}</span>
                  <ChevronDown class="h-4 w-4 shrink-0 text-foreground-tertiary" />
                </Button>
              </ComboboxTrigger>
            </ComboboxAnchor>
            <ComboboxList class="w-full max-w-md bg-card shadow-drop-2 border border-border-subtle rounded-md">
              <ComboboxInput placeholder="Ketik nama cabang atau kota..." />
              <ComboboxEmpty class="p-gw-16 text-omega text-foreground-secondary text-center">
                Kantor cabang tidak ditemukan.
              </ComboboxEmpty>
              <ComboboxGroup class="p-1">
                <ComboboxItem
                  v-for="cabang in listCabang"
                  :key="cabang"
                  :value="cabang"
                  class="flex items-center gap-gw-8 px-gw-16 py-gw-8 text-sigma rounded hover:bg-background cursor-pointer"
                  @select="selectedCabang = cabang"
                >
                  <ComboboxItemIndicator class="w-4 h-4 flex items-center justify-center">
                    <Check class="h-4 w-4 text-foreground-green" />
                  </ComboboxItemIndicator>
                  <span class="truncate">{{ cabang }}</span>
                </ComboboxItem>
              </ComboboxGroup>
            </ComboboxList>
          </Combobox>
        </div>
      </div>
    </div>

    <!-- CARD 2: Interactive Variations & States -->
    <DocCard
      title="Interactive Variations & States"
      description="Konfigurasi Combobox dari mode placeholder kosong, penanganan teks masukan pencarian, hingga status dinonaktifkan."
      badge="Search States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8">
        <!-- Empty / Placeholder State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Label for="combobox-state-empty">Wilayah Operasional</Label>
            <Combobox v-model="selectedWilayah">
              <ComboboxAnchor>
                <ComboboxTrigger as-child>
                  <Button id="combobox-state-empty" variant="outline" class="w-full justify-between bg-card text-left">
                    <span class="truncate text-foreground-secondary">{{ selectedWilayah || 'Pilih wilayah operasional...' }}</span>
                    <ChevronDown class="h-4 w-4 shrink-0 text-foreground-tertiary" />
                  </Button>
                </ComboboxTrigger>
              </ComboboxAnchor>
              <ComboboxList class="w-full max-w-md bg-card shadow-drop-2 border border-border-subtle rounded-md">
                <ComboboxInput placeholder="Cari wilayah..." />
                <ComboboxEmpty class="p-gw-16 text-omega text-foreground-secondary text-center">Wilayah tidak ditemukan.</ComboboxEmpty>
                <ComboboxGroup class="p-1">
                  <ComboboxItem
                    v-for="item in ['DKI Jakarta', 'Jawa Barat', 'Jawa Timur', 'Sumatera Utara', 'Bali & Nusa Tenggara']"
                    :key="item"
                    :value="item"
                    class="flex items-center gap-gw-8 px-gw-16 py-gw-8 text-sigma rounded hover:bg-background cursor-pointer"
                    @select="selectedWilayah = item"
                  >
                    <ComboboxItemIndicator class="w-4 h-4 flex items-center justify-center">
                      <Check class="h-4 w-4 text-foreground-green" />
                    </ComboboxItemIndicator>
                    <span>{{ item }}</span>
                  </ComboboxItem>
                </ComboboxGroup>
              </ComboboxList>
            </Combobox>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Placeholder State</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">value="" (kosong)</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menampilkan instruksi pencarian awal
            </p>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Label for="combobox-state-disabled" class="text-foreground-tertiary">Negara Transaksi (Terkunci)</Label>
            <Button id="combobox-state-disabled" variant="outline" disabled class="w-full justify-between bg-card text-left">
              <span>Indonesia (ID)</span>
              <ChevronDown class="h-4 w-4 shrink-0 text-foreground-tertiary" />
            </Button>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Kontrol terkunci dengan pointer nonaktif
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Optimasi Keyboard:</strong> Mengetik pada <code>ComboboxInput</code> secara instan memfilter opsi item di dalam list tanpa perlu me-reload data dari server.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Combobox."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="comboboxProps" />
    </DocCard>
  </section>
</template>
