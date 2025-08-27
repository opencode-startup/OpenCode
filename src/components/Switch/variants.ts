import { tv } from 'tailwind-variants';

// Switch container variants
export const switchContainerVariants = tv({
  base: [
    'relative flex min-h-fit items-start justify-start overflow-hidden rounded-[0.375rem] border',
    'border-solid border-gray-400',
    'transition-all duration-200 ease-out',
  ],
  variants: {
    size: {
      small: 'p-1',
      medium: 'p-1',
      large: 'p-1.5',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    size: 'medium',
    disabled: false,
  },
});

// Switch option variants
export const switchOptionVariants = tv({
  base: [
    'flex flex-col items-start justify-center overflow-hidden rounded-[0.125rem] px-3 py-2',
    'cursor-pointer transition-all duration-200 ease-out',
    'text-[0.875rem] leading-[1.25rem]',
  ],
  variants: {
    size: {
      small: 'px-2 py-1.5 text-[0.75rem] leading-[1rem]',
      medium: 'px-3 py-2 text-[0.875rem] leading-[1.25rem]',
      large: 'px-4 py-2.5 text-[1rem] leading-[1.5rem]',
    },
    selected: {
      true: 'text-gray-1000 relative z-10 bg-transparent',
      false: 'hover:text-gray-1000 relative z-10 bg-transparent text-gray-900',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'medium',
    selected: false,
    disabled: false,
  },
});
