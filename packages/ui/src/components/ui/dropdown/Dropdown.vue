<script setup lang="ts">
import { computed, ref, watch, type HTMLAttributes } from "vue";
import { ChevronDown } from "lucide-vue-next";
import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { cn } from "../../../lib/utils";

const props = withDefaults(
  defineProps<{
    open?: boolean;
    defaultOpen?: boolean;
    disabled?: boolean;
    placeholder?: string;
    modelLabel?: string;
    class?: HTMLAttributes["class"];
    triggerClass?: HTMLAttributes["class"];
    contentClass?: HTMLAttributes["class"];
  }>(),
  {
    disabled: false,
    placeholder: "Select option",
  },
);

const emits = defineEmits<{
  (event: "update:open", value: boolean): void;
}>();

const internalOpen = ref(props.open ?? props.defaultOpen ?? false);
const openState = computed(() => props.open ?? internalOpen.value);

watch(
  () => props.open,
  (value) => {
    if (value !== undefined) internalOpen.value = value;
  },
);

function updateOpen(value: boolean) {
  internalOpen.value = value;
  emits("update:open", value);
}
</script>

<template>
  <Popover :open="openState" @update:open="updateOpen">
    <PopoverTrigger as-child>
      <slot name="trigger">
        <Button
          type="button"
          variant="combobox"
          :disabled="disabled"
          :class="
            cn(
              'h-10 w-full justify-between rounded-md px-3 py-2 text-omicron font-semibold leading-6',
              props.triggerClass,
            )
          "
        >
          <span class="truncate text-black-800">
            {{ modelLabel || placeholder }}
          </span>
          <ChevronDown
            class="h-4 w-4 shrink-0 text-black-600"
            aria-hidden="true"
          />
        </Button>
      </slot>
    </PopoverTrigger>

    <PopoverContent
      align="start"
      :class="
        cn('w-full border-0 bg-transparent p-0 shadow-none', props.contentClass)
      "
    >
      <div :class="cn('min-w-full', props.class)">
        <slot />
      </div>
    </PopoverContent>
  </Popover>
</template>
