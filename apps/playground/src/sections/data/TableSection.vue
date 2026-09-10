<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  DataTable,
  Badge,
  Button,
  Checkbox,
  Input,
  Dropdown,
  DropdownList,
  DropdownListItem,
  Alert,
  AlertDescription,
} from "@gwind/ui";
import { Sparkles, Check, ArrowRight, Search, X, SlidersHorizontal } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

// Table Mock Data
const tableColumns = [
  { key: "gol", label: "Gol", width: "40px" },
  { key: "uangPinjaman", label: "Uang Pinjaman", width: "238px" },
  {
    key: "sewaModal",
    label: "Sewa Modal",
    subLabel: "/15 Hari",
    align: "right" as const,
    width: "122px",
  },
  { key: "premi", label: "Premi", width: "88px" },
  {
    key: "administrasi",
    label: "Administrasi",
    align: "right" as const,
    width: "104px",
  },
];

const tableRows = [
  {
    id: 1,
    gol: "A",
    uangPinjaman: "Rp 50.000 - Rp 500.000",
    sewaModal: "1%",
    premi: "-",
    administrasi: "Rp 2.000",
  },
  {
    id: 2,
    gol: "B",
    uangPinjaman: "> Rp 500.000 - Rp 1.000.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 10.000",
  },
  {
    id: 3,
    gol: "B",
    uangPinjaman: "> Rp 1.000.000 - Rp 2.500.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 20.000",
  },
  {
    id: 4,
    gol: "B",
    uangPinjaman: "> Rp 2.500.000 - Rp 5.000.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 35.000",
  },
  {
    id: 5,
    gol: "C",
    uangPinjaman: "> Rp 5.000.000 - Rp 10.000.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 50.000",
  },
  {
    id: 6,
    gol: "C",
    uangPinjaman: "> Rp 10.000.000 - Rp 15.000.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 75.000",
  },
  {
    id: 7,
    gol: "C",
    uangPinjaman: "> Rp 15.000.000 - Rp 20.000.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 100.000",
  },
  {
    id: 8,
    gol: "D",
    uangPinjaman: "> Rp 20.000.000",
    sewaModal: "1,1%",
    premi: "Rp 1.000 - Rp 1.500",
    administrasi: "Rp 125.000",
  },
];

// Interactive Table Scenarios States
const transactionRows = ref([
  {
    id: "SBG-88219",
    nasabah: "Budi Santoso",
    nik: "3171020101900005",
    barang: "Emas Antam 10 gr",
    pinjaman: "Rp 12.500.000",
    jatuhTempo: "24 Mar 2026",
    status: "Lancar",
    statusVariant: "brocoli" as const,
  },
  {
    id: "SBG-88220",
    nasabah: "Siti Rahmawati",
    nik: "3273010405880002",
    barang: "Cincin Berlian 5 gr",
    pinjaman: "Rp 6.800.000",
    jatuhTempo: "28 Mar 2026",
    status: "Dalam Proses",
    statusVariant: "blue" as const,
  },
  {
    id: "SBG-88221",
    nasabah: "Ahmad Hidayat",
    nik: "3578031208920003",
    barang: "Gelang Emas 24K 15 gr",
    pinjaman: "Rp 18.200.000",
    jatuhTempo: "15 Mar 2026",
    status: "Mendekati JT",
    statusVariant: "orange" as const,
  },
  {
    id: "SBG-88222",
    nasabah: "Dewi Lestari",
    nik: "5171010709950001",
    barang: "Emas UBS 25 gr",
    pinjaman: "Rp 31.000.000",
    jatuhTempo: "10 Mar 2026",
    status: "Lewat JT",
    statusVariant: "red" as const,
  },
]);

const selectedTransactions = ref<string[]>(["SBG-88219"]);
const selectAllTransactions = computed({
  get: () => selectedTransactions.value.length === transactionRows.value.length,
  set: (val: boolean) => {
    if (val) {
      selectedTransactions.value = transactionRows.value.map((r) => r.id);
    } else {
      selectedTransactions.value = [];
    }
  },
});

