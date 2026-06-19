<script setup lang="ts">
import TablePreview from './previews/TablePreview.vue'
import TableFullDemo from './previews/TableFullDemo.vue'
</script>

# Table

Data table components for structured tabular information.

## Installation

```bash
npx gwind-system-ui add table
```

## Preview

<TablePreview />

### Full demo (search, filter, pagination)

<TableFullDemo />

---

## Usage

```vue
<script setup lang="ts">
import {
  DataTable,
  type DataTableColumn,
  type DataTableRow,
} from "@/components/ui/table";

const columns: DataTableColumn[] = [
  { key: "gol", label: "Gol", width: "40px" },
  { key: "uangPinjaman", label: "Uang Pinjaman", width: "238px" },
  {
    key: "sewaModal",
    label: "Sewa Modal",
    subLabel: "/15 Hari",
    align: "right",
    width: "122px",
  },
  { key: "premi", label: "Premi", width: "88px" },
  {
    key: "administrasi",
    label: "Administrasi",
    align: "right",
    width: "104px",
  },
];

const rows: DataTableRow[] = [
  {
    id: 1,
    gol: "A",
    uangPinjaman: "Rp 50.000 - Rp 500.000",
    sewaModal: "1%",
    premi: "-",
    administrasi: "Rp 2.000",
  },
];
</script>

<template>
  <DataTable :columns="columns" :rows="rows" />
</template>
```

---

## Components

- `DataTable` renders data from `columns` and `rows`.
- `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`, and `TableCaption` are semantic table primitives.
- Header, row, and cell styles use Gwind design tokens: `lime-500`, `black-100`, `black-200`, `black-800`, `sigma`, and `omicron`.
- The full demo reuses the `Pagination` component for data-driven paging.

## DataTable Props

| Name           | Type                      | Default                | Description                              |
| -------------- | ------------------------- | ---------------------- | ---------------------------------------- |
| `columns`      | `DataTableColumn[]`       | required               | Column definitions.                      |
| `rows`         | `DataTableRow[]`          | required               | Row data records.                        |
| `rowKey`       | `string`                  | `'id'`                 | Field used as row key.                   |
| `striped`      | `boolean`                 | `true`                 | Enables alternating body row background. |
| `emptyText`    | `string`                  | `'No data available.'` | Empty state text.                        |
| `class`        | `HTMLAttributes['class']` | `undefined`            | Class applied to the outer table.        |
| `wrapperClass` | `HTMLAttributes['class']` | `undefined`            | Class for the overflow wrapper.          |
| `headerClass`  | `HTMLAttributes['class']` | `undefined`            | Class applied to the table header.       |
| `bodyClass`    | `HTMLAttributes['class']` | `undefined`            | Class applied to the table body.         |
| `rowClass`     | `HTMLAttributes['class']` | `undefined`            | Class applied to each body row.          |

## DataTableRow

A `DataTableRow` is a simple key/value object where keys match the column `key` values. Empty values are rendered as `-`.

Example:

```ts
const row: DataTableRow = {
  id: 1,
  gol: "A",
  uangPinjaman: "Rp 50.000 - Rp 500.000",
};
```

## DataTableColumn

| Name          | Type                      | Description                              |
| ------------- | ------------------------- | ---------------------------------------- | -------- | -------------------------- |
| `key`         | `string`                  | Row field key.                           |
| `label`       | `string`                  | Header label.                            |
| `subLabel`    | `string`                  | Optional second header line.             |
| `align`       | `'left'                   | 'center'                                 | 'right'` | Header and cell alignment. |
| `width`       | `string`                  | Column width.                            |
| `class`       | `HTMLAttributes['class']` | Optional class for both header and cell. |
| `headerClass` | `HTMLAttributes['class']` | Optional class for the header cell.      |
| `cellClass`   | `HTMLAttributes['class']` | Optional class for the body cell.        |

## Slots

`DataTable` exposes header and cell scoped slots for per-column customization. Slot names follow the pattern:

- `header-<column.key>` — Receives `{ column }`.
- `cell-<column.key>` — Receives `{ row, column, value, rowIndex }`.

Examples:

```vue
<DataTable :columns="columns" :rows="rows">
  <!-- custom header for the `sewaModal` column -->
  <template #header-sewaModal="{ column }">
    <div class="flex items-center justify-end">
      <span class="block">{{ column.label }}</span>
      <span v-if="column.subLabel" class="ml-2 text-black-500">{{ column.subLabel }}</span>
    </div>
  </template>

  <!-- custom cell renderer for the `administrasi` column -->
  <template #cell-administrasi="{ value }">
    <div class="text-right font-medium">{{ value }}</div>
  </template>
</DataTable>
```

You can also style rows via `rowClass`, and target header/body wrappers with `headerClass` / `bodyClass`.
