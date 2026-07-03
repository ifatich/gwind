<script setup lang="ts">
import { ref, toRefs, type HTMLAttributes } from "vue";
import { Check } from "lucide-vue-next";
import { cn } from "../../../lib/utils";
import { useDropdownListItemSearch } from "./useDropdownListItemSearch";

const props = withDefaults(
  defineProps<{
    selected?: boolean;
    disabled?: boolean;
    label?: string;
    caption?: string;
    searchText?: string;
    class?: HTMLAttributes["class"];
  }>(),
  {
    selected: false,
    disabled: false,
  },
);

const emits = defineEmits<{
  (event: "select"): void;
}>();

const { label, caption, searchText } = toRefs(props);
const contentRef = ref<HTMLElement | null>(null);
const { isVisible } = useDropdownListItemSearch({
  label,
  caption,
  searchText,
  contentRef,
});
</script>

<template>
  <button
    v-show="isVisible"
    type="button"
    :disabled="disabled"
    :aria-selected="selected"
    @click="emits('select')"
    :class="
      cn(
        'group flex min-h-[48px] w-full items-center gap-4 bg-white px-4 py-4 text-left transition-[background-color,color] duration-150 ease-out hover:bg-black-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        $slots.icon ? 'min-h-16' : '',
        props.class,
      )
    "
  >
    <span
      v-if="$slots.icon"
      class="flex h-10 w-10 shrink-0 items-center justify-center text-lime-500"
    >
      <slot name="icon" />
    </span>

    <span class="grid min-w-0 flex-1 gap-0.5">
      <span
        ref="contentRef"
        class="truncate text-omicron font-semibold leading-6 text-black-800"
      >
        <slot>{{ label }}</slot>
      </span>
      <span
        v-if="caption"
        class="truncate text-omega font-semibold text-black-600"
      >
        {{ caption }}
      </span>
    </span>

    <span
      v-if="selected"
      class="flex h-6 w-6 shrink-0 items-center justify-center text-lime-500"
      aria-hidden="true"
    >
      <Check class="h-5 w-5" />
    </span>
    <span
      v-else-if="$slots.trailing"
      class="flex h-6 w-6 shrink-0 items-center justify-center text-black-600"
    >
      <slot name="trailing" />
    </span>
  </button>
</template>
