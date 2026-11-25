<script setup lang="ts">
import { computed, nextTick, ref, watch, type HTMLAttributes } from "vue";
import { DatePickerRoot, DatePickerClose } from "reka-ui";
import { useVModel } from "@vueuse/core";
import { cn } from "../../../lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-vue-next";
import DatepickerContent from "./DatepickerContent.vue";
import DatepickerInput from "./DatepickerInput.vue";
import { INDONESIAN_MONTHS, formatMonthYear } from "./utils";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    contentClass?: HTMLAttributes["class"];
    placeholder?: string;
    /** Bulan terpilih, format `YYYY-MM` */
    modelValue?: string;
    defaultValue?: string;
    open?: boolean;
    defaultOpen?: boolean;
    disabled?: boolean;
    /** Bulan minimal yang bisa dipilih, format `YYYY-MM` */
    min?: string;
    /** Bulan maksimal yang bisa dipilih, format `YYYY-MM` */
    max?: string;
    title?: string;
    /** Tahun minimal mundur dari tahun sekarang, default 100 */
    minYearOffset?: number;
    /** Tahun maksimal maju dari tahun sekarang, default 3 */
    maxYearOffset?: number;
  }>(),
  {
    placeholder: "Pilih Bulan",
    open: undefined,
    title: "Pilih Bulan",
    minYearOffset: 100,
    maxYearOffset: 3,
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
  "update:open": [value: boolean];
}>();

const model = useVModel(props, "modelValue", emit, {
  passive: true,
  defaultValue: props.defaultValue,
});
const isOpen = useVModel(props, "open", emit, {
  passive: true,
  defaultValue: props.defaultOpen ?? false,
});

const MONTH_SHORT = INDONESIAN_MONTHS.map((m) => m.slice(0, 3));
const now = new Date();
const MIN_YEAR = computed(() => now.getFullYear() - props.minYearOffset);
const MAX_YEAR = computed(() => now.getFullYear() + props.maxYearOffset);
const years = computed(() =>
  Array.from(
    { length: MAX_YEAR.value - MIN_YEAR.value + 1 },
    (_, i) => MAX_YEAR.value - i,
  ),
);

/** `YYYY-MM` → { year, month (1-12) } */
function parse(str?: string) {
  const [year, month] = (str ?? "").split("-").map(Number);
  return year && month >= 1 && month <= 12 ? { year, month } : undefined;
}
const index = (year: number, month: number) => year * 12 + month;

const selected = computed(() => parse(model.value));
const minIdx = computed(() => {
  const p = parse(props.min);
  return p ? index(p.year, p.month) : -Infinity;
});
const maxIdx = computed(() => {
  const p = parse(props.max);
  return p ? index(p.year, p.month) : Infinity;
});

const displayValue = computed(() =>
  selected.value
    ? formatMonthYear(selected.value.year, selected.value.month - 1)
    : "",
);

type View = "months" | "years";
const view = ref<View>("months");
const viewYear = ref(selected.value?.year ?? now.getFullYear());
const yearGridRef = ref<HTMLElement | null>(null);

// Reset tampilan ke bulan terpilih setiap kali popup dibuka
watch(isOpen, (open) => {
  if (!open) return;
  view.value = "months";
  viewYear.value =
    selected.value?.year ??
    Math.min(Math.max(now.getFullYear(), MIN_YEAR.value), MAX_YEAR.value);
});

function isMonthDisabled(month: number) {
  const i = index(viewYear.value, month);
  return i < minIdx.value || i > maxIdx.value;
}

function isMonthSelected(month: number) {
  return (
    selected.value?.year === viewYear.value && selected.value.month === month
  );
}

function selectMonth(month: number) {
  model.value = `${viewYear.value}-${String(month).padStart(2, "0")}`;
  isOpen.value = false;
}

function selectYear(year: number) {
  viewYear.value = year;
  view.value = "months";
}

