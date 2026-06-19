<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: HTMLAttributes['class']
  wrapperClass?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('gwind-table w-full overflow-x-auto rounded-md bg-white', wrapperClass)">
    <table
      v-bind="$attrs"
      :class="
        cn(
          'w-full min-w-[592px] border-separate border-spacing-0 bg-white text-left',
          props.class,
        )
      "
    >
      <slot />
    </table>
  </div>
</template>
