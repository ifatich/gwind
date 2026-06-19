<script setup lang="ts">
import { ref } from 'vue'

const checkboxPrimitiveChecked = ref(true)
const checkboxPrimitiveIndeterminate = ref<boolean | 'indeterminate'>('indeterminate')
const checkboxWebsiteInactive = ref(false)
const checkboxWebsiteActive = ref(true)
const checkboxWebsiteCaption = ref(false)
const checkboxWebsiteError = ref(false)
const checkboxMobileInactive = ref(false)
const checkboxMobileActive = ref(true)
const checkboxMobileCaption = ref(false)
const checkboxGroupA = ref(true)
const checkboxGroupB = ref(false)
const checkboxGroupC = ref(true)
const checkboxGroupD = ref(false)
</script>

# Checkbox

A control that allows the user to toggle between checked and not checked.

## Installation

```bash
npx gwind-system-ui add checkbox
```

## Preview

<ShadowPreview class="gwind-docs-preview">
  <div class="grid w-full gap-4 md:grid-cols-2">
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="mb-3 text-sigma font-extrabold text-black-800">Primitive</div>
      <div class="flex flex-wrap items-center gap-3">
        <GwCheckbox id="checkbox-unchecked" />
        <GwCheckbox id="checkbox-checked" v-model="checkboxPrimitiveChecked" />
        <GwCheckbox id="checkbox-indeterminate" v-model="checkboxPrimitiveIndeterminate" />
        <GwCheckbox id="checkbox-disabled" disabled />
        <GwCheckbox id="checkbox-disabled-checked" disabled :model-value="true" />
      </div>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="mb-3 text-sigma font-extrabold text-black-800">Website</div>
      <div class="grid gap-3">
        <GwCheckboxField id="checkbox-field-inactive" v-model="checkboxWebsiteInactive" label="This is an option" />
        <GwCheckboxField id="checkbox-field-active" v-model="checkboxWebsiteActive" label="This is an option" />
        <GwCheckboxField id="checkbox-field-caption" v-model="checkboxWebsiteCaption" label="This is an option" caption="This is a subtitle text." />
        <GwCheckboxField id="checkbox-field-error" v-model="checkboxWebsiteError" label="This is an option" error="This is an error message." />
        <GwCheckboxField id="checkbox-field-disabled" label="This is an option" disabled />
      </div>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="mb-3 text-sigma font-extrabold text-black-800">Mobile Apps</div>
      <div class="grid gap-3">
        <GwCheckboxField id="checkbox-mobile-inactive" v-model="checkboxMobileInactive" style-mode="mobile-apps" label="This is an option" />
        <GwCheckboxField id="checkbox-mobile-active" v-model="checkboxMobileActive" style-mode="mobile-apps" label="This is an option" />
        <GwCheckboxField id="checkbox-mobile-caption" v-model="checkboxMobileCaption" style-mode="mobile-apps" label="This is an option" caption="This is a subtitle text." />
        <GwCheckboxField id="checkbox-mobile-disabled" style-mode="mobile-apps" label="This is an option" disabled />
      </div>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4 md:col-span-2">
      <div class="mb-3 text-sigma font-extrabold text-black-800">Group</div>
      <div class="grid gap-5">
        <GwCheckboxGroup title="Title" alignment="horizontal" error="This is an error message.">
          <GwCheckboxField id="checkbox-group-a" v-model="checkboxGroupA" label="This is an option" />
          <GwCheckboxField id="checkbox-group-b" v-model="checkboxGroupB" label="This is an option" />
        </GwCheckboxGroup>
        <GwCheckboxGroup title="Title" alignment="vertical" caption="This is a helper text.">
          <GwCheckboxField id="checkbox-group-c" v-model="checkboxGroupC" label="This is an option" caption="This is a subtitle text." />
          <GwCheckboxField id="checkbox-group-d" v-model="checkboxGroupD" label="This is an option" caption="This is a subtitle text." />
        </GwCheckboxGroup>
      </div>
    </div>
  </div>
</ShadowPreview>

---

## States

- `Checkbox` is the 24px primitive control with a 20px visual box.
- `CheckboxField` is the Figma single option composition with label, caption, error, hover, active, and disabled states.
- `CheckboxGroup` wraps multiple options with title, alignment, and helper/error caption.
- Website mode uses the bordered 328px field container.
- Mobile apps mode uses the inline, borderless composition.

---

## Usage

```vue
<script setup lang="ts">
import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/ui/checkbox'
</script>

<template>
  <CheckboxField id="terms" label="Accept terms and conditions" />
</template>
```

---

## Primitive Usage

```vue
<Checkbox id="checkbox" />
```

## Field Variants

### Website
```vue
<CheckboxField id="checkbox-website" label="This is an option" />
```

### With Caption
```vue
<CheckboxField
  id="checkbox-caption"
  label="This is an option"
  caption="This is a subtitle text."
/>
```

### Error
```vue
<CheckboxField
  id="checkbox-error"
  label="This is an option"
  error="This is an error message."
/>
```

### Mobile Apps
```vue
<CheckboxField
  id="checkbox-mobile"
  style-mode="mobile-apps"
  label="This is an option"
/>
```

---

## CheckboxField Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | generated id | Checkbox id. |
| `label` | `string` | `undefined` | Option label. |
| `caption` | `string` | `undefined` | Helper caption. |
| `error` | `string` | `undefined` | Error caption. |
| `modelValue` | `boolean` | `undefined` | Controlled checked state. |
| `defaultValue` | `boolean` | `false` | Initial checked state. |
| `disabled` | `boolean` | `false` | Disables the option. |
| `styleMode` | `'website' | 'mobile-apps'` | `'website'` | Visual composition style. |

## CheckboxGroup Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `undefined` | Group title. |
| `subtitle` | `string` | `undefined` | Supporting title text. |
| `caption` | `string` | `undefined` | Helper caption. |
| `error` | `string` | `undefined` | Error caption. |
| `alignment` | `'horizontal' | 'vertical'` | `'horizontal'` | Option layout. |
| `styleMode` | `'website' | 'mobile-apps'` | `'website'` | Visual group width mode. |
