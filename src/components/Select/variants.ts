import { tv } from 'tailwind-variants';

import { SelectSize } from './types';

export const selectTriggerVariants = tv({
  base: [
    'relative flex cursor-pointer justify-between gap-2',
    'bg-background-100 border-gray-alpha-400 rounded-sm border hover:border-gray-500',
    'transition-all duration-200',
    'focus-ring',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'touch-manipulation [-webkit-tap-highlight-color:transparent] [-webkit-text-size-adjust:100%]',
    'active:border-gray-600',
  ],
  variants: {
    size: {
      small: 'typo-button-14 h-8 px-2',
      medium: 'typo-button-14 h-10 px-3',
      large: 'typo-button-16 h-12 px-4',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'hover:bg-background-200 cursor-pointer',
    },
  },
  defaultVariants: {
    size: 'large',
    fullWidth: false,
    disabled: false,
  },
});

export const selectContentVariants = tv({
  base: [
    'absolute top-full z-50 mt-2',
    'min-w-full overflow-hidden rounded-xl border',
    'bg-background-100 border-gray-alpha-400 shadow-lg',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
  ],
  variants: {
    size: {
      small: 'py-1',
      medium: 'py-2',
      large: 'py-2',
    },
    position: {
      left: 'left-0',
      right: 'right-0',
    },
  },
  defaultVariants: {
    size: 'large',
    position: 'left',
  },
});

export const selectItemVariants = tv({
  base: [
    'relative flex cursor-pointer items-center gap-2 rounded-lg px-2',
    'text-gray-1000 hover:bg-gray-alpha-200 hover:text-gray-1000',
    'focus:bg-gray-alpha-400 focus:text-gray-1000 focus:outline-none',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'active:bg-gray-alpha-500',
    'touch-manipulation',
  ],
  variants: {
    size: {
      small: 'typo-label-12 mx-1 h-8',
      medium: 'typo-label-14 mx-2 h-9',
      large: 'typo-label-14 mx-2 h-10',
    },
    selected: {
      true: 'bg-gray-alpha-400 hover:bg-gray-alpha-400 text-gray-1000',
      false: '',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    size: 'large',
    selected: false,
    disabled: false,
  },
});

export const selectIconVariants = tv({
  base: 'shrink-0 transition-transform duration-200',
  variants: {
    size: {
      small: 'size-3',
      medium: 'size-3',
      large: 'size-3',
    },
    open: {
      true: 'rotate-180',
      false: 'rotate-0',
    },
  },
  defaultVariants: {
    size: 'large',
    open: false,
  },
});

export const selectDividerVariants = tv({
  base: 'border-gray-alpha-300 border-t',
  variants: {
    size: {
      small: 'my-1',
      medium: 'my-1.5',
      large: 'my-2',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

export const selectHeaderVariants = tv({
  base: ['border-gray-alpha-300 border-b', 'bg-gray-alpha-50 text-gray-700', 'flex items-center'],
  variants: {
    size: {
      small: 'typo-label-12 mb-1 min-h-8 px-1 pb-1',
      medium: 'typo-label-14 mb-2 min-h-9 px-2 pb-2',
      large: 'typo-label-14 mb-2 min-h-10 px-2 pb-2',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

export const selectFooterVariants = tv({
  base: ['border-gray-alpha-300 border-t', 'bg-gray-alpha-50 text-gray-700', 'flex items-center'],
  variants: {
    size: {
      small: 'typo-label-12 mt-1 min-h-8 px-1 pt-1',
      medium: 'typo-label-14 mt-2 min-h-9 px-2 pt-2',
      large: 'typo-label-14 mt-2 min-h-10 px-2 pt-2',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

// Size-specific configuration
export const sizeConfig = {
  small: {
    triggerHeight: 'h-8',
    padding: 'px-3',
    text: 'typo-button-14',
    spinnerSize: 12,
  },
  medium: {
    triggerHeight: 'h-10',
    padding: 'px-3',
    text: 'typo-button-14',
    spinnerSize: 16,
  },
  large: {
    triggerHeight: 'h-12',
    padding: 'px-4',
    text: 'typo-button-16',
    spinnerSize: 16,
  },
} as const satisfies Record<
  SelectSize,
  {
    triggerHeight: string;
    padding: string;
    text: string;
    spinnerSize: number;
  }
>;
