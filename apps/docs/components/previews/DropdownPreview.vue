<script setup lang="ts">
import { ref, computed } from "vue";
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
  "Gorontalo",
  "Jambi",
  "Jawa Barat",
  "Jawa Tengah",
  "Jawa Timur",
  "Kalimantan Barat",
  "Kalimantan Selatan",
  "Kalimantan Tengah",
  "Kalimantan Timur",
  "Kalimantan Utara",
  "Kepulauan Bangka Belitung",
  "Kepulauan Riau",
  "Lampung",
  "Maluku",
  "Maluku Utara",
  "Nusa Tenggara Barat",
  "Nusa Tenggara Timur",
  "Papua",
  "Papua Barat",
  "Riau",
  "Sulawesi Barat",
  "Sulawesi Selatan",
  "Sulawesi Tengah",
  "Sulawesi Tenggara",
  "Sulawesi Utara",
  "Sumatera Barat",
  "Sumatera Selatan",
  "Sumatera Utara",
];

const accounts = Array.from({ length: 5 }).map((_, i) => ({
  title: `${(1.805 + i).toFixed(4)} gram`,
  caption: "1234 5678 9101 2345",
}));

const optionA = ref(true);
const optionB = ref(true);
const optionC = ref(false);
const optionD = ref(false);

const blankOpen = ref(false);
const filledOpen = ref(false);
const selectedProvince = ref("");

const selectedAccount = ref("1.8050 gram");
const accountOpen = ref(false);
const multipleOpen = ref(false);
const multipleLabel = computed(() => {
  const selected = [];
  if (optionA.value) selected.push("Option A");
  if (optionB.value) selected.push("Option B");
  if (optionC.value) selected.push("Option C");
  if (optionD.value) selected.push("Option D");
  return selected.length > 0 ? selected.join(", ") : "";
});

function selectProvince(province: string) {
  selectedProvince.value = province;
  blankOpen.value = false;
  filledOpen.value = false;
}
</script>

<template>
  <ShadowPreview class="gwind-docs-preview">
    <div class="grid w-full gap-6 rounded-3xl bg-black-100 p-6">
      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Searchable list (&gt; 10 items)
        </div>
        <Dropdown
          v-model:open="blankOpen"
          label="Provinsi"
          :model-label="selectedProvince"
          placeholder="Pilih provinsi"
          trigger-class="max-w-md"
        >
          <DropdownList>
            <DropdownListItem
              v-for="province in provinces"
              :key="`search-${province}`"
              :label="province"
              :selected="selectedProvince === province"
              @select="selectProvince(province)"
            >
              {{ province }}
            </DropdownListItem>
          </DropdownList>
        </Dropdown>
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Filled (selected value)
        </div>
        <Dropdown
          v-model:open="filledOpen"
          label="Provinsi Tujuan"
          :model-label="selectedProvince || 'Bali'"
          placeholder="Pilih provinsi"
          trigger-class="max-w-md"
        >
          <DropdownList>
            <DropdownListItem
              v-for="province in provinces"
              :key="`filled-${province}`"
              :selected="(selectedProvince || 'Bali') === province"
              @select="selectProvince(province)"
            >
              {{ province }}
            </DropdownListItem>
          </DropdownList>
        </Dropdown>
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Open (click trigger to toggle list)
        </div>
        <Dropdown
          default-open
          label="Domisili"
          model-label="Bali"
          placeholder="Pilih provinsi"
          trigger-class="max-w-md"
        >
          <DropdownList>
            <DropdownListItem v-for="province in provinces" :key="`open-${province}`">
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
          Interactive Dropdown (With Icon & Caption)
        </div>
        <Dropdown
          v-model:open="accountOpen"
          label="Rekening Sumber"
          :model-label="selectedAccount"
          placeholder="Pilih rekening"
          trigger-class="max-w-md"
        >
          <DropdownList>
            <DropdownListItem
              v-for="(account, index) in accounts"
              :key="index"
              :label="account.title"
              :caption="account.caption"
              :selected="selectedAccount === account.title"
              @select="selectedAccount = account.title; accountOpen = false"
            >
              <template #icon>
                <Landmark class="h-6 w-6" />
              </template>
            </DropdownListItem>
          </DropdownList>
        </Dropdown>
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Single Options + With Icon (Preview List)
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
            :key="`selected-${province}`"
            :selected="province === 'Bali'"
          >
            {{ province }}
          </DropdownListItem>
        </DropdownList>
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Interactive Dropdown (Multiple Options / Checkbox)
        </div>
        <Dropdown
          v-model:open="multipleOpen"
          label="Pilihan Paket Tambahan"
          :model-label="multipleLabel"
          placeholder="Pilih opsi"
          trigger-class="max-w-md"
        >
          <DropdownList variant="multiple">
            <DropdownListCheckboxItem v-model="optionA">
              Option A
            </DropdownListCheckboxItem>
            <DropdownListCheckboxItem v-model="optionB">
              Option B
            </DropdownListCheckboxItem>
            <DropdownListCheckboxItem v-model="optionC">
              Option C
            </DropdownListCheckboxItem>
            <DropdownListCheckboxItem v-model="optionD">
              Option D
            </DropdownListCheckboxItem>
          </DropdownList>
        </Dropdown>
      </div>

      <div class="grid gap-3">
        <div class="text-sigma font-semibold leading-6 text-black-800">
          Multiple Options + Selected (Preview List)
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
