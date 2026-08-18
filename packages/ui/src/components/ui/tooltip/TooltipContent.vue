<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { TooltipArrow, TooltipContent, type TooltipContentEmits, type TooltipContentProps, TooltipPortal, useForwardPropsEmits } from 'reka-ui'
import { useGwindPortalTarget } from '../../../lib/portal'
import { cn } from '../../../lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TooltipContentProps & { class?: HTMLAttributes['class']; title?: string }>(), {
  sideOffset: 4,
})

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, title: __, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const portalTarget = useGwindPortalTarget()
</script>

<template>
  <TooltipPortal :to="portalTarget">
    <TooltipContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'z-50 overflow-hidden rounded-md border border-black-100 bg-white text-black-800 shadow-drop-1 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <div v-if="props.title || $slots.header" class="flex flex-col gap-y-1 px-3 py-2 pb-1">
        <slot name="header">
          <h3 class="text-omicron font-bold leading-none tracking-tight text-black-800">
            {{ props.title }}
          </h3>
        </slot>
      </div>
      <div :class="cn('px-3 py-2 text-sigma', (props.title || $slots.header) ? 'pt-0' : '')">
        <slot />
      </div>
      <TooltipArrow class="fill-white" />
    </TooltipContent>
  </TooltipPortal>
</template>