const wideContractRows = [
  {
    contractNo: "CTR-PGD-2026-001",
    branch: "CP Kramat Raya Jakarta",
    karat: "24K (99.9%)",
    grossWeight: "25.40 gr",
    netWeight: "25.00 gr",
    appraisalValue: "Rp 36.250.000",
    maxLoan: "Rp 31.000.000",
    sewaModalRate: "1.15% / 15 hr",
    adminFee: "Rp 50.000",
    totalBill: "Rp 31.406.250",
    status: "Aktif",
  },
  {
    contractNo: "CTR-PGD-2026-002",
    branch: "CP Salemba Raya",
    karat: "22K (91.6%)",
    grossWeight: "14.20 gr",
    netWeight: "13.80 gr",
    appraisalValue: "Rp 18.500.000",
    maxLoan: "Rp 15.500.000",
    sewaModalRate: "1.15% / 15 hr",
    adminFee: "Rp 35.000",
    totalBill: "Rp 15.713.250",
    status: "Aktif",
  },
  {
    contractNo: "CTR-PGD-2026-003",
    branch: "CP Kebayoran Baru",
    karat: "24K (99.9%)",
    grossWeight: "50.10 gr",
    netWeight: "50.00 gr",
    appraisalValue: "Rp 72.500.000",
    maxLoan: "Rp 63.000.000",
    sewaModalRate: "1.00% / 15 hr",
    adminFee: "Rp 100.000",
    totalBill: "Rp 63.730.000",
    status: "Verifikasi",
  },
  {
    contractNo: "CTR-PGD-2026-004",
    branch: "CP Pondok Indah",
    karat: "18K (75.0%)",
    grossWeight: "8.50 gr",
    netWeight: "8.10 gr",
    appraisalValue: "Rp 8.900.000",
    maxLoan: "Rp 7.500.000",
    sewaModalRate: "1.20% / 15 hr",
    adminFee: "Rp 25.000",
    totalBill: "Rp 7.615.000",
    status: "Lunas",
  },
];

const tableFeedbackMsg = ref<string | null>(null);
const wideTableContainerRef = ref<HTMLElement | null>(null);

function scrollWideTable(offset: number) {
  if (wideTableContainerRef.value) {
    wideTableContainerRef.value.scrollBy({ left: offset, behavior: "smooth" });
  }
}

function handleTableAction(action: string, id: string) {
  tableFeedbackMsg.value = `Aksi "${action}" berhasil diproses untuk ${id}`;
  setTimeout(() => {
    tableFeedbackMsg.value = null;
  }, 3500);
}

function handleBulkAction(action: string) {
  tableFeedbackMsg.value = `Aksi batch "${action}" dijalankan untuk ${selectedTransactions.value.length} transaksi (${selectedTransactions.value.join(', ')})`;
  setTimeout(() => {
    tableFeedbackMsg.value = null;
  }, 4000);
}

// DataTable Filtering Scenario States
const dtSearchQuery = ref("");
const dtStatusFilter = ref("all");
const dtStatusOpen = ref(false);
const dtCategoryFilter = ref("all");
const dtCategoryOpen = ref(false);
const dtSortOrder = ref<"none" | "asc" | "desc">("none");

const dtStatusOptions = [
  { value: "all", label: "Semua Status Transaksi", caption: "Seluruh status SBG" },
  { value: "Lancar", label: "Lancar", caption: "Angsuran tepat waktu" },
  { value: "Dalam Proses", label: "Dalam Proses", caption: "Verifikasi akad" },
  { value: "Mendekati JT", label: "Mendekati Jatuh Tempo", caption: "Sisa tenor < 7 hari" },
  { value: "Lewat JT", label: "Lewat Jatuh Tempo", caption: "Keterlambatan bayar" },
];

const dtStatusLabel = computed(() => {
  const found = dtStatusOptions.find((o) => o.value === dtStatusFilter.value);
  return found ? found.label : "Pilih status...";
});

