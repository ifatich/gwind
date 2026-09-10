<script setup lang="ts">
import { computed, ref, type HTMLAttributes } from 'vue'
import { CalendarDate } from '@internationalized/date'
import {
  YearPickerCell,
  YearPickerCellTrigger,
  YearPickerGrid,
  YearPickerGridBody,
  YearPickerGridRow,
  YearPickerHeader,
  YearPickerHeading,
  YearPickerNext,
  YearPickerPrev,
  YearPickerRoot,
  type YearPickerRootEmits,
  type YearPickerRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '../../../lib/utils'
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-vue-next'

const props = withDefaults(defineProps<YearPickerRootProps & {
  class?: HTMLAttributes['class']
  title?: string
  showPanelHeader?: boolean
}>(), {
  title: 'Pilih Tanggal',
  showPanelHeader: true,
})
const emits = defineEmits<YearPickerRootEmits & { close: [] }>()

const delegatedProps = computed(() => {
  const { class: _, title: _title, showPanelHeader: _showPanelHeader, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

function normalizeGridYears(cells: any[][]) {
  return cells.map((row) =>
    row.map((d: any) => new CalendarDate(d.year, 1, 1)),
  )
}

function setYearGrid(cells: any[][]) {
  yearGrid.value = normalizeGridYears(cells)
  return ''
}

const yearGrid = ref<any[][]>([])
</script>

<template>
  <YearPickerRoot
    v-bind="forwarded"
    v-slot="yearSlot"
    :class="cn('w-[360px] overflow-hidden rounded-xl bg-white shadow-drop-1', props.class)"
  >
    <div v-if="showPanelHeader" class="flex items-center gap-24 px-4 pt-4">
      <div class="flex-1 !text-lambda font-extrabold text-black-800">
        {{ title }}
      </div>
      <button
        type="button"
        class="inline-flex h-6 w-6 items-center justify-center text-black-600 transition-colors hover:text-black-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        aria-label="Tutup date picker"
        @click="emits('close')"
      >
        <X class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>

    <div v-if="showPanelHeader" class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

    <div class="px-4 py-4">
      <YearPickerHeader class="relative flex h-6 items-center justify-between">
        <YearPickerPrev
          class="inline-flex h-6 w-6 items-center justify-center text-black-600 transition-colors hover:text-black-800 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        >
          <ChevronLeft class="h-6 w-6" aria-hidden="true" />
        </YearPickerPrev>

        <button
          type="button"
          class="absolute left-1/2 inline-flex -translate-x-1/2 items-center gap-1 !text-omicron font-extrabold text-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        >
          <YearPickerHeading />
          <ChevronDown class="h-6 w-6 rotate-180" aria-hidden="true" />
        </button>

        <YearPickerNext
          class="inline-flex h-6 w-6 items-center justify-center text-black-600 transition-colors hover:text-black-800 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        >
          <ChevronRight class="h-6 w-6" aria-hidden="true" />
        </YearPickerNext>
      </YearPickerHeader>

      <div class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

      {{ (yearSlot as any).grid ? setYearGrid((yearSlot as any).grid) : '' }}
      <YearPickerGrid as="table" class="mt-4 w-full border-separate border-spacing-x-[39px] border-spacing-y-4">
        <YearPickerGridBody as="tbody">
          <YearPickerGridRow v-for="(row, rowIdx) in yearGrid" :key="rowIdx" as="tr">
            <YearPickerCell
              v-for="(date, dateIdx) in row"
              :key="dateIdx"
              as="td"
              :date="date"
              class="p-0 text-center align-middle"
            >
              <YearPickerCellTrigger
                :year="date"
                class="inline-flex h-[34px] w-[76px] items-center justify-center rounded-lg !text-lambda font-semibold text-black-800 transition-colors hover:bg-black-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 data-[selected]:bg-lime-500 data-[selected]:text-white"
              >
                {{ date.year }}
              </YearPickerCellTrigger>
            </YearPickerCell>
          </YearPickerGridRow>
        </YearPickerGridBody>
      </YearPickerGrid>
    </div>
  </YearPickerRoot>
</template>
