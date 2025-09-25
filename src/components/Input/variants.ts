import { tv } from 'tailwind-variants';

import { InputSize } from './types';

// Container variants for the input wrapper
export const inputContainerVariants = tv({
  base: ['bg-background-100 flex overflow-hidden rounded transition-shadow duration-200 ease-out'],
  variants: {
    size: {
      small: 'min-h-8 text-sm',
      medium: 'min-h-10 text-sm',
      large: 'min-h-12 text-base',
    },
    multiline: {
      true: 'h-auto items-stretch',
      false: 'items-center',
    },
    disabled: {
      true: 'cursor-not-allowed bg-gray-100',
    },
    error: {
      false: [
        'shadow-[0px_0px_0px_1px_var(--gray-alpha-400)]',
        'focus-within:!shadow-[0px_0px_0px_1px_var(--gray-alpha-800),0px_0px_0px_4px_var(--gray-alpha-400)]',
        'hover:shadow-[0px_0px_0px_1px_var(--gray-alpha-500)]',
      ],
      true: [
        'shadow-[0px_0px_0px_1px_var(--red-800),0px_0px_0px_4px_var(--red-400)]',
        'focus-within:shadow-[0px_0px_0px_1px_var(--red-900),0px_0px_0px_4px_var(--red-500)]',
        'hover:shadow-[0px_0px_0px_1px_var(--red-900),0px_0px_0px_4px_#df434880]',
      ],
    },
  },
  compoundVariants: [
    {
      disabled: true,
      error: [true, false],
      className: 'shadow-[0px_0px_0px_1px_var(--gray-alpha-400)]',
    },
    {
      disabled: true,
      error: false,
      className: 'hover:shadow-[0px_0px_0px_1px_var(--gray-alpha-400)]',
    },
  ],
  defaultVariants: {
    size: 'medium',
    disabled: false,
    error: false,
    multiline: false,
  },
});

// Input field variants
export const inputFieldVariants = tv({
  base: [
    'text-gray-1000 flex-1 bg-transparent leading-5 font-normal outline-none',
    'px-3 placeholder:text-gray-700',
  ],
  variants: {
    disabled: {
      true: 'cursor-not-allowed text-gray-600',
    },
    multiline: {
      true: 'min-h-20 py-2',
      false: 'py-0',
    },
  },
  defaultVariants: {
    disabled: false,
    multiline: false,
  },
});

// Label variants
export const labelVariants = tv({
  base: 'font-normal',
  variants: {
    size: {
      small: 'text-[0.625rem] leading-[0.875rem]', // 10px / 14px
      medium: 'text-[0.75rem] leading-[1rem]', // 12px / 16px
      large: 'text-[0.875rem] leading-[1.25rem]', // 14px / 20px
    },
    error: {
      true: 'text-red-900',
      false: 'text-gray-900',
    },
  },
  defaultVariants: {
    size: 'medium',
    error: false,
  },
});

// Helper text variants
export const helperVariants = tv({
  base: 'flex items-center gap-1',
  variants: {},
  defaultVariants: {},
});

export const helperTextVariants = tv({
  base: 'font-normal',
  variants: {
    size: {
      small: 'text-[0.625rem] leading-[0.875rem]', // 10px / 14px
      medium: 'text-[0.75rem] leading-[1rem]', // 12px / 16px
      large: 'text-[0.875rem] leading-[1.25rem]', // 14px / 20px
    },
    error: {
      true: 'text-red-900',
      false: 'text-gray-900',
    },
  },
  defaultVariants: {
    size: 'medium',
    error: false,
  },
});

// Prefix variants
export const prefixVariants = tv({
  base: 'flex h-full items-center justify-center',
  variants: {
    size: {
      small: 'px-2',
      medium: 'px-3',
      large: 'px-3',
    },
    hasStyling: {
      true: 'shadow-[1px_0px_0px_0px_var(--gray-alpha-400)]',
      false: 'pr-0',
    },
    disabled: {
      true: 'opacity-50',
    },
  },
  defaultVariants: {
    size: 'medium',
    hasStyling: true,
    disabled: false,
  },
});

// Suffix variants
export const suffixVariants = tv({
  base: 'flex h-full items-center justify-center',
  variants: {
    size: {
      small: 'px-2',
      medium: 'px-3',
      large: 'px-3',
    },
    hasStyling: {
      true: 'shadow-[-1px_0px_0px_0px_var(--gray-alpha-400)]',
      false: 'pl-0',
    },
    disabled: {
      true: 'opacity-50',
    },
  },
  defaultVariants: {
    size: 'medium',
    hasStyling: true,
    disabled: false,
  },
});

// Icon size configuration
export const iconSizeConfig = {
  small: 14,
  medium: 16,
  large: 16,
} as const satisfies Record<InputSize, number>;

// Size-specific configuration for spinner sizes
export const sizeConfig = {
  small: {
    spinnerSize: 16,
  },
  medium: {
    spinnerSize: 18,
  },
  large: {
    spinnerSize: 20,
  },
} as const satisfies Record<
  InputSize,
  {
    spinnerSize: number;
  }
>;
