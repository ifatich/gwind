<script setup lang="ts">
import { ref, toRefs, type HTMLAttributes } from "vue";
import { CheckboxField } from "../checkbox";
import { cn } from "../../../lib/utils";
import { useDropdownListItemSearch } from "./useDropdownListItemSearch";

const props = withDefaults(
  defineProps<{
    id?: string;
    modelValue?: boolean;
    disabled?: boolean;
    label?: string;
    searchText?: string;
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

const { label, searchText } = toRefs(props);
const contentRef = ref<HTMLElement | null>(null);
const { isVisible } = useDropdownListItemSearch({
  label,
  searchText,
  contentRef,
});
</script>

<template>
  <div v-show="isVisible" ref="contentRef">
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
  </div>
</template>
