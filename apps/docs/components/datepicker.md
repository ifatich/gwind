<script setup lang="ts">
import DatepickerPreview from './previews/DatepickerPreview.vue'
</script>

# Datepicker

Input-style trigger with a calendar popup for selecting a single date. The trigger follows the same blank, filled, and open interaction pattern as `Dropdown`.

## Installation

```bash
npx gwind-system-ui add datepicker
```

## Preview

<DatepickerPreview />

---

## Usage

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Datepicker } from "@/components/ui/datepicker";

const date = ref("2026-06-21");
const open = ref(false);
</script>

<template>
  <Datepicker
    v-model="date"
    v-model:open="open"
    placeholder="Pilih tanggal"
    disable-past-dates
    min="2026-01-01"
    max="2026-12-31"
  />
</template>
```

## Datepicker Props

| Name                 | Type                      | Default           | Description                                                         |
| -------------------- | ------------------------- | ----------------- | ------------------------------------------------------------------- |
| `modelValue`         | `string`                  | `undefined`       | Selected date in `YYYY-MM-DD` format.                               |
| `defaultValue`       | `string`                  | `undefined`       | Initial date for uncontrolled usage.                                |
| `open`               | `boolean`                 | `undefined`       | Controlled open state.                                              |
| `defaultOpen`        | `boolean`                 | `false`           | Initial uncontrolled open state.                                    |
| `disabled`           | `boolean`                 | `false`           | Disables the trigger.                                               |
| `disablePastDates`   | `boolean`                 | `false`           | Prevents selecting dates before today.                              |
| `disableFutureDates` | `boolean`                 | `false`           | Prevents selecting dates after today.                               |
| `placeholder`        | `string`                  | `'Pilih Tanggal'` | Placeholder shown when no date is selected.                         |
| `min`                | `string`                  | `undefined`       | Minimum selectable date (`YYYY-MM-DD`). The strictest limit wins.   |
| `max`                | `string`                  | `undefined`       | Maximum selectable date (`YYYY-MM-DD`). The strictest limit wins.   |
| `title`              | `string`                  | `'Pilih Tanggal'` | Calendar panel title.                                               |
| `minYearOffset`      | `number`                  | `100`             | Number of years before the current year shown in the year picker.   |
| `maxYearOffset`      | `number`                  | `3`               | Number of years after the current year shown in the year picker.    |
| `contentClass`       | `HTMLAttributes['class']` | `undefined`       | Additional class for the popover content.                           |
| `class`              | `HTMLAttributes['class']` | `undefined`       | Additional class for the datepicker root.                           |

When `disablePastDates` or `disableFutureDates` is combined with `min` or `max`, Datepicker applies the strictest boundary.

## Disable Past or Future Dates

```vue
<Datepicker v-model="startDate" disable-past-dates />
<Datepicker v-model="historyDate" disable-future-dates />
```

## Display Format

The trigger displays dates as `DD/MM/YYYY`. The `v-model` value remains `YYYY-MM-DD` for predictable form handling.

## Components

| Component           | Description                                        |
| ------------------- | -------------------------------------------------- |
| `Datepicker`        | Composite: trigger + popover + calendar surface.   |
| `DatepickerRoot`    | Reka `DatePickerRoot` wrapper.                     |
| `DatepickerInput`   | Input trigger with calendar icon.                  |
| `DatepickerContent` | Popover content surface for the calendar.          |
| `Calendar`          | Day grid with Indonesian labels and green selection.|
| `CalendarHeading`   | Month/year navigation with chevron icons.          |
| `YearPicker`        | Year grid selector with rounded-rect selected state.|
| `DatepickerScroll`  | Month/year scroll picker list.                     |
