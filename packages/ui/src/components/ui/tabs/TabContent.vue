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
        'mt-2 outline-none data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2',
        props.class,
      )
    "
    :value="props.value"
  >
    <slot />
  </TabsContent>
</template>
