import {
  type ComputedRef,
  type InjectionKey,
  type Ref,
  inject,
} from "vue";

export interface DropdownRootContext {
  open: ComputedRef<boolean>;
}

export interface DropdownListContext {
  searchQuery: Ref<string>;
  showSearch: ComputedRef<boolean>;
  registerItem: () => () => void;
}

export const DROPDOWN_ROOT_CONTEXT_KEY: InjectionKey<DropdownRootContext> =
  Symbol("gwindDropdownRoot");

export const DROPDOWN_LIST_CONTEXT_KEY: InjectionKey<DropdownListContext> =
  Symbol("gwindDropdownList");

export function useDropdownRootContext() {
  return inject(DROPDOWN_ROOT_CONTEXT_KEY, null);
}

export function useDropdownListContext() {
  return inject(DROPDOWN_LIST_CONTEXT_KEY, null);
}

export function matchesDropdownSearch(
  searchQuery: string,
  searchText: string,
): boolean {
  const query = searchQuery.trim().toLowerCase();
  if (!query) return true;
  return searchText.toLowerCase().includes(query);
}
