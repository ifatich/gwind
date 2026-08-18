<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import {
  Accordion,
  AddAmount,
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
  BannerCarousel,
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
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  Divider,
  Datepicker,
  Dropdown,
  DropdownList,
  DropdownListCheckboxItem,
  DropdownListItem,
  FilePicker,
  ImageDisplay,
  ImagePicker,
  Input,
  InputField,
  InputPersentase,
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
  TextareaField,
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
const navContainerRef = ref<HTMLElement | null>(null);
const isManualNav = ref(false);

function scrollNavPillIntoView(id: string) {
  const pillEl = document.querySelector(`[data-nav-id="${id}"]`);
  if (pillEl && navContainerRef.value) {
    pillEl.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }
}

function scrollToSection(id: string) {
  isManualNav.value = true;
  activeSection.value = id;
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -115;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  scrollNavPillIntoView(id);
  setTimeout(() => {
    isManualNav.value = false;
  }, 700);
}

let scrollObserver: IntersectionObserver | null = null;

onMounted(() => {
  const sectionEls = document.querySelectorAll("section[id]");
  scrollObserver = new IntersectionObserver(
    (entries) => {
      if (isManualNav.value) return;
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        const topEntry = visibleEntries[0];
        activeSection.value = topEntry.target.id;
        scrollNavPillIntoView(topEntry.target.id);
      }
    },
    {
      rootMargin: "-110px 0px -65% 0px",
      threshold: 0,
    }
  );

  sectionEls.forEach((el) => scrollObserver?.observe(el));
});

onUnmounted(() => {
  scrollObserver?.disconnect();
});

const isDialogOpen = ref(false);
const isDialogOpen2 = ref(false);
const isDialogOpen3 = ref(false);
const selectedFramework = ref("");
const progressValue = ref(64);
const paginationPage = ref(5);
const dropdownOptionA = ref(true);
const dropdownOptionB = ref(false);
const dropdownOpen = ref(false);
const dropdownProvince = ref("Bali");

const dropdownIconOpen = ref(false);
const dropdownIconSelected = ref("1.805,0595 gram");
const dropdownMultipleOpen = ref(false);
const dropdownMultipleLabel = computed(() => {
  const selected = [];
  if (dropdownOptionA.value) selected.push("Option A");
  if (dropdownOptionB.value) selected.push("Option B");
  return selected.length > 0 ? selected.join(", ") : "";
});

const accounts = [
  { title: "1.805,0595 gram", caption: "1234 5678 9101 2345" },
  { title: "2.500,0000 gram", caption: "9876 5432 1098 7654" },
];

const datepickerValue = ref("2026-06-21");

// FilePicker state
const filePickerFile1 = ref<File | null>(null);
const filePickerFile2 = ref<File | null>(null);

// ImagePicker state
const imagePickerSmall = ref<string | File | null>(null);
const imagePickerLarge43 = ref<string | File | null>(null);
const imagePickerLarge11 = ref<string | File | null>(null);
const imagePickerMultiple = ref<File[]>([]);
const imagePickerPrefilled = ref<string | File | null>(
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
);

