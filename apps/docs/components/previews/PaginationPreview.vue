<script setup lang="ts">
import { ref } from "vue";
import { Pagination } from "../../../../packages/ui/src/components/ui/pagination";

const sevenPages = ref(1);
const eightPages = ref(5);
const twentyPages = ref(12);
</script>

<template>
  <ShadowPreview class="gwind-docs-preview">
    <div class="grid w-full gap-6 rounded-3xl bg-[#f6f7fb] p-6">
      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          1-7 Pages
        </div>
        <Pagination v-model="sevenPages" :total-pages="7" />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          1-8 Page
        </div>
        <Pagination v-model="eightPages" :total-pages="8" />
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          1-20 Page
        </div>
        <Pagination v-model="twentyPages" :total-pages="20" />
      </div>
    </div>
  </ShadowPreview>
</template>
