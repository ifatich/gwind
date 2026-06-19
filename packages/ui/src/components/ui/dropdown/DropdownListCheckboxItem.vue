<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { CheckboxField } from "../checkbox";
import { cn } from "../../../lib/utils";

const props = withDefaults(
  defineProps<{
    id?: string;
    modelValue?: boolean;
    disabled?: boolean;
    label?: string;
    class?: HTMLAttributes["class"];
  }>(),
  {
    modelValue: false,
    disabled: false,
  },
);

const emits = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();
</script>

<template>
  <CheckboxField
    :id="id"
    :model-value="modelValue"
    :disabled="disabled"
    :label="label"
    :class="cn('max-w-none', props.class)"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot>{{ label }}</slot>
  </CheckboxField>
</template>
