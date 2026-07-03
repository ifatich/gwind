<script setup lang="ts">
import { computed, nextTick, ref, type HTMLAttributes } from 'vue'
import {
  DatePickerRoot,
  DatePickerPrev,
  DatePickerNext,
  DatePickerCalendar,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerCell,
  DatePickerCellTrigger,
} from 'reka-ui'
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date'
import { cn } from '../../../lib/utils'
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import { DatePickerClose } from 'reka-ui'
import DatepickerContent from './DatepickerContent.vue'
import DatepickerInput from './DatepickerInput.vue'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  contentClass?: HTMLAttributes['class']
  placeholder?: string
  modelValue?: string
  defaultValue?: string
  open?: boolean
  defaultOpen?: boolean
  disabled?: boolean
  disablePastDates?: boolean
  disableFutureDates?: boolean
  min?: string
  max?: string
  title?: string
  /** Tahun minimal mundur dari tahun sekarang, default 100 */
  minYearOffset?: number
  /** Tahun maksimal maju dari tahun sekarang, default 3 */
  maxYearOffset?: number
}>(), {
  placeholder: 'Pilih Tanggal',
  open: undefined,
  title: 'Pilih Tanggal',
  minYearOffset: 100,
  maxYearOffset: 3,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:open': [value: boolean]
}>()

const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'] as const
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'] as const
const FULL_MONTH_NAMES = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'] as const

type CalendarView = 'days' | 'months' | 'years'
const calendarView = ref<CalendarView>('days')
const placeholderDate = ref<CalendarDate | undefined>(undefined)
const internalOpen = ref(props.defaultOpen ?? false)

function parseDate(str: string | undefined): CalendarDate | undefined {
  if (!str) return undefined
  const parts = str.split('-')
  if (parts.length !== 3) return undefined
  const [y, m, d] = parts.map(Number)
  if (isNaN(y) || isNaN(m) || isNaN(d)) return undefined
  return new CalendarDate(y, m, d)
}

