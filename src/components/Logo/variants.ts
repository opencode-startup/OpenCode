import { tv } from 'tailwind-variants';

import { LogoSize } from './types';

export const logoVariants = tv({
  base: [
    'flex items-center rounded',
    `focus-visible:ring-offset-background-100 focus-visible:ring-2 focus-visible:ring-blue-600
    focus-visible:ring-offset-2 focus-visible:outline-none`,
  ],
  variants: {
    size: {
      small: 'gap-2',
      medium: 'gap-2',
      large: 'gap-3',
    },
    showText: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    size: 'large',
    showText: false,
  },
});

export const logoIconVariants = tv({
  base: 'relative shrink-0',
  variants: {
    size: {
      small: 'size-8',
      medium: 'size-9',
      large: 'size-10',
    },
  },
});

export const logoTextVariants = tv({
  base: 'text-gray-1000 flex flex-col justify-center font-semibold text-nowrap',
  variants: {
    size: {
      small: 'typo-heading-24',
      medium: 'typo-heading-24',
      large: 'typo-heading-32',
    },
  },
});

// Size-specific configuration for icon dimensions
export const iconSizes = {
  small: { width: 32, height: 32 },
  medium: { width: 36, height: 36 },
  large: { width: 40, height: 40 },
} as const satisfies Record<
  NonNullable<LogoSize>,
  {
    width: number;
    height: number;
  }
>;
