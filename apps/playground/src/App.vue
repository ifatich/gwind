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
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  CreditCard,
  ExternalLink,
  FileText,
  Home,
  Landmark,
  Lock,
  Mail,
  PackageCheck,
  Palette,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UploadCloud,
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

// Button dynamic loading state
const isSubmitting = ref(false);
function triggerSubmit() {
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
  }, 1800);
}

// Dialog States
const isDialogOpen = ref(false);
const isDialogOpen2 = ref(false);
const isDialogOpen3 = ref(false);
const isPelunasanModalOpen = ref(false);

// Combobox States
const selectedFramework = ref("");
const selectedCabang = ref("Cabang Kramat Raya - Jakarta Pusat");
const listCabang = [
  "Cabang Kramat Raya - Jakarta Pusat",
  "Cabang Salemba - Jakarta Pusat",
  "Cabang Depok Timur - Depok",
  "Cabang Sudirman - Bandung",
  "Cabang Kayutangan - Malang",
  "Cabang Darmo - Surabaya",
  "Cabang Renon - Denpasar",
  "Cabang Somba Opu - Makassar",
  "Cabang Putri Hijau - Medan",
];

// Progress & Pagination States
const progressValue = ref(85);
const paginationPage = ref(5);

// Dropdown States
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

// Datepicker States
const datepickerValue = ref("2026-06-21");
const tanggalJatuhTempo = ref("2026-09-15");
const tanggalLahir = ref("1995-08-17");

// FilePicker & ImagePicker States
const filePickerFile1 = ref<File | null>(null);
const filePickerFile2 = ref<File | null>(null);
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

// Currency & Numbers Real-case States
const rupiahValue = ref<number | null>(1000000);
const simulasiPinjaman = ref<number | null>(15000000);
const tabunganEmas = ref<number | null>(500000);
const rupiahError = ref<number | null>(10000);
const rupiahDisabled = ref<number | null>(5000000);

const persentaseValue = ref<number | null>(50);
const bungaPinjaman = ref<number | null>(1.15);
const diskonPromo = ref<number | null>(15);

const addAmountVal1 = ref(1);
const addAmountVal2 = ref(2);
const addAmountValDisabled = ref(1);
const gramEmas = ref(5);
const totalBeliEmas = computed(() =>
  ((gramEmas.value || 0) * 1450000).toLocaleString("id-ID")
);

// Form Controls States
const textareaValue = ref("");
const catatanTransaksi = ref(
  "Harap sertakan kwitansi pelunasan dan bukti transfer saat barang diantar ke alamat nasabah."
);
const switchValue = ref(true);
const notifWhatsapp = ref(true);
const autodebetTabungan = ref(false);

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
const asuransiBarang = ref(true);
const syaratKetentuan = ref(true);

const radioPrimitive = ref("on");
const radioWebsite = ref("website-active");
const radioMobile = ref("mobile-active");
const radioHorizontal = ref("horizontal-a");
const radioVertical = ref("vertical-a");
const metodePengiriman = ref("cabang");
const jenisJaminan = ref("emas-batangan");

// Table Mock Data
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

