<script setup lang="ts">
/**
 * @file PlaygroundTopNav.vue
 * @description Premium segmented tab navigation with underline indicators,
 * smooth horizontal scroll, edge fade masks, and high-contrast accessibility.
 * All colors use explicit CSS values via scoped styles to bypass gwind theme reset.
 */
import { ref } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { sections as defaultSections, type SectionItem } from "../data/catalog";

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

function scrollNav(direction: number) {
  if (navContainerRef.value) {
    navContainerRef.value.scrollBy({ left: direction * 260, behavior: "smooth" });
  }
}

defineExpose({
  scrollNavPillIntoView,
});
</script>

<template>
  <nav class="pg-topnav" role="tablist" aria-label="Component section navigation">
    <!-- Edge Fade Masks (always visible, overlaid) -->
    <div class="pg-topnav__fade pg-topnav__fade--left" aria-hidden="true" />
    <div class="pg-topnav__fade pg-topnav__fade--right" aria-hidden="true" />

    <!-- Scroll Controls -->
    <button
      type="button"
      class="pg-topnav__scroll-btn pg-topnav__scroll-btn--left"
      title="Scroll ke kiri"
      aria-label="Scroll navigation left"
      @click="scrollNav(-1)"
    >
      <ChevronLeft class="pg-topnav__scroll-icon" />
    </button>

    <div class="playground-container">
      <div
        ref="navContainerRef"
        class="pg-topnav__track"
      >
        <button
          v-for="section in props.sections"
          :key="section.id"
          :id="`topnav-pill-${section.id}`"
          :data-nav-id="section.id"
          type="button"
          role="tab"
          :aria-selected="activeSection === section.id"
          class="pg-topnav__pill"
          :class="{ 'pg-topnav__pill--active': activeSection === section.id }"
          @click="emit('navigate', section.id)"
        >
          <span
            v-if="activeSection === section.id"
            class="pg-topnav__dot"
            aria-hidden="true"
          />
          <span>{{ section.label }}</span>
        </button>
      </div>
    </div>

    <button
      type="button"
      class="pg-topnav__scroll-btn pg-topnav__scroll-btn--right"
      title="Scroll ke kanan"
      aria-label="Scroll navigation right"
      @click="scrollNav(1)"
    >
      <ChevronRight class="pg-topnav__scroll-icon" />
    </button>
  </nav>
</template>

<style scoped>
/* ── Top Nav Shell ──────────────────────────────────────────────── */
.pg-topnav {
  position: sticky;
  top: 56px;
  z-index: 30;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid #e2e8f0;
  padding: 0;
}

@media (min-width: 640px) {
  .pg-topnav {
    top: 64px;
  }
}

/* ── Track (scrollable pill container) ──────────────────────────── */
.pg-topnav__track {
  display: flex;
  align-items: center;
  gap: 2px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 8px 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.pg-topnav__track::-webkit-scrollbar {
  display: none;
}

/* ── Individual Pill ────────────────────────────────────────────── */
.pg-topnav__pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  padding: 7px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1;
  color: #64748b;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  transition: color 0.18s, background 0.18s, border-color 0.18s, box-shadow 0.18s;
}

.pg-topnav__pill:hover {
  color: #1e293b;
  background: #f1f5f9;
}

.pg-topnav__pill:active {
  transform: scale(0.97);
}

/* ── Active State ───────────────────────────────────────────────── */
.pg-topnav__pill--active {
  color: #0f172a;
  background: #f0fdf4;
  border-color: #86efac;
  font-weight: 800;
  box-shadow: 0 1px 3px rgba(22, 163, 74, 0.08);
}

.pg-topnav__pill--active::after {
  content: '';
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: -8px;
  height: 2.5px;
  border-radius: 2px;
  background: linear-gradient(90deg, #16a34a, #22c55e);
}

/* ── Active Indicator Dot ───────────────────────────────────────── */
.pg-topnav__dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.6);
  animation: pg-dot-pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes pg-dot-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 4px rgba(34, 197, 94, 0.5); }
  50% { opacity: 0.6; box-shadow: 0 0 10px rgba(34, 197, 94, 0.8); }
}

/* ── Fade Masks ─────────────────────────────────────────────────── */
.pg-topnav__fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  pointer-events: none;
  z-index: 10;
}

.pg-topnav__fade--left {
  left: 0;
  background: linear-gradient(to right, rgba(255,255,255,0.97), transparent);
}

.pg-topnav__fade--right {
  right: 0;
  background: linear-gradient(to left, rgba(255,255,255,0.97), transparent);
}

@media (min-width: 640px) {
  .pg-topnav__fade {
    width: 56px;
  }
}

/* ── Scroll Buttons ─────────────────────────────────────────────── */
.pg-topnav__scroll-btn {
  position: absolute;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #64748b;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s, color 0.15s, background 0.15s, transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.pg-topnav:hover .pg-topnav__scroll-btn {
  opacity: 1;
}

.pg-topnav__scroll-btn:hover {
  color: #0f172a;
  background: #f8fafc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}

.pg-topnav__scroll-btn:active {
  transform: scale(0.95);
}

.pg-topnav__scroll-btn--left {
  left: 8px;
}

.pg-topnav__scroll-btn--right {
  right: 8px;
}

.pg-topnav__scroll-icon {
  width: 14px;
  height: 14px;
}
</style>
