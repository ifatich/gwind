<script setup lang="ts">
/**
 * @file DropdownSection.vue
 * @description Enterprise-grade documentation for the Dropdown menu component family.
 * Consumes 100% Gwind Design Tokens with isolated reactive states and unique IDs per instance.
 */
import { computed, ref } from "vue";
import {
  Dropdown,
  DropdownList,
  DropdownListCheckboxItem,
  DropdownListItem,
} from "@gwind/ui";
import { Landmark, Sparkles, Check, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

// State Group 1: Real-World Case (Isolated states)
const realAccountOpen = ref(false);
const realAccountSelected = ref("1.805,0595 gram");
const realProvinceOpen = ref(false);
const realProvinceSelected = ref("Bali");
const realPackageOpen = ref(false);
const realPackageA = ref(true);
const realPackageB = ref(false);

const realPackageLabel = computed(() => {
  const selected: string[] = [];
  if (realPackageA.value) selected.push("Asuransi Jiwa");
  if (realPackageB.value) selected.push("Proteksi Emas");
  return selected.length > 0 ? selected.join(", ") : "";
});

function selectRealProvince(province: string) {
  realProvinceSelected.value = province;
  realProvinceOpen.value = false;
}

// State Group 2: Variants & States (Isolated states)
const varIconOpen = ref(false);
const varIconSelected = ref("1.805,0595 gram");
const varSearchOpen = ref(false);
const varSearchSelected = ref("DKI Jakarta");
const varMultiOpen = ref(false);
const varMultiOptionA = ref(true);
const varMultiOptionB = ref(false);

const varMultiLabel = computed(() => {
  const selected: string[] = [];
  if (varMultiOptionA.value) selected.push("Option A");
  if (varMultiOptionB.value) selected.push("Option B");
  return selected.length > 0 ? selected.join(", ") : "";
});

function selectVarSearchProvince(province: string) {
  varSearchSelected.value = province;
  varSearchOpen.value = false;
}

const accounts = [
  { title: "1.805,0595 gram", caption: "1234 5678 9101 2345" },
  { title: "2.500,0000 gram", caption: "9876 5432 1098 7654" },
];

const provinces = [
  "Aceh",
  "Sumatera Utara",
  "Sumatera Barat",
  "Riau",
  "Kepulauan Riau",
  "Jambi",
  "Sumatera Selatan",
  "Kepulauan Bangka Belitung",
  "Bengkulu",
  "Lampung",
  "DKI Jakarta",
  "Jawa Barat",
  "Banten",
  "Jawa Tengah",
  "DI Yogyakarta",
  "Jawa Timur",
  "Bali",
];

const dropdownProps: PropRow[] = [
  {
    name: "id",
    type: "string",
    default: "undefined",
    description: "ID unik HTML untuk mengaitkan elemen tombol pemicu dengan elemen Label formulir.",
  },
  {
    name: "open",
    type: "boolean",
    default: "false",
    description: "Mengontrol status visibilitas popover dropdown secara reaktif (mendukung v-model:open).",
  },
  {
    name: "modelLabel",
    type: "string",
    default: "undefined",
    description: "Teks label aktif yang ditampilkan pada tombol pemicu saat suatu opsi terpilih.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Teks label formulir penjelas di atas elemen trigger dropdown.",
  },
  {
    name: "placeholder",
    type: "string",
    default: "'Select option'",
    description: "Teks placeholder saat belum ada opsi yang dipilih.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan pemicu dropdown dari klik pengguna dan interaksi keyboard.",
  },
  {
    name: "triggerClass",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi wadah tombol pemicu.",
  },
  {
    name: "contentClass",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi popover konten list menu.",
  },
  {
    name: "variant (DropdownList)",
    type: "'single' | 'multiple'",
    default: "'single'",
    description: "Perilaku pemilihan menu: 'single' (menutup saat opsi diklik) atau 'multiple' (tetap terbuka untuk checkbox).",
  },
  {
    name: "searchThreshold (DropdownList)",
    type: "number",
    default: "10",
    description: "Batas ambang minimum jumlah item sebelum input pencarian internal otomatis diaktifkan.",
  },
  {
    name: "searchPlaceholder (DropdownList)",
    type: "string",
    default: "'Cari...'",
    description: "Teks placeholder di dalam kotak input pencarian internal.",
  },
  {
    name: "update:open",
    type: "(value: boolean) => void",
    isEvent: true,
    description: "Event emisi saat status buka/tutup popover dropdown mengalami perubahan.",
  },
];
</script>

<template>
  <section id="dropdown" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Selection & Menus</p>
      <h2 class="text-xl font-bold text-foreground">Dropdown</h2>
      <p class="text-sigma text-foreground-secondary">
        Komponen menu pemilihan opsi berbasis floating popover dengan dukungan pencarian otomatis, item berikon/caption, serta mode pemilihan ganda berbasis checkbox.
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
          <h3 class="text-sigma font-extrabold text-foreground">Pemilihan Rekening Sumber & Proteksi Tambahan</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Account Badges & Multiple Checkbox Lists</span>
      </div>
      <div class="playground-case-body">
        <div class="grid gap-gw-16 lg:grid-cols-3">
          <!-- Dropdown Rekening Sumber -->
          <div class="space-y-2">
            <span class="text-sigma font-bold text-foreground">Pilih Rekening Sumber</span>
            <Dropdown
              id="dropdown-real-account"
              v-model:open="realAccountOpen"
              :model-label="realAccountSelected"
              placeholder="Pilih rekening"
              trigger-class="w-full"
            >
              <DropdownList>
                <DropdownListItem
                  v-for="(account, index) in accounts"
                  :key="index"
                  :label="account.title"
                  :caption="account.caption"
                  :selected="realAccountSelected === account.title"
                  @select="realAccountSelected = account.title; realAccountOpen = false"
                >
                  <template #icon>
                    <Landmark class="h-6 w-6 text-lime-600" />
                  </template>
                </DropdownListItem>
              </DropdownList>
            </Dropdown>
          </div>

          <!-- Dropdown Wilayah -->
          <div class="space-y-2">
            <span class="text-sigma font-bold text-foreground">Pilih Wilayah Operasional</span>
            <Dropdown
              id="dropdown-real-province"
              v-model:open="realProvinceOpen"
              :model-label="realProvinceSelected"
              placeholder="Pilih provinsi"
              trigger-class="w-full"
            >
              <DropdownList>
                <DropdownListItem
                  v-for="province in ['Aceh', 'Bali', 'Banten', 'DKI Jakarta', 'Jawa Barat']"
                  :key="province"
                  :selected="realProvinceSelected === province"
                  @select="selectRealProvince(province)"
                >
                  {{ province }}
                </DropdownListItem>
              </DropdownList>
            </Dropdown>
          </div>

          <!-- Dropdown Multi Opsi -->
          <div class="space-y-2">
            <span class="text-sigma font-bold text-foreground">Paket Proteksi Tambahan</span>
            <Dropdown
              id="dropdown-real-package"
              v-model:open="realPackageOpen"
              :model-label="realPackageLabel"
              placeholder="Pilih paket"
              trigger-class="w-full"
            >
              <DropdownList variant="multiple">
                <DropdownListCheckboxItem
                  id="dropdown-real-opt-a"
                  v-model="realPackageA"
                >
                  Asuransi Jiwa Nasabah
                </DropdownListCheckboxItem>
                <DropdownListCheckboxItem
                  id="dropdown-real-opt-b"
                  v-model="realPackageB"
                >
                  Proteksi Khazanah Emas
                </DropdownListCheckboxItem>
              </DropdownList>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Interaktivitas Dropdown -->
    <DocCard
      title="Karakteristik & Variasi Menu Dropdown"
      description="Eksplorasi variasi opsi tunggal berikon, pencarian otomatis pada list panjang (>10 item), seleksi ganda, serta status nonaktif."
      badge="Variants & States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Single with Icon & Caption -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Dropdown
              id="dropdown-var-icon"
              v-model:open="varIconOpen"
              :model-label="varIconSelected"
              label="Rekening Berikon"
              placeholder="Pilih rekening"
              trigger-class="w-full"
            >
              <DropdownList>
                <DropdownListItem
                  v-for="(account, index) in accounts"
                  :key="index"
                  :label="account.title"
                  :caption="account.caption"
                  :selected="varIconSelected === account.title"
                  @select="varIconSelected = account.title; varIconOpen = false"
                >
                  <template #icon>
                    <Landmark class="h-5 w-5 text-lime-600" />
                  </template>
                </DropdownListItem>
              </DropdownList>
            </Dropdown>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Item Icon & Caption</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">#icon + caption</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">Slot ikon kiri dan caption pendukung informasi rekening saldo.</p>
          </div>
        </div>

        <!-- Varian 2: Auto Search on Long List -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Dropdown
              id="dropdown-var-search"
              v-model:open="varSearchOpen"
              :model-label="varSearchSelected"
              label="Pencarian Otomatis"
              placeholder="Pilih provinsi"
              trigger-class="w-full"
            >
              <DropdownList :search-threshold="10">
                <DropdownListItem
                  v-for="prov in provinces"
                  :key="prov"
                  :selected="varSearchSelected === prov"
                  @select="selectVarSearchProvince(prov)"
                >
                  {{ prov }}
                </DropdownListItem>
              </DropdownList>
            </Dropdown>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Auto Search Input</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:search-threshold="10"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">Menampilkan input filter live otomatis saat item melebihi threshold.</p>
          </div>
        </div>

        <!-- Varian 3: Multiple Checkbox -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Dropdown
              id="dropdown-var-multi"
              v-model:open="varMultiOpen"
              :model-label="varMultiLabel"
              label="Multi Checkbox"
              placeholder="Pilih opsi"
              trigger-class="w-full"
            >
              <DropdownList variant="multiple">
                <DropdownListCheckboxItem
                  id="dropdown-var-opt-a"
                  v-model="varMultiOptionA"
                >
                  Option A (Jiwa)
                </DropdownListCheckboxItem>
                <DropdownListCheckboxItem
                  id="dropdown-var-opt-b"
                  v-model="varMultiOptionB"
                >
                  Option B (Emas)
                </DropdownListCheckboxItem>
              </DropdownList>
            </Dropdown>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Multiple Variant</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">variant="multiple"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">Menu tetap terbuka untuk memungkinkan pemilihan beberapa checkbox sekaligus.</p>
          </div>
        </div>

        <!-- Varian 4: Disabled -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Dropdown
              id="dropdown-var-disabled"
              disabled
              label="Status Disabled"
              placeholder="Menu nonaktif"
              trigger-class="w-full"
            >
              <DropdownList>
                <DropdownListItem>Opsi 1</DropdownListItem>
              </DropdownList>
            </Dropdown>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">disabled</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">Pemicu terkunci tanpa interaksi hover atau klik.</p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Collision Aware:</strong> Popover Dropdown memanfaatkan positioning engine cerdas untuk membalik arah display vertikal bila ruang batas bawah viewport tidak mencukupi.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Dropdown."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="dropdownProps" />
    </DocCard>
  </section>
</template>
