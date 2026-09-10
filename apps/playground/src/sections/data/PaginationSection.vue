<script setup lang="ts">
/**
 * @file PaginationSection.vue
 * @description Enterprise-grade documentation for the Pagination component.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import { ref } from "vue";
import { Pagination } from "@gwind/ui";
import { Sparkles, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const realPage = ref(5);
const varShortPage = ref(2);
const varLongPage = ref(25);
const varDisabledPage = ref(1);

const paginationProps: PropRow[] = [
  {
    name: "modelValue",
    type: "number",
    required: true,
    description: "Nomor indeks halaman aktif saat ini (mendukung v-model).",
  },
  {
    name: "totalPages",
    type: "number",
    required: true,
    description: "Total jumlah keseluruhan halaman data yang tersedia.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan tombol angka dan tombol navigasi Previous/Next.",
  },
  {
    name: "ariaLabel",
    type: "string",
    default: "'Pagination'",
    description: "Label aksesibilitas screen reader pada elemen kontainer <nav>.",
  },
  {
    name: "update:modelValue",
    type: "(page: number) => void",
    isEvent: true,
    description: "Event emisi saat nomor halaman aktif dipilih.",
  },
  {
    name: "change",
    type: "(page: number) => void",
    isEvent: true,
    description: "Event callback saat terjadi perpindahan halaman.",
  },
];
</script>

<template>
  <section id="pagination" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Page Navigation</p>
      <h2 class="text-xl font-bold text-foreground">Pagination</h2>
      <p class="text-sigma text-foreground-secondary">
        Kontrol navigasi halaman tabular dengan algoritma ellipsis cerdas untuk melompati rentang data transaksi mutasi berjumlah besar.
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
          <h3 class="text-sigma font-extrabold text-foreground">Paginasi Daftar Mutasi Tabungan Emas</h3>
        </div>
        <span class="text-omega font-mono text-foreground-green bg-lime-100 px-2.5 py-0.5 rounded-full font-bold">
          Halaman {{ realPage }} dari 20
        </span>
      </div>
      <div class="playground-case-body">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span class="text-omega text-foreground-secondary">
            Menampilkan record transaksi ke-{{ (realPage - 1) * 10 + 1 }} sampai {{ realPage * 10 }}
          </span>
          <Pagination
            id="pagination-real-gold"
            v-model="realPage"
            :total-pages="20"
          />
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Rentang Halaman Pagination"
      description="Eksplorasi paginasi rentang sedikit (≤ 7 halaman tanpa ellipsis), rentang panjang (dengan ellipsis otomatis), serta status terkunci (disabled)."
      badge="Page Navigation"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Rentang Pendek -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-16">
            <span class="text-sigma font-bold text-foreground block">Rentang Pendek (5 Halaman)</span>
            <div class="overflow-x-auto py-2">
              <Pagination
                id="pagination-var-short"
                v-model="varShortPage"
                :total-pages="5"
              />
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Direct Number Range</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:total-pages="5"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menampilkan seluruh nomor halaman secara langsung tanpa titik elipsis jika total ≤ 7.
            </p>
          </div>
        </div>

        <!-- Varian 2: Rentang Panjang dengan Ellipsis -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-16">
            <span class="text-sigma font-bold text-foreground block">Rentang Panjang (50 Halaman)</span>
            <div class="overflow-x-auto py-2">
              <Pagination
                id="pagination-var-long"
                v-model="varLongPage"
                :total-pages="50"
              />
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Smart Ellipsis Logic</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:total-pages="50"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menampilkan elipsis pada ujung kiri atau kanan untuk menjaga lebar bilah pagination tetap ringkas.
            </p>
          </div>
        </div>

        <!-- Varian 3: Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-16">
            <span class="text-sigma font-bold text-foreground block">Status Terkunci</span>
            <div class="overflow-x-auto py-2">
              <Pagination
                id="pagination-var-disabled"
                v-model="varDisabledPage"
                :total-pages="10"
                :disabled="true"
              />
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled Interaction</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Mencegah klik saat proses sinkronisasi query data API sedang berjalan di latar belakang.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Desain Responsif:</strong> Bilah pagination berukuran seragam 40x40px per item tombol sentuh, menjamin pemenuhan standar WCAG target sentuh mobile minimal 44x44px dengan margin sekitarnya.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Pagination."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="paginationProps" />
    </DocCard>
  </section>
</template>
