<script setup lang="ts">
import type { TabsTriggerProps } from 'reka-ui'
import { TabsTrigger } from 'reka-ui'
import { type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<
  TabsTriggerProps & { class?: HTMLAttributes['class']; value: string | number }
>()
</script>

<template>
  <TabsTrigger
    v-bind="props"
    :class="
      cn(
        'text-black-800 bg-white h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first-of-type:rounded-tl-md last-of-type:rounded-tr-md first:rounded-tl-md last:rounded-tr-md hover:text-lime-500 data-[state=active]:text-lime-500 outline-none cursor-pointer px-1 py-4 sm:py-3 border-b-2 border-b-transparent -mb-[1px] font-extrabold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50',
        props.class,
      )
    "
  >
    <slot />
  </TabsTrigger>
</template>
