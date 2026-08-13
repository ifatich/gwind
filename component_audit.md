# Audit Komponen & Standar Library — Gwind UI vs. Kitvue Live (ifatich4) vs. Shadcn UI

Dokumen ini berisi hasil audit komprehensif 3-arah (*3-Way Benchmark*) yang membandingkan:
1. **Gwind UI Local** ([packages/ui/src/components/ui](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui))
2. **Kitvue Storybook Live** ([https://ifatich4.github.io/](https://ifatich4.github.io/))
3. **Shadcn UI** (diakses via *Context7 MCP*)

> **Sumber data audit Gwind UI Local**: Hasil `find` pada file system project `/Users/lord/Documents/Pegadaian Project/Desktop/design system/gwind`. Setiap klaim diverifikasi terhadap keberadaan file `.vue` aktual. **Tidak ada asumsi.**

---

## 1. Executive Summary

| Metrik | Gwind UI (Local) | Kitvue Live (`ifatich4.github.io`) | Shadcn UI (Context7) |
| :--- | :---: | :---: | :---: |
| **Kategori Komponen** | **31 Folder** | **82 Story Suites** | **48 Komponen Core** |
| **Total File `.vue`** | **116 File** | N/A (Storybook deploy) | ~140 File TSX |
| **Total File `.ts` (barrel/util)** | **37 File** | N/A | N/A |
| **Registry JSON** | **32 Entri** | N/A | N/A |
| **Barrel Export** | Semua 31 kategori ter-export di [`index.ts`](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/index.ts) | N/A | N/A |

---

## 2. Inventaris Lengkap Komponen Gwind UI Local (Berdasarkan File System)

Data berikut 100% dihasilkan dari `find` pada direktori [packages/ui/src/components/ui](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui).

| No | Folder Komponen | `.vue` | Daftar File Vue (Aktual di File System) | Path Evidensi |
| :-: | :--- | :-: | :--- | :--- |
| 1 | **accordion** | 4 | `Accordion.vue`, `AccordionContent.vue`, `AccordionItem.vue`, `AccordionTrigger.vue` | [accordion/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/accordion) |
| 2 | **alert** | 3 | `Alert.vue`, `AlertDescription.vue`, `AlertTitle.vue` | [alert/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/alert) |
| 3 | **avatar** | 1 | `Avatar.vue` | [avatar/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/avatar) |
| 4 | **badge** | 1 | `Badge.vue` | [badge/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/badge) |
| 5 | **breadcrumb** | 7 | `Breadcrumb.vue`, `BreadcrumbEllipsis.vue`, `BreadcrumbItem.vue`, `BreadcrumbLink.vue`, `BreadcrumbList.vue`, `BreadcrumbPage.vue`, `BreadcrumbSeparator.vue` | [breadcrumb/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/breadcrumb) |
| 6 | **button** | 1 | `Button.vue` | [button/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/button) |
| 7 | **card** | 6 | `Card.vue`, `CardContent.vue`, `CardDescription.vue`, `CardFooter.vue`, `CardHeader.vue`, `CardTitle.vue` | [card/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/card) |
| 8 | **carousel** | 7 | `BannerCarousel.vue`, `Carousel.vue`, `CarouselContent.vue`, `CarouselIndicators.vue`, `CarouselItem.vue`, `CarouselNext.vue`, `CarouselPrevious.vue` | [carousel/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/carousel) |
| 9 | **checkbox** | 3 | `Checkbox.vue`, `CheckboxField.vue`, `CheckboxGroup.vue` | [checkbox/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/checkbox) |
| 10 | **combobox** | 10 | `Combobox.vue`, `ComboboxAnchor.vue`, `ComboboxEmpty.vue`, `ComboboxGroup.vue`, `ComboboxInput.vue`, `ComboboxItem.vue`, `ComboboxItemIndicator.vue`, `ComboboxList.vue`, `ComboboxSeparator.vue`, `ComboboxTrigger.vue` | [combobox/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/combobox) |
| 11 | **datepicker** | 8 | `Calendar.vue`, `CalendarHeading.vue`, `Datepicker.vue`, `DatepickerContent.vue`, `DatepickerInput.vue`, `DatepickerRoot.vue`, `DatepickerScroll.vue`, `YearPicker.vue` | [datepicker/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/datepicker) |
| 12 | **dialog** | 10 | `Dialog.vue`, `DialogBody.vue`, `DialogClose.vue`, `DialogContent.vue`, `DialogDescription.vue`, `DialogFooter.vue`, `DialogHeader.vue`, `DialogOverlay.vue`, `DialogTitle.vue`, `DialogTrigger.vue` | [dialog/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/dialog) |
| 13 | **divider** | 1 | `Divider.vue` | [divider/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/divider) |
| 14 | **dropdown** | 4 | `Dropdown.vue`, `DropdownList.vue`, `DropdownListCheckboxItem.vue`, `DropdownListItem.vue` | [dropdown/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/dropdown) |
| 15 | **file-picker** | 1 | `FilePicker.vue` | [file-picker/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/file-picker) |
| 16 | **image-picker** | 2 | `ImageDisplay.vue`, `ImagePicker.vue` | [image-picker/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/image-picker) |
| 17 | **input** | 4 | `Input.vue`, `InputField.vue` (root), `InputPersentase.vue` (subfolder `input-persentase/`), `InputRupiah.vue` (subfolder `input-rupiah/`) | [input/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/input) |
| 18 | **label** | 1 | `Label.vue` | [label/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/label) |
| 19 | **link** | 1 | `Link.vue` | [link/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/link) |
| 20 | **pagination** | 1 | `Pagination.vue` | [pagination/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/pagination) |
| 21 | **popover** | 4 | `Popover.vue`, `PopoverAnchor.vue`, `PopoverContent.vue`, `PopoverTrigger.vue` | [popover/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/popover) |
| 22 | **progress** | 1 | `Progress.vue` | [progress/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/progress) |
| 23 | **radio-group** | 3 | `RadioGroup.vue`, `RadioGroupField.vue`, `RadioGroupItem.vue` | [radio-group/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/radio-group) |
| 24 | **select** | 11 | `Select.vue`, `SelectContent.vue`, `SelectGroup.vue`, `SelectItem.vue`, `SelectItemText.vue`, `SelectLabel.vue`, `SelectScrollDownButton.vue`, `SelectScrollUpButton.vue`, `SelectSeparator.vue`, `SelectTrigger.vue`, `SelectValue.vue` | [select/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/select) |
| 25 | **spinner** | 1 | `Spinner.vue` | [spinner/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/spinner) |
| 26 | **switch** | 1 | `Switch.vue` | [switch/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/switch) |
| 27 | **table** | 8 | `DataTable.vue`, `Table.vue`, `TableBody.vue`, `TableCaption.vue`, `TableCell.vue`, `TableHead.vue`, `TableHeader.vue`, `TableRow.vue` | [table/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/table) |
| 28 | **tabs** | 4 | `TabContent.vue`, `TabGroup.vue`, `TabTrigger.vue`, `TabTriggerGroup.vue` | [tabs/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/tabs) |
| 29 | **textarea** | 2 | `Textarea.vue`, `TextareaField.vue` | [textarea/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/textarea) |
| 30 | **toast** | 1 | `Toast.vue` | [toast/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/toast) |
| 31 | **tooltip** | 4 | `Tooltip.vue`, `TooltipContent.vue`, `TooltipProvider.vue`, `TooltipTrigger.vue` | [tooltip/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/components/ui/tooltip) |

> **Total terverifikasi: 31 folder, 116 file `.vue`, 37 file `.ts`, 32 entri registry JSON.**

---

## 3. Matriks Perbandingan 3-Arah (Gwind UI Local vs. Kitvue Live vs. Shadcn UI)

Legenda status:
- ✅ **Ada** — Komponen terverifikasi ada di lokasi tersebut
- ❌ **Belum Ada** — Tidak ditemukan file/folder komponen tersebut di seluruh project
- 🏆 **Unggul** — Memiliki fitur yang melebihi standar acuan

| No | Kategori Komponen | Gwind UI (Local) | Kitvue Live (`ifatich4.github.io`) | Shadcn UI (Context7) | Catatan |
| :-: | :--- | :-: | :-: | :-: | :--- |
| 1 | **Accordion** | ✅ Ada (4 `.vue`) | ✅ `Accordion/Group`, `Accordion/Single` | ✅ `Accordion` | Paritas penuh |
| 2 | **AddAmountCounter** | ❌ Belum Ada | ✅ `AddAmountCounter` | ❌ Tidak Ada | Hanya ada di Kitvue Live |
| 3 | **Alert** | ✅ Ada (3 `.vue`) | ✅ `Alert` (5 varian) | ✅ `Alert` | Paritas penuh |
| 4 | **Avatar** | ✅ Ada (1 `.vue`) | ❌ Tidak terdeteksi | ✅ `Avatar` | Ada di Gwind & Shadcn, tidak terdeteksi di Live |
| 5 | **Badge** | ✅ Ada (1 `.vue`) | ✅ `Badge` | ✅ `Badge` | Paritas penuh |
| 6 | **BottomSheet** | ❌ Belum Ada | ✅ `BottomSheet` | ❌ Tidak Ada (≈ `Sheet`) | Hanya ada di Kitvue Live |
| 7 | **Breadcrumb** | ✅ Ada (7 `.vue`) | ✅ `Breadcrumb` | ✅ `Breadcrumb` | Paritas penuh |
| 8 | **Button** | ✅ Ada (1 `.vue`) | ✅ `Button`, `ButtonSize` | ✅ `Button` | Paritas penuh |
| 9 | **Card** | ✅ Ada (6 `.vue`) | 🏆 7 varian bisnis (`CardAccount`, `CardArticle`, `CardArticleHighlight`, `CardContent`, `CardEvent`, `CardFile`, `CardProduct`, `CardPromo`, `CardPromoCode`, `CardVoucher`) | ✅ `Card` | Gwind: Card generic. Kitvue Live: varian bisnis Pegadaian |
| 10 | **Chart** | ❌ Belum Ada | 🏆 `BarChart`, `DoughnutChart`, `LineChart`, `StackedBarChart` | ❌ Tidak Ada | Hanya ada di Kitvue Live |
| 11 | **Checkbox** | ✅ Ada (3 `.vue`) | ✅ `Checkbox` | ✅ `Checkbox` | Paritas penuh |
| 12 | **Combobox / AutoComplete** | ✅ Ada (10 `.vue`) | ✅ `SelectOption/AutoComplete` | ✅ `Combobox` / `Command` | Paritas penuh |
| 13 | **Datepicker & Calendar** | ✅ Ada (8 `.vue`) | ✅ `CalendarDropdown`, `DateRangePicker`, `InputSmallDate`, `MonthPicker` | ✅ `DatePicker` / `Calendar` | Paritas penuh |
| 14 | **Dialog / Modal** | ✅ Ada (10 `.vue`) | ✅ `Modal/Default`, `Modal/CustomModal`, `Modal/Slider` | ✅ `Dialog` / `AlertDialog` | Paritas penuh |
| 15 | **Divider / Separator** | ✅ Ada (1 `.vue`) | ❌ Tidak terdeteksi | ✅ `Separator` | Ada di Gwind & Shadcn |
| 16 | **Dropdown** | ✅ Ada (4 `.vue`) | ✅ `Dropdown/Default`, `DropdownGroupItem`, `DropdownHeader`, `DropdownItem`, `InputDropdownMultiple` | ✅ `DropdownMenu` | Paritas penuh |
| 17 | **FilePicker / Upload** | ✅ Ada (`FilePicker.vue`, `ImagePicker.vue`, `ImageDisplay.vue`) | 🏆 `FilePickerLG`, `FilePickerSM`, `ImagePickerWithCamera` | ❌ Tidak Ada | Gwind: `FilePicker` (dokumen) + `ImagePicker` (gambar). Kitvue Live: varian lebih kaya |
| 18 | **Filter CMS** | ❌ Belum Ada | ✅ `FilterCMS` | ❌ Tidak Ada | Hanya ada di Kitvue Live |
| 19 | **Header CMS** | ❌ Belum Ada | ✅ `HeaderCMS` | ❌ Tidak Ada | Hanya ada di Kitvue Live |
| 20 | **ImageView** | ❌ Belum Ada | ✅ `ImageView` | ❌ Tidak Ada | Hanya ada di Kitvue Live |
| 21 | **Input** | 🏆 Ada (4 `.vue`: `Input`, `InputField`, `InputPersentase`, `InputRupiah`) | 🏆 `InputKTP`, `InputMonth`, `InputSearch`, `InputSearchQR`, `InputSmallText`, `InputTimePicker`, `InputWithActionButton`, `NominalStart`, `NominalEnd`, `Phone`, `Search NIK` | ✅ `Input` (generic) | Gwind: `InputRupiah`, `InputPersentase`. Kitvue Live: varian domain Pegadaian jauh lebih kaya |
| 22 | **Label** | ✅ Ada (1 `.vue`) | ✅ `Label/Default`, `Label/WithIcon` | ✅ `Label` | Paritas penuh |
| 23 | **Link** | ✅ Ada (1 `.vue`) | ❌ Tidak terdeteksi | ✅ `NavigationMenuLink` | Ada di Gwind & Shadcn |
| 24 | **ListGroup** | ❌ Belum Ada | ✅ `ListGroup/Ordered`, `ListGroup/Unordered` | ❌ Tidak Ada | Hanya ada di Kitvue Live |
| 25 | **Loader / Spinner** | ✅ Ada (1 `.vue`: `Spinner.vue`) | ✅ `Loader` | ❌ Tidak Ada (custom) | Gwind: `Spinner`, Kitvue: `Loader` |
| 26 | **MonthPicker** | ❌ Belum Ada | ✅ `MonthPicker` (standalone) | ❌ Tidak Ada | Hanya ada di Kitvue Live |
| 27 | **Navigation (Sidebar/Header)** | ❌ Belum Ada | 🏆 `SideNavCMS`, `BackNavigation`, `BerandaHeader`, `ItemSideNav`, `NavbarCorporate`, `TabPembinaan` | ⚠️ `Sidebar` (v4 only) | Hanya ada di Kitvue Live |
| 28 | **Pagination** | ✅ Ada (1 `.vue`) | ✅ `Table/Pagination` | ✅ `Pagination` | Paritas penuh |
| 29 | **Popover** | ✅ Ada (4 `.vue`) | ❌ Tidak terdeteksi | ✅ `Popover` | Ada di Gwind & Shadcn |
| 30 | **Progress** | ✅ Ada (1 `.vue`) | ❌ Tidak terdeteksi | ✅ `Progress` | Ada di Gwind & Shadcn |
| 31 | **Radio Group** | ✅ Ada (3 `.vue`) | ✅ `Radio` | ✅ `RadioGroup` | Paritas penuh |
| 32 | **Select** | ✅ Ada (11 `.vue`) | ✅ `SelectOption` | ✅ `Select` | Paritas penuh |
| 33 | **Stepper** | ❌ Belum Ada | 🏆 `Stepper`, `Side Stepper` | ❌ Tidak Ada | Hanya ada di Kitvue Live |
| 34 | **Switch** | ✅ Ada (1 `.vue`) | ✅ `Switch` | ✅ `Switch` | Paritas penuh |
| 35 | **Table / DataTable** | ✅ Ada (8 `.vue`) | ✅ `Table/DataTable` | ✅ `Table` / `DataTable` | Paritas penuh |
| 36 | **Tabs** | ✅ Ada (4 `.vue`) | ✅ `Tab/Default`, `Tab/Category`, `Tab/Product`, `Tab/TabKategori` | ✅ `Tabs` | Paritas penuh |
| 37 | **Textarea** | ✅ Ada (2 `.vue`) | ✅ `InputField/TextArea` | ✅ `Textarea` | Paritas penuh |
| 38 | **TimePicker** | ❌ Belum Ada | ✅ `TimePicker` (standalone) | ❌ Tidak Ada | Hanya ada di Kitvue Live |
| 39 | **Toast** | ✅ Ada (1 `.vue`) | ❌ Tidak terdeteksi | ✅ `Toast` / `Sonner` | Ada di Gwind & Shadcn |
| 40 | **Tooltip** | ✅ Ada (4 `.vue`) | ✅ `Tooltip` | ✅ `Tooltip` | Paritas penuh |

---

## 4. Komponen Hanya Ada di Kitvue Live (`ifatich4.github.io`), Tidak Ada di Gwind UI Local

Komponen berikut ditemukan di Storybook deployment `ifatich4.github.io` tetapi **TIDAK ditemukan** sebagai folder maupun file `.vue` di dalam `packages/ui/src/components/ui/` pada project Gwind UI Local:

| No | Komponen Kitvue Live | Storybook Title Path | Ada di Gwind Local? |
| :-: | :--- | :--- | :-: |
| 1 | **AddAmountCounter** | `Components/AddAmountCounter` | ❌ Tidak Ada |
| 2 | **BottomSheet** | `Components/BottomSheet` | ❌ Tidak Ada |
| 3 | **CardAccount** | `Components/Card/CardAccount` | ❌ Tidak Ada |
| 4 | **CardArticle / ArticleHighlight** | `Components/Card/CardArticle`, `CardArticleHighlight` | ❌ Tidak Ada |
| 5 | **CardEvent** | `Components/Card/CardEvent` | ❌ Tidak Ada |
| 6 | **CardFile** | `Components/Card/CardFile` | ❌ Tidak Ada |
| 7 | **CardProduct** | `Components/Card/CardProduct` | ❌ Tidak Ada |
| 8 | **CardPromo / CardPromoCode** | `Components/Card/CardPromo`, `CardPromoCode` | ❌ Tidak Ada |
| 9 | **CardVoucher** | `Components/Card/CardVoucher` | ❌ Tidak Ada |
| 10 | **BarChart** | `Components/Chart/BarChart` | ❌ Tidak Ada |
| 11 | **DoughnutChart** | `Components/Chart/DoughnutChart` | ❌ Tidak Ada |
| 12 | **LineChart** | `Components/Chart/LineChart` | ❌ Tidak Ada |
| 13 | **StackedBarChart** | `Components/Chart/StackedBarChart` | ❌ Tidak Ada |
| 14 | **FilePickerLG / SM** | `Components/FilePicker/FilePickerLG`, `FilePickerSM` | ⚠️ Parsial (`FilePicker.vue` — versi unified) |
| 15 | **ImagePickerWithCamera** | `Components/FilePicker/ImagePickerWithCamera` | ⚠️ Parsial (`ImagePicker.vue` — tanpa camera) |
| 16 | **FilterCMS** | `Components/Filter/FilterCMS` | ❌ Tidak Ada |
| 17 | **HeaderCMS** | `Components/Header/HeaderCMS` | ❌ Tidak Ada |
| 18 | **ImageView** | `Components/ImageView` | ❌ Tidak Ada |
| 19 | **InputKTP** | `Components/Input/InputKTP` | ❌ Tidak Ada |
| 20 | **InputMonth** | `Components/Input/InputMonth` | ❌ Tidak Ada |
| 21 | **InputSearch** | `Components/Input/InputSearch` | ❌ Tidak Ada |
| 22 | **InputSearchQR** | `Components/Input/InputSearchQR` | ❌ Tidak Ada |
| 23 | **InputSmallText** | `Components/Input/InputSmallText` | ❌ Tidak Ada |
| 24 | **InputTimePicker** | `Components/Input/InputTimePicker` | ❌ Tidak Ada |
| 25 | **InputWithActionButton** | `Components/Input/InputWithActionButton` | ❌ Tidak Ada |
| 26 | **InputField/NominalEnd** | `Components/InputField/NominalEnd` | ❌ Tidak Ada |
| 27 | **InputField/NominalStart** | `Components/InputField/NominalStart` | ❌ Tidak Ada |
| 28 | **InputField/Phone** | `Components/InputField/Phone` | ❌ Tidak Ada |
| 29 | **InputField/Search NIK** | `Components/InputField/Search NIK` | ❌ Tidak Ada |
| 30 | **ListGroup (Ordered/Unordered)** | `Components/ListGroup/Ordered`, `Unordered` | ❌ Tidak Ada |
| 31 | **MonthPicker** (standalone) | `Components/MonthPicker` | ❌ Tidak Ada |
| 32 | **SideNavCMS** | `Components/Navbar/SideNavCMS` | ❌ Tidak Ada |
| 33 | **BackNavigation** | `Components/Navigation/BackNavigation` | ❌ Tidak Ada |
| 34 | **BerandaHeader** | `Components/Navigation/BerandaHeader` | ❌ Tidak Ada |
| 35 | **ItemSideNav** | `Components/Navigation/ItemSideNav` | ❌ Tidak Ada |
| 36 | **NavbarCorporate** | `Components/Navigation/NavbarCorporate` | ❌ Tidak Ada |
| 37 | **TabPembinaan** | `Components/Navigation/TabPembinaan` | ❌ Tidak Ada |
| 38 | **Stepper** | `Components/Stepper/Stepper` | ❌ Tidak Ada |
| 39 | **Side Stepper** | `Components/Stepper/Side Stepper` | ❌ Tidak Ada |
| 40 | **TimePicker** (standalone) | `Components/TimePicker` | ❌ Tidak Ada |

---

## 5. Komponen Shadcn UI yang Tidak Ada di Gwind UI Local Maupun Kitvue Live

| No | Komponen Shadcn UI | Ada di Gwind Local? | Ada di Kitvue Live? | Keterangan |
| :-: | :--- | :-: | :-: | :--- |
| 1 | **Skeleton** | ❌ Tidak Ada | ❌ Tidak Ada | Shimmer placeholder saat loading |
| 2 | **Input OTP / Pin Input** | ❌ Tidak Ada | ❌ Tidak Ada | Input 4-6 digit verifikasi / PIN |
| 3 | **Command Palette** | ❌ Tidak Ada | ❌ Tidak Ada | Dialog pencarian cepat `Cmd+K` |
| 4 | **Slider / Range** | ❌ Tidak Ada | ❌ Tidak Ada | Kontrol geser angka |
| 5 | **Scroll Area** | ❌ Tidak Ada | ❌ Tidak Ada | Custom scrollbar wrapper |
| 6 | **Carousel** | ✅ Ada (7 `.vue`: `Carousel`, `BannerCarousel`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious`, `CarouselIndicators`) | ❌ Tidak Ada | Sudah diimplementasikan di Gwind |
| 7 | **Aspect Ratio** | ❌ Tidak Ada | ❌ Tidak Ada | Responsive ratio wrapper |
| 8 | **Sheet / Drawer** | ❌ Tidak Ada | ✅ Ada (`BottomSheet`) | Shadcn: `Sheet`. Kitvue: `BottomSheet` |
| 9 | **Navigation Menu** | ❌ Tidak Ada | ✅ Ada (`NavbarCorporate`, dll) | Shadcn: `NavigationMenu`. Kitvue: varian CMS |
| 10 | **Sidebar** | ❌ Tidak Ada | ✅ Ada (`SideNavCMS`) | Shadcn v4: `Sidebar`. Kitvue: `SideNavCMS` |

---

## 6. Roadmap Rekomendasi

### Phase 2A: Komponen Baru Prioritas Tinggi (Belum Ada di Manapun)
1. **Skeleton Loader** — `Skeleton.vue` dengan Tailwind v4 `animate-pulse`.
2. **Input OTP / Pin Input** — `InputOTP.vue` via Reka UI PinInput primitive.

### Phase 2B: Komponen dari Kitvue Live yang Bisa Di-Porting
3. **BottomSheet / Sheet** — Porting sebagai `Sheet.vue` atau `Drawer.vue`.
4. **Stepper** — Porting `Stepper` & `SideStepper` dari Kitvue Live.
5. ~~**FilePicker**~~ — ✅ Sudah ada (`FilePicker.vue` + `ImagePicker.vue`). Evaluasi fitur camera dari Kitvue.
6. **SideNavCMS & HeaderCMS** — Porting layout CMS sidebar & header.

### Phase 2C: Nice to Have
7. **Command Palette** — Dialog pencarian cepat `Cmd+K`.
8. **Slider / Range Input** — Kontrol geser angka.
9. **Scroll Area** — Custom scrollbar wrapper.

---

## 7. Standar Arsitektur & Definition of Done
Setiap komponen baru wajib mematuhi:
- ♿ **Headless Accessibility (A11y)** via Reka UI (Radix Vue port).
- 🎨 **Tailwind CSS v4 Integration** via `--g-kit-*` design tokens.
- 📱 **Responsive Layouts** (Mobile, Tablet, Desktop).
- 📦 **Registry JSON** — Terdaftar di [registry/components/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/registry/components).
- 📤 **Barrel Export** — Ter-export dari [index.ts](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/packages/ui/src/index.ts).
- 📖 **VitePress Documentation** — Preview demo tersedia di [apps/docs/](file:///Users/lord/Documents/Pegadaian%20Project/Desktop/design%20system/gwind/apps/docs).
