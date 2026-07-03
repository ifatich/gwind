import {
  type ComputedRef,
  computed,
  onMounted,
  onUnmounted,
  type MaybeRefOrGetter,
  type Ref,
  toValue,
} from "vue";
import {
  matchesDropdownSearch,
  useDropdownListContext,
} from "./context";

export function useDropdownListItemSearch(options: {
  label?: MaybeRefOrGetter<string | undefined>;
  caption?: MaybeRefOrGetter<string | undefined>;
  searchText?: MaybeRefOrGetter<string | undefined>;
  contentRef: Ref<HTMLElement | null>;
}) {
  const listContext = useDropdownListContext();
  let unregisterItem: (() => void) | undefined;

  onMounted(() => {
    unregisterItem = listContext?.registerItem();
  });

  onUnmounted(() => {
    unregisterItem?.();
  });

  const resolvedSearchText = computed(() => {
    const explicit = toValue(options.searchText)?.trim();
    if (explicit) return explicit;

    const parts = [toValue(options.label), toValue(options.caption)].filter(
      Boolean,
    );
    if (parts.length) return parts.join(" ");

    return options.contentRef.value?.textContent?.trim() ?? "";
  });

  const isVisible: ComputedRef<boolean> = computed(() => {
    if (!listContext?.showSearch.value) return true;
    return matchesDropdownSearch(
      listContext.searchQuery.value,
      resolvedSearchText.value,
    );
  });

  return {
    isVisible,
    showSearch: computed(() => listContext?.showSearch.value ?? false),
  };
}
