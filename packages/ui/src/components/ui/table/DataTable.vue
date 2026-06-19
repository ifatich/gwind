<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import Table from './Table.vue'
import TableBody from './TableBody.vue'
import TableCell from './TableCell.vue'
import TableHead from './TableHead.vue'
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'

export interface DataTableColumn {
  key: string
  label: string
  subLabel?: string
  align?: 'left' | 'center' | 'right'
  width?: string
  class?: HTMLAttributes['class']
  headerClass?: HTMLAttributes['class']
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
</script>

<template>
  <Table :class="cn('min-w-max', props.class)" :wrapper-class="wrapperClass">
    <colgroup>
      <col
        v-for="column in columns"
        :key="column.key"
        :style="{ width: column.width }"
      >
    </colgroup>
    <TableHeader :class="headerClass">
      <TableRow>
        <TableHead
          v-for="column in columns"
          :key="column.key"
          :align="column.align"
          :class="cn('whitespace-nowrap', column.headerClass, column.class)"
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
