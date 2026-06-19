<script setup lang="ts">
import { ref, computed, watch } from "vue";
import {
  DataTable,
  type DataTableColumn,
  type DataTableRow,
} from "../../../../packages/ui/src/components/ui/table";
import Input from "../../../../packages/ui/src/components/ui/input/Input.vue";
import { Pagination } from "../../../../packages/ui/src/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../packages/ui/src/components/ui/select";

const columns: DataTableColumn[] = [
  { key: "id", label: "ID", width: "56px" },
  { key: "gol", label: "Gol", width: "64px" },
  { key: "uangPinjaman", label: "Uang Pinjaman", width: "300px" },
  { key: "sewaModal", label: "Sewa Modal", align: "right", width: "122px" },
  {
    key: "administrasi",
    label: "Administrasi",
    align: "right",
    width: "120px",
  },
];

const rows: DataTableRow[] = Array.from({ length: 120 }).map((_, i) => {
  const gid = i % 4 === 0 ? "A" : i % 4 === 1 ? "B" : i % 4 === 2 ? "C" : "D";
  return {
    id: i + 1,
    gol: gid,
    uangPinjaman: `Rp ${((i + 1) * 100000).toLocaleString()}`,
    sewaModal: `${(1 + (i % 3) * 0.1).toFixed(1)}%`,
    administrasi: `Rp ${(2000 + i * 50).toLocaleString()}`,
  };
});

const search = ref("");
const filterGol = ref("all");
const page = ref(11);
const pageSize = ref("10");

const golOptions = computed(() =>
  Array.from(new Set(rows.map((r) => String(r.gol)))),
);
const pageSizeNumber = computed(() => Number(pageSize.value));
const selectedGol = computed(() =>
  filterGol.value === "all" ? "" : filterGol.value,
);

const normalized = (v: any) => String(v ?? "").toLowerCase();

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase();
  return rows.filter((r) => {
    if (selectedGol.value && String(r.gol) !== selectedGol.value) return false;
    if (!q) return true;
    // basic full-row search across visible fields
    return Object.values(r).some((val) => normalized(val).includes(q));
  });
});

const total = computed(() => filtered.value.length);
const pageCount = computed(() =>
  Math.max(1, Math.ceil(total.value / pageSizeNumber.value)),
);
const firstRow = computed(() =>
  total.value === 0 ? 0 : (page.value - 1) * pageSizeNumber.value + 1,
);
const lastRow = computed(() =>
  Math.min(page.value * pageSizeNumber.value, total.value),
);

watch([search, filterGol, pageSize], () => {
  page.value = 1;
});
watch(page, (value) => {
  if (value < 1) page.value = 1;
  if (value > pageCount.value) page.value = pageCount.value;
});

const paginated = computed(() => {
  const start = (page.value - 1) * pageSizeNumber.value;
  return filtered.value.slice(start, start + pageSizeNumber.value);
});
</script>

<template>
  <ShadowPreview>
    <div class="grid w-full min-w-0 gap-4">
      <div
        class="flex min-w-0 flex-col gap-3 md:flex-row md:items-center md:justify-between"
      >
        <div class="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center">
          <Input
            v-model="search"
            placeholder="Search..."
            class="h-10 w-full sm:w-[240px]"
          />

          <Select v-model="filterGol">
            <SelectTrigger class="h-10 w-full sm:w-[180px]">
              <SelectValue placeholder="Semua Golongan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Golongan</SelectItem>
              <SelectItem v-for="g in golOptions" :key="g" :value="g">
                Gol {{ g }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div class="flex shrink-0 items-center gap-2 self-start md:self-auto">
          <label class="text-sm text-black-500">Rows</label>
          <Select v-model="pageSize">
            <SelectTrigger class="h-8 w-[72px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div class="min-w-0 overflow-hidden rounded-md bg-white p-4">
        <DataTable
          :columns="columns"
          :rows="paginated"
          wrapper-class="max-w-full"
        />

        <div
          class="mt-3 flex flex-col gap-3 text-sm text-black-600 sm:flex-row sm:items-center sm:justify-between"
        >
          <div class="shrink-0">
            Menampilkan <strong>{{ firstRow }}</strong> -
            <strong>{{ lastRow }}</strong> dari <strong>{{ total }}</strong>
          </div>
          <Pagination
            v-model="page"
            :total-pages="pageCount"
            class="w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  </ShadowPreview>
</template>
