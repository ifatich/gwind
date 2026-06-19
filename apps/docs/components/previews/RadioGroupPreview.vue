<script setup lang="ts">
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupField,
  RadioGroupItem,
} from '../../../../packages/ui/src/components/ui/radio-group'

const radioPrimitive = ref('on')
const radioWebsite = ref('website-active')
const radioMobile = ref('mobile-active')
const radioHorizontal = ref('horizontal-a')
const radioVertical = ref('vertical-a')
</script>

<template>
  <ShadowPreview class="gwind-docs-preview">
    <div class="grid w-full gap-4 md:grid-cols-2">
      <div class="rounded-md border border-black-200 bg-white p-4">
        <div class="mb-3 text-sigma font-extrabold text-black-800">Primitive</div>
        <RadioGroup v-model="radioPrimitive" class="flex flex-wrap items-center gap-3">
          <RadioGroupItem id="radio-primitive-off" value="off" />
          <RadioGroupItem id="radio-primitive-on" value="on" />
          <RadioGroupItem id="radio-primitive-disabled" value="disabled" disabled />
          <RadioGroupItem id="radio-primitive-disabled-on" value="disabled-on" disabled />
        </RadioGroup>
      </div>
      <div class="rounded-md border border-black-200 bg-white p-4">
        <div class="mb-3 text-sigma font-extrabold text-black-800">Website</div>
        <RadioGroup v-model="radioWebsite" class="grid gap-3">
          <RadioGroupField id="radio-website-inactive" value="website-inactive" label="This is an option" />
          <RadioGroupField id="radio-website-active" value="website-active" label="This is an option" />
          <RadioGroupField id="radio-website-caption" value="website-caption" label="This is an option" caption="This is a subtitle text." />
          <RadioGroupField id="radio-website-error" value="website-error" label="This is an option" error="This is an error message." />
          <RadioGroupField id="radio-website-disabled" value="website-disabled" label="This is an option" disabled />
        </RadioGroup>
      </div>
      <div class="rounded-md border border-black-200 bg-white p-4">
        <div class="mb-3 text-sigma font-extrabold text-black-800">Mobile Apps</div>
        <RadioGroup v-model="radioMobile" class="grid gap-3">
          <RadioGroupField id="radio-mobile-inactive" value="mobile-inactive" style-mode="mobile-apps" label="This is an option" />
          <RadioGroupField id="radio-mobile-active" value="mobile-active" style-mode="mobile-apps" label="This is an option" />
          <RadioGroupField id="radio-mobile-caption" value="mobile-caption" style-mode="mobile-apps" label="This is an option" caption="This is a subtitle text." />
          <RadioGroupField id="radio-mobile-disabled" value="mobile-disabled" style-mode="mobile-apps" label="This is an option" disabled />
        </RadioGroup>
      </div>
      <div class="rounded-md border border-black-200 bg-white p-4 md:col-span-2">
        <div class="grid gap-5">
          <div class="grid gap-2">
            <RadioGroup
              v-model="radioHorizontal"
              title="Title"
              subtitle="This is a subtitle text."
              alignment="horizontal"
              error="This is an error message."
            >
              <RadioGroupField id="radio-horizontal-a" value="horizontal-a" label="This is an option" />
              <RadioGroupField id="radio-horizontal-b" value="horizontal-b" label="This is an option" />
            </RadioGroup>
          </div>
          <div class="grid max-w-[328px] gap-2">
            <RadioGroup
              v-model="radioVertical"
              title="Title"
              subtitle="This is a subtitle text."
              alignment="vertical"
              caption="This is a helper text."
            >
              <RadioGroupField id="radio-vertical-a" value="vertical-a" label="This is an option" caption="This is a subtitle text." />
              <RadioGroupField id="radio-vertical-b" value="vertical-b" label="This is an option" caption="This is a subtitle text." />
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  </ShadowPreview>
</template>
