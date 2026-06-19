<script setup lang="ts">
import RadioGroupPreview from './previews/RadioGroupPreview.vue'
</script>

# Radio Group

A set of mutually exclusive options where only one item can be selected at a time.

## Installation

```bash
npx gwind-system-ui add radio-group
```

## Preview

<RadioGroupPreview />

---

## States

- `RadioGroupItem` is the 24px primitive control with a 20px visual circle.
- `RadioGroupField` is the Figma single option composition with label, caption, error, hover, active, and disabled states.
- `RadioGroup` can render the group structure with title, subtitle, option layout, and helper/error caption.
- Website mode uses the bordered 328px option container.
- Mobile apps mode uses the inline, borderless composition.
- Use `RadioGroup` to control selection with `v-model`, `modelValue`, or `defaultValue`.

---

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupField } from '@/components/ui/radio-group'

const value = ref('option-one')
</script>

<template>
  <RadioGroup
    v-model="value"
    title="Title"
    subtitle="This is a subtitle text."
    caption="This is a helper text."
  >
    <RadioGroupField id="option-one" value="option-one" label="Option One" />
    <RadioGroupField id="option-two" value="option-two" label="Option Two" />
  </RadioGroup>
</template>
```

---

## RadioGroup Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `undefined` | Group title. |
| `subtitle` | `string` | `undefined` | Supporting title text. |
| `caption` | `string` | `undefined` | Helper caption. |
| `error` | `string` | `undefined` | Error caption. |
| `alignment` | `'horizontal' | 'vertical'` | `'horizontal'` | Option layout. |
| `styleMode` | `'website' | 'mobile-apps'` | `'website'` | Visual group width mode. |

## RadioGroupField Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | generated id | Radio item id. |
| `value` | `string` | required | Option value registered by `RadioGroup`. |
| `label` | `string` | `undefined` | Option label. |
| `caption` | `string` | `undefined` | Helper caption. |
| `error` | `string` | `undefined` | Error caption. |
| `disabled` | `boolean` | `false` | Disables the option. |
| `styleMode` | `'website' | 'mobile-apps'` | `'website'` | Visual composition style. |

---

## Field Variants

### Website
```vue
<RadioGroup v-model="value">
  <RadioGroupField value="option-one" label="This is an option" />
</RadioGroup>
```

### With Caption
```vue
<RadioGroupField
  value="option-caption"
  label="This is an option"
  caption="This is a subtitle text."
/>
```

### Error
```vue
<RadioGroupField
  value="option-error"
  label="This is an option"
  error="This is an error message."
/>
```

### Mobile Apps
```vue
<RadioGroupField
  value="option-mobile"
  style-mode="mobile-apps"
  label="This is an option"
/>
```
