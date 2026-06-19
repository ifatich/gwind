<script setup lang="ts">
import { computed, ref } from "vue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbEllipsis,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  CheckboxField,
  CheckboxGroup,
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  DataTable,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  Divider,
  Dropdown,
  DropdownList,
  DropdownListCheckboxItem,
  DropdownListItem,
  Input,
  InputField,
  InputRupiah,
  Label,
  Link,
  Pagination,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupField,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Spinner,
  Switch,
  TabContent,
  TabGroup,
  TabTrigger,
  TabTriggerGroup,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Toast,
} from "@gwind/ui";
import {
  AlertCircle,
  Check,
  ChevronDown,
  CircleHelp,
  Home,
  Landmark,
  Mail,
  PackageCheck,
  Palette,
  Search,
  Settings,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-vue-next";

const activeSection = ref("inventory");
const isDialogOpen = ref(false);
const selectedFramework = ref("");
const progressValue = ref(64);
const paginationPage = ref(5);
const dropdownOptionA = ref(true);
const dropdownOptionB = ref(false);
const compactMode = ref(false);
const rupiahValue = ref<number | null>(1000000);
const switchValue = ref(true);
const checkboxPrimitiveChecked = ref(true);
const checkboxPrimitiveIndeterminate = ref<boolean | "indeterminate">(
  "indeterminate",
);
const checkboxWebsiteInactive = ref(false);
const checkboxWebsiteActive = ref(true);
const checkboxWebsiteCaption = ref(false);
const checkboxWebsiteError = ref(false);
const checkboxMobileInactive = ref(false);
const checkboxMobileActive = ref(true);
const checkboxMobileCaption = ref(false);
const checkboxGroupA = ref(true);
const checkboxGroupB = ref(false);
const checkboxGroupC = ref(true);
const checkboxGroupD = ref(false);
const radioPrimitive = ref("on");
const radioWebsite = ref("website-active");
const radioMobile = ref("mobile-active");
const radioHorizontal = ref("horizontal-a");
const radioVertical = ref("vertical-a");
const tableColumns = [
  { key: "gol", label: "Gol", width: "40px" },
  { key: "uangPinjaman", label: "Uang Pinjaman", width: "238px" },
  {
    key: "sewaModal",
    label: "Sewa Modal",
    subLabel: "/15 Hari",
    align: "right" as const,
    width: "122px",
  },
  { key: "premi", label: "Premi", width: "88px" },
  {
    key: "administrasi",
    label: "Administrasi",
    align: "right" as const,
    width: "104px",
  },
];
const tableRows = [
  {
    id: 1,
    gol: "A",
    uangPinjaman: "Rp 50.000 - Rp 500.000",
    sewaModal: "1%",
    premi: "-",
    administrasi: "Rp 2.000",
  },
  {
    id: 2,
    gol: "B",
    uangPinjaman: "> Rp 500.000 - Rp 1.000.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 10.000",
  },
  {
    id: 3,
    gol: "B",
    uangPinjaman: "> Rp 1.000.000 - Rp 2.500.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 20.000",
  },
  {
    id: 4,
    gol: "B",
    uangPinjaman: "> Rp 2.500.000 - Rp 5.000.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 35.000",
  },
  {
    id: 5,
    gol: "C",
    uangPinjaman: "> Rp 5.000.000 - Rp 10.000.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 50.000",
  },
  {
    id: 6,
    gol: "C",
    uangPinjaman: "> Rp 10.000.000 - Rp 15.000.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 75.000",
  },
  {
    id: 7,
    gol: "C",
    uangPinjaman: "> Rp 15.000.000 - Rp 20.000.000",
    sewaModal: "1,2%",
    premi: "Rp 1.000",
    administrasi: "Rp 100.000",
  },
  {
    id: 8,
    gol: "D",
    uangPinjaman: "> Rp 20.000.000",
    sewaModal: "1,1%",
    premi: "Rp 1.000 - Rp 1.500",
    administrasi: "Rp 125.000",
  },
];

const sections = [
  { id: "inventory", label: "Inventory" },
  { id: "button", label: "Button" },
  { id: "avatar", label: "Avatar" },
  { id: "input", label: "Input" },
  { id: "label", label: "Label" },
  { id: "textarea", label: "Textarea" },
  { id: "checkbox", label: "Checkbox" },
  { id: "radio-group", label: "Radio Group" },
  { id: "select", label: "Select" },
  { id: "combobox", label: "Combobox" },
  { id: "dialog", label: "Dialog" },
  { id: "dropdown", label: "Dropdown" },
  { id: "popover", label: "Popover" },
  { id: "tooltip", label: "Tooltip" },
  { id: "breadcrumb", label: "Breadcrumb" },
  { id: "tabs", label: "Tabs" },
  { id: "alert", label: "Alert" },
  { id: "progress", label: "Progress" },
  { id: "switch", label: "Switch" },
  { id: "table", label: "Table" },
  { id: "card", label: "Card" },
  { id: "divider", label: "Divider" },
  { id: "spinner", label: "Spinner" },
  { id: "link", label: "Link" },
  { id: "pagination", label: "Pagination" },
  { id: "toast", label: "Toast" },
  { id: "accordion", label: "Accordion" },
  { id: "badge", label: "Badge" },
  { id: "tokens", label: "Tokens" },
];

const componentInventory = [
  {
    group: "Accordion",
    items: [
      "Accordion",
      "AccordionContent",
      "AccordionItem",
      "AccordionTrigger",
    ],
  },
  {
    group: "Alert",
    items: ["Alert", "AlertDescription", "AlertTitle"],
  },
  {
    group: "Badge",
    items: ["Badge"],
  },
  {
    group: "Avatar",
    items: ["Avatar"],
  },
  {
    group: "Breadcrumb",
    items: [
      "Breadcrumb",
      "BreadcrumbEllipsis",
      "BreadcrumbItem",
      "BreadcrumbLink",
      "BreadcrumbList",
      "BreadcrumbPage",
      "BreadcrumbSeparator",
    ],
  },
  {
    group: "Button",
    items: ["Button"],
  },
  {
    group: "Card",
    items: [
      "Card",
      "CardContent",
      "CardDescription",
      "CardFooter",
      "CardHeader",
      "CardTitle",
    ],
  },
  {
    group: "Checkbox",
    items: ["Checkbox", "CheckboxField", "CheckboxGroup"],
  },
  {
    group: "Combobox",
    items: [
      "Combobox",
      "ComboboxAnchor",
      "ComboboxEmpty",
      "ComboboxGroup",
      "ComboboxInput",
      "ComboboxItem",
      "ComboboxItemIndicator",
      "ComboboxList",
      "ComboboxSeparator",
      "ComboboxTrigger",
    ],
  },
  {
    group: "Dialog",
    items: [
      "Dialog",
      "DialogClose",
      "DialogContent",
      "DialogDescription",
      "DialogFooter",
      "DialogHeader",
      "DialogOverlay",
      "DialogTitle",
      "DialogTrigger",
    ],
  },
  {
    group: "Divider",
    items: ["Divider"],
  },
  {
    group: "Dropdown",
    items: [
      "Dropdown",
      "DropdownList",
      "DropdownListCheckboxItem",
      "DropdownListItem",
    ],
  },
  {
    group: "Input",
    items: ["Input", "InputField", "InputRupiah"],
  },
  {
    group: "Label",
    items: ["Label"],
  },
  {
    group: "Link",
    items: ["Link"],
  },
  {
    group: "Pagination",
    items: ["Pagination"],
  },
  {
    group: "Popover",
    items: ["Popover", "PopoverAnchor", "PopoverContent", "PopoverTrigger"],
  },
  {
    group: "Progress",
    items: ["Progress"],
  },
  {
    group: "Radio Group",
    items: ["RadioGroup", "RadioGroupField", "RadioGroupItem"],
  },
  {
    group: "Select",
    items: [
      "Select",
      "SelectContent",
      "SelectGroup",
      "SelectItem",
      "SelectItemText",
      "SelectLabel",
      "SelectScrollDownButton",
      "SelectScrollUpButton",
      "SelectSeparator",
      "SelectTrigger",
      "SelectValue",
    ],
  },
  {
    group: "Spinner",
    items: ["Spinner"],
  },
  {
    group: "Switch",
    items: ["Switch"],
  },
  {
    group: "Table",
    items: [
      "DataTable",
      "Table",
      "TableBody",
      "TableCaption",
      "TableCell",
      "TableHead",
      "TableHeader",
      "TableRow",
    ],
  },
  {
    group: "Tabs",
    items: ["TabContent", "TabGroup", "TabTrigger", "TabTriggerGroup"],
  },
  {
    group: "Textarea",
    items: ["Textarea"],
  },
  {
    group: "Tooltip",
    items: ["Tooltip", "TooltipContent", "TooltipProvider", "TooltipTrigger"],
  },
  {
    group: "Toast",
    items: ["Toast"],
  },
];

const componentInventoryCount = componentInventory.reduce(
  (total, group) => total + group.items.length,
  0,
);

const colorPalettes = [
  {
    name: "broccoli",
    steps: ["100", "200", "400", "500", "600", "800", "900"],
  },
  { name: "lime", steps: ["100", "200", "400", "500", "600", "800", "900"] },
  { name: "pear", steps: ["100", "200", "400", "500", "600", "800", "900"] },
  { name: "kiwi", steps: ["100", "200", "400", "500", "600", "800", "900"] },
  { name: "red", steps: ["100", "200", "400", "500", "600", "800", "900"] },
  { name: "orange", steps: ["100", "200", "400", "500", "600", "800", "900"] },
  { name: "yellow", steps: ["100", "200", "400", "500", "600", "800", "900"] },
  { name: "gold", steps: ["100", "200", "400", "500", "600", "800", "900"] },
  {
    name: "turquoise",
    steps: ["100", "200", "400", "500", "600", "800", "900"],
  },
  { name: "blue", steps: ["100", "200", "400", "500", "600", "800", "900"] },
  { name: "purple", steps: ["100", "200", "400", "500", "600", "800", "900"] },
  { name: "black", steps: ["100", "200", "400", "500", "600", "800"] },
];

const semanticTokens = [
  "background",
  "foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "success",
  "success-foreground",
  "warning",
  "warning-foreground",
  "border",
  "input",
  "ring",
  "popover",
  "popover-foreground",
  "card",
  "card-foreground",
];

const spacingTokens = [
  { name: "gw-2", value: "0.125rem", width: "w-gw-2" },
  { name: "gw-4", value: "0.25rem", width: "w-gw-4" },
  { name: "gw-8", value: "0.5rem", width: "w-gw-8" },
  { name: "gw-16", value: "1rem", width: "w-gw-16" },
  { name: "gw-24", value: "1.5rem", width: "w-gw-24" },
  { name: "gw-32", value: "2rem", width: "w-gw-32" },
  { name: "gw-40", value: "2.5rem", width: "w-gw-40" },
  { name: "gw-48", value: "3rem", width: "w-gw-48" },
  { name: "gw-64", value: "4rem", width: "w-gw-64" },
  { name: "gw-80", value: "5rem", width: "w-gw-80" },
  { name: "gw-120", value: "7.5rem", width: "w-gw-120" },
];

const radiusTokens = [
  {
    name: "sm",
    className: "rounded-sm",
    value: "calc(var(--radius) - 0.25rem)",
  },
  {
    name: "md",
    className: "rounded-md",
    value: "calc(var(--radius) - 0.125rem)",
  },
  { name: "lg", className: "rounded-lg", value: "var(--radius)" },
];

const typographyTokens = [
  { name: "omega", className: "text-omega", value: "12px" },
  { name: "sigma", className: "text-sigma", value: "14px" },
  { name: "omicron", className: "text-omicron", value: "16px" },
];

const frameworks = ["Next.js", "Nuxt", "Astro", "Remix", "Vue"];

const shellClass = computed(() =>
  compactMode.value ? "text-sigma" : "text-omicron",
);
</script>

<template>
  <TooltipProvider>
    <div class="playground-shell" :class="shellClass">
      <header class="playground-header">
        <div
          class="playground-container flex h-16 items-center justify-between gap-4"
        >
          <div class="flex min-w-0 items-center gap-3">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground"
            >
              <PackageCheck class="h-5 w-5" />
            </div>
            <div class="min-w-0">
              <h1 class="text-omicron font-bold text-black-800">
                Gwind Playground
              </h1>
              <p class="text-sigma text-black-500">
                Local component styling surface
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              :class="compactMode ? 'border-primary text-primary' : ''"
              @click="compactMode = !compactMode"
            >
              <SlidersHorizontal class="h-4 w-4" />
              Compact
            </Button>
            <Button size="sm">
              <Sparkles class="h-4 w-4" />
              Primary
            </Button>
          </div>
        </div>
      </header>

      <main class="playground-container py-6">
        <div class="playground-grid">
          <aside class="playground-sidebar">
            <nav class="playground-panel p-2">
              <a
                v-for="section in sections"
                :key="section.id"
                :href="`#${section.id}`"
                class="flex rounded-md px-3 py-2 text-sigma font-bold text-black-600 transition hover:bg-lime-100 hover:text-lime-600"
                :class="
                  activeSection === section.id
                    ? 'bg-lime-100 text-lime-600'
                    : ''
                "
                @click="activeSection = section.id"
              >
                {{ section.label }}
              </a>
            </nav>
          </aside>

          <div class="space-y-6">
            <section
              id="inventory"
              class="playground-section playground-panel p-5"
            >
              <div
                class="mb-5 flex flex-wrap items-center justify-between gap-3"
              >
                <div>
                  <h2 class="text-omicron font-bold text-black-800">
                    Component Inventory
                  </h2>
                  <p class="text-sigma text-black-500">
                    All Vue component files from
                    <code>packages/ui/src/components/ui</code> are represented
                    below and used in the playground examples.
                  </p>
                </div>
                <Badge variant="brocoli"
                  >{{ componentInventoryCount }} components</Badge
                >
              </div>

              <div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                <div
                  v-for="group in componentInventory"
                  :key="group.group"
                  class="rounded-md border border-black-200 bg-white p-4"
                >
                  <div class="mb-3 flex items-center justify-between gap-3">
                    <h3 class="text-sigma font-bold text-black-800">
                      {{ group.group }}
                    </h3>
                    <span class="text-omega font-bold text-black-500">{{
                      group.items.length
                    }}</span>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <Badge
                      v-for="item in group.items"
                      :key="item"
                      variant="outline"
                      class="border border-black-200 bg-black-100 text-black-600"
                    >
                      {{ item }}
                    </Badge>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="button"
              class="playground-section playground-panel p-5"
            >
              <div class="mb-5 flex items-center justify-between">
                <div>
                  <h2 class="text-omicron font-bold text-black-800">Button</h2>
                  <p class="text-sigma text-black-500">
                    Variants, sizes, icon alignment, disabled state.
                  </p>
                </div>
                <Badge>Action</Badge>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="neutral">Neutral</Button>
              </div>

              <div class="mt-5 flex flex-wrap items-center gap-3">
                <Button>Enabled</Button>
                <Button class="bg-lime-600">Hover</Button>
                <Button class="bg-lime-800">Focused</Button>
                <Button disabled>Disabled</Button>
                <Button loading loading-label="Loading button">Loading</Button>
                <Button class="active:bg-lime-800">Pressed</Button>
              </div>

              <div class="mt-5 flex flex-wrap items-center gap-3">
                <Button><Mail class="h-4 w-4" />Icon Left</Button>
                <Button>Icon Right <Mail class="h-4 w-4" /></Button>
                <Button>Default</Button>
                <Button variant="icon" size="icon"
                  ><Search class="h-6 w-6"
                /></Button>
              </div>

              <div class="mt-5 flex flex-wrap items-center gap-3">
                <Button size="xl"
                  >Extra Large <Settings class="h-6 w-6"
                /></Button>
                <Button size="lg">Large <Settings class="h-6 w-6" /></Button>
                <Button size="md">Medium <Settings class="h-5 w-5" /></Button>
                <Button size="sm">Small <Settings class="h-4 w-4" /></Button>
              </div>

              <div class="mt-5 grid gap-3 md:grid-cols-2">
                <Button class="w-full">Large Full Width</Button>
                <Button size="xl" class="w-full">Extra Large Full Width</Button>
              </div>
            </section>

            <section
              id="avatar"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">Avatar</h2>
              <p class="mb-5 text-sigma text-black-500">
                Image avatar with initials fallback.
              </p>

              <div class="flex flex-wrap items-center gap-4">
                <Avatar
                  src="https://i.pravatar.cc/96?img=12"
                  alt="Gwind User"
                />
                <Avatar alt="Pegadaian Design" />
                <Avatar fallback="UI" size="lg" />
              </div>
            </section>

            <section id="input" class="playground-section playground-panel p-5">
              <h2 class="mb-1 text-omicron font-bold text-black-800">Input</h2>
              <p class="mb-5 text-sigma text-black-500">
                Figma Input Field states with label, caption, icon, and action
                compositions.
              </p>

              <div class="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Short</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-short"
                      label="Title"
                      placeholder="Placeholder"
                    >
                      <template #label-icon>
                        <CircleHelp class="h-[18px] w-[18px] text-black-500" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Long</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-long"
                      field-size="long"
                      label="Title"
                      placeholder="Placeholder"
                    >
                      <template #label-icon>
                        <CircleHelp class="h-[18px] w-[18px] text-black-500" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Placeholder</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-placeholder"
                      label="Title"
                      placeholder="Placeholder"
                    >
                      <template #label-icon>
                        <CircleHelp class="h-[18px] w-[18px] text-black-500" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hover</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-hover"
                      label="Title"
                      input-class="border-lime-600"
                      placeholder="Hover"
                    >
                      <template #label-icon>
                        <CircleHelp class="h-[18px] w-[18px] text-black-500" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Filled</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-filled"
                      label="Title"
                      value="Text input"
                    >
                      <template #label-icon>
                        <CircleHelp class="h-[18px] w-[18px] text-black-500" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Disabled</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-disabled"
                      label="Title"
                      disabled
                      value="Disabled input"
                    >
                      <template #label-icon>
                        <CircleHelp class="h-[18px] w-[18px] text-black-600" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Error</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-error"
                      label="Title"
                      error="This is an error message."
                      placeholder="Placeholder"
                    >
                      <template #label-icon>
                        <CircleHelp class="h-[18px] w-[18px] text-black-500" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Icon Left</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-icon-left"
                      label="Title"
                      placeholder="Placeholder"
                    >
                      <template #left-icon>
                        <Mail class="h-6 w-6" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Icon Right</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-icon-right"
                      label="Title"
                      placeholder="Placeholder"
                    >
                      <template #right-icon>
                        <Search class="h-6 w-6" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Icon Left Right</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-icon-both"
                      label="Title"
                      placeholder="Placeholder"
                    >
                      <template #left-icon>
                        <Mail class="h-6 w-6" />
                      </template>
                      <template #right-icon>
                        <X class="h-6 w-6" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Action</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-action"
                      label="Title"
                      placeholder="Placeholder"
                    >
                      <template #action>
                        <button type="button">Action</button>
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Icon Action</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-icon-action"
                      label="Title"
                      placeholder="Placeholder"
                    >
                      <template #left-icon>
                        <Mail class="h-6 w-6" />
                      </template>
                      <template #action>
                        <button type="button">Action</button>
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prefix</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-prefix"
                      prefix="Rupiah"
                      placeholder="Placeholder"
                    >
                      <template #right-icon>
                        <X class="h-6 w-6" />
                      </template>
                    </InputField>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Rupiah</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputRupiah
                      id="input-rupiah"
                      v-model="rupiahValue"
                      label="Title"
                      placeholder="Placeholder"
                    >
                      <template #right-icon>
                        <X class="h-6 w-6" />
                      </template>
                    </InputRupiah>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Suffix</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InputField
                      id="input-suffix"
                      suffix="%"
                      placeholder="Placeholder"
                    />
                  </CardContent>
                </Card>

                <Card class="md:col-span-2">
                  <CardHeader>
                    <CardTitle>File Upload</CardTitle>
                  </CardHeader>
                  <CardContent class="space-y-1">
                    <Label for="input-file">File Upload</Label>
                    <Input id="input-file" type="file" />
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="label" class="playground-section playground-panel p-5">
              <h2 class="mb-1 text-omicron font-bold text-black-800">Label</h2>
              <p class="mb-5 text-sigma text-black-500">
                Form label alignment and disabled pairing.
              </p>

              <div class="grid gap-4 md:grid-cols-2">
                <div class="space-y-2">
                  <Label for="labeled-email">Email</Label>
                  <Input id="labeled-email" placeholder="name@company.com" />
                </div>
                <div class="space-y-2">
                  <Label for="labeled-disabled">Disabled label</Label>
                  <Input
                    id="labeled-disabled"
                    disabled
                    value="disabled input"
                  />
                </div>
              </div>
            </section>

            <section
              id="textarea"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Textarea
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Multi-line entry surface.
              </p>

              <Textarea id="message" placeholder="Write a short message..." />
            </section>

            <section
              id="checkbox"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Checkbox
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Primitive control and Figma-aligned field composition.
              </p>

              <div class="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Primitive</CardTitle>
                  </CardHeader>
                  <CardContent class="flex flex-wrap items-center gap-3">
                    <Checkbox id="checkbox-unchecked" />
                    <Checkbox
                      id="checkbox-checked"
                      v-model="checkboxPrimitiveChecked"
                    />
                    <Checkbox
                      id="checkbox-indeterminate"
                      v-model="checkboxPrimitiveIndeterminate"
                    />
                    <Checkbox id="checkbox-disabled" disabled />
                    <Checkbox
                      id="checkbox-disabled-checked"
                      disabled
                      :model-value="true"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Website</CardTitle>
                  </CardHeader>
                  <CardContent class="grid gap-3">
                    <CheckboxField
                      id="checkbox-field-inactive"
                      v-model="checkboxWebsiteInactive"
                      label="This is an option"
                    />
                    <CheckboxField
                      id="checkbox-field-active"
                      v-model="checkboxWebsiteActive"
                      label="This is an option"
                    />
                    <CheckboxField
                      id="checkbox-field-caption"
                      v-model="checkboxWebsiteCaption"
                      label="This is an option"
                      caption="This is a subtitle text."
                    />
                    <CheckboxField
                      id="checkbox-field-error"
                      v-model="checkboxWebsiteError"
                      label="This is an option"
                      error="This is an error message."
                    />
                    <CheckboxField
                      id="checkbox-field-disabled"
                      label="This is an option"
                      disabled
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Apps</CardTitle>
                  </CardHeader>
                  <CardContent class="grid gap-3">
                    <CheckboxField
                      id="checkbox-mobile-inactive"
                      v-model="checkboxMobileInactive"
                      style-mode="mobile-apps"
                      label="This is an option"
                    />
                    <CheckboxField
                      id="checkbox-mobile-active"
                      v-model="checkboxMobileActive"
                      style-mode="mobile-apps"
                      label="This is an option"
                    />
                    <CheckboxField
                      id="checkbox-mobile-caption"
                      v-model="checkboxMobileCaption"
                      style-mode="mobile-apps"
                      label="This is an option"
                      caption="This is a subtitle text."
                    />
                    <CheckboxField
                      id="checkbox-mobile-disabled"
                      style-mode="mobile-apps"
                      label="This is an option"
                      disabled
                    />
                  </CardContent>
                </Card>

                <Card class="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Group</CardTitle>
                  </CardHeader>
                  <CardContent class="grid gap-5">
                    <CheckboxGroup
                      title="Title"
                      alignment="horizontal"
                      error="This is an error message."
                    >
                      <CheckboxField
                        id="checkbox-group-a"
                        v-model="checkboxGroupA"
                        label="This is an option"
                      />
                      <CheckboxField
                        id="checkbox-group-b"
                        v-model="checkboxGroupB"
                        label="This is an option"
                      />
                    </CheckboxGroup>
                    <CheckboxGroup
                      title="Title"
                      alignment="vertical"
                      caption="This is a helper text."
                    >
                      <CheckboxField
                        id="checkbox-group-c"
                        v-model="checkboxGroupC"
                        label="This is an option"
                        caption="This is a subtitle text."
                      />
                      <CheckboxField
                        id="checkbox-group-d"
                        v-model="checkboxGroupD"
                        label="This is an option"
                        caption="This is a subtitle text."
                      />
                    </CheckboxGroup>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section
              id="radio-group"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Radio Group
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Primitive control and Figma-aligned field composition.
              </p>

              <div class="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Primitive</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      v-model="radioPrimitive"
                      class="flex flex-wrap items-center gap-3"
                    >
                      <RadioGroupItem id="radio-primitive-off" value="off" />
                      <RadioGroupItem id="radio-primitive-on" value="on" />
                      <RadioGroupItem
                        id="radio-primitive-disabled"
                        value="disabled"
                        disabled
                      />
                      <RadioGroupItem
                        id="radio-primitive-disabled-on"
                        value="disabled-on"
                        disabled
                      />
                    </RadioGroup>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Website</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup v-model="radioWebsite" class="grid gap-3">
                      <RadioGroupField
                        id="radio-website-inactive"
                        value="website-inactive"
                        label="This is an option"
                      />
                      <RadioGroupField
                        id="radio-website-active"
                        value="website-active"
                        label="This is an option"
                      />
                      <RadioGroupField
                        id="radio-website-caption"
                        value="website-caption"
                        label="This is an option"
                        caption="This is a subtitle text."
                      />
                      <RadioGroupField
                        id="radio-website-error"
                        value="website-error"
                        label="This is an option"
                        error="This is an error message."
                      />
                      <RadioGroupField
                        id="radio-website-disabled"
                        value="website-disabled"
                        label="This is an option"
                        disabled
                      />
                    </RadioGroup>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Apps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup v-model="radioMobile" class="grid gap-3">
                      <RadioGroupField
                        id="radio-mobile-inactive"
                        value="mobile-inactive"
                        style-mode="mobile-apps"
                        label="This is an option"
                      />
                      <RadioGroupField
                        id="radio-mobile-active"
                        value="mobile-active"
                        style-mode="mobile-apps"
                        label="This is an option"
                      />
                      <RadioGroupField
                        id="radio-mobile-caption"
                        value="mobile-caption"
                        style-mode="mobile-apps"
                        label="This is an option"
                        caption="This is a subtitle text."
                      />
                      <RadioGroupField
                        id="radio-mobile-disabled"
                        value="mobile-disabled"
                        style-mode="mobile-apps"
                        label="This is an option"
                        disabled
                      />
                    </RadioGroup>
                  </CardContent>
                </Card>

                <Card class="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Group</CardTitle>
                  </CardHeader>
                  <CardContent class="grid gap-5">
                    <RadioGroup
                      v-model="radioHorizontal"
                      title="Title"
                      subtitle="This is a subtitle text."
                      alignment="horizontal"
                      error="This is an error message."
                    >
                      <RadioGroupField
                        id="radio-horizontal-a"
                        value="horizontal-a"
                        label="This is an option"
                      />
                      <RadioGroupField
                        id="radio-horizontal-b"
                        value="horizontal-b"
                        label="This is an option"
                      />
                    </RadioGroup>

                    <RadioGroup
                      v-model="radioVertical"
                      title="Title"
                      subtitle="This is a subtitle text."
                      alignment="vertical"
                      caption="This is a helper text."
                    >
                      <RadioGroupField
                        id="radio-vertical-a"
                        value="vertical-a"
                        label="This is an option"
                        caption="This is a subtitle text."
                      />
                      <RadioGroupField
                        id="radio-vertical-b"
                        value="vertical-b"
                        label="This is an option"
                        caption="This is a subtitle text."
                      />
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section
              id="select"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">Select</h2>
              <p class="mb-5 text-sigma text-black-500">
                Trigger, value, content, groups, labels, items, separators, and
                scroll buttons.
              </p>

              <Select>
                <SelectTrigger class="w-full max-w-sm">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">
                      <SelectItemText>Banana</SelectItemText>
                    </SelectItem>
                    <SelectItem value="grape">Grape</SelectItem>
                    <SelectSeparator />
                    <SelectScrollUpButton />
                    <SelectScrollDownButton />
                  </SelectGroup>
                </SelectContent>
              </Select>
            </section>

            <section
              id="combobox"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Combobox
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Searchable selection with anchor, trigger, input, item
                indicator, empty state, group, list, and separator.
              </p>

              <Combobox v-model="selectedFramework">
                <ComboboxAnchor as-child>
                  <ComboboxTrigger as-child>
                    <Button
                      variant="outline"
                      role="combobox"
                      class="w-full max-w-sm justify-between"
                    >
                      {{ selectedFramework || "Select framework..." }}
                      <ChevronDown class="h-4 w-4 opacity-50" />
                    </Button>
                  </ComboboxTrigger>
                </ComboboxAnchor>
                <ComboboxList>
                  <ComboboxInput placeholder="Search framework..." />
                  <ComboboxEmpty>No framework found.</ComboboxEmpty>
                  <ComboboxGroup>
                    <ComboboxItem
                      v-for="framework in frameworks"
                      :key="framework"
                      :value="framework"
                    >
                      <ComboboxItemIndicator>
                        <Check class="mr-2 h-4 w-4" />
                      </ComboboxItemIndicator>
                      {{ framework }}
                    </ComboboxItem>
                  </ComboboxGroup>
                  <ComboboxSeparator />
                </ComboboxList>
              </Combobox>
            </section>

            <section
              id="dialog"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">Dialog</h2>
              <p class="mb-5 text-sigma text-black-500">
                Modal root, trigger, overlay, content, header, title,
                description, footer, and close.
              </p>

              <Dialog v-model:open="isDialogOpen">
                <DialogTrigger as-child>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogOverlay class="hidden" />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Review component style</DialogTitle>
                    <DialogDescription>
                      Dialog surfaces should be visually independent from the
                      page behind it.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose as-child>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button @click="isDialogOpen = false">Save</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </section>

            <section
              id="popover"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Popover
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Anchor, trigger, portal content, shadow, radius, and spacing.
              </p>

              <Popover>
                <PopoverAnchor as-child>
                  <span
                    class="mr-3 inline-flex h-10 items-center rounded-md bg-lime-100 px-3 text-sigma font-bold text-lime-600"
                  >
                    Anchor
                  </span>
                </PopoverAnchor>
                <PopoverTrigger as-child>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent class="w-72">
                  <div class="space-y-2">
                    <h3 class="text-omicron font-bold text-black-800">
                      Popover content
                    </h3>
                    <p class="text-sigma text-black-500">
                      Check shadow, radius, padding, and text color here.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </section>

            <section
              id="dropdown"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Dropdown
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Single option, selected row, icon row, and multiple checkbox
                rows.
              </p>

              <div class="grid gap-4 lg:grid-cols-2">
                <Dropdown model-label="Bali" trigger-class="max-w-md">
                  <DropdownList>
                    <DropdownListItem>Aceh</DropdownListItem>
                    <DropdownListItem selected>Bali</DropdownListItem>
                    <DropdownListItem>Banten</DropdownListItem>
                  </DropdownList>
                </Dropdown>

                <DropdownList>
                  <DropdownListItem>Aceh</DropdownListItem>
                  <DropdownListItem selected>Bali</DropdownListItem>
                  <DropdownListItem>Banten</DropdownListItem>
                  <DropdownListItem>Bengkulu</DropdownListItem>
                </DropdownList>

                <DropdownList>
                  <DropdownListItem
                    label="1.805,0595 gram"
                    caption="1234 5678 9101 2345"
                    selected
                  >
                    <template #icon>
                      <Landmark class="h-6 w-6" />
                    </template>
                  </DropdownListItem>
                  <DropdownListItem
                    label="1.805,0595 gram"
                    caption="1234 5678 9101 2345"
                  >
                    <template #icon>
                      <Landmark class="h-6 w-6" />
                    </template>
                  </DropdownListItem>
                </DropdownList>

                <DropdownList variant="multiple" class="lg:col-span-2">
                  <DropdownListCheckboxItem v-model="dropdownOptionA">
                    This is an option
                  </DropdownListCheckboxItem>
                  <DropdownListCheckboxItem v-model="dropdownOptionB">
                    This is an option
                  </DropdownListCheckboxItem>
                </DropdownList>
              </div>
            </section>

            <section
              id="tooltip"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Tooltip
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Provider, trigger, and content.
              </p>

              <Tooltip>
                <TooltipTrigger as-child>
                  <Button variant="ghost"
                    ><CircleHelp class="h-4 w-4" />Tooltip</Button
                  >
                </TooltipTrigger>
                <TooltipContent>Tooltip content</TooltipContent>
              </Tooltip>
            </section>

            <section
              id="breadcrumb"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Breadcrumb
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                List, item, link, separator, ellipsis, and page state.
              </p>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#"
                      ><Home class="h-4 w-4"
                    /></BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Playground</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </section>

            <section id="tabs" class="playground-section playground-panel p-5">
              <h2 class="mb-1 text-omicron font-bold text-black-800">Tabs</h2>
              <p class="mb-5 text-sigma text-black-500">
                Native Tab* exports and Tabs* compatibility aliases.
              </p>

              <div class="space-y-5">
                <TabGroup default-value="account">
                  <TabTriggerGroup>
                    <TabTrigger value="account">Account</TabTrigger>
                    <TabTrigger value="security">Security</TabTrigger>
                    <TabTrigger value="billing">Billing</TabTrigger>
                  </TabTriggerGroup>
                  <TabContent
                    value="account"
                    class="pt-4 text-sigma text-black-600"
                  >
                    Account tab content.
                  </TabContent>
                  <TabContent
                    value="security"
                    class="pt-4 text-sigma text-black-600"
                  >
                    Security tab content.
                  </TabContent>
                  <TabContent
                    value="billing"
                    class="pt-4 text-sigma text-black-600"
                  >
                    Billing tab content.
                  </TabContent>
                </TabGroup>

                <Tabs default-value="preview">
                  <TabsList>
                    <TabsTrigger value="preview">Preview alias</TabsTrigger>
                    <TabsTrigger value="code">Code alias</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="preview"
                    class="pt-4 text-sigma text-black-600"
                  >
                    Compatibility aliases render the same tab primitives.
                  </TabsContent>
                  <TabsContent
                    value="code"
                    class="pt-4 text-sigma text-black-600"
                  >
                    This covers Tabs, TabsList, TabsTrigger, and TabsContent
                    exports.
                  </TabsContent>
                </Tabs>
              </div>
            </section>

            <section id="alert" class="playground-section playground-panel p-5">
              <h2 class="mb-1 text-omicron font-bold text-black-800">Alert</h2>
              <p class="mb-5 text-sigma text-black-500">
                Default, destructive, icon, title, description, and close
                affordance.
              </p>

              <div class="space-y-4">
                <Alert>
                  <Check class="h-4 w-4" />
                  <AlertTitle>Success state</AlertTitle>
                  <AlertDescription
                    >Use this surface to validate alert spacing and icon
                    alignment.</AlertDescription
                  >
                </Alert>
                <Alert variant="destructive" show-close>
                  <AlertCircle class="h-4 w-4" />
                  <AlertTitle>Error state</AlertTitle>
                  <AlertDescription
                    >Destructive alerts should stay legible and
                    balanced.</AlertDescription
                  >
                </Alert>
              </div>
            </section>

            <section
              id="progress"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Progress
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Progress indicator and adjustable value.
              </p>

              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <Label>Progress</Label>
                  <span class="text-sigma font-bold text-black-500"
                    >{{ progressValue }}%</span
                  >
                </div>
                <Progress :model-value="progressValue" />
                <input
                  v-model="progressValue"
                  type="range"
                  min="0"
                  max="100"
                  class="w-full accent-lime-500"
                />
              </div>
            </section>

            <section
              id="switch"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">Switch</h2>
              <p class="mb-5 text-sigma text-black-500">
                On/off and disabled states.
              </p>

              <div class="flex flex-wrap items-center gap-4">
                <Switch v-model="switchValue" />
                <Switch />
                <Switch disabled />
                <span class="text-sigma font-bold text-black-500"
                  >Value: {{ switchValue }}</span
                >
              </div>
            </section>

            <section
              id="pagination"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Pagination
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Data-driven pages with ellipsis rules from Figma.
              </p>

              <div class="grid gap-4">
                <Pagination v-model="paginationPage" :total-pages="20" />
                <div class="text-sigma font-bold text-black-500">
                  Page: {{ paginationPage }}
                </div>
              </div>
            </section>

            <section id="table" class="playground-section playground-panel p-5">
              <h2 class="mb-1 text-omicron font-bold text-black-800">Table</h2>
              <p class="mb-5 text-sigma text-black-500">
                Data-driven table with Figma aligned header, border, and striped
                rows.
              </p>

              <div class="grid gap-4">
                <DataTable :columns="tableColumns" :rows="tableRows" />
                <div class="grid max-w-[720px] gap-4 rounded-md bg-white p-4">
                  <div
                    class="text-sigma font-extrabold leading-5 text-black-800"
                  >
                    Tarif Sewa Modal dan Premi
                  </div>
                  <DataTable :columns="tableColumns" :rows="tableRows" />
                  <Alert
                    variant="destructive"
                    class="border-red-500 bg-red-500 p-3 text-white"
                  >
                    <AlertDescription
                      class="!text-omega font-semibold leading-[18px] text-white"
                    >
                      Penyaluran Produk dihentikan sementara sesuai dengan: ID
                      Nomor 42/ID/2020 Penghentian Sementara Penyaluran Produk
                      Pegadaian Kreasi Express Loan
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </section>

            <section id="card" class="playground-section playground-panel p-5">
              <h2 class="mb-1 text-omicron font-bold text-black-800">Card</h2>
              <p class="mb-5 text-sigma text-black-500">
                Header, title, description, content, and footer slots.
              </p>

              <Card class="max-w-md">
                <CardHeader>
                  <CardTitle>Default card</CardTitle>
                  <CardDescription
                    >Header, content, and footer composition.</CardDescription
                  >
                </CardHeader>
                <CardContent>
                  <p class="text-sigma text-black-500">
                    Use this to tune card padding, radius, text, and form
                    nesting.
                  </p>
                </CardContent>
                <CardFooter class="justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            </section>

            <section
              id="divider"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Divider
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Horizontal and vertical separators.
              </p>

              <div class="grid gap-4">
                <Divider />
                <div class="flex h-12 items-center gap-4">
                  <span class="text-sigma font-bold text-black-800">Left</span>
                  <Divider orientation="vertical" />
                  <span class="text-sigma font-bold text-black-800">Right</span>
                </div>
              </div>
            </section>

            <section
              id="spinner"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Spinner
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Loading indicator sizes.
              </p>

              <div class="flex flex-wrap items-center gap-4">
                <Spinner size="sm" />
                <Spinner />
                <Spinner size="lg" />
              </div>
            </section>

            <section id="link" class="playground-section playground-panel p-5">
              <h2 class="mb-1 text-omicron font-bold text-black-800">Link</h2>
              <p class="mb-5 text-sigma text-black-500">Inline link styles.</p>

              <div class="flex flex-wrap items-center gap-4">
                <Link href="#">Default link</Link>
                <Link href="#" disabled>Disabled link</Link>
              </div>
            </section>

            <section id="toast" class="playground-section playground-panel p-5">
              <h2 class="mb-1 text-omicron font-bold text-black-800">Toast</h2>
              <p class="mb-5 text-sigma text-black-500">
                Snackbar and temporary notification surface.
              </p>

              <div class="grid gap-4 md:grid-cols-3">
                <Toast
                  title="Saved"
                  description="Your changes have been saved."
                  variant="success"
                />
                <Toast
                  title="Warning"
                  description="Please review the form."
                  variant="warning"
                />
                <Toast
                  title="Error"
                  description="The request could not be completed."
                  variant="error"
                />
              </div>
            </section>

            <section
              id="accordion"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Accordion
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Root, item, trigger, and content states.
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="one">
                  <AccordionTrigger>Spacing system</AccordionTrigger>
                  <AccordionContent
                    >Accordion content checks text rhythm and collapse
                    behavior.</AccordionContent
                  >
                </AccordionItem>
                <AccordionItem value="two">
                  <AccordionTrigger>Interaction state</AccordionTrigger>
                  <AccordionContent
                    >Use open and closed states while adjusting component
                    styles.</AccordionContent
                  >
                </AccordionItem>
              </Accordion>
            </section>

            <section id="badge" class="playground-section playground-panel p-5">
              <h2 class="mb-1 text-omicron font-bold text-black-800">Badge</h2>
              <p class="mb-5 text-sigma text-black-500">All badge variants.</p>

              <div class="flex flex-wrap gap-2">
                <Badge>Green</Badge>
                <Badge variant="brocoli">Broccoli</Badge>
                <Badge variant="orange">Orange</Badge>
                <Badge variant="blue">Blue</Badge>
                <Badge variant="red">Red</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </section>

            <section
              id="tokens"
              class="playground-section playground-panel p-5"
            >
              <div
                class="mb-5 flex flex-wrap items-center justify-between gap-3"
              >
                <div class="flex items-center gap-2">
                  <Palette class="h-5 w-5 text-lime-500" />
                  <div>
                    <h2 class="text-omicron font-bold text-black-800">
                      Tokens
                    </h2>
                    <p class="text-sigma text-black-500">
                      Color, semantic, typography, spacing, and radius tokens
                      from Gwind.
                    </p>
                  </div>
                </div>
                <Badge variant="brocoli">
                  {{
                    semanticTokens.length +
                    colorPalettes.reduce(
                      (total, palette) => total + palette.steps.length,
                      0,
                    )
                  }}
                  color tokens
                </Badge>
              </div>

              <div class="space-y-6">
                <div class="rounded-md border border-black-200 bg-white p-4">
                  <div class="mb-4 flex items-center justify-between gap-3">
                    <h3 class="text-sigma font-bold text-black-800">
                      Semantic Colors
                    </h3>
                    <span class="text-omega font-bold text-black-500">{{
                      semanticTokens.length
                    }}</span>
                  </div>
                  <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    <div
                      v-for="token in semanticTokens"
                      :key="token"
                      class="overflow-hidden rounded-md border border-black-200 bg-white"
                    >
                      <div
                        class="h-12 border-b border-black-200"
                        :style="{ backgroundColor: `var(--${token})` }"
                      />
                      <div class="p-3">
                        <p class="text-sigma font-bold text-black-800">
                          {{ token }}
                        </p>
                        <p class="text-omega text-black-500">
                          var(--{{ token }})
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="rounded-md border border-black-200 bg-white p-4">
                  <div class="mb-4 flex items-center justify-between gap-3">
                    <h3 class="text-sigma font-bold text-black-800">
                      Primitive Palettes
                    </h3>
                    <span class="text-omega font-bold text-black-500">
                      {{
                        colorPalettes.reduce(
                          (total, palette) => total + palette.steps.length,
                          0,
                        )
                      }}
                    </span>
                  </div>
                  <div class="space-y-4">
                    <div v-for="palette in colorPalettes" :key="palette.name">
                      <div class="mb-2 flex items-center justify-between gap-3">
                        <h4
                          class="text-sigma font-bold capitalize text-black-800"
                        >
                          {{ palette.name }}
                        </h4>
                        <span class="text-omega text-black-500"
                          >{{ palette.steps.length }} steps</span
                        >
                      </div>
                      <div
                        class="grid gap-2"
                        :style="{
                          gridTemplateColumns: `repeat(${palette.steps.length}, minmax(0, 1fr))`,
                        }"
                      >
                        <div
                          v-for="step in palette.steps"
                          :key="`${palette.name}-${step}`"
                          class="min-w-0 overflow-hidden rounded-md border border-black-200 bg-white"
                        >
                          <div
                            class="h-12"
                            :style="{
                              backgroundColor: `var(--${palette.name}-${step})`,
                            }"
                          />
                          <p
                            class="truncate px-2 py-1 text-center text-omega font-bold text-black-600"
                          >
                            {{ step }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid gap-4 xl:grid-cols-3">
                  <div class="rounded-md border border-black-200 bg-white p-4">
                    <h3 class="mb-4 text-sigma font-bold text-black-800">
                      Typography
                    </h3>
                    <div class="space-y-3">
                      <div
                        v-for="token in typographyTokens"
                        :key="token.name"
                        class="rounded-md border border-black-200 p-3"
                      >
                        <p
                          :class="[token.className, 'font-bold text-black-800']"
                        >
                          {{ token.name }} sample text
                        </p>
                        <p class="mt-1 text-omega text-black-500">
                          {{ token.className }} / {{ token.value }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-md border border-black-200 bg-white p-4">
                    <h3 class="mb-4 text-sigma font-bold text-black-800">
                      Radius
                    </h3>
                    <div class="grid grid-cols-3 gap-3">
                      <div v-for="token in radiusTokens" :key="token.name">
                        <div
                          :class="[
                            token.className,
                            'h-20 border border-lime-500 bg-lime-100',
                          ]"
                        />
                        <p class="mt-2 text-sigma font-bold text-black-800">
                          {{ token.name }}
                        </p>
                        <p class="text-omega text-black-500">
                          {{ token.value }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-md border border-black-200 bg-white p-4">
                    <h3 class="mb-4 text-sigma font-bold text-black-800">
                      Semantic Surface
                    </h3>
                    <div
                      class="rounded-lg border border-border bg-card p-4 text-card-foreground"
                    >
                      <p class="text-omicron font-bold">Card foreground</p>
                      <p class="mt-1 text-sigma text-muted-foreground">
                        Muted foreground on card background.
                      </p>
                      <div class="mt-4 flex gap-2">
                        <span
                          class="rounded-md bg-primary px-3 py-1 text-omega font-bold text-primary-foreground"
                          >Primary</span
                        >
                        <span
                          class="rounded-md bg-secondary px-3 py-1 text-omega font-bold text-secondary-foreground"
                          >Secondary</span
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="rounded-md border border-black-200 bg-white p-4">
                  <div class="mb-4 flex items-center justify-between gap-3">
                    <h3 class="text-sigma font-bold text-black-800">Spacing</h3>
                    <span class="text-omega font-bold text-black-500">{{
                      spacingTokens.length
                    }}</span>
                  </div>
                  <div class="space-y-3">
                    <div
                      v-for="token in spacingTokens"
                      :key="token.name"
                      class="grid items-center gap-3 sm:grid-cols-[88px_1fr_72px]"
                    >
                      <p class="text-sigma font-bold text-black-800">
                        {{ token.name }}
                      </p>
                      <div class="h-5 rounded-sm bg-black-100">
                        <div
                          :class="[token.width, 'h-5 rounded-sm bg-lime-500']"
                        />
                      </div>
                      <p class="text-omega text-black-500">{{ token.value }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  </TooltipProvider>
</template>
