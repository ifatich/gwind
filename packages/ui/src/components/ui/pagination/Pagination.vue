<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { cn } from "../../../lib/utils";

type PaginationItem = number | "ellipsis-start" | "ellipsis-end";

const props = withDefaults(
  defineProps<{
    modelValue: number;
    totalPages: number;
    disabled?: boolean;
    ariaLabel?: string;
    class?: HTMLAttributes["class"];
  }>(),
  {
    disabled: false,
    ariaLabel: "Pagination",
  },
);

const emits = defineEmits<{
  (event: "update:modelValue", value: number): void;
  (event: "change", value: number): void;
}>();

const currentPage = computed(() => clampPage(props.modelValue));
const pageCount = computed(() =>
  Math.max(1, Math.trunc(props.totalPages || 1)),
);
const canGoPrevious = computed(() => currentPage.value > 1 && !props.disabled);
const canGoNext = computed(
  () => currentPage.value < pageCount.value && !props.disabled,
);

const items = computed<PaginationItem[]>(() => {
  const total = pageCount.value;
  const page = currentPage.value;

  if (total <= 7) {
    return range(1, total);
  }

  if (page <= 4) {
    return [1, 2, 3, 4, 5, "ellipsis-end", total];
  }

  if (page >= total - 3) {
    return [1, "ellipsis-start", ...range(total - 4, total)];
  }

  return [1, "ellipsis-start", page - 1, page, page + 1, "ellipsis-end", total];
});

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function clampPage(page: number) {
  return Math.min(Math.max(1, Math.trunc(page || 1)), pageCount.value);
}

function updatePage(page: number) {
  const nextPage = clampPage(page);

  if (props.disabled || nextPage === currentPage.value) return;

  emits("update:modelValue", nextPage);
  emits("change", nextPage);
}
</script>

<template>
  <nav
    :aria-label="ariaLabel"
    :class="
      cn(
        'max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        props.class,
      )
    "
  >
    <ul class="m-0 flex w-max list-none items-center gap-3 p-0">
      <li class="m-0 list-none p-0">
        <button
          type="button"
          class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-black-20 bg-white text-black-600 transition-[background-color,border-color,box-shadow,transform] duration-150 ease-out hover:border-lime-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 active:scale-[var(--gwind-motion-scale-icon-press)] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
          :disabled="!canGoPrevious"
          aria-label="Previous page"
          @click="updatePage(currentPage - 1)"
        >
          <ChevronLeft class="h-5 w-5" aria-hidden="true" />
        </button>
      </li>

      <li v-for="item in items" :key="item" class="m-0 list-none p-0">
        <span
          v-if="typeof item !== 'number'"
          class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-black-20 bg-white text-omicron font-semibold leading-6 text-black-800"
          aria-hidden="true"
        >
          ...
        </span>
        <button
          v-else
          type="button"
          :class="
            cn(
              'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border text-omicron font-semibold leading-6 transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 active:scale-[var(--gwind-motion-scale-icon-press)] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100',
              item === currentPage
                ? 'border-lime-500 bg-lime-500 text-white'
                : 'border-black-20 bg-white text-black-800 hover:border-lime-600 hover:text-lime-600',
            )
          "
          :disabled="disabled"
          :aria-label="`Page ${item}`"
          :aria-current="item === currentPage ? 'page' : undefined"
          @click="updatePage(item)"
        >
          {{ item }}
        </button>
      </li>

      <li class="m-0 list-none p-0">
        <button
          type="button"
          class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-black-20 bg-white text-black-600 transition-[background-color,border-color,box-shadow,transform] duration-150 ease-out hover:border-lime-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 active:scale-[var(--gwind-motion-scale-icon-press)] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
          :disabled="!canGoNext"
          aria-label="Next page"
          @click="updatePage(currentPage + 1)"
        >
          <ChevronRight class="h-5 w-5" aria-hidden="true" />
        </button>
      </li>
    </ul>
  </nav>
</template>
