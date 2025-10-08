import { tv } from 'tailwind-variants';

import { ButtonSize } from './types';

export const variants = tv({
  base: [
    'relative inline-flex cursor-pointer items-center justify-center overflow-hidden font-medium',
    'transition-all duration-200 ease-out focus:outline-none',
    'focus-ring',
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
    iconOnly: {
      true: '',
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
    disabled: {
      true: 'border-gray-alpha-400 pointer-events-none cursor-not-allowed border bg-gray-100 text-gray-700',
    },
  },
  compoundVariants: [
    {
      size: 'small',
      iconOnly: true,
      className: 'w-8 px-0',
    },
    {
      size: 'medium',
      iconOnly: true,
      className: 'w-10 px-0',
    },
    {
      size: 'large',
      iconOnly: true,
      className: 'w-12 px-0',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    shape: 'square',
    fullWidth: false,
    loading: false,
    iconOnly: false,
  },
});

// Size-specific configuration for spinner sizes
export const sizeConfig = {
  small: {
    spinnerSize: 16,
  },
  medium: {
    spinnerSize: 20,
  },
  large: {
    spinnerSize: 24,
  },
} as const satisfies Record<
  ButtonSize,
  {
    spinnerSize: number;
  }
>;