// Sections in Logical Domain Hierarchy
const sections = [
  // 1. Overview
  { id: "inventory", label: "Inventory" },

  // 2. General & Actions
  { id: "button", label: "Button" },
  { id: "link", label: "Link" },

  // 3. Form & Data Entry
  { id: "input", label: "Input" },
  { id: "input-rupiah", label: "Input Rupiah" },
  { id: "input-persentase", label: "Input Persentase" },
  { id: "add-amount", label: "Add Amount" },
  { id: "textarea", label: "Textarea" },
  { id: "label", label: "Label" },
  { id: "checkbox", label: "Checkbox" },
  { id: "radio-group", label: "Radio Group" },
  { id: "select", label: "Select" },
  { id: "combobox", label: "Combobox" },
  { id: "datepicker", label: "Datepicker" },
  { id: "switch", label: "Switch" },
  { id: "file-picker", label: "File Picker" },
  { id: "image-picker", label: "Image Picker" },

  // 4. Data Display & Layout
  { id: "avatar", label: "Avatar" },
  { id: "badge", label: "Badge" },
  { id: "card", label: "Card" },
  { id: "table", label: "Table" },
  { id: "accordion", label: "Accordion" },
  { id: "carousel", label: "Carousel" },
  { id: "divider", label: "Divider" },
  { id: "breadcrumb", label: "Breadcrumb" },
  { id: "pagination", label: "Pagination" },
  { id: "tabs", label: "Tabs" },

  // 5. Feedback & Floating Surfaces
  { id: "alert", label: "Alert" },
  { id: "progress", label: "Progress" },
  { id: "spinner", label: "Spinner" },
  { id: "toast", label: "Toast" },
  { id: "dialog", label: "Dialog" },
  { id: "popover", label: "Popover" },
  { id: "tooltip", label: "Tooltip" },
  { id: "dropdown", label: "Dropdown" },

  // 6. Architecture
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

            <!-- 2. GENERAL & ACTIONS -->
            <!-- Button -->
            <section
              id="button"
              class="playground-section playground-panel p-6 space-y-6"
            >
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p class="playground-eyebrow">Calls to Action & Button Primitives</p>
                  <h2 class="text-xl font-bold text-black-900">Button</h2>
                  <p class="text-sigma text-black-500">
                    Primary monochrome pills, secondary canvas buttons, tertiary links, social auth, and circular icon triggers.
                  </p>
                </div>
                <Badge variant="brocoli">Core Action</Badge>
              </div>

              <!-- Real-world Case: Multi-Step Transaction Action Bar -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Multi-Step Transaction Action Bar</h3>
                  </div>
                  <Button variant="outline" size="sm" @click="triggerSubmit">
                    Simulasi Loading
                  </Button>
                </div>
                <div class="playground-case-body">
                  <p class="text-omega text-black-500 mb-3">Aksi navigasi formulir pengajuan pinjaman dengan state loading asinkron.</p>
                  <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-black-100">
                    <Button variant="ghost" class="text-black-600">
                      Batal
                    </Button>
                    <div class="flex items-center gap-3">
                      <Button variant="outline">
                        Simpan Draft
                      </Button>
                      <Button :loading="isSubmitting" loading-label="Memproses..." @click="triggerSubmit">
                        Lanjut Pembayaran <ArrowRight class="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
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
                  <Button loading loading-label="Memproses...">Loading State</Button>
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

            <!-- Link -->
            <section id="link" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Hyperlinks & Navigation</p>
                <h2 class="text-xl font-bold text-black-900">Link</h2>
                <p class="text-sigma text-black-500">
                  Semantic inline links with hover transitions, external indicators, and accessibility states.
                </p>
              </div>

              <!-- Real-world Case: Syarat & Ketentuan -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Legal, Persetujuan & Syarat Ketentuan</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Inline & External Links</span>
                </div>
                <div class="playground-case-body">
                  <p class="text-sigma text-black-700 leading-relaxed">
                    Dengan menekan tombol submit, Anda menyetujui <Link href="#" class="font-bold underline text-lime-600">Syarat & Ketentuan Layanan</Link> serta <Link href="#" class="font-bold underline text-lime-600">Kebijakan Privasi PT Pegadaian</Link>.
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-6 pt-2">
                <Link href="#" class="inline-flex items-center gap-1">
                  Default Link
                </Link>
                <Link href="#" class="inline-flex items-center gap-1 font-semibold text-lime-600 hover:underline">
                  External Portal <ExternalLink class="h-3.5 w-3.5" />
                </Link>
                <Link href="#" disabled>
                  Disabled Link State
                </Link>
              </div>
            </section>

            <!-- 3. FORM & DATA ENTRY -->
            <!-- Input & InputField -->
            <section id="input" class="playground-section playground-color-block block-lilac">
              <div class="mb-6">
                <p class="playground-eyebrow">Forms & Text Entry</p>
                <h2 class="playground-display">Input & InputField</h2>
                <p class="playground-desc">
                  Single-line inputs, numeric formatters, prefix/suffix adornments, and action buttons.
                </p>
              </div>

              <!-- Real-world Case: Form Login & Identitas Nasabah -->
              <div class="playground-case-card mb-6">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Formulir Identitas & Kontak Nasabah</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Validasi Field & Prefix/Suffix Adornment</span>
                </div>
                <div class="playground-case-body">
                  <div class="grid gap-4 md:grid-cols-2">
                    <InputField
                      id="input-real-ktp"
                      label="Nomor Induk Kependudukan (NIK)"
                      placeholder="Contoh: 3171020101900005"
                    >
                      <template #label-icon>
                        <CircleHelp class="h-4 w-4 text-black-400" />
                      </template>
                    </InputField>
                    <InputField
                      id="input-real-email"
                      label="Alamat Email Terdaftar"
                      placeholder="nasabah@pegadaian.co.id"
                    >
                      <template #left-icon>
                        <Mail class="h-4 w-4 text-black-400" />
                      </template>
                    </InputField>
                  </div>
                </div>
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
                    <span class="text-sigma font-bold text-black-800">Prefix Text</span>
                    <span class="text-omega font-mono text-black-400">prefix-text</span>
                  </div>
                  <InputField
                    id="input-prefix"
                    label="Title"
                    prefix="https://"
                    placeholder="Placeholder"
                  />
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Suffix Text</span>
                    <span class="text-omega font-mono text-black-400">suffix-text</span>
                  </div>
                  <InputField
                    id="input-suffix"
                    label="Title"
                    suffix=".com"
                    placeholder="Placeholder"
                  />
                </div>

                <div class="playground-tile space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Clearable Field</span>
                    <span class="text-omega font-mono text-black-400">clearable</span>
                  </div>
                  <InputField
                    id="input-clearable"
                    label="Title"
                    clearable
                    value="Clear me"
                  />
                </div>
              </div>
            </section>

            <!-- Input Rupiah -->
            <section id="input-rupiah" class="playground-section playground-color-block block-lilac">
              <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p class="playground-eyebrow">Currency Formatting & Fintech Input</p>
                  <h2 class="playground-display">Input Rupiah</h2>
                  <p class="playground-desc">
                    Functional currency input with automatic thousands separators, paste normalization, and raw integer emitting.
                  </p>
                </div>
                <Badge variant="brocoli">Fintech Component</Badge>
              </div>

              <!-- Real-world Case: Simulasi Pinjaman Gadai -->
              <div class="playground-case-card mb-6">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Fintech Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Simulasi Pengajuan Pinjaman Gadai Emas</h3>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-omega font-bold text-black-500">Emit Raw Value:</span>
                    <code class="rounded bg-black-900 px-3 py-1 font-mono text-omega font-bold text-lime-400">
                      {{ simulasiPinjaman === null ? 'null' : simulasiPinjaman }}
                    </code>
                  </div>
                </div>
                <div class="playground-case-body space-y-4">
                  <p class="text-omega text-black-500">Mendukung format ribuan interaktif dan integrasi dua arah otomatis.</p>
                  <div class="grid gap-4 md:grid-cols-2">
                    <InputRupiah
                      id="input-rupiah-simulasi"
                      v-model="simulasiPinjaman"
                      label="Uang Pinjaman Diajukan"
                      placeholder="Masukkan nominal rupiah"
                    />
                    <InputRupiah
                      id="input-rupiah-tabungan"
                      v-model="tabunganEmas"
                      label="Top-Up Saldo Tabungan Emas"
                      placeholder="Nominal top up"
                    />
                  </div>
                </div>
              </div>

              <div class="grid gap-4 md:grid-cols-3">
                <div class="playground-tile space-y-2">
                  <span class="text-sigma font-bold text-black-800">Default (Rp 1.000.000)</span>
                  <InputRupiah
                    id="input-rupiah-default"
                    v-model="rupiahValue"
                    label="Rupiah"
                    placeholder="Placeholder"
                  />
                </div>

                <div class="playground-tile space-y-2">
                  <span class="text-sigma font-bold text-black-800">Error State (Batas Minimum)</span>
                  <InputRupiah
                    id="input-rupiah-error"
                    v-model="rupiahError"
                    label="Rupiah"
                    error="Jumlah pinjaman minimal Rp 50.000"
                  />
                </div>

                <div class="playground-tile space-y-2">
                  <span class="text-sigma font-bold text-black-800">Disabled State</span>
                  <InputRupiah
                    id="input-rupiah-disabled"
                    v-model="rupiahDisabled"
                    label="Maksimum Limit"
                    disabled
                  />
                </div>
              </div>
            </section>

            <!-- Input Persentase -->
            <section id="input-persentase" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Rate & Percentage Input</p>
                <h2 class="text-xl font-bold text-black-900">Input Persentase</h2>
                <p class="text-sigma text-black-500">
                  Input formatted for interest rates, discount margins, and percentage adjustments.
                </p>
              </div>

              <!-- Real-world Case: Bunga Pinjaman & Diskon Promo -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Fintech Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Perhitungan Tarif Sewa Modal & Promo</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Interest Rates & Discount Stepper</span>
                </div>
                <div class="playground-case-body">
                  <div class="grid gap-4 md:grid-cols-2">
                    <div class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-sigma font-bold text-black-800">Sewa Modal / Bunga Bulanan</span>
                        <span class="text-omega font-mono text-black-500">Emit: {{ bungaPinjaman }}%</span>
                      </div>
                      <InputPersentase
                        id="input-persentase-bunga"
                        v-model="bungaPinjaman"
                        label="Tarif Sewa Modal"
                        placeholder="0.00"
                      />
                    </div>

                    <div class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-sigma font-bold text-black-800">Diskon Promo Transaksi</span>
                        <span class="text-omega font-mono text-black-500">Emit: {{ diskonPromo }}%</span>
                      </div>
                      <InputPersentase
                        id="input-persentase-diskon"
                        v-model="diskonPromo"
                        label="Persentase Diskon"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Add Amount -->
            <section id="add-amount" class="playground-section playground-panel p-6 space-y-5">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p class="playground-eyebrow">Numerical Controls & Quantity Stepper</p>
                  <h2 class="text-xl font-bold text-black-900">Add Amount</h2>
                  <p class="text-sigma text-black-500">
                    Quantity counter stepper control for increments, grammage selection, and unit counts.
                  </p>
                </div>
                <Badge variant="brocoli">Controls</Badge>
              </div>

              <!-- Real-world Case: Pembelian Gramasi Emas -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Fintech Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Pembelian Gramasi Emas Batangan</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Estimasi harga acuan Rp 1.450.000 / gram</span>
                </div>
                <div class="playground-case-body">
                  <div class="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 class="text-sigma font-bold text-black-800">Tentukan Jumlah Gramasi</h4>
                      <p class="text-omega text-black-500">Kuantitas minimal 1 gram hingga 100 gram per transaksi.</p>
                    </div>
                    <div class="flex items-center gap-6">
                      <AddAmount v-model="gramEmas" :min="1" :max="100" class="w-36" />
                      <div class="text-right">
                        <span class="block text-omega text-black-500 font-semibold">Total Estimasi</span>
                        <span class="text-omicron font-black text-black-900">Rp {{ totalBeliEmas }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid gap-4 md:grid-cols-3">
                <div class="playground-tile space-y-2">
                  <span class="text-sigma font-bold text-black-800">Default (Value = 1)</span>
                  <div class="flex items-center gap-4">
                    <AddAmount v-model="addAmountVal1" class="w-32" />
                  </div>
                </div>

                <div class="playground-tile space-y-2">
                  <span class="text-sigma font-bold text-black-800">Active State (Value = 2)</span>
                  <div class="flex items-center gap-4">
                    <AddAmount v-model="addAmountVal2" class="w-32" />
                  </div>
                </div>

                <div class="playground-tile space-y-2">
                  <span class="text-sigma font-bold text-black-800">Disabled State</span>
                  <div class="flex items-center gap-4">
                    <AddAmount v-model="addAmountValDisabled" disabled class="w-32" />
                  </div>
                </div>
              </div>
            </section>

            <!-- Textarea -->
            <section id="textarea" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Multi-Line Text & Counter</p>
                <h2 class="text-xl font-bold text-black-900">Textarea</h2>
                <p class="text-sigma text-black-500">
                  Multiline fields with automatic character count tracking, placeholder, error, and auto-growing height.
                </p>
              </div>

              <!-- Real-world Case: Catatan Pengiriman & Keluhan -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Catatan Transaksi Khusus</h3>
                  </div>
                  <span class="text-omega font-mono text-lime-700 bg-lime-100 px-2.5 py-0.5 rounded-full font-bold">Auto show-count</span>
                </div>
                <div class="playground-case-body">
                  <TextareaField
                    id="textarea-catatan"
                    v-model="catatanTransaksi"
                    label="Instruksi Pengantaran / Catatan Khusus"
                    placeholder="Tuliskan catatan detail untuk petugas kurir atau penaksir..."
                    :maxlength="100"
                  />
                </div>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div class="playground-tile space-y-2">
                  <span class="text-sigma font-bold text-black-800">Error State</span>
                  <TextareaField
                    id="textarea-error"
                    label="Catatan Keluhan"
                    error="Deskripsi keluhan wajib diisi minimal 20 karakter."
                    placeholder="Tuliskan kendala yang Anda alami..."
                  />
                </div>

                <div class="playground-tile space-y-2">
                  <span class="text-sigma font-bold text-black-800">Disabled State</span>
                  <TextareaField
                    id="textarea-disabled"
                    label="Syarat Tambahan (Readonly)"
                    disabled
                    value="Data catatan ini telah terkunci dan tidak dapat disunting kembali."
                  />
                </div>
              </div>
            </section>

            <!-- Label -->
            <section id="label" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Form Field Labels</p>
                <h2 class="text-xl font-bold text-black-900">Label</h2>
                <p class="text-sigma text-black-500">
                  Accessible labels supporting required indicators, tooltips, captions, and disabled states.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-6 pt-2">
                <Label>Standard Label</Label>
                <Label required>Required Field (*)</Label>
                <Label class="text-black-400">Disabled Field Label</Label>
              </div>
            </section>

            <!-- Checkbox -->
            <section id="checkbox" class="playground-section playground-color-block block-cream space-y-5">
              <div class="mb-4">
                <p class="playground-eyebrow">Selection Controls & Consent</p>
                <h2 class="playground-display">Checkbox</h2>
                <p class="playground-desc">
                  Primitive boxes, desktop and mobile field rows, indeterminate state, and multi-selection groups.
                </p>
              </div>

              <!-- Real-world Case: Persetujuan Asuransi & Syarat -->
              <div class="playground-case-card mb-6">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Opsi Proteksi & Akad Transaksi Gadai</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Consent & Multi-Option Selection</span>
                </div>
                <div class="playground-case-body">
                  <div class="grid gap-3 md:grid-cols-2">
                    <CheckboxField
                      id="chk-real-asuransi"
                      v-model="asuransiBarang"
                      label="Asuransi Barang Ekstra"
                      caption="Perlindungan ganti rugi 100% nilai taksiran pasar barang jaminan."
                    />
                    <CheckboxField
                      id="chk-real-syarat"
                      v-model="syaratKetentuan"
                      label="Saya menyetujui seluruh ketentuan akad gadai syariah"
                    />
                  </div>
                </div>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div class="playground-tile space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Primitive Control</span>
                    <span class="text-omega font-mono text-black-400">primitive</span>
                  </div>
                  <div class="flex flex-wrap items-center gap-3">
                    <Checkbox id="chk-primitive-off" />
                    <Checkbox id="chk-primitive-on" v-model="checkboxPrimitiveChecked" />
                    <Checkbox id="chk-primitive-indet" v-model="checkboxPrimitiveIndeterminate" />
                    <Checkbox id="chk-primitive-disabled" disabled />
                  </div>
                </div>

                <div class="playground-tile space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Website Desktop Mode</span>
                    <span class="text-omega font-mono text-black-400">desktop</span>
                  </div>
                  <div class="grid gap-2">
                    <CheckboxField
                      id="chk-desktop-a"
                      v-model="checkboxWebsiteActive"
                      label="Opsi Terpilih (Active)"
                    />
                    <CheckboxField
                      id="chk-desktop-caption"
                      v-model="checkboxWebsiteCaption"
                      label="Opsi dengan Keterangan"
                      caption="Sub-teks penjelas tambahan yang informatif."
                    />
                  </div>
                </div>
              </div>
            </section>

            <!-- Radio Group -->
            <section id="radio-group" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Segmented Choice & Options</p>
                <h2 class="text-xl font-bold text-black-900">Radio Group</h2>
                <p class="text-sigma text-black-500">
                  Segmented single-choice options in horizontal and vertical configurations.
                </p>
              </div>

              <!-- Real-world Case: Pilihan Metode Pengiriman -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Metode Pengambilan Barang Gadai Lunas</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Single-Choice Segments</span>
                </div>
                <div class="playground-case-body">
                  <RadioGroup v-model="metodePengiriman" class="grid gap-3 md:grid-cols-2">
                    <RadioGroupField
                      id="radio-metode-cabang"
                      value="cabang"
                      label="Ambil Langsung di Kantor Cabang"
                      caption="Gratis biaya antar, barang dapat diambil pada jam operasional."
                    />
                    <RadioGroupField
                      id="radio-metode-kurir"
                      value="kurir"
                      label="Kirim via Kurir Khusus Berasuransi"
                      caption="Estimasi tiba 1-2 hari kerja dengan pengamanan berlapis."
                    />
                  </RadioGroup>
                </div>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div class="playground-tile space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Horizontal Group</span>
                    <span class="text-omega font-mono text-black-400">horizontal</span>
                  </div>
                  <RadioGroup
                    v-model="radioHorizontal"
                    alignment="horizontal"
                  >
                    <RadioGroupField id="radio-h-1" value="horizontal-a" label="Pilihan A" />
                    <RadioGroupField id="radio-h-2" value="horizontal-b" label="Pilihan B" />
                  </RadioGroup>
                </div>

                <div class="playground-tile space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sigma font-bold text-black-800">Vertical Group</span>
                    <span class="text-omega font-mono text-black-400">vertical</span>
                  </div>
                  <RadioGroup
                    v-model="radioVertical"
                    alignment="vertical"
                  >
                    <RadioGroupField id="radio-v-1" value="vertical-a" label="Opsi Reguler" caption="Proses standar 24 jam" />
                    <RadioGroupField id="radio-v-2" value="vertical-b" label="Opsi Kilat" caption="Proses instan 15 menit" />
                  </RadioGroup>
                </div>
              </div>
            </section>

            <!-- Select -->
            <section id="select" class="playground-section playground-color-block block-mint space-y-4">
              <div class="mb-4">
                <p class="playground-eyebrow">Dropdown List Selection</p>
                <h2 class="playground-display">Select</h2>
                <p class="playground-desc">
                  Trigger, value, content, grouped categories, labels, separators, and scroll buttons.
                </p>
              </div>

              <!-- Real-world Case: Pilihan Jenis Jaminan -->
              <div class="playground-case-card mb-6">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Kategori Barang Jaminan Gadai</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Grouped Categories & Separator</span>
                </div>
                <div class="playground-case-body">
                  <Select v-model="jenisJaminan">
                    <SelectTrigger class="w-full max-w-md bg-white">
                      <SelectValue placeholder="Pilih jenis jaminan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Logam Mulia</SelectLabel>
                        <SelectItem value="emas-batangan">Emas Batangan (Antam / UBS / Lotus)</SelectItem>
                        <SelectItem value="perhiasan-emas">Perhiasan Emas (Kalung / Cincin / Gelang)</SelectItem>
                        <SelectItem value="dinar-dirham">Koin Dinar & Dirham</SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Elektronik & Gadget</SelectLabel>
                        <SelectItem value="smartphone">Smartphone & Tablet</SelectItem>
                        <SelectItem value="laptop">Laptop / MacBook</SelectItem>
                        <SelectItem value="kamera">Kamera DSLR / Mirrorless</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            <!-- Combobox -->
            <section id="combobox" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Autocomplete Search & Filter</p>
                <h2 class="text-xl font-bold text-black-900">Combobox</h2>
                <p class="text-sigma text-black-500">
                  Searchable input trigger with popover list filter, empty results handling, and item check indicators.
                </p>
              </div>

              <!-- Real-world Case: Pencarian Kantor Cabang -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Pencarian Kantor Cabang Pegadaian</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Search Autocomplete & Dynamic Filter</span>
                </div>
                <div class="playground-case-body space-y-3">
                  <Combobox v-model="selectedCabang">
                    <ComboboxAnchor>
                      <ComboboxTrigger as-child>
                        <Button variant="outline" class="w-full max-w-md justify-between bg-white text-black-800">
                          {{ selectedCabang || 'Cari nama cabang atau kota...' }}
                          <ChevronDown class="h-4 w-4 opacity-50" />
                        </Button>
                      </ComboboxTrigger>
                    </ComboboxAnchor>
                    <ComboboxList class="w-full max-w-md">
                      <ComboboxInput placeholder="Ketik nama cabang..." />
                      <ComboboxEmpty>Kantor cabang tidak ditemukan.</ComboboxEmpty>
                      <ComboboxGroup>
                        <ComboboxItem
                          v-for="cabang in listCabang"
                          :key="cabang"
                          :value="cabang"
                          @select="selectedCabang = cabang"
                        >
                          <ComboboxItemIndicator>
                            <Check class="h-4 w-4 text-lime-600" />
                          </ComboboxItemIndicator>
                          {{ cabang }}
                        </ComboboxItem>
                      </ComboboxGroup>
                    </ComboboxList>
                  </Combobox>
                </div>
              </div>
            </section>

            <!-- Datepicker -->
            <section id="datepicker" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Calendar & Date Selection</p>
                <h2 class="text-xl font-bold text-black-900">Datepicker</h2>
                <p class="text-sigma text-black-500">
                  Input-style trigger with calendar popup for selecting dates with min/max restrictions.
                </p>
              </div>

              <!-- Real-world Case: Tanggal Jatuh Tempo & Lahir -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Tanggal Jatuh Tempo & Tanggal Lahir</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Min/Max Date Range Restriction</span>
                </div>
                <div class="playground-case-body">
                  <div class="grid gap-6 md:grid-cols-2">
                    <div class="space-y-2">
                      <span class="text-sigma font-bold text-black-800">Jatuh Tempo Pinjaman (Disable Past Dates)</span>
                      <Datepicker
                        v-model="tanggalJatuhTempo"
                        placeholder="Pilih tanggal jatuh tempo"
                        disable-past-dates
                        trigger-class="w-full"
                      />
                    </div>

                    <div class="space-y-2">
                      <span class="text-sigma font-bold text-black-800">Tanggal Lahir Nasabah (Disable Future Dates)</span>
                      <Datepicker
                        v-model="tanggalLahir"
                        placeholder="Pilih tanggal lahir"
                        disable-future-dates
                        trigger-class="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Switch -->
            <section id="switch" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Boolean Toggles & Settings</p>
                <h2 class="text-xl font-bold text-black-900">Switch Toggle</h2>
                <p class="text-sigma text-black-500">
                  Immediate on/off state toggles for user settings, dark mode, and feature flags.
                </p>
              </div>

              <!-- Real-world Case: Notifikasi & Autodebet -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Pengaturan Notifikasi & Autodebet</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Instant State Toggles</span>
                </div>
                <div class="playground-case-body">
                  <div class="grid gap-4 md:grid-cols-2">
                    <div class="rounded-xl border border-black-100 bg-black-50/40 p-4 flex items-center justify-between">
                      <div>
                        <h4 class="text-sigma font-bold text-black-800">Notifikasi Pengingat WhatsApp</h4>
                        <p class="text-omega text-black-500">Kirim reminder 3 hari sebelum masa gadai jatuh tempo.</p>
                      </div>
                      <Switch v-model="notifWhatsapp" />
                    </div>

                    <div class="rounded-xl border border-black-100 bg-black-50/40 p-4 flex items-center justify-between">
                      <div>
                        <h4 class="text-sigma font-bold text-black-800">Autodebet Tabungan Emas</h4>
                        <p class="text-omega text-black-500">Debet otomatis saldo setiap tanggal 1 awal bulan.</p>
                      </div>
                      <Switch v-model="autodebetTabungan" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- File Picker -->
            <section id="file-picker" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Document & Asset Uploads</p>
                <h2 class="text-xl font-bold text-black-900">File Picker</h2>
                <p class="text-sigma text-black-500">
                  Dropzone file uploaders for non-image documents (PDF, CSV, Excel, Word).
                </p>
              </div>

              <!-- Real-world Case: Upload Rekening Koran & NPWP -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Upload Dokumen Persyaratan & Bukti Finansial</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">MIME Type Restriction & Action Button</span>
                </div>
                <div class="playground-case-body">
                  <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                      <h4 class="text-sigma font-bold text-black-700">Upload Rekening Koran (PDF Only)</h4>
                      <p class="text-sm text-black-500">Spesifik hanya menerima dokumen format .pdf resmi dari bank.</p>
                      <div class="flex items-center gap-4">
                        <FilePicker v-model="filePickerFile2" title="Upload Dokumen PDF" accept=".pdf" rightAction />
                      </div>
                    </div>

                    <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                      <h4 class="text-sigma font-bold text-black-700">Upload Dokumen Pendukung Lainnya</h4>
                      <p class="text-sm text-black-500">Menerima dokumen bukti pendukung (PDF, Excel, CSV).</p>
                      <div class="flex items-center gap-4">
                        <FilePicker v-model="filePickerFile1" title="Upload Dokumen" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Image Picker & Image Display -->
            <section id="image-picker" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Image Assets & Media Displays</p>
                <h2 class="text-xl font-bold text-black-900">Form Image (Input) & Image Display</h2>
                <p class="text-sigma text-black-500">
                  Image uploaders with aspect ratio previews, multi-image slider, metadata tags, and fallback displays.
                </p>
              </div>

              <!-- Real-world Case: Foto KTP & Fisik Jaminan -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Foto Identitas KTP & Fisik Barang Jaminan</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Aspect Ratio 4:3, Small 80x80 & Multi-Image Slider</span>
                </div>
                <div class="playground-case-body space-y-6">
                  <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                      <h4 class="text-sigma font-bold text-black-700">Foto KTP / Identitas (Size: Small 80x80)</h4>
                      <p class="text-sm text-black-500">Ukuran ringkas 80x80px untuk pas foto atau avatar identitas.</p>
                      <div class="flex items-center gap-4">
                        <ImagePicker v-model="imagePickerSmall" size="small" />
                      </div>
                    </div>

                    <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                      <h4 class="text-sigma font-bold text-black-700">Foto Barang Jaminan (Size: Large 4:3)</h4>
                      <p class="text-sm text-black-500">Ukuran besar dengan rasio 4:3 untuk foto detail perhiasan emas.</p>
                      <div class="flex flex-col gap-2">
                        <ImagePicker v-model="imagePickerLarge43" size="large" aspectRatio="4:3" />
                      </div>
                    </div>
                  </div>

                  <div class="rounded-xl border border-black-200 p-4 bg-white space-y-3">
                    <h4 class="text-sigma font-bold text-black-700">Multi-Image Slider dengan Metadata & CTA</h4>
                    <p class="text-sm text-black-500">Mendukung upload beberapa foto fisik barang jaminan sekaligus.</p>
                    <ImagePicker 
                      v-model="imagePickerMultiple" 
                      size="large" 
                      aspectRatio="4:3"
                      title="Foto Fisik Barang Gadai"
                      description="Upload 1 hingga 5 foto detail barang dari berbagai sisi"
                      upload-button-text="Tambah Foto Jaminan"
                      metadata="Format: JPG/PNG, Maksimal 5MB per file"
                      multiple
                    />
                  </div>
                </div>
              </div>
            </section>

            <!-- 4. DATA DISPLAY & LAYOUT -->
            <!-- Avatar -->
            <section id="avatar" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">User Profiles & Identifiers</p>
                <h2 class="text-xl font-bold text-black-900">Avatar</h2>
                <p class="text-sigma text-black-500">
                  Visual identity representations for user accounts, collaborative editors, and workspace teams.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-6 pt-2">
                <div class="flex items-center gap-3">
                  <Avatar src="https://i.pravatar.cc/96?img=12" alt="Budi Santoso" size="lg" />
                  <div>
                    <h4 class="text-sigma font-bold text-black-800">Budi Santoso</h4>
                    <p class="text-omega text-black-500">Nasabah Prioritas</p>
                  </div>
                </div>
                <Avatar fallback="PG" size="md" />
                <Avatar fallback="UI" size="sm" />
                <Avatar alt="Pegadaian" size="xs" />
              </div>
            </section>

            <!-- Badge -->
            <section id="badge" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Status Pills & Taxonomy</p>
                <h2 class="text-xl font-bold text-black-900">Badge</h2>
                <p class="text-sigma text-black-500">
                  Status badges and category tags in semantic color shades (Green, Broccoli, Orange, Blue, Red, Outline).
                </p>
              </div>

              <!-- Real-world Case: Status Pinjaman Gadai -->
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <Badge>Lancar (Green)</Badge>
                <Badge variant="brocoli">Dalam Proses (Broccoli)</Badge>
                <Badge variant="orange">Mendekati Jatuh Tempo (Orange)</Badge>
                <Badge variant="blue">Verifikasi Dokumen (Blue)</Badge>
                <Badge variant="red">Jatuh Tempo / Peringatan (Red)</Badge>
                <Badge variant="outline">Draft Transaksi</Badge>
              </div>
            </section>

            <!-- Card -->
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
                <!-- Variant 1: Portofolio Tabungan Emas -->
                <Card class="bg-white">
                  <CardHeader>
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col gap-y-1">
                        <CardTitle>Tabungan Emas</CardTitle>
                        <CardDescription>No. Rek: 1234-5678-9101</CardDescription>
                      </div>
                      <Badge variant="brocoli">Aktif</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div class="rounded-lg bg-lime-50 p-4 border border-lime-200">
                      <span class="text-omega font-semibold text-lime-700">Saldo Fisik Emas</span>
                      <p class="text-xl font-black text-black-900 mt-1">12.5400 gr</p>
                      <p class="text-omega text-black-500 mt-0.5">≈ Rp 18.183.000</p>
                    </div>
                  </CardContent>
                  <CardFooter class="flex gap-2">
                    <Button class="w-full" size="sm">Top Up</Button>
                    <Button variant="outline" class="w-full" size="sm">Jual Emas</Button>
                  </CardFooter>
                </Card>

                <!-- Variant 2: Card with Image Promo -->
                <Card class="bg-white">
                  <CardHeader>
                    <CardTitle>Promo Cashback Gadai</CardTitle>
                    <CardDescription>Khusus transaksi digital bulan ini</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div class="mb-4 h-32 w-full overflow-hidden rounded-lg bg-black-200">
                      <img src="https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=600" alt="Promo Gold" class="h-full w-full object-cover" />
                    </div>
                    <p class="text-sigma font-bold text-black-800">Cashback s.d. Rp 500.000</p>
                    <p class="mt-1 text-omega text-black-500">
                      Gunakan kode voucher GADAIBERKAH saat pengajuan di aplikasi Pegadaian Digital.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button class="w-full" size="sm">Klaim Promo</Button>
                  </CardFooter>
                </Card>

                <!-- Variant 3: Minimal Card -->
                <Card class="bg-white">
                  <CardContent class="pt-6">
                    <div class="flex items-center gap-3 mb-3">
                      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <ShieldCheck class="h-5 w-5" />
                      </div>
                      <div>
                        <h4 class="text-sigma font-bold text-black-900">Jaminan Aman 100%</h4>
                        <p class="text-omega text-black-500">Tersimpan di Khazanah Pegadaian</p>
                      </div>
                    </div>
                    <p class="text-omega text-black-600 leading-relaxed">
                      Barang jaminan disimpan di ruang penyimpanan berspesifikasi keamanan tinggi dengan asuransi penuh.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <!-- Table & Data Table -->
            <section id="table" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Data Matrices & Tabular Records</p>
                <h2 class="text-xl font-bold text-black-900">Table & Data Table</h2>
                <p class="text-sigma text-black-500">
                  Data-driven comparison matrices, zebra striped rows, and dense tabular records.
                </p>
              </div>

              <div class="grid gap-6">
                <div class="rounded-xl border border-black-100 bg-white p-4 space-y-4">
                  <h3 class="text-sigma font-bold text-black-800">Tabel Tarif Sewa Modal dan Premi Pinjaman Pegadaian</h3>
                  <DataTable :columns="tableColumns" :rows="tableRows" />
                  <Alert variant="destructive" class="border-red-500 bg-red-500 p-3 text-white">
                    <AlertDescription class="!text-omega font-semibold leading-[18px] text-white">
                      Penyaluran Produk dihentikan sementara sesuai dengan ID Nomor 42/ID/2020 Penghentian Sementara Penyaluran Produk Pegadaian Kreasi Express Loan.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </section>

            <!-- Accordion -->
            <section id="accordion" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Collapsible Disclosures</p>
                <h2 class="text-xl font-bold text-black-900">Accordion</h2>
                <p class="text-sigma text-black-500">
                  Expandable FAQ and detail sections supporting single-open and multi-collapse modes.
                </p>
              </div>

              <div class="rounded-xl border border-black-100 bg-white p-4">
                <Accordion type="single" collapsible default-value="faq-1">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>Apa saja syarat pengajuan Gadai Emas di Pegadaian?</AccordionTrigger>
                    <AccordionContent class="text-sigma text-black-600 leading-relaxed pt-2">
                      Syaratnya sangat mudah: Nasabah cukup membawa fisik barang jaminan (emas batangan atau perhiasan) beserta KTP asli yang masih berlaku ke kantor cabang Pegadaian terdekat.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>Bagaimana cara memperpanjang jangka waktu pinjaman gadai?</AccordionTrigger>
                    <AccordionContent class="text-sigma text-black-600 leading-relaxed pt-2">
                      Perpanjangan jangka waktu gadai dapat dilakukan dengan membayar sewa modal (bunga) yang telah berjalan langsung melalui aplikasi Pegadaian Digital atau di outlet Pegadaian.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>Apakah emas yang digadaikan dijamin keamanannya?</AccordionTrigger>
                    <AccordionContent class="text-sigma text-black-600 leading-relaxed pt-2">
                      Ya, barang jaminan emas nasabah disimpan di ruang penyimpanan besi berstandar perbankan (khazanah) dan diasuransikan 100% dari nilai taksiran pasar.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <!-- Carousel -->
            <section id="carousel" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Sliders & Hero Banners</p>
                <h2 class="text-xl font-bold text-black-900">Carousel & Banner Slider</h2>
                <p class="text-sigma text-black-500">
                  Interactive touch-enabled banner carousels with autoplay, slide indicators, and navigation controls.
                </p>
              </div>

              <div class="space-y-6">
                <div class="rounded-xl border border-black-200 bg-white p-4 space-y-3">
                  <h3 class="text-sigma font-bold text-black-800">1. BannerCarousel (Figma Preset)</h3>
                  <BannerCarousel
                    :items="carouselBannerSlides"
                    :autoplay="true"
                    :autoplay-interval="5000"
                  />
                </div>

                <div class="rounded-xl border border-black-200 bg-white p-4 space-y-3">
                  <h3 class="text-sigma font-bold text-black-800">2. Compound Primitive Carousel</h3>
                  <Carousel :loop="true" :autoplay="false" class="w-full">
                    <CarouselContent>
                      <CarouselItem v-for="i in 3" :key="i">
                        <div class="flex flex-col items-center justify-center min-h-[160px] p-8 rounded-xl bg-lime-600 text-white font-bold">
                          <span class="text-zeta">Promo Slide Item {{ i }}</span>
                          <span class="text-sigma font-normal opacity-90 mt-1">Modular CarouselItem component dengan swipe support</span>
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

            <!-- Divider -->
            <section id="divider" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Separators & Boundaries</p>
                <h2 class="text-xl font-bold text-black-900">Divider</h2>
                <p class="text-sigma text-black-500">
                  Hairline visual separators supporting both horizontal and vertical orientations.
                </p>
              </div>

              <div class="grid gap-4 pt-2">
                <Divider />
                <div class="flex h-12 items-center gap-4">
                  <span class="text-sigma font-bold text-black-800">Rincian Pokok</span>
                  <Divider orientation="vertical" />
                  <span class="text-sigma font-bold text-black-800">Rincian Sewa Modal</span>
                  <Divider orientation="vertical" />
                  <span class="text-sigma font-bold text-black-800">Biaya Administrasi</span>
                </div>
              </div>
            </section>

            <!-- Breadcrumb -->
            <section id="breadcrumb" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Navigation Trails</p>
                <h2 class="text-xl font-bold text-black-900">Breadcrumb</h2>
                <p class="text-sigma text-black-500">
                  Hierarchical navigation trails with item links, separators, truncation ellipsis, and page state.
                </p>
              </div>

              <div class="space-y-4 pt-2">
                <div class="rounded-xl border border-black-100 bg-white p-4 space-y-2">
                  <h3 class="text-omega font-bold uppercase tracking-wider text-black-400">Hierarki Standar Transaksi</h3>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Dashboard Nasabah</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Portofolio Gadai</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Detail Pinjaman #PG-88219</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>
            </section>

            <!-- Pagination -->
            <section id="pagination" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Page Navigation</p>
                <h2 class="text-xl font-bold text-black-900">Pagination</h2>
                <p class="text-sigma text-black-500">
                  Accessible pagination controls with smart truncation ellipsis and page change triggers.
                </p>
              </div>

              <div class="grid gap-4 pt-2">
                <div class="rounded-xl border border-black-100 bg-white p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span class="text-sigma font-bold text-black-600">Halaman Aktif: {{ paginationPage }} dari 20</span>
                  <Pagination v-model="paginationPage" :total-pages="20" />
                </div>
              </div>
            </section>

            <!-- Tabs -->
            <section id="tabs" class="playground-section playground-color-block block-coral space-y-6">
              <div class="mb-4">
                <p class="playground-eyebrow">Segmented View Switchers</p>
                <h2 class="playground-display">Tabs</h2>
                <p class="playground-desc">
                  Segmented tab switchers with smooth animated sliding indicators for pricing and views.
                </p>
              </div>

              <!-- Real-world Case: Tab Dashboard Nasabah -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Dashboard Portofolio & Transaksi Nasabah</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Animated Sliding Indicator Tabs</span>
                </div>
                <div class="playground-case-body">
                  <TabGroup default-value="ringkasan">
                    <TabTriggerGroup>
                      <TabTrigger value="ringkasan">Ringkasan Portofolio</TabTrigger>
                      <TabTrigger value="riwayat">Riwayat Transaksi</TabTrigger>
                      <TabTrigger value="dokumen">Dokumen & Akad</TabTrigger>
                    </TabTriggerGroup>
                    <TabContent value="ringkasan" class="pt-4 text-sigma text-black-600 leading-relaxed">
                      Total portofolio tabungan emas aktif: <strong>12.5400 gram</strong> dengan estimasi nilai pasar Rp 18.183.000.
                    </TabContent>
                    <TabContent value="riwayat" class="pt-4 text-sigma text-black-600 leading-relaxed">
                      Menampilkan 10 transaksi terakhir: Top-up saldo tabungan emas, perpanjangan gadai, dan cicilan emas.
                    </TabContent>
                    <TabContent value="dokumen" class="pt-4 text-sigma text-black-600 leading-relaxed">
                      Dokumen Surat Bukti Gadai (SBG) dan sertifikat kepemilikan emas digital tersedia untuk diunduh.
                    </TabContent>
                  </TabGroup>
                </div>
              </div>
            </section>

            <!-- 5. FEEDBACK & FLOATING SURFACES -->
            <!-- Alert -->
            <section id="alert" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">System Banners & Notifications</p>
                <h2 class="text-xl font-bold text-black-900">Alert</h2>
                <p class="text-sigma text-black-500">
                  Status alerts for critical warnings, success feedback, and system notifications with optional close actions.
                </p>
              </div>

              <div class="space-y-4 pt-2">
                <Alert>
                  <Check class="h-4 w-4 text-lime-600" />
                  <AlertTitle>Pembayaran Angsuran Berhasil</AlertTitle>
                  <AlertDescription>
                    Transaksi pelunasan sewa modal sebesar Rp 150.000 telah berhasil diverifikasi oleh sistem.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive" show-close>
                  <AlertCircle class="h-4 w-4" />
                  <AlertTitle>Peringatan Jatuh Tempo</AlertTitle>
                  <AlertDescription>
                    Masa pinjaman gadai nomor SBG-99210 akan jatuh tempo dalam 3 hari ke depan. Harap segera lakukan perpanjangan.
                  </AlertDescription>
                </Alert>
              </div>
            </section>

            <!-- Progress -->
            <section id="progress" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Deterministic Loaders</p>
                <h2 class="text-xl font-bold text-black-900">Progress Bar</h2>
                <p class="text-sigma text-black-500">
                  Visual progress indicators for multi-step workflows, uploads, and background tasks.
                </p>
              </div>

              <div class="rounded-xl border border-black-100 bg-white p-5 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sigma font-bold text-black-800">Kelengkapan Data Verifikasi Nasabah (KYC)</span>
                  <span class="text-sigma font-mono font-bold text-lime-700 bg-lime-100 px-2 py-0.5 rounded">{{ progressValue }}%</span>
                </div>
                <Progress :model-value="progressValue" />
                <div class="pt-2">
                  <input
                    v-model="progressValue"
                    type="range"
                    min="0"
                    max="100"
                    class="w-full accent-lime-500"
                  />
                </div>
              </div>
            </section>

            <!-- Spinner -->
            <section id="spinner" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Activity Indicators</p>
                <h2 class="text-xl font-bold text-black-900">Spinner</h2>
                <p class="text-sigma text-black-500">
                  Compact CSS-driven activity spinners for asynchronous operation loading states.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-6 pt-2">
                <div class="flex items-center gap-3">
                  <Spinner size="sm" />
                  <span class="text-omega font-semibold text-black-600">Small (sm)</span>
                </div>
                <div class="flex items-center gap-3">
                  <Spinner />
                  <span class="text-omega font-semibold text-black-600">Medium (md)</span>
                </div>
                <div class="flex items-center gap-3">
                  <Spinner size="lg" />
                  <span class="text-omega font-semibold text-black-600">Large (lg)</span>
                </div>
                <Button :loading="true" loading-label="Menghitung taksiran emas...">
                  Button Loading
                </Button>
              </div>
            </section>

            <!-- Toast -->
            <section id="toast" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Ephemeral Feedback</p>
                <h2 class="text-xl font-bold text-black-900">Toast & Snackbars</h2>
                <p class="text-sigma text-black-500">
                  Floating snackbar notifications for transient feedback on background operations.
                </p>
              </div>

              <div class="grid gap-4 md:grid-cols-3 pt-2">
                <Toast
                  title="Transaksi Berhasil"
                  description="Top up saldo tabungan emas Rp 500.000 sukses."
                  variant="success"
                />
                <Toast
                  title="Peringatan Limit"
                  description="Maksimum transaksi harian tersisa Rp 2.000.000."
                  variant="warning"
                />
                <Toast
                  title="Gagal Terhubung"
                  description="Koneksi ke gateway perbankan mengalami timeout."
                  variant="error"
                />
              </div>
            </section>

            <!-- Dialog -->
            <section id="dialog" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Modal Overlays & Focus Trap</p>
                <h2 class="text-xl font-bold text-black-900">Dialog</h2>
                <p class="text-sigma text-black-500">
                  Accessible modal dialogs with focus trap, backdrop overlay, header, body, and action footer.
                </p>
              </div>

              <!-- Real-world Case: Konfirmasi Pelunasan Pinjaman Gadai -->
              <div class="playground-case-card mb-4">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Konfirmasi Pelunasan Pinjaman Gadai SBG</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Modal Overlay & Transaction Breakdown</span>
                </div>
                <div class="playground-case-body">
                  <div class="flex flex-wrap gap-4">
                    <!-- Variant 1: Konfirmasi Pelunasan Gadai -->
                    <Dialog v-model:open="isPelunasanModalOpen">
                      <DialogTrigger as-child>
                        <Button>Konfirmasi Pelunasan Gadai</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Konfirmasi Pelunasan Pinjaman</DialogTitle>
                          <DialogDescription>
                            Periksa rincian pelunasan sebelum menyelesaikan pembayaran.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogBody class="text-sigma text-black-800 space-y-3">
                          <div class="rounded-lg bg-black-50 p-3 space-y-1">
                            <div class="flex justify-between text-omega">
                              <span class="text-black-500">No. Surat Bukti Gadai</span>
                              <span class="font-bold font-mono text-black-800">SBG-882193</span>
                            </div>
                            <div class="flex justify-between text-omega">
                              <span class="text-black-500">Pokok Pinjaman</span>
                              <span class="font-bold text-black-800">Rp 15.000.000</span>
                            </div>
                            <div class="flex justify-between text-omega">
                              <span class="text-black-500">Sewa Modal (Bunga)</span>
                              <span class="font-bold text-black-800">Rp 180.000</span>
                            </div>
                          </div>
                          <p class="text-omega text-black-600">
                            Setelah pembayaran berhasil, fisik barang jaminan dapat langsung diambil di kantor cabang terdaftar.
                          </p>
                        </DialogBody>
                        <DialogFooter>
                          <DialogClose as-child>
                            <Button variant="outline">Batalkan</Button>
                          </DialogClose>
                          <Button @click="isPelunasanModalOpen = false">Konfirmasi Bayar</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <!-- Variant 2: Dialog with Image -->
                    <Dialog v-model:open="isDialogOpen2">
                      <DialogTrigger as-child>
                        <Button variant="secondary">Dialog Media & Ilustrasi</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Panduan Pengambilan Jaminan</DialogTitle>
                        </DialogHeader>
                        <DialogBody>
                          <div class="mb-4 h-32 w-full overflow-hidden rounded-lg bg-black-200">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" alt="Dialog Image" class="h-full w-full object-cover" />
                          </div>
                          <p class="text-sigma font-bold text-black-800">Tunjukkan KTP Asli & Bukti SBG</p>
                          <p class="mt-1 text-sigma text-black-500">
                            Pengambilan barang jaminan tidak dapat diwakilkan tanpa surat kuasa bermaterai sah.
                          </p>
                        </DialogBody>
                        <DialogFooter>
                          <DialogClose as-child>
                            <Button variant="outline">Tutup</Button>
                          </DialogClose>
                          <Button @click="isDialogOpen2 = false">Mengerti</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <!-- Variant 3: Minimal Dialog -->
                    <Dialog v-model:open="isDialogOpen3">
                      <DialogTrigger as-child>
                        <Button variant="tertiary">Minimal Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Informasi Pengamanan Data</DialogTitle>
                          <DialogDescription>Seluruh data nasabah dienkripsi dengan standar TLS 1.3.</DialogDescription>
                        </DialogHeader>
                        <DialogBody class="text-omicron">
                          Klik tombol silang di pojok kanan atas untuk menutup dialog informasi ini.
                        </DialogBody>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </section>

            <!-- Popover -->
            <section id="popover" class="playground-section playground-color-block block-pink space-y-4">
              <div class="mb-4">
                <p class="playground-eyebrow">Floating Surfaces & Menus</p>
                <h2 class="playground-display">Popover</h2>
                <p class="playground-desc">
                  Rich floating surfaces with card-styling header slots, anchor positioning, and click-outside dismissal.
                </p>
              </div>

              <!-- Real-world Case: Rincian Taksiran Emas -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Rincian Taksiran Kadar Emas & Harga Acuan</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Card-Styled Popover Content</span>
                </div>
                <div class="playground-case-body">
                  <div class="flex flex-wrap items-center gap-4">
                    <Popover>
                      <PopoverAnchor as-child>
                        <span class="inline-flex h-10 items-center rounded-full bg-slate-100 px-4 text-sigma font-bold text-black-800 border border-slate-300">
                          Anchor: SBG-2026-88
                        </span>
                      </PopoverAnchor>
                      <PopoverTrigger as-child>
                        <Button>Lihat Rincian Taksiran Emas</Button>
                      </PopoverTrigger>
                      <PopoverContent class="w-80" title="Rincian Taksiran Emas (24K)">
                        <div class="space-y-2 text-sigma text-black-600">
                          <div class="flex justify-between text-omega">
                            <span>Kadar Kemurnian</span>
                            <strong class="text-black-800">99.99% (24 Karat)</strong>
                          </div>
                          <div class="flex justify-between text-omega">
                            <span>Berat Bersih</span>
                            <strong class="text-black-800">10.50 gram</strong>
                          </div>
                          <div class="flex justify-between text-omega">
                            <span>Nilai Taksiran Pasar</span>
                            <strong class="text-black-800">Rp 15.225.000</strong>
                          </div>
                          <p class="text-omega text-black-500 pt-2 border-t border-black-100">
                            Nilai taksiran mengikuti harga acuan pasar emas resmi Pegadaian hari ini.
                          </p>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </section>

            <!-- Tooltip -->
            <section id="tooltip" class="playground-section playground-panel p-6 space-y-4">
              <div>
                <p class="playground-eyebrow">Assistive Hints & Definitions</p>
                <h2 class="text-xl font-bold text-black-900">Tooltip</h2>
                <p class="text-sigma text-black-500">
                  Hover and focus-triggered micro tooltips with card styling and precise anchor offsets.
                </p>
              </div>

              <!-- Real-world Case: Info Biaya Titip -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Bantuan & Definisi Istilah Fintech</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Assistive Micro Tips</span>
                </div>
                <div class="playground-case-body">
                  <div class="flex flex-wrap items-center gap-6">
                    <Tooltip>
                      <TooltipTrigger as-child>
                        <Button variant="ghost" class="inline-flex items-center gap-1.5 text-black-700">
                          <CircleHelp class="h-4 w-4 text-lime-600" />
                          Apa itu Biaya Titip Emas?
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent title="Biaya Titip Emas Batangan">
                        Biaya titip fasilitas brankas aman Rp 2.500 per bulan per akun rekening tabungan emas aktif.
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger as-child>
                        <Button variant="ghost" class="inline-flex items-center gap-1.5 text-black-700">
                          <CircleHelp class="h-4 w-4 text-lime-600" />
                          Rumus Sewa Modal
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent title="Formula Perhitungan Sewa Modal">
                        (Uang Pinjaman x Tarif Sewa Modal Golongan x Jangka Waktu) / 15 Hari.
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </section>

            <!-- Dropdown -->
            <section id="dropdown" class="playground-section playground-panel p-6 space-y-5">
              <div>
                <p class="playground-eyebrow">Menu Selections & Accounts</p>
                <h2 class="text-xl font-bold text-black-900">Dropdown</h2>
                <p class="text-sigma text-black-500">
                  Single option, selected row, icon row with account balances, and multiple checkbox rows.
                </p>
              </div>

              <!-- Real-world Case: Pilih Rekening Sumber & Wilayah -->
              <div class="playground-case-card">
                <div class="playground-case-header">
                  <div class="flex items-center gap-2.5">
                    <span class="playground-case-badge">
                      <Sparkles class="h-3 w-3 text-lime-700" />
                      Real-World Scenario
                    </span>
                    <h3 class="text-sigma font-extrabold text-black-900">Pemilihan Rekening Sumber & Proteksi Tambahan</h3>
                  </div>
                  <span class="text-omega text-black-500 font-medium">Account Badges & Multiple Checkbox Lists</span>
                </div>
                <div class="playground-case-body">
                  <div class="grid gap-4 lg:grid-cols-3">
                    <!-- Dropdown Rekening Sumber -->
                    <div class="space-y-2">
                      <span class="text-sigma font-bold text-black-800">Pilih Rekening Sumber</span>
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
                              <Landmark class="h-6 w-6 text-lime-600" />
                            </template>
                          </DropdownListItem>
                        </DropdownList>
                      </Dropdown>
                    </div>

                    <!-- Dropdown Wilayah -->
                    <div class="space-y-2">
                      <span class="text-sigma font-bold text-black-800">Pilih Wilayah Operasional</span>
                      <Dropdown
                        v-model:open="dropdownOpen"
                        :model-label="dropdownProvince"
                        placeholder="Pilih provinsi"
                        trigger-class="w-full"
                      >
                        <DropdownList>
                          <DropdownListItem
                            v-for="province in ['Aceh', 'Bali', 'Banten', 'DKI Jakarta', 'Jawa Barat']"
                            :key="province"
                            :selected="dropdownProvince === province"
                            @select="selectDropdownProvince(province)"
                          >
                            {{ province }}
                          </DropdownListItem>
                        </DropdownList>
                      </Dropdown>
                    </div>

                    <!-- Dropdown Multi Opsi -->
                    <div class="space-y-2">
                      <span class="text-sigma font-bold text-black-800">Paket Proteksi Tambahan</span>
                      <Dropdown
                        v-model:open="dropdownMultipleOpen"
                        :model-label="dropdownMultipleLabel"
                        placeholder="Pilih paket"
                        trigger-class="w-full"
                      >
                        <DropdownList variant="multiple">
                          <DropdownListCheckboxItem v-model="dropdownOptionA">
                            Asuransi Jiwa Nasabah
                          </DropdownListCheckboxItem>
                          <DropdownListCheckboxItem v-model="dropdownOptionB">
                            Proteksi Khazanah Emas
                          </DropdownListCheckboxItem>
                        </DropdownList>
                      </Dropdown>
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
