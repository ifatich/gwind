<script setup lang="ts">
import { computed, onBeforeUnmount, provide, ref, watch, type HTMLAttributes } from "vue";
import { ChevronDown } from "lucide-vue-next";
import { useMediaQuery } from "@vueuse/core";
import { Popover, PopoverTrigger } from "../popover";
import { PopoverContent as RekaPopoverContent, PopoverPortal } from "reka-ui";
import { useGwindPortalTarget } from "../../../lib/portal";
import { Label } from "../label";
import { cn } from "../../../lib/utils";
import { DROPDOWN_ROOT_CONTEXT_KEY } from "./context";

const props = withDefaults(
  defineProps<{
    label?: string;
    open?: boolean;
    defaultOpen?: boolean;
    disabled?: boolean;
    placeholder?: string;
    modelLabel?: string;
    class?: HTMLAttributes["class"];
    triggerClass?: HTMLAttributes["class"];
    contentClass?: HTMLAttributes["class"];
  }>(),
  {
    disabled: false,
    placeholder: "Select option",
  },
);

const emits = defineEmits<{
  (event: "update:open", value: boolean): void;
}>();

const internalOpen = ref(props.open ?? props.defaultOpen ?? false);
const openState = computed(() => props.open ?? internalOpen.value);
const isFilled = computed(() => Boolean(props.modelLabel?.trim()));
const portalTarget = useGwindPortalTarget();

provide(DROPDOWN_ROOT_CONTEXT_KEY, {
  open: openState,
});

watch(
  () => props.open,
  (value) => {
    if (value !== undefined) internalOpen.value = value;
  },
);

function updateOpen(value: boolean) {
  internalOpen.value = value;
  emits("update:open", value);
}

function close() {
  updateOpen(false);
}

const isMobile = useMediaQuery("(max-width: 639.9px)");