function openYears() {
  view.value = "years";
  nextTick(() => {
    yearGridRef.value
      ?.querySelector<HTMLElement>(`[data-year="${viewYear.value}"]`)
      ?.scrollIntoView({ block: "center", inline: "nearest" });
  });
}

const navBtn =
  "inline-flex h-6 w-6 cursor-pointer items-center justify-center text-black-600 transition-colors hover:text-black-800 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2";
const headingBtn =
  "cursor-pointer text-lime-500 transition-colors hover:text-lime-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2";
const cellBtn =
  "inline-flex cursor-pointer items-center justify-center rounded-lg font-semibold text-black-800 transition-colors hover:bg-black-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:text-black-500 disabled:line-through disabled:hover:bg-transparent";
const cellSelected = "!bg-lime-500 !text-white hover:!bg-lime-600";
</script>

<template>
  <DatePickerRoot
    :open="isOpen"
    :disabled="disabled"
    :class="cn('relative inline-block', props.class)"
    @update:open="isOpen = $event"
  >
    <DatepickerInput :value="displayValue" :placeholder="placeholder" />

    <DatepickerContent :class="props.contentClass">
      <div class="flex items-center gap-24 px-4 pt-4">
        <div class="flex-1 text-lambda! font-extrabold text-black-800">
          {{ title }}
        </div>
        <DatePickerClose
          :class="cn(navBtn, 'hover:text-black-800')"
          aria-label="Tutup month picker"
        >
          <X class="h-6 w-6" aria-hidden="true" />
        </DatePickerClose>
      </div>

      <div class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

      <div class="px-4 pb-10 pt-4">
        <!-- MONTHS VIEW -->
        <template v-if="view === 'months'">
          <div class="relative flex h-6 items-center justify-between">
            <button
              type="button"
              :class="navBtn"
              :disabled="viewYear <= MIN_YEAR"
              aria-label="Tahun Sebelumnya"
              @click="viewYear--"
            >
              <ChevronLeft class="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              :class="
                cn(
                  headingBtn,
                  'absolute left-1/2 -translate-x-1/2 text-omicron! font-extrabold',
                )
              "
              @click="openYears"
            >
              {{ viewYear }}
            </button>

            <button
              type="button"
              :class="navBtn"
              :disabled="viewYear >= MAX_YEAR"
              aria-label="Tahun Berikutnya"
              @click="viewYear++"
            >
              <ChevronRight class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

          <div class="mt-2 grid grid-cols-3 gap-1">
            <button
              v-for="(name, idx) in MONTH_SHORT"
              :key="name"
              type="button"
              :disabled="isMonthDisabled(idx + 1)"
              :class="
                cn(
                  cellBtn,
                  'h-10 text-omicron!',
                  isMonthSelected(idx + 1) && cellSelected,
                )
              "
              @click="selectMonth(idx + 1)"
            >
              {{ name }}
            </button>
          </div>
        </template>

        <!-- YEARS VIEW -->
        <template v-else>
          <div class="relative flex h-6 items-center justify-center">
            <button
              type="button"
              :class="cn(headingBtn, 'text-omicron! font-extrabold')"
              @click="view = 'months'"
            >
              {{ viewYear }}
            </button>
          </div>

          <div class="mt-4 h-px w-full bg-black-200" aria-hidden="true" />

          <div
            ref="yearGridRef"
            class="mt-2 grid max-h-[226px] grid-cols-3 gap-x-6 gap-y-6 overflow-y-auto pr-1"
          >
            <button
              v-for="year in years"
              :key="year"
              :data-year="year"
              type="button"
              :class="
                cn(
                  cellBtn,
                  'h-[34px] text-lambda!',
                  year === viewYear && cellSelected,
                )
              "
              @click="selectYear(year)"
            >
              {{ year }}
            </button>
          </div>
        </template>
      </div>
    </DatepickerContent>
  </DatePickerRoot>
</template>
