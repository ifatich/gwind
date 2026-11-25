<script setup lang="ts">
import { ref } from "vue";
import { MonthPicker } from "../../../../packages/ui/src/components/ui/datepicker";

const blankMonth = ref("");
const filledMonth = ref("2026-06");
const openMonth = ref("2026-06");
const rangeMonth = ref("");
const currentYearTo2040Month = ref("");
const currentYearStart = `${new Date().getFullYear()}-01`;
const blankOpen = ref(false);
const filledOpen = ref(false);
</script>

<template>
  <ShadowPreview class="gwind-docs-preview">
    <div class="grid w-full gap-6 rounded-3xl bg-black-100 p-6">
      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Blank (placeholder)
        </div>
        <MonthPicker
          v-model="blankMonth"
          v-model:open="blankOpen"
          placeholder="Pilih bulan"
        />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Filled (selected month)
        </div>
        <MonthPicker
          v-model="filledMonth"
          v-model:open="filledOpen"
          placeholder="Pilih bulan"
        />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Open (month grid popup)
        </div>
        <MonthPicker
          v-model="openMonth"
          default-open
          placeholder="Pilih bulan"
        />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Cross-year range outside the default year window
        </div>
        <MonthPicker
          v-model="rangeMonth"
          min="2032-11"
          max="2033-02"
          placeholder="November 2032 – Februari 2033"
        />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Current year through 2040
        </div>
        <MonthPicker
          v-model="currentYearTo2040Month"
          :min="currentYearStart"
          max="2040-12"
          placeholder="Pilih periode sampai 2040"
        />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Disabled
        </div>
        <MonthPicker disabled model-value="2026-01" />
      </div>
    </div>
  </ShadowPreview>
</template>