// Lock body scroll saat bottom sheet mobile terbuka
watch(
  [openState, isMobile],
  ([open, mobile]) => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open && mobile ? "hidden" : "";
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
});

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && openState.value && isMobile.value) {
    close();
  }
}
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <Label v-if="label">{{ label }}</Label>
    <Popover :open="openState" @update:open="updateOpen" :modal="isMobile">
      <PopoverTrigger as-child>
        <slot name="trigger">
          <button
            type="button"
            role="combobox"
            :disabled="props.disabled"
          :aria-expanded="openState ? 'true' : 'false'"
          aria-haspopup="listbox"
          :class="
            cn(
              'group relative flex h-12 w-full items-center rounded-md border bg-white px-3 py-3 pr-11 text-left text-omicron font-semibold outline-none transition-[border-color,transform] duration-100',
              'border-black-200 hover:border-lime-600 focus-visible:border-lime-500 focus-visible:outline-none focus-visible:ring-0',
              'data-[state=open]:border-lime-500 data-[state=open]:hover:border-lime-500',
              'disabled:cursor-not-allowed disabled:border-black-200 disabled:bg-black-200 disabled:text-black-600 disabled:hover:border-black-200',
              props.triggerClass,
            )
          "
        >
          <span
            :class="
              cn(
                'min-w-0 flex-1 truncate',
                isFilled ? 'text-black-800' : 'text-black-500',
              )
            "
          >
            {{ modelLabel || placeholder }}
          </span>
          <ChevronDown
            class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 shrink-0 text-black-600 transition-transform duration-150 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        </button>
      </slot>
    </PopoverTrigger>

    <!-- ===== DESKTOP: RekaPopoverContent normal, positioning dihandle floating-ui ===== -->
    <PopoverPortal v-if="!isMobile" :to="portalTarget">
      <RekaPopoverContent
        align="start"
        :side-offset="8"
        update-position-strategy="always"
        data-slot="dropdown-content"
        :class="
          cn(
            'z-50 w-[var(--reka-popover-trigger-width)] overflow-hidden rounded-[6px] border border-black-200 bg-white p-0 shadow-drop-1 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            props.contentClass,
          )
        "
      >
        <div :class="cn('min-w-full', props.class)">
          <slot />
        </div>
      </RekaPopoverContent>
    </PopoverPortal>

    <!-- ===== MOBILE: Bottom sheet lepas dari floating-ui, transform full dikontrol Transition ===== -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMobile && openState"
          class="fixed inset-0 z-50 bg-[#000000]/80"
          @click="close"
          @keydown="onKeydown"
        />
      </Transition>

      <Transition
        enter-active-class="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
        enter-from-class="translate-y-full"
        enter-to-class="translate-y-0"
        leave-active-class="transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]"
        leave-from-class="translate-y-0"
        leave-to-class="translate-y-full"
      >
        <div
          v-if="isMobile && openState"
          data-slot="dropdown-content"
          role="listbox"
          :class="
            cn(
              'fixed bottom-0 left-0 z-50 w-full overflow-hidden rounded-t-2xl border-t border-black-100 bg-white p-0 shadow-drop-1',
              'pb-[env(safe-area-inset-bottom)]',
              props.contentClass,
            )
          "
        >
          <!-- Mobile Header (Matches DialogHeader) -->
          <div class="flex items-center justify-between gap-4 border-b border-black-200 p-4">
            <div class="flex flex-col gap-y-1">
              <span class="text-lambda font-bold leading-none tracking-tight text-black-800">
                <slot name="mobile-title">{{ placeholder }}</slot>
              </span>
            </div>
            <button
              type="button"
              @click="close"
              class="cursor-pointer rounded-md text-black-500 opacity-70 transition-colors hover:text-black-800 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:h-6 [&_svg:not([class*='size-'])]:w-6"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.97814 6.27576C7.50308 5.88357 6.79868 5.90971 6.3542 6.3542C5.88193 6.82646 5.88193 7.59215 6.3542 8.06441L10.7898 12.5L6.3542 16.9356C5.88193 17.4079 5.88193 18.1735 6.3542 18.6458C6.79868 19.0903 7.50308 19.1164 7.97814 18.7242L8.06441 18.6458L12.5 14.2102L16.9356 18.6458L17.0219 18.7242C17.4969 19.1164 18.2013 19.0903 18.6458 18.6458C19.1181 18.1735 19.1181 17.4079 18.6458 16.9356L14.2102 12.5L18.6458 8.06441C19.1181 7.59215 19.1181 6.82646 18.6458 6.3542C18.2013 5.90971 17.4969 5.88357 17.0219 6.27576L16.9356 6.3542L12.5 10.7898L8.06441 6.3542L7.97814 6.27576Z" fill="currentColor"/>
                <mask id="mask0_25554_9176" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="6" y="6" width="13" height="13">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.97814 6.27576C7.50308 5.88357 6.79868 5.90971 6.3542 6.3542C5.88193 6.82646 5.88193 7.59215 6.3542 8.06441L10.7898 12.5L6.3542 16.9356C5.88193 17.4079 5.88193 18.1735 6.3542 18.6458C6.79868 19.0903 7.50308 19.1164 7.97814 18.7242L8.06441 18.6458L12.5 14.2102L16.9356 18.6458L17.0219 18.7242C17.4969 19.1164 18.2013 19.0903 18.6458 18.6458C19.1181 18.1735 19.1181 17.4079 18.6458 16.9356L14.2102 12.5L18.6458 8.06441C19.1181 7.59215 19.1181 6.82646 18.6458 6.3542C18.2013 5.90971 17.4969 5.88357 17.0219 6.27576L16.9356 6.3542L12.5 10.7898L8.06441 6.3542L7.97814 6.27576Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_25554_9176)">
                <rect width="24" height="24" fill="currentColor"/>
                </g>
              </svg>
              <span class="sr-only">Close</span>
            </button>
          </div>

          <div class="max-h-[70vh] overflow-y-auto overscroll-contain">
            <div :class="cn('min-w-full', props.class)">
              <slot />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </Popover>
  </div>
</template>