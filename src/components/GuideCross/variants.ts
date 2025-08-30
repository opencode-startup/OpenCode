import { tv } from 'tailwind-variants';

export const variants = tv({
  base: ['flex items-center justify-center text-gray-900'],
  variants: {
    size: {
      small: 'h-3 w-3',
      medium: 'h-5 w-5',
    },
    position: {
      'top-left': 'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2',
      'top-right': 'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2',
      'bottom-left': 'absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
      'bottom-right': 'absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2',
    },
  },
  defaultVariants: {
    size: 'small',
  },
  compoundVariants: [
    {
      position: undefined,
      class: 'relative',
    },
  ],
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
