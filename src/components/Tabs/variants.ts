import { tv } from 'tailwind-variants';

// Tabs container variants
export const tabsContainerVariants = tv({
  base: [
    'relative flex min-h-fit items-center justify-start overflow-visible',
    'border-b border-solid border-gray-300',
  ],
  variants: {
    size: {
      small: 'gap-1',
      medium: 'gap-2',
      large: 'gap-3',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-default',
    },
  },
  defaultVariants: {
    size: 'medium',
    disabled: false,
  },
});

// Tab option variants
export const tabOptionVariants = tv({
  base: [
    'relative flex cursor-pointer flex-col items-center justify-center',
    'transition-all duration-200 ease-out',
    'hover:text-gray-1000 text-gray-600',
    'border-b-2 border-transparent',
    'focus-ring',
  ],
  variants: {
    size: {
      small: 'px-3 py-2 text-sm',
      medium: 'px-4 py-3 text-base',
      large: 'px-6 py-4 text-lg',
    },
    selected: {
      true: 'border-gray-1000 text-gray-1000',
      false: 'text-gray-600 hover:text-gray-900',
    },
    disabled: {
      true: 'cursor-not-allowed text-gray-400 opacity-50',
      false: 'cursor-pointer',
    },
  },
  compoundVariants: [
    {
      selected: true,
      disabled: false,
      className: 'border-gray-1000 text-gray-1000',
    },
    {
      selected: false,
      disabled: false,
      className: 'hover:text-gray-1000',
    },
  ],
  defaultVariants: {
    size: 'medium',
    selected: false,
    disabled: false,
  },
});

// Tab indicator variants
export const tabIndicatorVariants = tv({
  base: ['bg-gray-1000 absolute bottom-0 h-0.5', 'transition-all duration-200 ease-out'],
});