const dtCategoryOptions = [
  { value: "all", label: "Semua Kategori Jaminan", caption: "Seluruh aset agunan" },
  { value: "Emas Batangan", label: "Emas Batangan", caption: "Antam / UBS / Lotus" },
  { value: "Perhiasan Emas", label: "Perhiasan Emas", caption: "Kalung / Cincin / Gelang" },
  { value: "Berlian Mulia", label: "Berlian Mulia", caption: "Solitaire / Eropa" },
  { value: "Elektronik Gadget", label: "Elektronik Gadget", caption: "Smartphone / Laptop" },
];

const dtCategoryLabel = computed(() => {
  const found = dtCategoryOptions.find((o) => o.value === dtCategoryFilter.value);
  return found ? found.label : "Pilih kategori...";
});

const dtColumns = [
  { key: "sbgNo", label: "No. SBG", width: "140px" },
  { key: "nasabah", label: "Nasabah & NIK", width: "220px" },
  { key: "kategori", label: "Kategori Jaminan", width: "180px" },
  { key: "pinjaman", label: "Uang Pinjaman", align: "right" as const, width: "160px" },
  { key: "sewaModal", label: "Sewa Modal", align: "right" as const, width: "140px" },
  { key: "jatuhTempo", label: "Jatuh Tempo", width: "140px" },
  { key: "status", label: "Status", align: "center" as const, width: "150px" },
  { key: "action", label: "Aksi", align: "center" as const, width: "130px" },
];

const allDataRows = [
  {
    id: 1,
    sbgNo: "SBG-2026-001",
    nasabah: "Budi Santoso",
    nik: "3171020101900005",
    phone: "0812-8899-1001",
    kategori: "Emas Batangan",
    pinjamanRaw: 12500000,
    pinjaman: "Rp 12.500.000",
    sewaModal: "1.15% / 15hr",
    jatuhTempo: "24 Mar 2026",
    status: "Lancar",
    statusVariant: "brocoli" as const,
  },
  {
    id: 2,
    sbgNo: "SBG-2026-002",
    nasabah: "Siti Rahmawati",
    nik: "3273010405880002",
    phone: "0813-2233-4455",
    kategori: "Perhiasan Emas",
    pinjamanRaw: 6800000,
    pinjaman: "Rp 6.800.000",
    sewaModal: "1.20% / 15hr",
    jatuhTempo: "28 Mar 2026",
    status: "Dalam Proses",
    statusVariant: "blue" as const,
  },
  {
    id: 3,
    sbgNo: "SBG-2026-003",
    nasabah: "Ahmad Hidayat",
    nik: "3578031208920003",
    phone: "0856-7788-9900",
    kategori: "Berlian Mulia",
    pinjamanRaw: 18200000,
    pinjaman: "Rp 18.200.000",
    sewaModal: "1.15% / 15hr",
    jatuhTempo: "15 Mar 2026",
    status: "Mendekati JT",
    statusVariant: "orange" as const,
  },
  {
    id: 4,
    sbgNo: "SBG-2026-004",
    nasabah: "Dewi Lestari",
    nik: "5171010709950001",
    phone: "0819-0011-2233",
    kategori: "Emas Batangan",
    pinjamanRaw: 31000000,
    pinjaman: "Rp 31.000.000",
    sewaModal: "1.00% / 15hr",
    jatuhTempo: "10 Mar 2026",
    status: "Lewat JT",
    statusVariant: "red" as const,
  },
  {
    id: 5,
    sbgNo: "SBG-2026-005",
    nasabah: "Hendro Wijaya",
    nik: "3175082004850007",
    phone: "0811-3344-5566",
    kategori: "Elektronik Gadget",
    pinjamanRaw: 4500000,
    pinjaman: "Rp 4.500.000",
    sewaModal: "1.25% / 15hr",
    jatuhTempo: "02 Apr 2026",
    status: "Lancar",
    statusVariant: "brocoli" as const,
  },
  {
    id: 6,
    sbgNo: "SBG-2026-006",
    nasabah: "Rina Kusuma",
    nik: "3204125509930004",
    phone: "0821-4455-6677",
    kategori: "Perhiasan Emas",
    pinjamanRaw: 9200000,
    pinjaman: "Rp 9.200.000",
    sewaModal: "1.20% / 15hr",
    jatuhTempo: "05 Apr 2026",
    status: "Lancar",
    statusVariant: "brocoli" as const,
  },
  {
    id: 7,
    sbgNo: "SBG-2026-007",
    nasabah: "Farhan Maulana",
    nik: "3374021811890008",
    phone: "0878-1122-3344",
    kategori: "Emas Batangan",
    pinjamanRaw: 22000000,
    pinjaman: "Rp 22.000.000",
    sewaModal: "1.10% / 15hr",
    jatuhTempo: "18 Mar 2026",
    status: "Mendekati JT",
    statusVariant: "orange" as const,
  },
];

