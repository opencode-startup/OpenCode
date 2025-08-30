import { tv } from 'tailwind-variants';

import { AnimatedCTASize } from './types';

export const variants = tv({
  base: [
    `relative inline-flex min-w-fit cursor-pointer items-center justify-between overflow-clip
    rounded-full`,
    'bg-background-200 border-gray-alpha-400 hover:bg-background-100 border',
    'focus-ring',
  ],
  variants: {
    size: {
      small: 'gap-4 py-2',
      medium: 'gap-5 py-4',
      large: 'gap-6 py-[1.125rem]',
    },
    iconLayout: {
      none: {
        small: 'px-4',
        medium: 'px-7',
        large: 'px-9',
      },
      left: {
        small: 'pr-4 pl-2',
        medium: 'pr-7 pl-3',
        large: 'pr-9 pl-[1.125rem]',
      },
      right: {
        small: 'pr-2 pl-4',
        medium: 'pr-3 pl-7',
        large: 'pr-[1.125rem] pl-9',
      },
      both: {
        small: 'px-2',
        medium: 'px-3',
        large: 'px-[1.125rem]',
      },
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
  },
  compoundVariants: [
    // None
    { size: 'small', iconLayout: 'none', className: 'px-4' },
    { size: 'medium', iconLayout: 'none', className: 'px-7' },
    { size: 'large', iconLayout: 'none', className: 'px-9' },
    // Left only
    { size: 'small', iconLayout: 'left', className: 'pr-4 pl-2' },
    { size: 'medium', iconLayout: 'left', className: 'pr-7 pl-3' },
    { size: 'large', iconLayout: 'left', className: 'pr-9 pl-[1.125rem]' },
    // Right only
    { size: 'small', iconLayout: 'right', className: 'pr-2 pl-4' },
    { size: 'medium', iconLayout: 'right', className: 'pr-3 pl-7' },
    { size: 'large', iconLayout: 'right', className: 'pr-[1.125rem] pl-9' },
    // Both
    { size: 'small', iconLayout: 'both', className: 'px-2' },
    { size: 'medium', iconLayout: 'both', className: 'px-3' },
    { size: 'large', iconLayout: 'both', className: 'px-[1.125rem]' },
  ],
  defaultVariants: {
    size: 'large',
    iconLayout: 'none',
  },
});

// Size-specific configuration for text, icon, and iconSize
export const sizeConfig = {
  small: {
    text: 'typo-heading-16',
    icon: 'size-8 p-2',
    iconSize: 16,
  },
  medium: {
    text: 'typo-heading-40',
    icon: 'size-12 p-2.5',
    iconSize: 24,
  },
  large: {
    text: 'typo-heading-48',
    icon: 'size-14 p-2.5',
    iconSize: 32,
  },
} as const satisfies Record<
  AnimatedCTASize,
  {
    text: string;
    icon: string;
    iconSize: number;
  }
>;
