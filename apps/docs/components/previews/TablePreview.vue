<script setup lang="ts">
import { Alert, AlertDescription } from '../../../../packages/ui/src/components/ui/alert'
import { DataTable, type DataTableColumn, type DataTableRow } from '../../../../packages/ui/src/components/ui/table'

const columns: DataTableColumn[] = [
  { key: 'gol', label: 'Gol', width: '40px' },
  { key: 'uangPinjaman', label: 'Uang Pinjaman', width: '238px' },
  { key: 'sewaModal', label: 'Sewa Modal', subLabel: '/15 Hari', align: 'right', width: '122px' },
  { key: 'premi', label: 'Premi', width: '88px' },
  { key: 'administrasi', label: 'Administrasi', align: 'right', width: '104px' },
]

const rows: DataTableRow[] = [
  { id: 1, gol: 'A', uangPinjaman: 'Rp 50.000 - Rp 500.000', sewaModal: '1%', premi: '-', administrasi: 'Rp 2.000' },
  { id: 2, gol: 'B', uangPinjaman: '> Rp 500.000 - Rp 1.000.000', sewaModal: '1,2%', premi: 'Rp 1.000', administrasi: 'Rp 10.000' },
  { id: 3, gol: 'B', uangPinjaman: '> Rp 1.000.000 - Rp 2.500.000', sewaModal: '1,2%', premi: 'Rp 1.000', administrasi: 'Rp 20.000' },
  { id: 4, gol: 'B', uangPinjaman: '> Rp 2.500.000 - Rp 5.000.000', sewaModal: '1,2%', premi: 'Rp 1.000', administrasi: 'Rp 35.000' },
  { id: 5, gol: 'C', uangPinjaman: '> Rp 5.000.000 - Rp 10.000.000', sewaModal: '1,2%', premi: 'Rp 1.000', administrasi: 'Rp 50.000' },
  { id: 6, gol: 'C', uangPinjaman: '> Rp 10.000.000 - Rp 15.000.000', sewaModal: '1,2%', premi: 'Rp 1.000', administrasi: 'Rp 75.000' },
  { id: 7, gol: 'C', uangPinjaman: '> Rp 15.000.000 - Rp 20.000.000', sewaModal: '1,2%', premi: 'Rp 1.000', administrasi: 'Rp 100.000' },
  { id: 8, gol: 'D', uangPinjaman: '> Rp 20.000.000', sewaModal: '1,1%', premi: 'Rp 1.000 - Rp 1.500', administrasi: 'Rp 125.000' },
]

const notes = [
  'Premi Asuransi KCA 21/DIR I/2018',
  'Biaya Administrasi 91/DIR I/2017',
  'SM KCA 91/DIR I/2018',
]
</script>

<template>
  <ShadowPreview>
    <div class="grid w-full gap-4">
      <div class="grid gap-3">
        <div class="text-sigma font-extrabold leading-5 text-black-800">Desktop</div>
        <DataTable :columns="columns" :rows="rows">
          <template #header-sewaModal="{ column }">
            <div class="flex items-center justify-end">
              <span class="block">{{ column.label }}</span>
              <span v-if="column.subLabel" class="ml-2 text-black-500">{{ column.subLabel }}</span>
            </div>
          </template>

          <template #cell-administrasi="{ value }">
            <div class="text-right font-medium">{{ value }}</div>
          </template>
        </DataTable>
      </div>

      <div class="grid max-w-[720px] gap-4 rounded-md bg-white p-4">
        <div class="text-sigma font-extrabold leading-5 text-black-800">
          Tarif Sewa Modal dan Premi
        </div>
        <DataTable :columns="columns" :rows="rows" />
        <div class="grid gap-3">
          <div class="text-sigma font-semibold leading-5 text-black-500">Dasar Aturan</div>
          <ul class="grid gap-2">
            <li
              v-for="note in notes"
              :key="note"
              class="flex gap-3 text-sigma font-semibold leading-5 text-black-500"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black-500" />
              <span>{{ note }}</span>
            </li>
          </ul>
        </div>
        <Alert variant="destructive" class="border-red-500 bg-red-500 p-3 text-white">
          <AlertDescription class="!text-omega font-semibold leading-[18px] text-white">
            Penyaluran Produk dihentikan sementara sesuai dengan: ID Nomor 42/ID/2020 Penghentian Sementara Penyaluran Produk Pegadaian Kreasi Express Loan
          </AlertDescription>
        </Alert>
      </div>
    </div>
  </ShadowPreview>
</template>
