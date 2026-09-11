<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import Table from './Table.vue'
import TableBody from './TableBody.vue'
import TableCell from './TableCell.vue'
import TableHead from './TableHead.vue'
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'

/**
 * Interface representing a column definition in DataTable.
 */
export interface DataTableColumn {
  /** Unique key corresponding to row record property */
  key: string
  /** Header display title */
  label: string
  /** Optional secondary subtitle beneath header label */
  subLabel?: string
  /** Text alignment for header and data cells */
  align?: 'left' | 'center' | 'right'
  /** Tailwind width utility class (e.g. 'w-[140px]', 'w-36', 'min-w-[200px]') */
  width?: string
  /** Common CSS class applied to both header and body cells */
  class?: HTMLAttributes['class']
  /** Custom CSS class applied strictly to header cell */
  headerClass?: HTMLAttributes['class']
  /** Custom CSS class applied strictly to body cells */
  cellClass?: HTMLAttributes['class']
}

export type DataTableRow = Record<string, string | number | null | undefined>

const props = withDefaults(
  defineProps<{
    columns: DataTableColumn[]
    rows: DataTableRow[]
    rowKey?: string
    striped?: boolean
    emptyText?: string
    class?: HTMLAttributes['class']
    wrapperClass?: HTMLAttributes['class']
    headerClass?: HTMLAttributes['class']
    bodyClass?: HTMLAttributes['class']
    rowClass?: HTMLAttributes['class']
  }>(),
  {
    rowKey: 'id',
    striped: true,
    emptyText: 'No data available.',
  },
)

function getRowKey(row: DataTableRow, index: number) {
  return row[props.rowKey] ?? index
}

function getCellValue(row: DataTableRow, key: string) {
  const value = row[key]

  return value === null || value === undefined || value === '' ? '-' : value
}

function getColumnWidthClass(width?: string) {
  if (!width) return undefined
  return /^(min-|max-)?w-/.test(width) ? width : `w-[${width}]`
}
</script>

<template>
  <Table :class="cn('min-w-max', props.class)" :wrapper-class="wrapperClass">
    <TableHeader :class="headerClass">
      <TableRow>
        <TableHead
          v-for="column in columns"
          :key="column.key"
          :align="column.align"
          :class="cn('whitespace-nowrap', getColumnWidthClass(column.width), column.headerClass, column.class)"
        >
          <slot :name="`header-${column.key}`" :column="column">
            <span class="block">{{ column.label }}</span>
            <span v-if="column.subLabel" class="block">{{ column.subLabel }}</span>
          </slot>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody :class="bodyClass">
      <TableRow
        v-for="(row, rowIndex) in rows"
        :key="getRowKey(row, rowIndex)"
        :class="
          cn(
            striped
              ? rowIndex % 2 === 0
                ? 'bg-white'
                : 'bg-black-100'
              : 'bg-white',
            rowClass,
          )
        "
      >
        <TableCell
          v-for="column in columns"
          :key="column.key"
          :align="column.align"
          :class="cn('whitespace-nowrap', column.cellClass, column.class)"
        >
          <slot
            :name="`cell-${column.key}`"
            :row="row"
            :column="column"
            :value="getCellValue(row, column.key)"
            :row-index="rowIndex"
          >
            {{ getCellValue(row, column.key) }}
          </slot>
        </TableCell>
      </TableRow>
      <TableRow v-if="rows.length === 0">
        <TableCell :colspan="columns.length" class="text-center text-black-500">
          {{ emptyText }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
