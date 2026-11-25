<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxPortal,
  type ComboboxContentEmits,
  type ComboboxContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed, ref, type HTMLAttributes } from 'vue'
import { useFloatingPopperFix } from '../../../lib/floating-fix'
import { useGwindPortalTarget } from '../../../lib/portal'
import { cn } from '../../../lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<ComboboxContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    position: 'popper',
    side: 'bottom',
    align: 'start',
    sideOffset: 4,
  },
)
const emits = defineEmits<ComboboxContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const portalTarget = useGwindPortalTarget()

const contentRef = ref<HTMLElement | null>(null)
useFloatingPopperFix(contentRef, {
  side: props.side,
  align: props.align,
  sideOffset: props.sideOffset,
  matchWidth: true,
})
</script>

<template>
  <ComboboxPortal :to="portalTarget">
    <ComboboxContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'z-50 w-full min-w-(--reka-combobox-trigger-width) overflow-hidden rounded-md border border-black-200 bg-white text-black-800 shadow-drop-1 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <div ref="contentRef" class="w-full">
        <slot />
      </div>
    </ComboboxContent>
  </ComboboxPortal>
</template>
