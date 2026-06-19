<script setup lang="ts">
import { ref } from "vue";
import { Landmark } from "lucide-vue-next";
import {
  Dropdown,
  DropdownList,
  DropdownListCheckboxItem,
  DropdownListItem,
} from "../../../../packages/ui/src/components/ui/dropdown";

const provinces = [
  "Aceh",
  "Bali",
  "Banten",
  "Bengkulu",
  "DI Yogyakarta",
  "DKI Jakarta",
];

const accounts = Array.from({ length: 5 }).map(() => ({
  title: "1.805,0595 gram",
  caption: "1234 5678 9101 2345",
}));

const optionA = ref(true);
const optionB = ref(true);
const optionC = ref(false);
const optionD = ref(false);
</script>

<template>
  <ShadowPreview class="gwind-docs-preview">
    <div class="grid w-full gap-6 rounded-3xl bg-black-100 p-6">
      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Dropdown + Dropdown List
        </div>
        <Dropdown default-open model-label="Bali" trigger-class="max-w-md">
          <DropdownList>
            <DropdownListItem v-for="province in provinces" :key="province">
              {{ province }}
            </DropdownListItem>
          </DropdownList>
        </Dropdown>
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Dropdown List / Single Option
        </div>
        <DropdownList>
          <DropdownListItem v-for="province in provinces" :key="province">
            {{ province }}
          </DropdownListItem>
        </DropdownList>
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Single Options + With Icon
        </div>
        <DropdownList>
          <DropdownListItem
            v-for="(account, index) in accounts"
            :key="index"
            :label="account.title"
            :caption="account.caption"
            :selected="index === 0"
          >
            <template #icon>
              <Landmark class="h-6 w-6" />
            </template>
          </DropdownListItem>
        </DropdownList>
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Single Option + Selected
        </div>
        <DropdownList>
          <DropdownListItem
            v-for="province in provinces"
            :key="province"
            :selected="province === 'Bali'"
          >
            {{ province }}
          </DropdownListItem>
        </DropdownList>
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Multiple Options + Selected
        </div>
        <DropdownList variant="multiple">
          <DropdownListCheckboxItem v-model="optionA">
            This is an option
          </DropdownListCheckboxItem>
          <DropdownListCheckboxItem v-model="optionB">
            This is an option
          </DropdownListCheckboxItem>
          <DropdownListCheckboxItem v-model="optionC">
            This is an option
          </DropdownListCheckboxItem>
          <DropdownListCheckboxItem v-model="optionD">
            This is an option
          </DropdownListCheckboxItem>
        </DropdownList>
      </div>
    </div>
  </ShadowPreview>
</template>
