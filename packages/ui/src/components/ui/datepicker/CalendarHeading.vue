<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  CalendarHeading,
  CalendarPrev,
  CalendarNext,
  type CalendarHeadingProps,
} from 'reka-ui'
import { cn } from '../../../lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps<CalendarHeadingProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <CalendarHeading
    v-bind="props"
    :class="cn('flex items-center justify-between px-4 py-3', props.class)"
  >
    <slot name="prev">
      <CalendarPrev
        :class="
          cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-md text-black-500 transition-colors hover:bg-black-100 hover:text-black-800 disabled:pointer-events-none disabled:opacity-50',
          )
        "
      >
        <ChevronLeft class="h-4 w-4" />
      </CalendarPrev>
    </slot>

    <slot name="title">
      <div class="text-sigma font-bold text-black-800">
        <slot name="heading" />
      </div>
    </slot>

    <slot name="next">
      <CalendarNext
        :class="
          cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-md text-black-500 transition-colors hover:bg-black-100 hover:text-black-800 disabled:pointer-events-none disabled:opacity-50',
          )
        "
      >
        <ChevronRight class="h-4 w-4" />
      </CalendarNext>
    </slot>
  </CalendarHeading>
</template>
