<script setup lang="ts">
import {
  ComboboxInput,
  type ComboboxInputEmits,
  type ComboboxInputProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { Search } from 'lucide-vue-next'
import { cn } from '../../../lib/utils'

const props = defineProps<
  ComboboxInputProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<ComboboxInputEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <div class="flex items-center border-b border-black-200 px-3" icon-wrapper>
    <Search class="mr-2 h-4 w-4 shrink-0 text-black-400" />
    <ComboboxInput
      v-bind="forwarded"
      :class="
        cn(
          'flex h-11 w-full rounded-md bg-transparent py-3 text-sigma text-black-800 outline-none placeholder:text-black-400 disabled:cursor-not-allowed disabled:opacity-50',
          props.class,
        )
      "
    />
  </div>
</template>
