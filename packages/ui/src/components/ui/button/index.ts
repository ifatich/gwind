import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'relative inline-flex cursor-pointer items-center justify-center gap-1 overflow-hidden whitespace-nowrap text-center font-extrabold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-lime-600 focus-visible:bg-lime-800 active:bg-lime-800',
        primary: 'bg-primary text-primary-foreground hover:bg-lime-600 focus-visible:bg-lime-800 active:bg-lime-800',
        destructive: 'bg-red-500 text-destructive-foreground hover:bg-red-600 active:bg-red-700',
        outline: 'border border-primary bg-white text-primary hover:border-lime-600 hover:text-lime-600 active:border-lime-800 active:text-lime-800',
        combobox: 'combobox border border-input bg-white text-black-600 hover:border-primary',
        secondary:
          'border border-primary bg-white text-primary hover:border-lime-600 hover:text-lime-600 active:border-lime-800 active:text-lime-800',
        ghost: 'bg-foreground/0 border-0 hover:bg-foreground/8 active:bg-foreground/20',
        'ghost-fab': 'bg-foreground/5 border-0 hover:bg-foreground/15 active:bg-foreground/20',
        link: 'h-auto rounded-none px-1 py-0 text-primary hover:text-lime-600 focus:text-lime-600 active:text-lime-800',
        neutral:
          'border border-black-400 bg-white text-black-600 hover:border-black-500 hover:text-black-800 active:border-black-600',
        tertiary: 'bg-white text-primary hover:text-lime-600 active:text-lime-800',
        icon: 'bg-primary text-primary-foreground hover:bg-lime-600 focus-visible:bg-lime-800 active:bg-lime-800',
        google: 'border border-black-400 bg-white text-black-600 hover:border-black-500 hover:text-black-800',
        apple: 'border border-black-400 bg-white text-black-600 hover:border-black-500 hover:text-black-800',
        facebook: 'border border-black-400 bg-white text-black-600 hover:border-black-500 hover:text-black-800',
      },
      size: {
        sm: 'h-6 rounded px-2.5 py-[3px] !text-omega leading-[18px]',
        md: 'h-8 rounded-md px-3 py-1.5 !text-sigma leading-5',
        lg: 'h-10 rounded-md px-4 py-2 !text-omicron leading-6',
        xl: 'h-12 rounded-md px-4 py-3 !text-omicron leading-6',
        icon: 'h-12 w-12 rounded p-3 !text-omicron leading-6',
        fab: 'h-12 w-12 rounded p-3 transition !text-omicron leading-6',
      },
      state: {
        disabled: 'bg-black-500 text-white pointer-events-none hover:bg-black-500',
      },
    },
    compoundVariants: [
      {
        variant: 'icon',
        size: 'sm',
        class: 'h-6 w-6 p-[3px] rounded',
      },
      {
        variant: 'icon',
        size: 'md',
        class: 'h-8 w-8 p-1.5 rounded-md',
      },
      {
        variant: 'icon',
        size: 'lg',
        class: 'h-10 w-10 p-2 rounded-md',
      },
      {
        variant: 'icon',
        size: 'xl',
        class: 'h-12 w-12 p-3 rounded',
      },
      {
        variant: 'icon',
        size: 'fab',
        class: 'h-12 w-12 p-3 rounded',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'lg',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
