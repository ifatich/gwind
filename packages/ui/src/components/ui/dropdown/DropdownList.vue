<script setup lang="ts">
import {
  computed,
  nextTick,
  provide,
  ref,
  useTemplateRef,
  watch,
  type HTMLAttributes,
} from "vue";
import { Search } from "lucide-vue-next";
import { InputField } from "../input";
import { cn } from "../../../lib/utils";
import {
  DROPDOWN_LIST_CONTEXT_KEY,
  useDropdownRootContext,
} from "./context";

const props = withDefaults(
  defineProps<{
    variant?: "single" | "multiple";
    searchThreshold?: number;
    searchPlaceholder?: string;
    class?: HTMLAttributes["class"];
  }>(),
  {
    variant: "single",
    searchThreshold: 10,
    searchPlaceholder: "Cari...",
  },
);

const searchQuery = ref("");
const itemCount = ref(0);
const searchFieldRef = useTemplateRef("searchFieldRef");

const showSearch = computed(() => itemCount.value > props.searchThreshold);

function registerItem() {
  itemCount.value += 1;
  return () => {
    itemCount.value -= 1;
  };
}

provide(DROPDOWN_LIST_CONTEXT_KEY, {
  searchQuery,
  showSearch,
  registerItem,
});

const dropdownRoot = useDropdownRootContext();

async function focusSearchInput() {
  await nextTick();
  const input = searchFieldRef.value?.$el?.querySelector("input");
  input?.focus();
}

watch(
  () => dropdownRoot?.open.value,
  (isOpen) => {
    if (!isOpen) {
      searchQuery.value = "";
      return;
    }

    if (showSearch.value) focusSearchInput();
  },
);

watch(showSearch, (enabled) => {
  if (enabled && dropdownRoot?.open.value) focusSearchInput();
});
</script>

<template>
  <div
    :class="
      cn(
        'flex w-full flex-col overflow-hidden bg-white',
        'max-sm:rounded-none max-sm:rounded-t-2xl',
        'sm:rounded-[6px]',
        props.class,
      )
    "
  >
    <div
      v-if="showSearch"
      class="border-b border-black-200 p-4"
      @mousedown.stop
      @pointerdown.stop
    >
      <InputField
        ref="searchFieldRef"
        v-model="searchQuery"
        :placeholder="searchPlaceholder"
        :input-class="'h-10'"
        aria-label="Cari opsi dropdown"
        @click.stop
        @keydown.stop
      >
        <template #left-icon>
          <Search class="h-5 w-5" aria-hidden="true" />
        </template>
      </InputField>
    </div>

    <div
      :class="
        cn(
          'flex w-full flex-col',
          showSearch && 'max-h-[480px] max-sm:max-h-[60vh] overflow-y-auto',
          props.variant === 'single'
            ? 'divide-y divide-black-20'
            : 'gap-1 p-4',
          showSearch && props.variant === 'multiple' && 'p-4 pt-0',
        )
      "
    >
      <slot />
    </div>
  </div>
</template>
