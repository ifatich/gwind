<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { PopoverContent, type PopoverContentEmits, type PopoverContentProps, PopoverPortal, useForwardPropsEmits } from 'reka-ui'
import { useGwindPortalTarget } from '../../../lib/portal'
import { cn } from '../../../lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PopoverContentProps & { class?: HTMLAttributes['class']; title?: string }>(), {
  align: 'center',
  sideOffset: 4,
})
const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, title: __, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const portalTarget = useGwindPortalTarget()
</script>

<template>
  <PopoverPortal :to="portalTarget">
    <PopoverContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'z-50 w-72 overflow-hidden rounded-md border border-black-100 bg-white text-black-800 shadow-drop-1 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <div v-if="props.title || $slots.header" class="flex flex-col gap-y-1 p-4 pb-1">
        <slot name="header">
          <h3 class="text-omicron font-bold leading-none tracking-tight text-black-800">
            {{ props.title }}
          </h3>
        </slot>
      </div>
      <div :class="cn('p-4', (props.title || $slots.header) ? 'pt-0' : '')">
        <slot />
      </div>
    </PopoverContent>
  </PopoverPortal>
</template>
