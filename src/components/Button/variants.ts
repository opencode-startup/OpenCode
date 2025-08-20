import { tv } from 'tailwind-variants';

export const variants = tv({
  base: [
    'relative inline-flex cursor-pointer items-center justify-center overflow-hidden font-medium',
    'transition-all duration-200 ease-out focus:outline-none',
    `focus-visible:ring-offset-background-100 focus-visible:ring-2 focus-visible:ring-blue-600
    focus-visible:ring-offset-2 focus-visible:outline-none`,
    `disabled:border-gray-alpha-400 disabled:cursor-not-allowed disabled:border disabled:bg-gray-100
    disabled:text-gray-700`,
  ],
  variants: {
    variant: {
      primary: ['bg-gray-1000 text-background-100 hover:bg-gray-900'],
      secondary: ['bg-background-100 text-gray-1000 border border-gray-400 hover:bg-gray-200'],
      tertiary: ['text-gray-1000 hover:bg-gray-alpha-200 bg-transparent'],
      error: ['text-gray-1000 bg-red-800 hover:bg-red-700'],
      warning: ['text-background-100 bg-amber-800 hover:bg-amber-700'],
      success: ['text-gray-1000 bg-blue-800 hover:bg-blue-700'],
    },
    size: {
      small: 'typo-button-14 h-8 gap-2 px-3',
      medium: 'typo-button-16 h-10 gap-2 px-4',
      large: 'typo-button-16 h-12 gap-2 px-6',
    },
    shape: {
      square: 'rounded-sm',
      rounded: 'rounded-full',
    },
    fullWidth: {
      true: 'w-full',
    },
    loading: {
      true: 'cursor-not-allowed opacity-60',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    shape: 'square',
    fullWidth: false,
    loading: false,
  },
});
