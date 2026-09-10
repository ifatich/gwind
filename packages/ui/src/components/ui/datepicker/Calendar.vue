<script setup lang="ts">
import { computed, ref, type HTMLAttributes } from 'vue'
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNext,
  CalendarPrev,
  CalendarRoot,
  type CalendarRootEmits,
  type CalendarRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { CalendarDate } from '@internationalized/date'
import { cn } from '../../../lib/utils'
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-vue-next'

const props = withDefaults(defineProps<CalendarRootProps & {
  class?: HTMLAttributes['class']
  title?: string
  showPanelHeader?: boolean
  unavailable?: boolean
}>(), {
  title: 'Pilih Tanggal',
  showPanelHeader: true,
  unavailable: false,
})
const emits = defineEmits<CalendarRootEmits & { close: [] }>()

const delegatedProps = computed(() => {
  const { class: _, title: _title, showPanelHeader: _showPanelHeader, unavailable: _unavailable, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'] as const

function normalizeGrid(months: any[]) {
  const result: any[][] = []
  for (const month of months) {
    const weeks = month.rows || []
    for (const week of weeks) {
      result.push(week.map((d: any) => new CalendarDate(d.year, d.month, d.day)))
    }
  }
  return result
}

function setCalendarGrid(months: any[]) {
  calendarGrid.value = normalizeGrid(months)
  return ''
}

const calendarGrid = ref<any[][]>([])
</script>

<template>
  <CalendarRoot
    v-bind="forwarded"
    v-slot="calendarSlot"
    :class="cn('w-[360px] overflow-hidden rounded-xl bg-white shadow-drop-1', props.class)"
  >
    <div v-if="showPanelHeader" class="flex items-center gap-24 px-4 pt-4">
      <div class="flex-1 !text-lambda font-extrabold text-black-800">
        {{ title }}
      </div>
      <button
        type="button"
        class="inline-flex h-6 w-6 cursor-pointer items-center justify-center text-black-600 transition-colors hover:text-black-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        aria-label="Tutup date picker"
        @click="emits('close')"
      >
        <X class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>

    <div v-if="showPanelHeader" class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

    <div :class="cn('px-4 pb-10 pt-4', showPanelHeader ? '' : '')">
      <CalendarHeader class="relative flex h-6 items-center justify-between">
        <CalendarPrev
          class="inline-flex h-6 w-6 cursor-pointer items-center justify-center text-black-600 transition-colors hover:text-black-800 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        >
          <ChevronLeft class="h-6 w-6" aria-hidden="true" />
        </CalendarPrev>

        <button
          type="button"
          class="absolute left-1/2 inline-flex -translate-x-1/2 cursor-pointer items-center gap-1 !text-omicron font-extrabold text-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        >
          <CalendarHeading />
          <ChevronDown class="h-6 w-6" aria-hidden="true" />
        </button>

        <CalendarNext
          class="inline-flex h-6 w-6 cursor-pointer items-center justify-center text-black-600 transition-colors hover:text-black-800 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
        >
          <ChevronRight class="h-6 w-6" aria-hidden="true" />
        </CalendarNext>
      </CalendarHeader>

      <div class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

      {{ (calendarSlot as any).grid ? setCalendarGrid((calendarSlot as any).grid) : '' }}
      <CalendarGrid as="table" class="mt-2 w-full border-collapse">
        <CalendarGridHead as="thead">
          <CalendarGridRow as="tr">
            <CalendarHeadCell
              v-for="day in days"
              :key="day"
              as="th"
              class="h-8 w-[46px] text-center text-omicron font-semibold text-black-600"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>

        <CalendarGridBody as="tbody">
          <CalendarGridRow v-for="(week, weekIdx) in calendarGrid" :key="weekIdx" as="tr">
            <CalendarCell
              v-for="(date, dateIdx) in week"
              :key="dateIdx"
              as="td"
              :date="date"
              class="h-9 p-0 text-center align-middle"
            >
              <CalendarCellTrigger
                :day="date"
                :month="date"
                :class="
                  cn(
                    'relative inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full !text-sigma font-semibold text-black-800 transition-colors hover:bg-black-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2',
                    'data-[selected]:bg-lime-500 data-[selected]:text-white',
                    'data-[outside-view]:text-black-500',
                    'data-[disabled]:cursor-not-allowed data-[disabled]:text-black-500 data-[disabled]:line-through',
                    'data-[unavailable]:cursor-not-allowed data-[unavailable]:text-black-500 data-[unavailable]:line-through',
                    unavailable && 'text-black-500 line-through data-[selected]:no-underline',
                  )
                "
              >
                {{ date.day }}
              </CalendarCellTrigger>
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>
