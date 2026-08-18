<script setup lang="ts">
import type { TabsIndicatorProps, TabsListProps } from 'reka-ui'
import { TabsIndicator, TabsList } from 'reka-ui'
import { type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<
  TabsListProps & TabsIndicatorProps & { class?: HTMLAttributes['class'] }
>()
</script>

<template>
  <TabsList v-bind="props" :class="cn('relative flex border-b border-black-200', props.class)">
    <slot />
    <TabsIndicator
      :class="
        cn(
          'absolute bottom-0 left-0 h-[2px] w-[var(--reka-tabs-indicator-size,var(--radix-tabs-indicator-size))] translate-x-[var(--reka-tabs-indicator-position,var(--radix-tabs-indicator-position))] transition-[width,transform] duration-300 ease-out z-10 pointer-events-none',
        )
      "
    >
      <div class="h-full w-full bg-lime-500" />
    </TabsIndicator>
  </TabsList>
</template>