function toDateString(date: CalendarDate): string {
  return `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
}

function formatDisplay(str: string | undefined): string {
  if (!str) return ''
  const d = parseDate(str)
  if (!d) return str
  return `${String(d.day).padStart(2, '0')}/${String(d.month).padStart(2, '0')}/${d.year}`
}

const displayValue = computed(() => formatDisplay(props.modelValue || props.defaultValue))
const parsedModelValue = computed(() => parseDate(props.modelValue))
const parsedDefaultValue = computed(() => parseDate(props.defaultValue))
const parsedMinValue = computed(() => parseDate(props.min))
const parsedMaxValue = computed(() => parseDate(props.max))
const currentDate = today(getLocalTimeZone())

const effectiveMinValue = computed(() => {
  if (!props.disablePastDates) return parsedMinValue.value
  if (!parsedMinValue.value || parsedMinValue.value.compare(currentDate) < 0) return currentDate
  return parsedMinValue.value
})

const effectiveMaxValue = computed(() => {
  if (!props.disableFutureDates) return parsedMaxValue.value
  if (!parsedMaxValue.value || parsedMaxValue.value.compare(currentDate) > 0) return currentDate
  return parsedMaxValue.value
})

const rootProps = computed(() => {
  const p: Record<string, any> = {}
  if (props.modelValue !== undefined) p.modelValue = parsedModelValue.value
  if (props.defaultValue !== undefined) p.defaultValue = parsedDefaultValue.value
  p.open = props.open ?? internalOpen.value
  p.placeholder = placeholderDate.value || parsedModelValue.value || parsedDefaultValue.value || visibleDate.value
  if (props.disabled !== undefined) p.disabled = props.disabled
  if (effectiveMinValue.value) p.minValue = effectiveMinValue.value
  if (effectiveMaxValue.value) p.maxValue = effectiveMaxValue.value
  return p
})

function closeCalendar() {
  internalOpen.value = false
  emit('update:open', false)
}

function onOpenUpdate(value: boolean) {
  internalOpen.value = value
  emit('update:open', value)
  if (value) calendarView.value = 'days'
}

function onUpdate(val: any) {
  if (val && val.copy) {
    emit('update:modelValue', toDateString(val))
    closeCalendar()
  }
}

function onPlaceholderUpdate(date: any) {
  const nextDate = toCalendarDate(date)
  if (nextDate) {
    placeholderDate.value = nextDate
    visibleDate.value = nextDate
  }
}

const visibleDate = ref<CalendarDate | undefined>(undefined)

// Month/year picker state
const monthPickerYear = ref(2020)
const yearGridRef = ref<HTMLElement | null>(null)

const currentYear = new Date().getFullYear()
const MIN_YEAR = computed(() => currentYear - props.minYearOffset)
const MAX_YEAR = computed(() => currentYear + props.maxYearOffset)

function toCalendarDate(date: any): CalendarDate | undefined {
  if (!date) return undefined
  if (date instanceof CalendarDate) return date
  if (typeof date.year === 'number' && typeof date.month === 'number' && typeof date.day === 'number') {
    return new CalendarDate(date.year, date.month, date.day)
  }
  return undefined
}

function getCurrentHeadingDate(): CalendarDate {
  return toCalendarDate(placeholderDate.value)
    || toCalendarDate(visibleDate.value)
    || parsedModelValue.value
    || parsedDefaultValue.value
    || new CalendarDate(currentYear, new Date().getMonth() + 1, 1)
}

function setVisibleDate(date: any) {
  const nextDate = toCalendarDate(date)
  if (nextDate) visibleDate.value = nextDate
  return ''
}

function openMonthView() {
  const headingDate = getCurrentHeadingDate()
  monthPickerYear.value = headingDate.year
  placeholderDate.value = headingDate
  calendarView.value = 'months'
}

function scrollSelectedYearIntoView() {
  nextTick(() => {
    const selectedYear = getCurrentHeadingDate().year
    const selectedElement = yearGridRef.value?.querySelector<HTMLElement>(`[data-year="${selectedYear}"]`)
    selectedElement?.scrollIntoView({ block: 'center', inline: 'nearest' })
  })
}

function openYearView() {
  const headingDate = getCurrentHeadingDate()
  monthPickerYear.value = headingDate.year
  placeholderDate.value = headingDate
  calendarView.value = 'years'
  scrollSelectedYearIntoView()
}

function onMonthClick(month: number) {
  const headingDate = getCurrentHeadingDate()
  placeholderDate.value = new CalendarDate(monthPickerYear.value, month, Math.min(headingDate.day, 28))
  calendarView.value = 'days'
}

function onYearClick(year: number) {
  const headingDate = getCurrentHeadingDate()
  monthPickerYear.value = year
  placeholderDate.value = new CalendarDate(year, headingDate.month, Math.min(headingDate.day, 28))
  calendarView.value = 'days'
}

function getYearRange(): number[] {
  const years: number[] = []
  for (let year = MAX_YEAR.value; year >= MIN_YEAR.value; year--) {
    years.push(year)
  }
  return years
}

function isMonthSelected(month: number): boolean {
  const headingDate = getCurrentHeadingDate()
  return headingDate.month === month && headingDate.year === monthPickerYear.value
}

function isYearSelected(year: number): boolean {
  return getCurrentHeadingDate().year === year
}
</script>

<template>
  <DatePickerRoot
    v-bind="rootProps"
    :class="cn('relative inline-block', props.class)"
    @update:model-value="onUpdate"
    @update:open="onOpenUpdate"
    @update:placeholder="onPlaceholderUpdate"
  >
    <DatepickerInput :value="displayValue" :placeholder="placeholder" />

    <DatepickerContent :class="props.contentClass">
      <DatePickerCalendar v-slot="calendarSlot" class="w-full">
        <div class="flex items-center gap-24 px-4 pt-4">
          <div class="flex-1 !text-lambda font-extrabold text-black-800">
            {{ title }}
          </div>
          <DatePickerClose
            class="inline-flex h-6 w-6 items-center justify-center text-black-600 transition-colors hover:text-black-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
            aria-label="Tutup date picker"
          >
            <X class="h-6 w-6" aria-hidden="true" />
          </DatePickerClose>
        </div>

        <div class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

        <!-- DAYS VIEW -->
        <template v-if="calendarView === 'days'">
          <div class="px-4 pb-10 pt-4">
            <div class="relative flex h-6 items-center justify-between">
              <DatePickerPrev
                class="inline-flex h-6 w-6 items-center justify-center text-black-600 transition-colors hover:text-black-800 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
              >
                <ChevronLeft class="h-6 w-6" aria-hidden="true" />
              </DatePickerPrev>

              {{ setVisibleDate((calendarSlot as any).placeholder) }}
              <div class="absolute left-1/2 inline-flex -translate-x-1/2 items-center gap-4 !text-omicron font-extrabold">
                <button
                  type="button"
                  class="text-lime-500 transition-colors hover:text-lime-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
                  @click="openMonthView"
                  @keydown.enter="openMonthView"
                  @keydown.space.prevent="openMonthView"
                >
                  {{ FULL_MONTH_NAMES[getCurrentHeadingDate().month - 1] }}
                </button>
                <button
                  type="button"
                  class="text-lime-500 transition-colors hover:text-lime-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
                  @click="openYearView"
                  @keydown.enter="openYearView"
                  @keydown.space.prevent="openYearView"
                >
                  {{ getCurrentHeadingDate().year }}
                </button>
              </div>

              <DatePickerNext
                class="inline-flex h-6 w-6 items-center justify-center text-black-600 transition-colors hover:text-black-800 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
              >
                <ChevronRight class="h-6 w-6" aria-hidden="true" />
              </DatePickerNext>
            </div>

            <div class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

            <DatePickerGrid as="table" class="my-2 w-full border-collapse">
              <DatePickerGridHead as="thead" class="pb-2 border-b border-black-200">
                <DatePickerGridRow as="tr">
                  <DatePickerHeadCell
                    v-for="day in days"
                    :key="day"
                    as="th"
                    class="h-8 w-[46px] text-center text-omicron font-semibold text-black-600"
                  >
                    {{ day }}
                  </DatePickerHeadCell>
                </DatePickerGridRow>
              </DatePickerGridHead>

              <DatePickerGridBody as="tbody">
                <template
                  v-for="month in (calendarSlot as any).grid"
                  :key="month.value.toString()"
                >
                  <DatePickerGridRow
                    v-for="(week, weekIdx) in month.rows"
                    :key="`${month.value.toString()}-${weekIdx}`"
                    as="tr"
                  >
                    <DatePickerCell
                      v-for="(date, dateIdx) in week"
                      :key="dateIdx"
                      as="td"
                      :date="date"
                      class="h-9 p-0 text-center align-middle"
                    >
                      <DatePickerCellTrigger
                        :day="date"
                        :month="month.value"
                        class="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full !text-sigma font-semibold text-black-800 transition-colors hover:bg-black-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 data-[selected]:bg-lime-500 data-[selected]:text-white data-[outside-view]:text-black-500 data-[unavailable]:cursor-not-allowed data-[unavailable]:text-black-500 data-[unavailable]:line-through data-[disabled]:text-black-500 data-[disabled]:line-through data-[outside-view]:cursor-not-allowed"
                      >
                        {{ date.day }}
                      </DatePickerCellTrigger>
                    </DatePickerCell>
                  </DatePickerGridRow>
                </template>
              </DatePickerGridBody>
            </DatePickerGrid>
          </div>
        </template>

        <!-- MONTHS VIEW -->
        <template v-if="calendarView === 'months'">
          <div class="px-4 pb-10 pt-4">
            <div class="relative flex h-6 items-center justify-between">
              <button
                type="button"
                class="inline-flex h-6 w-6 items-center justify-center text-black-600 transition-colors hover:text-black-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
                aria-label="Tahun Sebelumnya"
                @click="monthPickerYear--"
              >
                <ChevronLeft class="h-6 w-6" aria-hidden="true" />
              </button>

              <div class="absolute left-1/2 inline-flex -translate-x-1/2 items-center gap-4 !text-omicron font-extrabold">
                <span class="text-black-500">
                  {{ FULL_MONTH_NAMES[getCurrentHeadingDate().month - 1] }}
                </span>
                <button
                  type="button"
                  class="text-lime-500 transition-colors hover:text-lime-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
                  @click="openYearView"
                  @keydown.enter="openYearView"
                  @keydown.space.prevent="openYearView"
                >
                  {{ monthPickerYear }}
                </button>
              </div>

              <button
                type="button"
                class="inline-flex h-6 w-6 items-center justify-center text-black-600 transition-colors hover:text-black-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
                aria-label="Tahun Berikutnya"
                @click="monthPickerYear++"
              >
                <ChevronRight class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

            <div class="mt-2 grid grid-cols-3 gap-1">
              <button
                v-for="(month, idx) in MONTH_NAMES"
                :key="month"
                type="button"
                class="inline-flex h-10 items-center justify-center rounded-lg !text-omicron font-semibold text-black-800 transition-colors hover:bg-black-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
                :class="{
                  '!bg-lime-500 !text-white hover:!bg-lime-600': isMonthSelected(idx + 1),
                }"
                @click="onMonthClick(idx + 1)"
              >
                {{ month }}
              </button>
            </div>
          </div>
        </template>

        <!-- YEARS VIEW -->
        <template v-if="calendarView === 'years'">
          <div class="px-4 pb-10 pt-4">
            <div class="relative flex h-6 items-center justify-center">
              <div class="absolute left-1/2 inline-flex -translate-x-1/2 items-center gap-4 !text-omicron font-extrabold">
                <button
                  type="button"
                  class="text-lime-500 transition-colors hover:text-lime-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
                  @click="openMonthView"
                  @keydown.enter="openMonthView"
                  @keydown.space.prevent="openMonthView"
                >
                  {{ FULL_MONTH_NAMES[getCurrentHeadingDate().month - 1] }}
                </button>
                <span class="text-black-500">
                  {{ getCurrentHeadingDate().year }}
                </span>
              </div>
            </div>

            <div class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

            <div ref="yearGridRef" class="mt-2 grid max-h-[226px] grid-cols-3 gap-x-6 gap-y-6 overflow-y-auto pr-1">
              <button
                v-for="year in getYearRange()"
                :key="year"
                :data-year="year"
                type="button"
                class="inline-flex h-[34px] items-center justify-center rounded-lg !text-lambda font-semibold text-black-800 transition-colors hover:bg-black-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
                :class="{
                  '!bg-lime-500 !text-white hover:!bg-lime-600': isYearSelected(year),
                }"
                @click="onYearClick(year)"
              >
                {{ year }}
              </button>
            </div>
          </div>
        </template>
      </DatePickerCalendar>
    </DatepickerContent>
  </DatePickerRoot>
</template>
