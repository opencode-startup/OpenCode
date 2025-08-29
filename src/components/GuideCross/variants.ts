import { tv } from 'tailwind-variants';

export const variants = tv({
  base: ['relative flex items-center justify-center text-gray-900'],
  variants: {
    size: {
      small: 'h-4 w-3',
      medium: 'h-5 w-5',
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

export const crossLineVariants = tv({
  base: ['absolute bg-current', 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'],
  variants: {
    size: {
      small: 'w-3',
      medium: 'w-5',
    },
    thickness: {
      thin: 'h-[0.5px]',
      normal: 'h-[1px]',
    },
    orientation: {
      horizontal: 'rotate-0',
      vertical: 'rotate-90',
    },
  },
  defaultVariants: {
    thickness: 'thin',
  },
});
