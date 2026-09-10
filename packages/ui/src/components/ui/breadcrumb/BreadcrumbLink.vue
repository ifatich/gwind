<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '../../../lib/utils'

const props = withDefaults(defineProps<PrimitiveProps & { class?: HTMLAttributes['class'] }>(), {
  as: 'a',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn('cursor-pointer transition-colors hover:opacity-80 font-semibold', props.class)"
  >
    <slot />
  </Primitive>
</template>
