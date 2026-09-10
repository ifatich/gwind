<script setup lang="ts">
/**
 * @file App.vue
 * @description Main orchestrator for the Gwind Design System Playground.
 * Assembles modular layout chrome and domain-grouped component sections.
 */
import { computed, onMounted, onUnmounted, ref } from "vue";
import { TooltipProvider } from "@gwind/ui";

// Layout & Shell Components
import PlaygroundHeader from "./components/PlaygroundHeader.vue";
import PlaygroundTopNav from "./components/PlaygroundTopNav.vue";
import PlaygroundHero from "./components/PlaygroundHero.vue";
import PlaygroundFooter from "./components/PlaygroundFooter.vue";

// Overview Sections
import TokensSection from "./sections/overview/TokensSection.vue";

// Actions Sections
import ButtonSection from "./sections/actions/ButtonSection.vue";
import LinkSection from "./sections/actions/LinkSection.vue";

// Form & Data Entry Sections
import InputSection from "./sections/forms/InputSection.vue";
import InputRupiahSection from "./sections/forms/InputRupiahSection.vue";
import InputPersentaseSection from "./sections/forms/InputPersentaseSection.vue";
import AddAmountSection from "./sections/forms/AddAmountSection.vue";
import TextareaSection from "./sections/forms/TextareaSection.vue";
import LabelSection from "./sections/forms/LabelSection.vue";
import CheckboxSection from "./sections/forms/CheckboxSection.vue";
import RadioGroupSection from "./sections/forms/RadioGroupSection.vue";
import SelectSection from "./sections/forms/SelectSection.vue";
import ComboboxSection from "./sections/forms/ComboboxSection.vue";
import DropdownSection from "./sections/forms/DropdownSection.vue";
import DatepickerSection from "./sections/forms/DatepickerSection.vue";
import SwitchSection from "./sections/forms/SwitchSection.vue";
import FilePickerSection from "./sections/forms/FilePickerSection.vue";
import ImagePickerSection from "./sections/forms/ImagePickerSection.vue";

// Data Display & Layout Sections
import AvatarSection from "./sections/data/AvatarSection.vue";
import BadgeSection from "./sections/data/BadgeSection.vue";
import CardSection from "./sections/data/CardSection.vue";
import TableSection from "./sections/data/TableSection.vue";
import AccordionSection from "./sections/data/AccordionSection.vue";
import CarouselSection from "./sections/data/CarouselSection.vue";
import DividerSection from "./sections/data/DividerSection.vue";
import BreadcrumbSection from "./sections/data/BreadcrumbSection.vue";
import PaginationSection from "./sections/data/PaginationSection.vue";
import TabsSection from "./sections/data/TabsSection.vue";

// Feedback & Floating Surface Sections
import AlertSection from "./sections/feedback/AlertSection.vue";
import ProgressSection from "./sections/feedback/ProgressSection.vue";
import SpinnerSection from "./sections/feedback/SpinnerSection.vue";
import ToastSection from "./sections/feedback/ToastSection.vue";
import DialogSection from "./sections/feedback/DialogSection.vue";
import PopoverSection from "./sections/feedback/PopoverSection.vue";
import TooltipSection from "./sections/feedback/TooltipSection.vue";

const docsUrl = import.meta.env.PROD
  ? "https://ifatich.github.io/gwind/"
  : "http://localhost:5173/gwind/";

const compactMode = ref(false);
const shellClass = computed(() =>
  compactMode.value ? "text-sigma" : "text-omicron"
);

const activeSection = ref("button");
const topNavRef = ref<InstanceType<typeof PlaygroundTopNav> | null>(null);
const isManualNav = ref(false);

function scrollToSection(id: string) {
  isManualNav.value = true;
  activeSection.value = id;
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -115;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  topNavRef.value?.scrollNavPillIntoView(id);
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
        topNavRef.value?.scrollNavPillIntoView(topEntry.target.id);
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
</script>

<template>
  <TooltipProvider>
    <div class="playground-shell" :class="shellClass">
      <!-- Fixed Global Header with Integrated Search -->
      <PlaygroundHeader
        v-model:compact-mode="compactMode"
        :docs-url="docsUrl"
        @navigate="scrollToSection"
      />


      <!-- Sticky Top Navigation Pills (ScrollSpy) -->
      <PlaygroundTopNav
        ref="topNavRef"
        :active-section="activeSection"
        @navigate="scrollToSection"
      />

      <!-- Main Canvas Container -->
      <main class="playground-container py-6 sm:py-8 lg:py-10">
        <div class="space-y-8 sm:space-y-12">
          <!-- Hero Section: Enterprise Command Center -->
          <PlaygroundHero @navigate="scrollToSection" />


          <!-- 2. General & Actions -->
          <ButtonSection />
          <LinkSection />

          <!-- 3. Form & Data Entry -->
          <InputSection />
          <InputRupiahSection />
          <InputPersentaseSection />
          <AddAmountSection />
          <TextareaSection />
          <LabelSection />
          <CheckboxSection />
          <RadioGroupSection />
          <SelectSection />
          <ComboboxSection />
          <DropdownSection />
          <DatepickerSection />
          <SwitchSection />
          <FilePickerSection />
          <ImagePickerSection />

          <!-- 4. Data Display & Layout -->
          <AvatarSection />
          <BadgeSection />
          <CardSection />
          <TableSection />
          <AccordionSection />
          <CarouselSection />
          <DividerSection />
          <BreadcrumbSection />
          <PaginationSection />
          <TabsSection />

          <!-- 5. Feedback & Floating Surfaces -->
          <AlertSection />
          <ProgressSection />
          <SpinnerSection />
          <ToastSection />
          <DialogSection />
          <PopoverSection />
          <TooltipSection />

          <!-- 6. Design System Architecture: Design Tokens -->
          <TokensSection />
        </div>
      </main>

      <!-- Global Marketing & Documentation Footer -->
      <PlaygroundFooter />
    </div>
  </TooltipProvider>
</template>
