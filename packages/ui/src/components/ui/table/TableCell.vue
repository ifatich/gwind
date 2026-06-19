<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<{
    align?: 'left' | 'center' | 'right'
    class?: HTMLAttributes['class']
  }>(),
  {
    align: 'left',
  },
)

const alignClass = computed(() => ({
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}[props.align]))
</script>

<template>
  <td
    :class="
      cn(
        'border-b border-r border-black-200 bg-inherit px-3 py-3 align-middle !text-omicron font-semibold leading-6 text-black-800 first:border-l',
        alignClass,
        props.class,
      )
    "
  >
    <slot />
  </td>
</template>
