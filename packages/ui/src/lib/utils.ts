import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const GWIND_UI_SCOPE_CLASS = 'gwind-ui'

/**
 * Merge class names with Tailwind CSS conflict resolution.
 * Combines clsx for conditional classes with tailwind-merge
 * for intelligent deduplication of Tailwind utility classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs, GWIND_UI_SCOPE_CLASS, '!font-sans'))
}
