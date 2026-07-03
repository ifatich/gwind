<script setup lang="ts">
import { DatePickerRoot, type DatePickerRootEmits, type DatePickerRootProps, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<DatePickerRootProps>()
const emits = defineEmits<DatePickerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DatePickerRoot v-bind="forwarded">
    <slot />
  </DatePickerRoot>
</template>