const filteredDataRows = computed(() => {
  let list = allDataRows.filter((row) => {
    const q = dtSearchQuery.value.trim().toLowerCase();
    const matchSearch =
      !q ||
      row.nasabah.toLowerCase().includes(q) ||
      row.sbgNo.toLowerCase().includes(q) ||
      row.nik.toLowerCase().includes(q) ||
      row.phone.toLowerCase().includes(q);

    const matchStatus =
      dtStatusFilter.value === "all" || row.status === dtStatusFilter.value;

    const matchCategory =
      dtCategoryFilter.value === "all" ||
      row.kategori === dtCategoryFilter.value;

    return matchSearch && matchStatus && matchCategory;
  });

  if (dtSortOrder.value === "asc") {
    list = [...list].sort((a, b) => a.pinjamanRaw - b.pinjamanRaw);
  } else if (dtSortOrder.value === "desc") {
    list = [...list].sort((a, b) => b.pinjamanRaw - a.pinjamanRaw);
  }

  return list;
});

const tableProps: PropRow[] = [
  {
    name: "columns (DataTable)",
    type: "DataTableColumn[]",
    required: true,
    description: "Definisi array kolom data table mencakup key, label, subLabel, width, align, dan kelas utilitas.",
  },
  {
    name: "rows (DataTable)",
    type: "DataTableRow[]",
    required: true,
    description: "Array data rekod baris tabel yang akan dirender.",
  },
  {
    name: "rowKey (DataTable)",
    type: "string",
    default: "'id'",
    description: "Kunci unik properti objek baris yang digunakan sebagai v-for key unik.",
  },
  {
    name: "striped (DataTable)",
    type: "boolean",
    default: "true",
    description: "Mengaktifkan warna zebra striping berselang-seling pada baris tabel.",
  },
  {
    name: "emptyText (DataTable)",
    type: "string",
    default: "'No data available.'",
    description: "Teks placeholder saat array rows tidak memiliki data.",
  },
  {
    name: "class (Table)",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kustomisasi kelas utilitas Tailwind pada elemen <table> primitif.",
  },
  {
    name: "wrapperClass (Table)",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kustomisasi kelas utilitas pada kontainer pembungkus scroll horizontal <div>.",
  },
  {
    name: "align (TableCell / TableHead)",
    type: "'left' | 'center' | 'right'",
    default: "'left'",
    description: "Penyelarasan teks perataan sel tabel secara semantik.",
  },
  {
    name: "cell-[key] (DataTable)",
    type: "Slot",
    isSlot: true,
    description: "Slot kustomisasi rendering sel dinamis berdasarkan nama kolom (contoh: #cell-status=\"{ row }\").",
  },
];
</script>

