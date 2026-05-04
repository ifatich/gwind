<script setup lang="ts">
import type { TabsRootEmits, TabsRootProps } from 'reka-ui'
import { TabsRoot, useForwardPropsEmits } from 'reka-ui'
import { type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<TabsRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<TabsRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TabsRoot
    v-bind="forwarded"
    :class="cn('flex flex-col w-full', props.class)"
    default-value="tab1"
  >
    <slot />
  </TabsRoot>
</template>
