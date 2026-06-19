<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "../../../lib/utils";

const props = withDefaults(
  defineProps<{
    variant?: "single" | "multiple";
    class?: HTMLAttributes["class"];
  }>(),
  {
    variant: "single",
  },
);
</script>

<template>
  <div
    :class="
      cn(
        'flex w-full flex-col overflow-hidden rounded-b-md bg-white drop-shadow-2',
        props.variant === 'multiple' ? 'gap-1 p-4' : 'px-4',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