<template>
  <section id="table" class="playground-section playground-panel space-y-6">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="playground-eyebrow">Data Matrices & Tabular Records</p>
        <h2 class="text-xl font-bold text-black-900">Table & Data Table</h2>
        <p class="text-sigma text-black-500">
          Data-driven comparison matrices, zebra striped rows, row action buttons, sticky column actions, and bulk selection toolbars.
        </p>
      </div>
      <Badge variant="brocoli">Tabular Component</Badge>
    </div>

    <!-- Interactive Feedback Toast Indicator -->
    <div
      v-if="tableFeedbackMsg"
      class="flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-2.5 text-sigma font-bold text-emerald-800 animate-in fade-in"
    >
      <Check class="h-4 w-4 text-emerald-600" />
      <span>{{ tableFeedbackMsg }}</span>
    </div>

    <!-- Skenario 1: Tabel Transaksi dengan Action Buttons & Checkbox Selection -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-2.5">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Row Actions & Selection
          </span>
          <h3 class="text-sigma font-extrabold text-black-900">Daftar Transaksi SBG dengan Action Buttons & Multi-Select</h3>
        </div>
        <span class="text-omega text-black-500 font-medium">Batch Selection & Interactive Action Triggers</span>
      </div>
      <div class="playground-case-body space-y-4">
        <!-- Bulk Action Toolbar (Active when items selected) -->
        <div
          v-if="selectedTransactions.length > 0"
          class="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-lime-100 border border-lime-300 px-4 py-2.5 animate-in fade-in"
        >
          <div class="flex items-center gap-2">
            <Check class="h-4 w-4 text-lime-700" />
            <span class="text-sigma font-bold text-lime-900">
              {{ selectedTransactions.length }} Transaksi Terpilih
            </span>
          </div>
          <div class="flex items-center gap-2">
            <Button size="sm" @click="handleBulkAction('Bayar Angsuran')">
              Bayar Sekaligus
            </Button>
            <Button size="sm" variant="outline" @click="handleBulkAction('Cetak Rekap')">
              Unduh Rekap PDF
            </Button>
            <button
              type="button"
              class="text-xs font-bold text-lime-800 hover:text-lime-900 underline ml-2 cursor-pointer"
              @click="selectedTransactions = []"
            >
              Batal
            </button>
          </div>
        </div>

        <!-- Table with Actions -->
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-12 text-center">
                <Checkbox v-model="selectAllTransactions" />
              </TableHead>
              <TableHead>No. SBG</TableHead>
              <TableHead>Nasabah</TableHead>
              <TableHead>Barang Jaminan</TableHead>
              <TableHead align="right">Uang Pinjaman</TableHead>
              <TableHead>Jatuh Tempo</TableHead>
              <TableHead align="center">Status</TableHead>
              <TableHead align="center" class="w-44">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              v-for="row in transactionRows"
              :key="row.id"
              :class="selectedTransactions.includes(row.id) ? 'bg-lime-100' : 'hover:bg-black-100/60'"
            >
              <TableCell align="center">
                <Checkbox
                  :model-value="selectedTransactions.includes(row.id)"
                  @update:model-value="(val) => {
                    if (val) selectedTransactions.push(row.id)
                    else selectedTransactions = selectedTransactions.filter(id => id !== row.id)
                  }"
                />
              </TableCell>
              <TableCell class="font-mono text-xs font-bold text-black-900">
                {{ row.id }}
              </TableCell>
              <TableCell>
                <div class="flex flex-col">
                  <span class="font-bold text-black-900">{{ row.nasabah }}</span>
                  <span class="text-omega text-black-400 font-mono">{{ row.nik }}</span>
                </div>
              </TableCell>
              <TableCell>{{ row.barang }}</TableCell>
              <TableCell align="right" class="font-bold text-black-900">
                {{ row.pinjaman }}
              </TableCell>
              <TableCell class="text-black-600">{{ row.jatuhTempo }}</TableCell>
              <TableCell align="center">
                <Badge :variant="row.statusVariant">{{ row.status }}</Badge>
              </TableCell>
              <TableCell align="center">
                <div class="flex items-center justify-center gap-1.5">
                  <Button size="sm" @click="handleTableAction('Bayar', row.id)">
                    Bayar
                  </Button>
                  <Button size="sm" variant="outline" @click="handleTableAction('Detail', row.id)">
                    Detail
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>

    <!-- Skenario 2: Tabel Lebar dengan Sticky Action Column di Kanan -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-2.5">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Sticky Column Action
          </span>
          <h3 class="text-sigma font-extrabold text-black-900">Tabel Kontrak Lebar dengan Kolom Aksi Sticky (Tetap di Kanan Saat Scroll)</h3>
        </div>
        <span class="text-omega text-black-500 font-medium">Horizontal Scroll (1550px) + Fixed Action Column</span>
      </div>
      <div class="playground-case-body space-y-4">
        <!-- Horizontal Scroll Toolbar & Hint -->
        <div class="flex flex-wrap items-center justify-between gap-3 text-omega text-black-600 bg-white p-3 rounded-lg border border-black-200">
          <span class="flex items-center gap-1.5 font-semibold text-black-800">
            <ArrowRight class="h-4 w-4 text-lime-600" />
            Geser tabel ke kanan untuk melihat rincian finansial. Kolom <strong>Aksi Cepat</strong> tetap menempel di kanan (sticky).
          </span>
          <div class="flex items-center gap-2">
            <Button size="sm" variant="outline" @click="scrollWideTable(-350)">
              ◀ Scroll Kiri
            </Button>
            <Button size="sm" variant="outline" @click="scrollWideTable(350)">
              Scroll Kanan ▶
            </Button>
          </div>
        </div>
        
        <div
          ref="wideTableContainerRef"
          class="relative w-full overflow-x-auto rounded-lg border border-black-200 bg-white"
        >
          <Table class="w-[1550px] min-w-[1550px]" wrapper-class="overflow-visible">
            <TableHeader>
              <TableRow>
                <TableHead class="w-44 min-w-[170px] whitespace-nowrap">No. Kontrak</TableHead>
                <TableHead class="w-48 min-w-[190px] whitespace-nowrap">Cabang</TableHead>
                <TableHead class="w-36 min-w-[140px] whitespace-nowrap">Karat Emas</TableHead>
                <TableHead align="right" class="w-32 min-w-[120px] whitespace-nowrap">Berat Kotor</TableHead>
                <TableHead align="right" class="w-32 min-w-[120px] whitespace-nowrap">Berat Bersih</TableHead>
                <TableHead align="right" class="w-40 min-w-[160px] whitespace-nowrap">Nilai Taksiran</TableHead>
                <TableHead align="right" class="w-40 min-w-[160px] whitespace-nowrap">Maks Pinjaman</TableHead>
                <TableHead align="right" class="w-36 min-w-[140px] whitespace-nowrap">Sewa Modal</TableHead>
                <TableHead align="right" class="w-32 min-w-[130px] whitespace-nowrap">Biaya Admin</TableHead>
                <TableHead align="right" class="w-40 min-w-[160px] whitespace-nowrap">Total Tagihan</TableHead>
                <!-- Sticky Header Cell -->
                <TableHead align="center" class="sticky right-0 z-20 w-44 min-w-[170px] bg-lime-600 !text-white text-center shadow-[-6px_0_12px_rgba(0,0,0,0.15)] border-l border-lime-700 whitespace-nowrap">
                  Aksi Cepat (Sticky)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="ctr in wideContractRows" :key="ctr.contractNo" class="hover:bg-black-100/60 group">
                <TableCell class="font-mono text-xs font-bold text-black-900 whitespace-nowrap">{{ ctr.contractNo }}</TableCell>
                <TableCell class="text-sigma text-black-700 whitespace-nowrap">{{ ctr.branch }}</TableCell>
                <TableCell class="text-sigma font-semibold text-black-900 whitespace-nowrap">{{ ctr.karat }}</TableCell>
                <TableCell align="right" class="text-sigma text-black-700 whitespace-nowrap">{{ ctr.grossWeight }}</TableCell>
                <TableCell align="right" class="text-sigma font-bold text-black-900 whitespace-nowrap">{{ ctr.netWeight }}</TableCell>
                <TableCell align="right" class="text-sigma font-bold text-black-900 whitespace-nowrap">{{ ctr.appraisalValue }}</TableCell>
                <TableCell align="right" class="text-sigma text-lime-700 font-bold whitespace-nowrap">{{ ctr.maxLoan }}</TableCell>
                <TableCell align="right" class="text-sigma text-black-600 whitespace-nowrap">{{ ctr.sewaModalRate }}</TableCell>
                <TableCell align="right" class="text-sigma text-black-600 whitespace-nowrap">{{ ctr.adminFee }}</TableCell>
                <TableCell align="right" class="text-sigma font-black text-black-900 whitespace-nowrap">{{ ctr.totalBill }}</TableCell>
                <!-- Sticky Body Cell -->
                <TableCell align="center" class="sticky right-0 z-20 border-l border-black-200 bg-white group-hover:bg-slate-50 shadow-[-6px_0_12px_rgba(0,0,0,0.08)] whitespace-nowrap">
                  <div class="flex items-center justify-center gap-1.5">
                    <Button size="sm" @click="handleTableAction('Cetak SBG', ctr.contractNo)">
                      Cetak
                    </Button>
                    <Button size="sm" variant="outline" @click="handleTableAction('Taksir Ulang', ctr.contractNo)">
                      Taksir
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>

    <!-- Skenario 3: Data Table dengan Multi-Filter & Custom Slots -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-2.5">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            DataTable with Filters
          </span>
          <h3 class="text-sigma font-extrabold text-black-900">Data Table dengan Sistem Filter Realtime & Custom Slots</h3>
        </div>
        <span class="text-omega text-black-500 font-medium">Search, Status Filter, Kategori, & Sorting</span>
      </div>
      <div class="playground-case-body space-y-4">
        <!-- Filter Bar with Gwind UI Components -->
        <div class="grid gap-3 md:grid-cols-12 items-center bg-white p-4 rounded-lg border border-black-200 shadow-sm">
          <!-- Search Input via Gwind Input Component -->
          <div class="relative md:col-span-4">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black-400 pointer-events-none z-10" />
            <Input
              v-model="dtSearchQuery"
              placeholder="Cari nasabah, SBG, NIK, atau telepon..."
              class="pl-9 pr-8"
            />
            <button
              v-if="dtSearchQuery"
              type="button"
              class="absolute right-2.5 top-1/2 -translate-y-1/2 text-black-400 hover:text-black-700 text-xs font-bold z-10 cursor-pointer"
              @click="dtSearchQuery = ''"
            >
              <X class="h-3.5 w-3.5" />
            </button>
          </div>

          <!-- Status Filter via Gwind Dropdown Component -->
          <div class="md:col-span-3">
            <Dropdown
              v-model:open="dtStatusOpen"
              :model-label="dtStatusLabel"
              placeholder="Pilih status..."
            >
              <DropdownList>
                <DropdownListItem
                  v-for="opt in dtStatusOptions"
                  :key="opt.value"
                  :label="opt.label"
                  :caption="opt.caption"
                  :selected="dtStatusFilter === opt.value"
                  @select="dtStatusFilter = opt.value; dtStatusOpen = false"
                />
              </DropdownList>
            </Dropdown>
          </div>

          <!-- Category Filter via Gwind Dropdown Component -->
          <div class="md:col-span-3">
            <Dropdown
              v-model:open="dtCategoryOpen"
              :model-label="dtCategoryLabel"
              placeholder="Pilih kategori..."
            >
              <DropdownList>
                <DropdownListItem
                  v-for="opt in dtCategoryOptions"
                  :key="opt.value"
                  :label="opt.label"
                  :caption="opt.caption"
                  :selected="dtCategoryFilter === opt.value"
                  @select="dtCategoryFilter = opt.value; dtCategoryOpen = false"
                />
              </DropdownList>
            </Dropdown>
          </div>

          <!-- Sort / Reset Actions via Gwind Button Component -->
          <div class="md:col-span-2 flex items-center justify-end gap-2">
            <Button
              variant="outline"
              size="sm"
              @click="dtSortOrder = dtSortOrder === 'none' ? 'desc' : dtSortOrder === 'desc' ? 'asc' : 'none'"
            >
              <SlidersHorizontal class="h-3.5 w-3.5 mr-1" />
              {{ dtSortOrder === 'desc' ? 'Pinjaman ↓' : dtSortOrder === 'asc' ? 'Pinjaman ↑' : 'Sort' }}
            </Button>
            <Button
              v-if="dtSearchQuery || dtStatusFilter !== 'all' || dtCategoryFilter !== 'all' || dtSortOrder !== 'none'"
              variant="ghost"
              size="sm"
              @click="dtSearchQuery = ''; dtStatusFilter = 'all'; dtCategoryFilter = 'all'; dtSortOrder = 'none'"
            >
              Reset
            </Button>
          </div>
        </div>

        <!-- Results Count & Active Tags -->
        <div class="flex items-center justify-between text-xs text-black-500 px-1">
          <span>Menampilkan <strong>{{ filteredDataRows.length }}</strong> dari {{ allDataRows.length }} data transaksi</span>
          <span v-if="filteredDataRows.length === 0" class="text-red-500 font-semibold">Tidak ada data yang sesuai dengan filter</span>
        </div>

        <!-- DataTable with Custom Cell Slots -->
        <DataTable
          :columns="dtColumns"
          :rows="filteredDataRows"
          empty-text="Tidak ada data transaksi yang cocok dengan kriteria filter."
        >
          <!-- Custom Slot: No. SBG -->
          <template #cell-sbgNo="{ row }">
            <span class="font-mono text-xs font-bold text-black-900">{{ row.sbgNo }}</span>
          </template>

          <!-- Custom Slot: Nasabah & NIK -->
          <template #cell-nasabah="{ row }">
            <div class="flex flex-col">
              <span class="font-bold text-black-900">{{ row.nasabah }}</span>
              <span class="text-omega text-black-400 font-mono">{{ row.nik }}</span>
            </div>
          </template>

          <!-- Custom Slot: Kategori -->
          <template #cell-kategori="{ row }">
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-black-100 text-black-700">
              {{ row.kategori }}
            </span>
          </template>

          <!-- Custom Slot: Uang Pinjaman -->
          <template #cell-pinjaman="{ row }">
            <span class="font-bold text-black-900">{{ row.pinjaman }}</span>
          </template>

          <!-- Custom Slot: Status Badge -->
          <template #cell-status="{ row }">
            <Badge :variant="(row.statusVariant as any)">{{ row.status }}</Badge>
          </template>

          <!-- Custom Slot: Action Button -->
          <template #cell-action="{ row }">
            <div class="flex items-center justify-center gap-1">
              <Button size="sm" @click="handleTableAction('Detail SBG', String(row.sbgNo))">
                Detail
              </Button>
            </div>
          </template>
        </DataTable>
      </div>
    </div>

    <!-- Skenario 4: Tabel Tarif Sewa Modal (Official Matrix) -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-2.5">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Matrix Rates
          </span>
          <h3 class="text-sigma font-extrabold text-black-900">Tabel Tarif Sewa Modal dan Premi Pinjaman</h3>
        </div>
        <span class="text-omega text-black-500 font-medium">Golongan A s.d. D & Perhitungan 15 Hari</span>
      </div>
      <div class="playground-case-body space-y-4">
        <DataTable :columns="tableColumns" :rows="tableRows" />
        <Alert variant="destructive">
          <AlertDescription>
            Penyaluran Produk dihentikan sementara sesuai dengan ID Nomor 42/ID/2020 Penghentian Sementara Penyaluran Produk Kreasi Express Loan.
          </AlertDescription>
        </Alert>
      </div>
    </div>

    <!-- CARD 5: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Table dan DataTable."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="tableProps" />
    </DocCard>
  </section>
</template>
