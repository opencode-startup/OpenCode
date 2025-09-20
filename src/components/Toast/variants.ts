import { tv } from 'tailwind-variants';

export const containerVariants = tv({
  base: [
    'box-border flex flex-col overflow-hidden py-4 pr-3 pl-4',
    'relative rounded-xl shadow-[0px_0px_0px_1px_var(--gray-400)]',
    'typo-label-14 transition-all duration-300 ease-out',
  ],
  variants: {
    type: {
      default: ['text-gray-1000 bg-background-200'],
      success: ['text-gray-1000 bg-blue-700'],
      warning: ['text-background-100 bg-amber-800'],
      error: ['text-gray-1000 bg-red-800'],
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

export const closeButtonVariants = tv({
  base: ['hover:bg-transparent'],
  variants: {
    type: {
      default: 'focus-visible:ring-offset-background-200 hover:bg-gray-100',
      success: 'hover:bg-blue-600 focus-visible:ring-offset-blue-700',
      warning: 'hover:bg-amber-700 focus-visible:ring-offset-amber-800',
      error: 'hover:bg-red-700 focus-visible:ring-offset-red-800',
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

export const closeButtonIconVariants = tv({
  variants: {
    type: {
      default: 'text-gray-1000',
      success: 'text-gray-1000',
      warning: 'text-background-100',
      error: 'text-gray-1000',
    },
  },
  defaultVariants: {
    type: 'default',
  },
});
