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
  <th
    :class="
      cn(
        'bg-lime-500 px-3 py-3 align-middle !text-sigma font-extrabold leading-5 text-white',
        alignClass,
        props.class,
      )
    "
  >
    <slot />
  </th>
</template>
