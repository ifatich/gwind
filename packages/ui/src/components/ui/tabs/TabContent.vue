<script setup lang="ts">
import type { TabsContentProps } from 'reka-ui'
import { TabsContent } from 'reka-ui'
import { type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<
  TabsContentProps & { class?: HTMLAttributes['class']; value: string | number }
>()
</script>

<template>
  <TabsContent
    v-bind="props"
    :class="
      cn(
        'px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-black-800 select-none rounded-tl-md hover:text-lime-500 data-[state=active]:text-lime-500 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 outline-none',
        props.class,
      )
    "
    :value="props.value"
  >
    <slot />
  </TabsContent>
</template>