function selectDropdownProvince(province: string) {
  dropdownProvince.value = province;
  dropdownOpen.value = false;
}
const compactMode = ref(false);
const carouselBannerSlides = [
  {
    id: 1,
    tag: "Inspirasi",
    title: "Ide Hadiah untuk Ibu Tersayang",
    description:
      "Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ada salahnya berusaha membuatnya bahagia. Ada banyak cara agar Ibu bahagia, salah satunya dengan memberi hadiah...",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
    actionLabel: "Lihat Selengkapnya",
  },
  {
    id: 2,
    tag: "Promo Special",
    title: "Investasi Emas Mulai dari 10 Ribu Rupiah",
    description:
      "Wujudkan masa depan finansial yang aman dan berkilau dengan Tabungan Emas Pegadaian. Kemudahan bertransaksi kapan saja dan di mana saja.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1600&auto=format&fit=crop",
    actionLabel: "Mulai Investasi",
  },
];
const rupiahValue = ref<number | null>(1000000);
const persentaseValue = ref<number | null>(50);
const addAmountVal1 = ref(1);
const addAmountVal2 = ref(2);
const addAmountValDisabled = ref(1);
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
  { id: "add-amount", label: "Add Amount" },
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
  { id: "datepicker", label: "Datepicker" },
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
  { id: "carousel", label: "Carousel" },
  { id: "file-picker", label: "File Picker" },
  { id: "image-picker", label: "Image Picker" },
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
    group: "Carousel",
    items: [
      "Carousel",
      "CarouselContent",
      "CarouselItem",
      "CarouselPrevious",
      "CarouselNext",
      "CarouselIndicators",
      "BannerCarousel",
    ],
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
      "DialogBody",
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
    group: "Datepicker",
    items: [
      "Datepicker",
      "DatepickerRoot",
      "DatepickerInput",
      "DatepickerContent",
      "Calendar",
      "CalendarHeading",
      "YearPicker",
      "DatepickerScroll",
    ],
  },
  {
    group: "Input",
    items: ["FilePicker", "Input", "InputField", "InputPersentase", "InputRupiah"],
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
    items: ["Textarea", "TextareaField"],
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
          class="playground-container flex h-14 items-center justify-between gap-4"
        >
          <div class="flex min-w-0 items-center gap-3">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full bg-white/15"
            >
              <PackageCheck class="h-4 w-4 text-white" />
            </div>
            <div class="min-w-0">
              <h1 class="text-sigma font-bold tracking-tight text-white">
                Gwind Playground
              </h1>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button
              class="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-omega font-semibold transition-colors"
              :class="
                compactMode
                  ? 'bg-white text-black'
                  : 'bg-white/15 text-white hover:bg-white/25'
              "
              @click="compactMode = !compactMode"
            >
              <SlidersHorizontal class="h-3.5 w-3.5" />
              Compact
            </button>
            <button
              class="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-omega font-semibold text-black transition-colors hover:bg-white/90"
            >
              <Sparkles class="h-3.5 w-3.5" />
              Primary
            </button>
          </div>
        </div>
      </header>

      <!-- Marquee Ribbon (design.md marquee-strip) -->
      <div class="border-b border-white/10 bg-black text-white py-2 overflow-hidden">
        <div class="playground-container flex items-center justify-between gap-6 text-omega tracking-wider font-semibold uppercase opacity-80">
          <div class="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap">
            <span>⚡️ Gwind Design System</span>
            <span>•</span>
            <span>Color-Block Narrative Canvas</span>
            <span>•</span>
            <span>Monochrome Chrome & Pill CTAs</span>
            <span>•</span>
            <span>Reka UI Accessible Primitives</span>
            <span>•</span>
            <span>Tailwind CSS v4 Layered Engine</span>
            <span>•</span>
            <span>34 Production UI Components</span>
          </div>
          <span class="hidden md:inline-flex items-center gap-1.5 text-lime-400 font-mono text-omega">
            v1.0.0
          </span>
        </div>
      </div>

      <!-- Sticky Top Navigation Pills (Auto-scrolling ScrollSpy) -->
      <nav class="playground-top-nav">
        <div
          ref="navContainerRef"
          class="playground-container flex items-center gap-2 overflow-x-auto no-scrollbar py-1"
        >
          <button
            v-for="section in sections"
            :key="section.id"
            :data-nav-id="section.id"
            type="button"
            class="playground-nav-pill cursor-pointer"
            :class="activeSection === section.id ? 'active' : ''"
            @click="scrollToSection(section.id)"
          >
            {{ section.label }}
          </button>
        </div>
      </nav>

      <main class="playground-container py-8">
        <div class="space-y-12">
          <!-- Hero Story Block (design.md editorial display) -->
          <div class="rounded-2xl bg-white border border-black-100 p-8 md:p-12 space-y-6">
            <div class="max-w-2xl space-y-3">
              <p class="playground-eyebrow">Enterprise Design System</p>
              <h1 class="text-3xl md:text-5xl font-black tracking-tight text-black-900 leading-[1.05]">
                Think bigger. Build faster with Gwind.
              </h1>
              <p class="text-omicron text-black-600 font-normal leading-relaxed pt-2">
                The unified design system combining accessible Reka UI primitives, layered Tailwind CSS v4 styling, and Figma-inspired color-block storytelling for modern web applications.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <Button size="lg" class="rounded-full px-6 font-bold">
                Get started for free
              </Button>
              <Button variant="outline" size="lg" class="rounded-full px-6 font-bold bg-white text-black-800 hover:bg-black-100">
                Documentation
              </Button>
              <span class="text-omega font-semibold text-black-500 pl-2">
                34 production components ready to use
              </span>
            </div>
          </div>

            <section
              id="inventory"
              class="playground-section playground-color-block block-lime"
            >
              <div
                class="mb-6 flex flex-wrap items-center justify-between gap-3"
              >
                <div>
                  <p class="playground-eyebrow">Overview</p>
                  <h2 class="playground-display">
                    Component Inventory
                  </h2>
                  <p class="playground-desc">
                    All Vue component files from
                    <code class="rounded bg-black/5 px-1.5 py-0.5 text-omega font-bold">packages/ui/src/components/ui</code> are represented
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
              id="add-amount"
              class="playground-section playground-panel p-6 space-y-5"
            >
              <div>
                <p class="playground-eyebrow">Numerical Controls</p>
                <h2 class="text-xl font-bold text-black-900">
                  Add Amount (Quantity Stepper)
                </h2>
                <p class="text-sigma text-black-500">
                  Add/Subtract controls for quantity selection, seat counts, and numerical incrementors.
                </p>
              </div>

              <div class="grid gap-6 md:grid-cols-2">
                <div class="space-y-3 rounded-xl border border-black-100 bg-white p-4">
                  <h3 class="text-sigma font-bold text-black-800">Standard Counter (Default min=1)</h3>
                  <div class="flex items-center gap-4">
                    <AddAmount v-model="addAmountVal1" class="w-32" />
                    <span class="text-sigma text-black-600">Nilai: {{ addAmountVal1 }}</span>
                  </div>
                </div>

                <div class="space-y-3 rounded-xl border border-black-100 bg-white p-4">
                  <h3 class="text-sigma font-bold text-black-800">Active State (Value = 2)</h3>
                  <div class="flex items-center gap-4">
                    <AddAmount v-model="addAmountVal2" class="w-32" />
                    <span class="text-sigma text-black-600">Nilai: {{ addAmountVal2 }}</span>
                  </div>
                </div>

                <div class="space-y-3 rounded-xl border border-black-100 bg-white p-4">
                  <h3 class="text-sigma font-bold text-black-800">Disabled State</h3>
                  <div class="flex items-center gap-4">
                    <AddAmount v-model="addAmountValDisabled" disabled class="w-32" />
                    <span class="text-sigma text-black-600">Disabled</span>
                  </div>
                </div>

                <div class="space-y-3 rounded-xl border border-black-100 bg-white p-4">
                  <h3 class="text-sigma font-bold text-black-800">Custom Min & Max (Min: 0, Max: 5)</h3>
                  <div class="flex items-center gap-4">
                    <AddAmount :min="0" :max="5" :default-value="3" class="w-36" />
                  </div>
                </div>
              </div>
            </section>

            <section
              id="button"
              class="playground-section playground-panel p-6 space-y-6"
            >
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p class="playground-eyebrow">Action System</p>
                  <h2 class="text-xl font-bold text-black-900">Button</h2>
                  <p class="text-sigma text-black-500">
                    Primary monochrome pills, secondary canvas buttons, tertiary links, social auth, and circular icon triggers.
                  </p>
                </div>
                <Badge variant="brocoli">Core Component</Badge>
              </div>

              <div>
                <h3 class="text-omega font-bold uppercase tracking-wider text-black-400 mb-3">Variants</h3>
                <div class="flex flex-wrap items-center gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="tertiary">Tertiary</Button>
                  <Button variant="neutral">Neutral</Button>
                </div>
              </div>

              <div>
                <h3 class="text-omega font-bold uppercase tracking-wider text-black-400 mb-3">Social & Brand Variants</h3>
                <div class="flex flex-wrap items-center gap-3">
                  <Button variant="google">Continue with Google</Button>
                  <Button variant="apple">Continue with Apple</Button>
                  <Button variant="facebook">Continue with Facebook</Button>
                </div>
              </div>

              <div>
                <h3 class="text-omega font-bold uppercase tracking-wider text-black-400 mb-3">Interactive States</h3>
                <div class="flex flex-wrap items-center gap-3">
                  <Button>Enabled</Button>
                  <Button class="bg-lime-600">Hover</Button>
                  <Button class="bg-lime-800">Focused</Button>
                  <Button disabled>Disabled</Button>
                  <Button loading loading-label="Loading button">Loading</Button>
                  <Button class="active:bg-lime-800">Pressed</Button>
                </div>
              </div>

              <div>
                <h3 class="text-omega font-bold uppercase tracking-wider text-black-400 mb-3">Icons & Sizes</h3>
                <div class="flex flex-wrap items-center gap-3">
                  <Button><Mail class="h-4 w-4" />Icon Left</Button>
                  <Button>Icon Right <Mail class="h-4 w-4" /></Button>
                  <Button variant="icon" size="icon"><Search class="h-5 w-5" /></Button>
                  <Button size="xl">Extra Large <Settings class="h-5 w-5" /></Button>
                  <Button size="lg">Large</Button>
                  <Button size="md">Medium</Button>
                  <Button size="sm">Small</Button>
                </div>
              </div>

              <div class="grid gap-3 md:grid-cols-2 pt-2">
                <Button class="w-full">Large Full Width</Button>
                <Button size="xl" class="w-full">Extra Large Full Width</Button>
              </div>
            </section>

            <section
              id="avatar"
              class="playground-section playground-panel p-6 space-y-4"
            >
              <div>
                <p class="playground-eyebrow">Identity & Team</p>
                <h2 class="text-xl font-bold text-black-900">Avatar</h2>
                <p class="text-sigma text-black-500">
                  Visual identity representations for user accounts, collaborative editors, and workspace teams.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-4 pt-2">
                <Avatar
                  src="https://i.pravatar.cc/96?img=12"
                  alt="Gwind User"
                />
                <Avatar alt="Pegadaian Design" />
                <Avatar fallback="UI" size="lg" />
              </div>
            </section>

            <!-- Promo Banner (design.md promo-banner-lilac) -->
            <div class="playground-promo-banner shadow-sm">
              <div class="flex items-center gap-3">
                <div class="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-black">
                  <Sparkles class="h-5 w-5" />
                </div>
                <div>
                  <h4 class="text-sigma font-bold text-black-900">Release Notes 2.4 — Config Design Update</h4>
                  <p class="text-omega text-black-600">Featuring new unified popovers, card-styled tooltips, and simplified counter props.</p>
                </div>
              </div>
              <button class="button-magenta-promo text-omega">
                Save your spot
              </button>
            </div>

            <section id="input" class="playground-section playground-color-block block-lilac">
              <div class="mb-6">
                <p class="playground-eyebrow">Forms & Inputs</p>
                <h2 class="playground-display">Input</h2>
                <p class="playground-desc">
                  Single-line inputs, numeric formatters, prefix/suffix adornments, and action buttons.
                </p>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Short Field</span>
                    <span class="text-omega font-mono text-black-400">sm</span>
                  </div>
                  <InputField
                    id="input-short"
                    label="Title"
                    placeholder="Placeholder"
                  >
                    <template #label-icon>
                      <CircleHelp class="h-[18px] w-[18px] text-black-500" />
                    </template>
                  </InputField>
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Long Field</span>
                    <span class="text-omega font-mono text-black-400">lg</span>
                  </div>
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
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Placeholder State</span>
                    <span class="text-omega font-mono text-black-400">default</span>
                  </div>
                  <InputField
                    id="input-placeholder"
                    label="Title"
                    placeholder="Placeholder"
                  >
                    <template #label-icon>
                      <CircleHelp class="h-[18px] w-[18px] text-black-500" />
                    </template>
                  </InputField>
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Hover State</span>
                    <span class="text-omega font-mono text-black-400">hover</span>
                  </div>
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
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Filled State</span>
                    <span class="text-omega font-mono text-black-400">value</span>
                  </div>
                  <InputField
                    id="input-filled"
                    label="Title"
                    value="Text input"
                  >
                    <template #label-icon>
                      <CircleHelp class="h-[18px] w-[18px] text-black-500" />
                    </template>
                  </InputField>
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Disabled State</span>
                    <span class="text-omega font-mono text-black-400">disabled</span>
                  </div>
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
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Error State</span>
                    <span class="text-omega font-mono text-red-500">error</span>
                  </div>
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
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Icon Left</span>
                    <span class="text-omega font-mono text-black-400">prefix</span>
                  </div>
                  <InputField
                    id="input-icon-left"
                    label="Title"
                    placeholder="Placeholder"
                  >
                    <template #left-icon>
                      <Mail class="h-6 w-6" />
                    </template>
                  </InputField>
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Icon Right</span>
                    <span class="text-omega font-mono text-black-400">suffix</span>
                  </div>
                  <InputField
                    id="input-icon-right"
                    label="Title"
                    placeholder="Placeholder"
                  >
                    <template #right-icon>
                      <Search class="h-6 w-6" />
                    </template>
                  </InputField>
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Dual Icons</span>
                    <span class="text-omega font-mono text-black-400">both</span>
                  </div>
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
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Action Button</span>
                    <span class="text-omega font-mono text-black-400">action</span>
                  </div>
                  <InputField
                    id="input-action"
                    label="Title"
                    placeholder="Placeholder"
                  >
                    <template #action>
                      <button type="button" class="text-sigma font-bold text-lime-600 hover:text-lime-700">Action</button>
                    </template>
                  </InputField>
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Icon & Action</span>
                    <span class="text-omega font-mono text-black-400">combo</span>
                  </div>
                  <InputField
                    id="input-icon-action"
                    label="Title"
                    placeholder="Placeholder"
                  >
                    <template #left-icon>
                      <Mail class="h-6 w-6" />
                    </template>
                    <template #action>
                      <button type="button" class="text-sigma font-bold text-lime-600 hover:text-lime-700">Action</button>
                    </template>
                  </InputField>
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Prefix Text</span>
                    <span class="text-omega font-mono text-black-400">prefix</span>
                  </div>
                  <InputField
                    id="input-prefix"
                    prefix="Rupiah"
                    placeholder="Placeholder"
                  >
                    <template #right-icon>
                      <X class="h-6 w-6" />
                    </template>
                  </InputField>
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Input Rupiah</span>
                    <span class="text-omega font-mono text-lime-600">currency</span>
                  </div>
                  <InputRupiah
                    id="input-rupiah"
                    v-model="rupiahValue"
                    label="Title"
                    placeholder="Placeholder"
                  />
                </div>

                <div id="inputpersentase" class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Input Persentase</span>
                    <span class="text-omega font-mono text-lime-600">percentage</span>
                  </div>
                  <InputPersentase
                    id="input-persentase"
                    v-model="persentaseValue"
                    label="Title"
                    placeholder="Placeholder"
                  />
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Suffix Text</span>
                    <span class="text-omega font-mono text-black-400">suffix</span>
                  </div>
                  <InputField
                    id="input-suffix"
                    suffix="%"
                    placeholder="Placeholder"
                  />
                </div>

                <div class="playground-tile space-y-2 md:col-span-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">File Upload Input</span>
                    <span class="text-omega font-mono text-black-400">file</span>
                  </div>
                  <div class="space-y-1">
                    <Label for="input-file">Upload Document</Label>
                    <Input id="input-file" type="file" />
                  </div>
                </div>
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
              class="playground-section playground-panel p-6 space-y-5"
            >
              <div>
                <p class="playground-eyebrow">Forms & Multi-line Entry</p>
                <h2 class="text-xl font-bold text-black-900">Textarea</h2>
                <p class="text-sigma text-black-500">
                  Multi-line input fields with live character counter, caption text, and error states.
                </p>
              </div>
              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Default Field</span>
                    <span class="text-omega font-mono text-black-400">default</span>
                  </div>
                  <TextareaField id="textarea-default" label="Title" model-value="Value" placeholder="Placeholder" caption="Assistive text" />
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Empty State</span>
                    <span class="text-omega font-mono text-black-400">empty</span>
                  </div>
                  <TextareaField id="textarea-empty" label="Title" placeholder="Placeholder" />
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Error State</span>
                    <span class="text-omega font-mono text-red-500">error</span>
                  </div>
                  <TextareaField id="textarea-error" label="Title" model-value="Value" placeholder="Placeholder" error="This is an error message." />
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">With Character Counter</span>
                    <span class="text-omega font-mono text-lime-600">counter</span>
                  </div>
                  <TextareaField id="textarea-counter" label="Keterangan" model-value="Catatan transaksi..." placeholder="Placeholder" :maxlength="100" show-count caption="Maksimal 100 karakter." />
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Disabled State</span>
                    <span class="text-omega font-mono text-black-400">disabled</span>
                  </div>
                  <TextareaField id="textarea-disabled" label="Title" model-value="Value" placeholder="Placeholder" caption="Assistive text" disabled />
                </div>
              </div>
            </section>

            <section
              id="checkbox"
              class="playground-section playground-color-block block-cream"
            >
              <div class="mb-6">
                <p class="playground-eyebrow">Selection & Consent</p>
                <h2 class="playground-display">Checkbox</h2>
                <p class="playground-desc">
                  Primitive controls and Figma-aligned fields with binary, checked, and indeterminate states.
                </p>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div class="playground-tile space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Primitive States</span>
                    <span class="text-omega font-mono text-black-400">primitive</span>
                  </div>
                  <div class="flex flex-wrap items-center gap-3">
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
                  </div>
                </div>

                <div class="playground-tile space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Website Field</span>
                    <span class="text-omega font-mono text-black-400">desktop</span>
                  </div>
                  <div class="grid gap-3">
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
                  </div>
                </div>

                <div class="playground-tile space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Mobile Mode</span>
                    <span class="text-omega font-mono text-black-400">mobile-apps</span>
                  </div>
                  <div class="grid gap-3">
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
                  </div>
                </div>

                <div class="playground-tile space-y-3 md:col-span-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Checkbox Groups</span>
                    <span class="text-omega font-mono text-black-400">group</span>
                  </div>
                  <div class="grid gap-5 md:grid-cols-2">
                    <CheckboxGroup
                      title="Horizontal Group"
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
                      title="Vertical Group"
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
                  </div>
                </div>
              </div>
            </section>

            <section
              id="radio-group"
              class="playground-section playground-panel p-6 space-y-5"
            >
              <div>
                <p class="playground-eyebrow">Options & Segmented Choice</p>
                <h2 class="text-xl font-bold text-black-900">Radio Group</h2>
                <p class="text-sigma text-black-500">
                  Segmented single-choice options in horizontal and vertical configurations.
                </p>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div class="playground-tile space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Primitive Control</span>
                    <span class="text-omega font-mono text-black-400">primitive</span>
                  </div>
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
                </div>

                <div class="playground-tile space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Website Fields</span>
                    <span class="text-omega font-mono text-black-400">desktop</span>
                  </div>
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
                </div>

                <div class="playground-tile space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Mobile Mode</span>
                    <span class="text-omega font-mono text-black-400">mobile-apps</span>
                  </div>
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
                </div>

                <div class="playground-tile space-y-3 md:col-span-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Radio Groups</span>
                    <span class="text-omega font-mono text-black-400">group</span>
                  </div>
                  <div class="grid gap-5 md:grid-cols-2">
                    <RadioGroup
                      v-model="radioHorizontal"
                      title="Horizontal Group"
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
                      title="Vertical Group"
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
                  </div>
                </div>
              </div>
            </section>

            <section
              id="select"
              class="playground-section playground-color-block block-mint"
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
              class="playground-section playground-panel p-6 space-y-5"
            >
              <div>
                <p class="playground-eyebrow">Modal Overlays & Focus Trap</p>
                <h2 class="text-xl font-bold text-black-900">Dialog</h2>
                <p class="text-sigma text-black-500">
                  Accessible modal dialogs with focus trap, backdrop overlay, header, body, and action footer.
                </p>
              </div>

              <div class="flex flex-wrap gap-4">
                <!-- Variant 1: Default Dialog -->
                <Dialog v-model:open="isDialogOpen">
                  <DialogTrigger as-child>
                    <Button>Default Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Review component style</DialogTitle>
                      <DialogDescription>
                        Dialog surfaces should be visually independent from the
                        page behind it.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogBody class="text-sigma text-black-800">
                      Ini adalah contoh konten utama dialog. Struktur styling dialog identik dengan Card, sehingga padding diserahkan kepada child komponen.
                    </DialogBody>
                    <DialogFooter>
                      <DialogClose as-child>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button @click="isDialogOpen = false">Save</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <!-- Variant 2: Dialog with Image -->
                <Dialog v-model:open="isDialogOpen2">
                  <DialogTrigger as-child>
                    <Button variant="secondary">Dialog with Image</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Action</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                      <div class="mb-4 h-32 w-full overflow-hidden rounded-lg bg-black-200">
                        <img src="https://picsum.photos/400/200" alt="Dialog Image" class="h-full w-full object-cover" />
                      </div>
                      <p class="text-sigma font-bold text-black-800">Warning Headline</p>
                      <p class="mt-1 text-sigma text-black-500">
                        This action has consequences related to the image above. Please be careful.
                      </p>
                    </DialogBody>
                    <DialogFooter>
                      <DialogClose as-child>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button @click="isDialogOpen2 = false">Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <!-- Variant 3: Minimal Dialog (No Footer) -->
                <Dialog v-model:open="isDialogOpen3">
                  <DialogTrigger as-child>
                    <Button variant="tertiary">Minimal Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Information</DialogTitle>
                      <DialogDescription>Just a simple informational dialog without footer actions.</DialogDescription>
                    </DialogHeader>
                    <DialogBody class="text-omicron">
                      You can click the close button at the top right to dismiss this dialog.
                    </DialogBody>
                  </DialogContent>
                </Dialog>
              </div>
            </section>

            <section
              id="popover"
              class="playground-section playground-color-block block-pink space-y-4"
            >
              <div class="mb-4">
                <p class="playground-eyebrow">Floating Surfaces & Menus</p>
                <h2 class="playground-display">Popover</h2>
                <p class="playground-desc">
                  Rich floating surfaces with card-styling header slots, anchor positioning, and click-outside dismissal.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-4">
                <Popover>
                  <PopoverAnchor as-child>
                    <span
                      class="inline-flex h-10 items-center rounded-full bg-white px-4 text-sigma font-bold text-black-800 border border-pink-200"
                    >
                      Anchor Target
                    </span>
                  </PopoverAnchor>
                  <PopoverTrigger as-child>
                    <Button>Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-80" title="Detail Informasi">
                    <p class="text-sigma text-black-600">
                      Popover menggunakan struktur card-style dengan header dan slot konten fleksibel.
                    </p>
                  </PopoverContent>
                </Popover>
              </div>
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

              <div class="grid gap-6">
                <!-- Interactive Dropdowns -->
                <div>
                  <h3 class="mb-3 text-pi font-semibold text-black-800">Interactive Dropdowns</h3>
                  <div class="grid gap-4 lg:grid-cols-3">
                    <Dropdown
                      v-model:open="dropdownOpen"
                      :model-label="dropdownProvince"
                      placeholder="Pilih provinsi"
                      trigger-class="w-full"
                    >
                      <DropdownList>
                        <DropdownListItem
                          v-for="province in ['Aceh', 'Bali', 'Banten']"
                          :key="province"
                          :selected="dropdownProvince === province"
                          @select="selectDropdownProvince(province)"
                        >
                          {{ province }}
                        </DropdownListItem>
                      </DropdownList>
                    </Dropdown>

                    <Dropdown
                      v-model:open="dropdownIconOpen"
                      :model-label="dropdownIconSelected"
                      placeholder="Pilih rekening"
                      trigger-class="w-full"
                    >
                      <DropdownList>
                        <DropdownListItem
                          v-for="(account, index) in accounts"
                          :key="index"
                          :label="account.title"
                          :caption="account.caption"
                          :selected="dropdownIconSelected === account.title"
                          @select="dropdownIconSelected = account.title; dropdownIconOpen = false"
                        >
                          <template #icon>
                            <Landmark class="h-6 w-6" />
                          </template>
                        </DropdownListItem>
                      </DropdownList>
                    </Dropdown>

                    <Dropdown
                      v-model:open="dropdownMultipleOpen"
                      :model-label="dropdownMultipleLabel"
                      placeholder="Pilih opsi"
                      trigger-class="w-full"
                    >
                      <DropdownList variant="multiple">
                        <DropdownListCheckboxItem v-model="dropdownOptionA">
                          Option A
                        </DropdownListCheckboxItem>
                        <DropdownListCheckboxItem v-model="dropdownOptionB">
                          Option B
                        </DropdownListCheckboxItem>
                      </DropdownList>
                    </Dropdown>
                  </div>
                </div>

                <!-- Dropdown List Surface Previews -->
                <div>
                  <h3 class="mb-3 text-pi font-semibold text-black-800">Dropdown List Surfaces</h3>
                  <div class="grid gap-4 lg:grid-cols-3">
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

                    <DropdownList variant="multiple">
                      <DropdownListCheckboxItem v-model="dropdownOptionA">
                        This is an option
                      </DropdownListCheckboxItem>
                      <DropdownListCheckboxItem v-model="dropdownOptionB">
                        This is an option
                      </DropdownListCheckboxItem>
                    </DropdownList>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="datepicker"
              class="playground-section playground-panel p-5"
            >
              <h2 class="mb-1 text-omicron font-bold text-black-800">
                Datepicker
              </h2>
              <p class="mb-5 text-sigma text-black-500">
                Input-style trigger with calendar popup for single date
                selection.
              </p>

              <div class="grid gap-4 lg:grid-cols-2">
                <Datepicker
                  v-model="datepickerValue"
                  placeholder="Pilih tanggal"
                  trigger-class="max-w-md"
                />
                <Datepicker
                  default-open
                  model-value="2026-06-21"
                  placeholder="Pilih tanggal"
                  trigger-class="max-w-md"
                />
              </div>
            </section>

            <section
              id="tooltip"
              class="playground-section playground-panel p-6 space-y-4"
            >
              <div>
                <p class="playground-eyebrow">Assistive Hints & Definitions</p>
                <h2 class="text-xl font-bold text-black-900">Tooltip</h2>
                <p class="text-sigma text-black-500">
                  Hover and focus-triggered micro tooltips with card styling and precise anchor offsets.
                </p>
              </div>

              <Tooltip>
                <TooltipTrigger as-child>
                  <Button variant="ghost"
                    ><CircleHelp class="h-4 w-4" />Tooltip</Button
                  >
                </TooltipTrigger>
                <TooltipContent title="Tooltip Example">Tooltip content text</TooltipContent>
              </Tooltip>
            </section>

            <section
              id="breadcrumb"
              class="playground-section playground-panel p-6 space-y-4"
            >
              <div>
                <p class="playground-eyebrow">Navigation Trails</p>
                <h2 class="text-xl font-bold text-black-900">Breadcrumb</h2>
                <p class="text-sigma text-black-500">
                  Hierarchical navigation trails with item links, separators, truncation ellipsis, and page state.
                </p>
              </div>

              <div class="space-y-4">
                <div>
                  <h3 class="mb-2 text-sigma font-semibold text-black-600">Default (Figma Pattern)</h3>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Root</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Lv1</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Lv2</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">lv3</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>lv4</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
                <div>
                  <h3 class="mb-2 text-sigma font-semibold text-black-600">With Ellipsis</h3>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Projects</BreadcrumbLink>
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
                </div>
              </div>
            </section>

            <section id="tabs" class="playground-section playground-color-block block-coral space-y-6">
              <div class="mb-4">
                <p class="playground-eyebrow">Viewport & Segments</p>
                <h2 class="playground-display">Tabs</h2>
                <p class="playground-desc">
                  Segmented tab switchers with smooth animated sliding indicators for pricing and views.
                </p>
              </div>

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

            <section id="alert" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">System Banners & Feedback</p>
                <h2 class="text-xl font-bold text-black-900">Alert</h2>
                <p class="text-sigma text-black-500">
                  Status alerts for critical warnings, success feedback, and system notifications with optional close actions.
                </p>
              </div>

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
              class="playground-section playground-panel p-6 space-y-4"
            >
              <div>
                <p class="playground-eyebrow">Deterministic Loaders</p>
                <h2 class="text-xl font-bold text-black-900">
                  Progress Bar
                </h2>
                <p class="text-sigma text-black-500">
                  Visual progress indicators for multi-step workflows, uploads, and background tasks.
                </p>
              </div>

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
              class="playground-section playground-panel p-6 space-y-4"
            >
              <div>
                <p class="playground-eyebrow">Boolean Controls</p>
                <h2 class="text-xl font-bold text-black-900">Switch Toggle</h2>
                <p class="text-sigma text-black-500">
                  Immediate on/off state toggles for user settings, dark mode, and feature flags.
                </p>
              </div>

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
              class="playground-section playground-panel p-6 space-y-4"
            >
              <div>
                <p class="playground-eyebrow">Page Navigation</p>
                <h2 class="text-xl font-bold text-black-900">
                  Pagination
                </h2>
                <p class="text-sigma text-black-500">
                  Accessible pagination controls with smart truncation ellipsis and page change triggers.
                </p>
              </div>

              <div class="grid gap-4">
                <Pagination v-model="paginationPage" :total-pages="20" />
                <div class="text-sigma font-bold text-black-500">
                  Page: {{ paginationPage }}
                </div>
              </div>
            </section>

            <section id="table" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Comparison & Records</p>
                <h2 class="text-xl font-bold text-black-900">Table & Data Table</h2>
                <p class="text-sigma text-black-500">
                  Data-driven comparison matrices, zebra striped rows, and dense tabular records.
                </p>
              </div>

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

            <section id="card" class="playground-section playground-color-block block-cream space-y-6">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p class="playground-eyebrow">Surfaces & Containers</p>
                  <h2 class="playground-display">Card</h2>
                  <p class="playground-desc">
                    Content containers featuring structured header, title, description, content body, and action footer slots.
                  </p>
                </div>
                <Badge variant="brocoli">Container Component</Badge>
              </div>

              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <!-- Variant 1: Default Card -->
                <Card>
                  <CardHeader>
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col gap-y-1">
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description Subtitle</CardDescription>
                      </div>
                      <Button variant="icon" size="icon" class="h-6 w-6">
                        <X class="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div class="rounded-lg bg-black-100 p-4">
                      <p class="text-sigma font-bold text-black-800">Content Title</p>
                      <p class="mt-1 text-sigma text-black-500">
                        This is the main content area for the card where you can put any information.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button class="w-full">Action</Button>
                    <Button variant="outline" class="w-full">Cancel</Button>
                  </CardFooter>
                </Card>

                <!-- Variant 2: Card with Image -->
                <Card>
                  <CardHeader>
                    <CardTitle>Card with Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="mb-4 h-32 w-full overflow-hidden rounded-lg bg-black-200">
                      <img src="https://picsum.photos/400/200" alt="Card Image" class="h-full w-full object-cover" />
                    </div>
                    <p class="text-sigma font-bold text-black-800">Headline</p>
                    <p class="mt-1 text-sigma text-black-500">
                      Supporting text or description related to the image above.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button class="w-full">Confirm</Button>
                  </CardFooter>
                </Card>

                <!-- Variant 3: Minimal Content Only -->
                <Card>
                  <CardContent class="pt-4">
                    <p class="text-sigma font-bold text-black-800">Minimal Card</p>
                    <p class="mt-1 text-sigma text-black-500">
                      Card without header and footer, just displaying simple information.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section
              id="divider"
              class="playground-section playground-panel p-6 space-y-4"
            >
              <div>
                <p class="playground-eyebrow">Separators & Boundaries</p>
                <h2 class="text-xl font-bold text-black-900">
                  Divider
                </h2>
                <p class="text-sigma text-black-500">
                  Hairline visual separators supporting both horizontal and vertical orientations.
                </p>
              </div>

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
              class="playground-section playground-panel p-6 space-y-4"
            >
              <div>
                <p class="playground-eyebrow">Activity Indicators</p>
                <h2 class="text-xl font-bold text-black-900">
                  Spinner
                </h2>
                <p class="text-sigma text-black-500">
                  Compact CSS-driven activity spinners for asynchronous operation loading states.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-4">
                <Spinner size="sm" />
                <Spinner />
                <Spinner size="lg" />
              </div>
            </section>

            <section id="link" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Hyperlinks & Anchors</p>
                <h2 class="text-xl font-bold text-black-900">Link</h2>
                <p class="text-sigma text-black-500">
                  Semantic inline links with customizable hover transitions and disabled accessibility states.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-4">
                <Link href="#">Default link</Link>
                <Link href="#" disabled>Disabled link</Link>
              </div>
            </section>

            <section id="toast" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Ephemeral Feedback</p>
                <h2 class="text-xl font-bold text-black-900">Toast & Snackbars</h2>
                <p class="text-sigma text-black-500">
                  Floating snackbar notifications for transient feedback on background operations.
                </p>
              </div>

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
              class="playground-section playground-panel p-6 space-y-4"
            >
              <div>
                <p class="playground-eyebrow">Collapsible Disclosures</p>
                <h2 class="text-xl font-bold text-black-900">
                  Accordion
                </h2>
                <p class="text-sigma text-black-500">
                  Expandable FAQ and detail sections supporting single-open and multi-collapse modes.
                </p>
              </div>

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

            <section id="badge" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Taxonomy & Status Pills</p>
                <h2 class="text-xl font-bold text-black-900">Badge</h2>
                <p class="text-sigma text-black-500">
                  Status badges and category tags in semantic color shades (Green, Broccoli, Orange, Blue, Red, Outline).
                </p>
              </div>

              <div class="flex flex-wrap gap-2">
                <Badge>Green</Badge>
                <Badge variant="brocoli">Broccoli</Badge>
                <Badge variant="orange">Orange</Badge>
                <Badge variant="blue">Blue</Badge>
                <Badge variant="red">Red</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </section>

            <section id="carousel" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Sliders & Hero Banners</p>
                <h2 class="text-xl font-bold text-black-900">
                  Carousel & Banner Slider
                </h2>
                <p class="text-sigma text-black-500">
                  Interactive touch-enabled banner carousels with autoplay, slide indicators, and navigation controls.
                </p>
              </div>

              <div class="space-y-6">
                <div class="rounded-md border border-black-200 bg-white p-4">
                  <h3 class="mb-3 text-sigma font-bold text-black-800">
                    1. BannerCarousel (Figma Preset)
                  </h3>
                  <BannerCarousel
                    :items="carouselBannerSlides"
                    :autoplay="true"
                    :autoplay-interval="5000"
                  />
                </div>

                <div class="rounded-md border border-black-200 bg-white p-4">
                  <h3 class="mb-3 text-sigma font-bold text-black-800">
                    2. Custom Compound Carousel
                  </h3>
                  <Carousel :loop="true" :autoplay="false" class="w-full">
                    <CarouselContent>
                      <CarouselItem v-for="i in 3" :key="i">
                        <div
                          class="flex flex-col items-center justify-center min-h-[180px] p-8 rounded-xl bg-lime-500 text-white font-bold"
                        >
                          <span class="text-zeta">Custom Slide Item {{ i }}</span>
                          <span class="text-sigma font-normal opacity-90 mt-1"
                            >Modular CarouselItem component</span
                          >
                        </div>
                      </CarouselItem>
                    </CarouselContent>

                    <div class="mt-4 flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <CarouselPrevious />
                        <CarouselNext />
                      </div>
                      <CarouselIndicators />
                    </div>
                  </Carousel>
                </div>
              </div>
            </section>

            <section
              id="file-picker"
              class="playground-section playground-panel p-6 space-y-5"
            >
              <div>
                <p class="playground-eyebrow">Media & Document Uploads</p>
                <h2 class="text-xl font-bold text-black-900">
                  File Picker
                </h2>
                <p class="text-sigma text-black-500">
                  Dropzone file uploaders for non-image documents (PDF, CSV, Excel, Word).
                </p>
              </div>

              <div class="space-y-6">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                    <h4 class="text-sigma font-bold text-black-700">Default</h4>
                    <p class="text-sm text-black-500">Menerima dokumen (kecuali gambar).</p>
                    <div class="flex items-center gap-4">
                      <FilePicker v-model="filePickerFile1" title="Upload Dokumen" />
                    </div>
                  </div>

                  <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                    <h4 class="text-sigma font-bold text-black-700">With Right Action</h4>
                    <p class="text-sm text-black-500">Spesifik hanya menerima file PDF.</p>
                    <div class="flex items-center gap-4">
                      <FilePicker v-model="filePickerFile2" title="Upload PDF" accept=".pdf" rightAction />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="image-picker"
              class="playground-section playground-panel p-6 space-y-5"
            >
              <div>
                <p class="playground-eyebrow">Image Assets & Media Displays</p>
                <h2 class="text-xl font-bold text-black-900">
                  Form Image (Input) & Image Display
                </h2>
                <p class="text-sigma text-black-500">
                  Image uploaders with aspect ratio previews, multi-image slider, metadata tags, and fallback displays.
                </p>
              </div>

              <!-- Form Image (Input) -->
              <div class="space-y-6">
                <h3 class="text-omicron font-bold text-black-800">1. Form Image (Input)</h3>
                
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                    <h4 class="text-sigma font-bold text-black-700">Size: Small</h4>
                    <p class="text-sm text-black-500">Ukuran 80x80px untuk bentuk form ringkas.</p>
                    <div class="flex items-center gap-4">
                      <ImagePicker v-model="imagePickerSmall" size="small" />
                    </div>
                  </div>

                  <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                    <h4 class="text-sigma font-bold text-black-700">Size: Large (4:3)</h4>
                    <p class="text-sm text-black-500">Ukuran 328x160px dengan rasio pratinjau 4:3.</p>
                    <!-- 4:3 Ratio -->
                    <div class="flex flex-col gap-2">
                      <Label class="text-omicron">Large Variant (4:3)</Label>
                      <ImagePicker v-model="imagePickerLarge43" size="large" aspectRatio="4:3" />
                    </div>
                    <!-- Multiple Images (Carousel) -->
                    <div class="flex flex-col gap-2">
                      <Label class="text-omicron">Multiple Images (Slider) + CTA & Metadata</Label>
                      <ImagePicker 
                        v-model="imagePickerMultiple" 
                        multiple 
                        size="large" 
                        showDownload
                        showRetake
                        :metadata="{ takenBy: 'P12345', timestamp: '20 Jan 2025, 12.00' }"
                      />
                    </div>
                  </div>

                  <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                    <h4 class="text-sigma font-bold text-black-700">Size: Large (1:1)</h4>
                    <p class="text-sm text-black-500">Ukuran 328x160px dengan rasio pratinjau 1:1.</p>
                    <ImagePicker v-model="imagePickerLarge11" size="large" aspectRatio="1:1" />
                  </div>

                  <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                    <h4 class="text-sigma font-bold text-black-700">State: Filled with Pre-filled URL</h4>
                    <p class="text-sm text-black-500">Kondisi saat gambar sudah diunggah/diisi.</p>
                    <ImagePicker
                      v-model="imagePickerPrefilled"
                      size="large"
                      aspectRatio="4:3"
                    />
                  </div>

                  <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                    <h4 class="text-sigma font-bold text-black-700">Validation: Max Size (Error Simulation)</h4>
                    <p class="text-sm text-black-500">Menyertakan pesan error untuk pembatasan ukuran (`maxSize="1"`).</p>
                    <ImagePicker
                      size="large"
                      aspectRatio="4:3"
                      :maxSize="1"
                    />
                  </div>
                </div>

                <!-- Image Display -->
                <h3 class="text-omicron font-bold text-black-800 pt-4">2. Image Display</h3>
                
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                    <h4 class="text-sigma font-bold text-black-700">Sizes (Small, Large 4:3, Large 1:1)</h4>
                    <div class="flex flex-wrap items-end gap-4">
                      <div class="flex flex-col items-center gap-1">
                        <ImageDisplay size="small" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" />
                        <span class="text-xs text-black-500">Small</span>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <ImageDisplay size="large-4:3" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" />
                        <span class="text-xs text-black-500">Large 4:3</span>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <ImageDisplay size="large-1:1" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" />
                        <span class="text-xs text-black-500">Large 1:1</span>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                    <h4 class="text-sigma font-bold text-black-700">States (Filled, Multiple, Empty, Broken)</h4>
                    <div class="flex flex-wrap items-end gap-4">
                      <div class="flex flex-col items-center gap-1">
                        <ImageDisplay size="small" status="filled-more" :count="1" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" />
                        <span class="text-xs text-black-500">Multiple</span>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <ImageDisplay size="small" status="filled" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" />
                        <span class="text-xs text-black-500">Filled</span>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <ImageDisplay size="small" status="empty" />
                        <span class="text-xs text-black-500">Empty</span>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <ImageDisplay size="small" status="broken" />
                        <span class="text-xs text-black-500">Broken</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="tokens"
              class="playground-section playground-color-block block-navy"
            >
              <div
                class="mb-6 flex flex-wrap items-center justify-between gap-3"
              >
                <div>
                  <p class="playground-eyebrow">Developer Mode & Architecture</p>
                  <h2 class="playground-display">
                    Design Tokens
                  </h2>
                  <p class="playground-desc">
                    Color palettes, semantic scales, typography hierarchy, spacing constants, and border radius tokens.
                  </p>
                </div>
                <Badge variant="brocoli">
                  {{
                    semanticTokens.length +
                    colorPalettes.reduce(
                      (total, palette) => total + palette.steps.length,
                      0,
                    )
                  }}
                  tokens
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
      </main>

      <!-- Figma-style Marketing Footer (design.md) -->
      <footer class="playground-footer bg-white border-t border-black-200">
        <div class="playground-container py-12">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div class="col-span-2 space-y-4">
              <div class="flex items-center gap-2">
                <div class="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                  <PackageCheck class="h-4 w-4" />
                </div>
                <span class="text-omicron font-black tracking-tight text-black">Gwind</span>
              </div>
              <p class="text-sigma text-black-500 max-w-sm">
                Enterprise Design System for Vue 3 and Tailwind CSS v4. Modular, accessible, and ready for high-scale applications.
              </p>
              <div class="flex items-center gap-3 pt-2">
                <span class="inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-omega font-bold text-lime-700">
                  Vue 3.5+
                </span>
                <span class="inline-flex items-center rounded-full bg-black-100 px-2.5 py-0.5 text-omega font-bold text-black-700">
                  Tailwind v4
                </span>
                <span class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-omega font-bold text-blue-700">
                  Reka UI
                </span>
              </div>
            </div>
            <div class="space-y-3">
              <h5 class="text-omega font-bold uppercase tracking-wider text-black-400">Components</h5>
              <ul class="space-y-2 text-sigma text-black-600">
                <li><a href="#button" class="hover:text-black transition-colors">Buttons & Pills</a></li>
                <li><a href="#input" class="hover:text-black transition-colors">Inputs & Forms</a></li>
                <li><a href="#card" class="hover:text-black transition-colors">Cards & Panels</a></li>
                <li><a href="#dialog" class="hover:text-black transition-colors">Dialogs & Modals</a></li>
                <li><a href="#tabs" class="hover:text-black transition-colors">Tabs & Navigation</a></li>
              </ul>
            </div>
            <div class="space-y-3">
              <h5 class="text-omega font-bold uppercase tracking-wider text-black-400">Design System</h5>
              <ul class="space-y-2 text-sigma text-black-600">
                <li><a href="#tokens" class="hover:text-black transition-colors">Design Tokens</a></li>
                <li><a href="#inventory" class="hover:text-black transition-colors">Component Index</a></li>
                <li><a href="#badge" class="hover:text-black transition-colors">Color Palette</a></li>
                <li><a href="#table" class="hover:text-black transition-colors">Feature Matrix</a></li>
              </ul>
            </div>
            <div class="space-y-3">
              <h5 class="text-omega font-bold uppercase tracking-wider text-black-400">Resources</h5>
              <ul class="space-y-2 text-sigma text-black-600">
                <li><a href="http://localhost:5173" target="_blank" class="hover:text-black transition-colors">VitePress Docs</a></li>
                <li><a href="https://github.com" target="_blank" class="hover:text-black transition-colors">CLI Package</a></li>
                <li><a href="https://figma.com" target="_blank" class="hover:text-black transition-colors">Figma UI Kit</a></li>
                <li><a href="#toast" class="hover:text-black transition-colors">Release Notes</a></li>
              </ul>
            </div>
          </div>
          <div class="pt-8 border-t border-black-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-omega text-black-400">
            <p>© 2026 Gwind Monorepo. Built with precision for enterprise UX.</p>
            <div class="flex items-center gap-6">
              <a href="#" class="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-black transition-colors">Terms of Service</a>
              <a href="#" class="hover:text-black transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </TooltipProvider>
</template>
