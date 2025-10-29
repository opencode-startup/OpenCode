import { tv } from 'tailwind-variants';

// Toggle container variants
export const toggleContainerVariants = tv({
  base: [
    'relative flex items-center justify-start overflow-hidden rounded-xl border border-solid',
    'cursor-pointer',
    'focus-ring',
  ],
  variants: {
    size: {
      small: 'h-3.5 w-6.5',
      medium: 'h-4.5 w-8.5',
      large: 'h-5.5 w-10.5',
    },
    checked: {
      true: 'border-blue-600 bg-blue-600',
      false: 'border-gray-300 bg-gray-200',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer',
    },
    shouldAnimate: {
      true: 'transition-all duration-200 ease-out',
      false: '',
    },
  },
  compoundVariants: [
    {
      checked: true,
      disabled: false,
      className: 'hover:border-blue-700 hover:bg-blue-700',
    },
    {
      checked: false,
      disabled: false,
      className: 'hover:border-gray-400 hover:bg-gray-300',
    },
  ],
  defaultVariants: {
    size: 'medium',
    checked: false,
    disabled: false,
    shouldAnimate: true,
  },
});

// Toggle indicator variants
export const toggleIndicatorVariants = tv({
  base: ['bg-gray-1000 rounded-full', 'shadow-sm'],
  variants: {
    size: {
      small: 'size-3',
      medium: 'size-4',
      large: 'size-5',
    },
    checked: {
      true: 'translate-x-full',
      false: 'translate-x-0',
    },
    disabled: {
      true: 'opacity-80',
      false: 'opacity-100',
    },
    shouldAnimate: {
      true: 'transition-all duration-200 ease-out',
      false: '',
    },
  },
  defaultVariants: {
    size: 'medium',
    checked: false,
    disabled: false,
    shouldAnimate: true,
  },
});
