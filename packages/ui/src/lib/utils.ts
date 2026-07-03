import '@fontsource/nunito-sans/latin-600.css'
import '@fontsource/nunito-sans/latin-700.css'
import '@fontsource/nunito-sans/latin-800.css'
import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const GWIND_FONT_CLASS = '![font-family:var(--font-family-base)]'

const gwindTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta',
        'kappa', 'lambda', 'omicron', 'sigma', 'omega', 'atom',
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return gwindTwMerge(clsx(inputs, GWIND_FONT_CLASS))
}