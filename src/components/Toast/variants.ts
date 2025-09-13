import { tv } from 'tailwind-variants';

export const variants = tv({
  base: [
    'box-border flex items-center justify-between overflow-hidden py-4 pr-3 pl-4',
    'relative w-[26.25rem] rounded-xl shadow-[0px_0px_0px_1px_var(--gray-400)]',
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
