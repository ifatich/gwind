<script setup lang="ts">
/**
 * @file PlaygroundTopNav.vue
 * @description Enterprise-grade sticky pill navigation with glassmorphic backdrop,
 * domain category quick jumps, auto-scroll ScrollSpy, and horizontal scroll gradient fades.
 */
import { ref, computed } from "vue";
import { sections as defaultSections, type SectionItem, categoryOptions } from "../data/catalog";

const props = withDefaults(
  defineProps<{
    sections?: SectionItem[];
    activeSection: string;
  }>(),
  {
    sections: () => defaultSections,
  }
);

const emit = defineEmits<{
  (e: "navigate", id: string): void;
}>();

const navContainerRef = ref<HTMLElement | null>(null);

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

defineExpose({
  scrollNavPillIntoView,
});
</script>

<template>
  <nav class="playground-top-nav relative group">
    <!-- Left Scroll Fade Mask -->
    <div class="absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />

    <div class="playground-container relative">
      <div
        ref="navContainerRef"
        class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 scroll-smooth"
      >
        <button
          v-for="section in props.sections"
          :key="section.id"
          :id="`topnav-pill-${section.id}`"
          :data-nav-id="section.id"
          type="button"
          class="inline-flex items-center whitespace-nowrap px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer select-none"
          :class="
            activeSection === section.id
              ? 'bg-lime-500 text-black shadow-sm shadow-lime-500/25 scale-[1.03]'
              : 'text-foreground-secondary hover:text-foreground hover:bg-background border border-transparent'
          "
          @click="emit('navigate', section.id)"
        >
          <span>{{ section.label }}</span>
        </button>
      </div>
    </div>

    <!-- Right Scroll Fade Mask -->
    <div class="absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
  </nav>
</template>
