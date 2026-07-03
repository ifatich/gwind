<script setup lang="ts">
import { ref } from "vue";
import { Datepicker } from "../../../../packages/ui/src/components/ui/datepicker";

const blankDate = ref("");
const filledDate = ref("2026-06-21");
const openDate = ref("2026-06-21");
const todayOrLaterDate = ref("");
const todayOrEarlierDate = ref("");
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
        <Datepicker
          v-model="blankDate"
          v-model:open="blankOpen"
          placeholder="Pilih tanggal"
        />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Filled (selected date)
        </div>
        <Datepicker
          v-model="filledDate"
          v-model:open="filledOpen"
          placeholder="Pilih tanggal"
        />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Open (calendar popup)
        </div>
        <Datepicker
          v-model="openDate"
          default-open
          placeholder="Pilih tanggal"
        />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Past dates disabled
        </div>
        <Datepicker
          v-model="todayOrLaterDate"
          disable-past-dates
          placeholder="Hari ini atau setelahnya"
        />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Future dates disabled
        </div>
        <Datepicker
          v-model="todayOrEarlierDate"
          disable-future-dates
          placeholder="Hari ini atau sebelumnya"
        />
      </div>
    </div>
  </ShadowPreview>
</template>
