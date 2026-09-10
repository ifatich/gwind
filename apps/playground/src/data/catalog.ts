export interface SectionItem {
  id: string;
  label: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  category: "actions" | "forms" | "data" | "feedback";
  categoryLabel: string;
  badge: string;
  description: string;
  subItems: string[];
}

export interface CategoryOption {
  id: string;
  label: string;
  count: number;
}

export const sections: SectionItem[] = [
  // 1. General & Actions
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
  { id: "dropdown", label: "Dropdown" },
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

  // 6. Architecture
  { id: "tokens", label: "Design Tokens" },
];

export const allComponentsCatalog: CatalogItem[] = [
  // 1. General & Actions
  {
    id: "button",
    name: "Button",
    category: "actions",
    categoryLabel: "General & Actions",
    badge: "Core Action",
    description: "Tombol aksi primer monochrome, sekunder, tertiary, social auth, & icon button.",
    subItems: ["Button"],
  },
  {
    id: "link",
    name: "Link",
    category: "actions",
    categoryLabel: "General & Actions",
    badge: "Navigation",
    description: "Tautan teks semantik inline dengan hover underline & external link icon.",
    subItems: ["Link"],
  },

  // 2. Form & Data Entry
  {
    id: "input",
    name: "Input & InputField",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Forms",
    description: "Input teks standar, NIK KTP, email, prefix/suffix text, & clearable action.",
    subItems: ["Input", "InputField", "InputGroup"],
  },
  {
    id: "input-rupiah",
    name: "Input Rupiah",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Fintech",
    description: "Format nominal mata uang otomatis ribuan & emit raw integer value.",
    subItems: ["InputRupiah", "InputField"],
  },
  {
    id: "input-persentase",
    name: "Input Persentase",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Fintech",
    description: "Input tarif sewa modal pinjaman & persentase margin diskon promo.",
    subItems: ["InputPersentase", "InputField"],
  },
  {
    id: "add-amount",
    name: "Add Amount",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Controls",
    description: "Stepper kuantitas gramasi emas batangan & kalkulasi live total harga.",
    subItems: ["AddAmount"],
  },
  {
    id: "textarea",
    name: "Textarea",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Forms",
    description: "Area teks multi-baris dengan live counter karakter (:maxlength='100').",
    subItems: ["Textarea", "TextareaField"],
  },
  {
    id: "label",
    name: "Label",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Forms",
    description: "Label kolom formulir dengan asterisk (*) mandatory & accessible states.",
    subItems: ["Label"],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Consent",
    description: "Kotak centang persetujuan akad syariah & opsi proteksi barang ekstra.",
    subItems: ["Checkbox", "CheckboxField", "CheckboxGroup"],
  },
  {
    id: "radio-group",
    name: "Radio Group",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Selection",
    description: "Pilihan metode pengambilan barang lunas (cabang vs kurir ekspedisi).",
    subItems: ["RadioGroup", "RadioGroupField"],
  },
  {
    id: "select",
    name: "Select",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Dropdown",
    description: "Dropdown opsi kategori barang jaminan dengan grouped labels & separators.",
    subItems: ["Select", "SelectTrigger", "SelectContent", "SelectItem"],
  },
  {
    id: "combobox",
    name: "Combobox",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Autocomplete",
    description: "Pencarian nama kantor cabang dengan autocomplete & empty feedback.",
    subItems: ["Combobox", "ComboboxInput", "ComboboxList", "ComboboxItem"],
  },
  {
    id: "dropdown",
    name: "Dropdown",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Menu",
    description: "Dropdown pemilihan rekening bank sumber dana, pencarian otomatis, & multi-checkbox proteksi.",
    subItems: ["Dropdown", "DropdownList", "DropdownListItem", "DropdownListCheckboxItem"],
  },
  {
    id: "datepicker",
    name: "Datepicker",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Calendar",
    description: "Kalender pemilih tanggal jatuh tempo (disable past) & tgl lahir (disable future).",
    subItems: ["Datepicker"],
  },
  {
    id: "switch",
    name: "Switch Toggle",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Toggle",
    description: "Toggle on/off instan untuk pengingat WhatsApp & autodebet tabungan emas.",
    subItems: ["Switch"],
  },
  {
    id: "file-picker",
    name: "File Picker",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Upload",
    description: "Dropzone upload rekening koran bank (.pdf only) & berkas persyaratan.",
    subItems: ["FilePicker"],
  },
  {
    id: "image-picker",
    name: "Image Picker",
    category: "forms",
    categoryLabel: "Form & Data Entry",
    badge: "Media",
    description: "Upload pas foto KTP (80x80) & multi-image slider 4:3 fisik barang jaminan.",
    subItems: ["ImagePicker", "ImageDisplay"],
  },

  // 3. Data Display & Layout
  {
    id: "avatar",
    name: "Avatar",
    category: "data",
    categoryLabel: "Data Display & Layout",
    badge: "Identity",
    description: "Avatar foto nasabah terverifikasi KYC & inisial fallback penaksir emas.",
    subItems: ["Avatar"],
  },
  {
    id: "badge",
    name: "Badge",
    category: "data",
    categoryLabel: "Data Display & Layout",
    badge: "Status",
    description: "Pill status transaksi lancar, proses, H-3, hingga peringatan jatuh tempo.",
    subItems: ["Badge"],
  },
  {
    id: "card",
    name: "Card",
    category: "data",
    categoryLabel: "Data Display & Layout",
    badge: "Container",
    description: "Kartu portofolio tabungan emas, promo cashback gadai, & jaminan khazanah.",
    subItems: ["Card", "CardHeader", "CardTitle", "CardContent", "CardFooter"],
  },
  {
    id: "table",
    name: "Table & DataTable",
    category: "data",
    categoryLabel: "Data Display & Layout",
    badge: "Tabular",
    description: "Tabel tarif sewa modal & perbandingan matriks golongan pinjaman.",
    subItems: ["DataTable", "Table", "TableHeader", "TableRow", "TableCell"],
  },
  {
    id: "accordion",
    name: "Accordion",
    category: "data",
    categoryLabel: "Data Display & Layout",
    badge: "Disclosure",
    description: "Pusat bantuan & FAQ interaktif syarat gadai dengan single-collapse smooth motion.",
    subItems: ["Accordion", "AccordionItem", "AccordionTrigger", "AccordionContent"],
  },
  {
    id: "carousel",
    name: "Carousel",
    category: "data",
    categoryLabel: "Data Display & Layout",
    badge: "Slider",
    description: "Banner carousel promo cashback digital dengan autoplay 5s & touch swipe.",
    subItems: ["BannerCarousel", "Carousel", "CarouselItem", "CarouselIndicators"],
  },
  {
    id: "divider",
    name: "Divider",
    category: "data",
    categoryLabel: "Data Display & Layout",
    badge: "Layout",
    description: "Pemisah rincian pokok, bunga sewa modal, biaya admin, & total pelunasan.",
    subItems: ["Divider"],
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    category: "data",
    categoryLabel: "Data Display & Layout",
    badge: "Navigation",
    description: "Jejak hirarki navigasi dashboard nasabah hingga detail Surat Bukti Gadai (SBG).",
    subItems: ["Breadcrumb", "BreadcrumbList", "BreadcrumbItem", "BreadcrumbPage"],
  },
  {
    id: "pagination",
    name: "Pagination",
    category: "data",
    categoryLabel: "Data Display & Layout",
    badge: "Navigation",
    description: "Paginasi riwayat transaksi mutasi 20 halaman dengan truncation ellipsis.",
    subItems: ["Pagination"],
  },
  {
    id: "tabs",
    name: "Tabs",
    category: "data",
    categoryLabel: "Data Display & Layout",
    badge: "Segmented",
    description: "Segmented tab switch dashboard ringkasan portofolio, riwayat, & akad.",
    subItems: ["TabGroup", "TabTriggerGroup", "TabTrigger", "TabContent"],
  },

  // 4. Feedback & Floating Surfaces
  {
    id: "alert",
    name: "Alert",
    category: "feedback",
    categoryLabel: "Feedback & Surfaces",
    badge: "Banner",
    description: "Notifikasi sistem pembayaran angsuran berhasil & peringatan jatuh tempo.",
    subItems: ["Alert", "AlertTitle", "AlertDescription"],
  },
  {
    id: "progress",
    name: "Progress Bar",
    category: "feedback",
    categoryLabel: "Feedback & Surfaces",
    badge: "Loader",
    description: "Indikator kelengkapan progres formulir verifikasi akun nasabah (KYC).",
    subItems: ["Progress"],
  },
  {
    id: "spinner",
    name: "Spinner",
    category: "feedback",
    categoryLabel: "Feedback & Surfaces",
    badge: "Indicator",
    description: "CSS spinner pemrosesan asinkron taksiran harga emas & button loading.",
    subItems: ["Spinner"],
  },
  {
    id: "toast",
    name: "Toast",
    category: "feedback",
    categoryLabel: "Feedback & Surfaces",
    badge: "Snackbar",
    description: "Notifikasi snackbar melayang untuk feedback transaksi top-up & limit.",
    subItems: ["Toast"],
  },
  {
    id: "dialog",
    name: "Dialog (Modal)",
    category: "feedback",
    categoryLabel: "Feedback & Surfaces",
    badge: "Modal",
    description: "Modal konfirmasi pelunasan pinjaman SBG dengan rincian biaya & focus trap.",
    subItems: ["Dialog", "DialogTrigger", "DialogContent", "DialogHeader", "DialogBody"],
  },
  {
    id: "popover",
    name: "Popover",
    category: "feedback",
    categoryLabel: "Feedback & Surfaces",
    badge: "Floating",
    description: "Popover melayang dengan header card untuk rincian taksiran kadar emas 24K.",
    subItems: ["Popover", "PopoverTrigger", "PopoverAnchor", "PopoverContent"],
  },
  {
    id: "tooltip",
    name: "Tooltip",
    category: "feedback",
    categoryLabel: "Feedback & Surfaces",
    badge: "Micro-hint",
    description: "Micro-tooltip penjelas definisi istilah fintech biaya titip & formula sewa.",
    subItems: ["Tooltip", "TooltipTrigger", "TooltipContent"],
  },
];

export const categoryOptions: CategoryOption[] = [
  { id: "all", label: "Semua Komponen", count: 34 },
  { id: "actions", label: "General & Actions", count: 2 },
  { id: "forms", label: "Form & Data Entry", count: 15 },
  { id: "data", label: "Data Display & Layout", count: 10 },
  { id: "feedback", label: "Feedback & Surfaces", count: 7 },
];
