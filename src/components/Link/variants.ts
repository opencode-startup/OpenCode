import { tv } from 'tailwind-variants';

export const linkVariants = tv({
  base: [
    'text-gray-600 transition-all duration-200 ease-out',
    'hover:text-gray-1000 relative cursor-pointer',
    'focus-ring focus-visible:rounded-sm',
  ],
  variants: {
    size: {
      small: 'typo-label-14',
      medium: 'typo-label-16',
      large: 'typo-label-18',
    },
    disabled: {
      true: 'pointer-events-none cursor-not-allowed opacity-50',
      false: 'cursor-pointer',
    },
    underline: {
      true: [
        `after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-current after:opacity-0
        after:transition-all after:duration-200 after:ease-out after:content-[""]`,
        'hover:after:bottom-0 hover:after:opacity-100',
      ],
      false: '',
    },
    wrap: {
      true: '',
      false: 'text-nowrap',
    },
  },
  compoundVariants: [
    {
      disabled: true,
      underline: true,
      class: 'after:hidden',
    },
  ],
  defaultVariants: {
    size: 'large',
    disabled: false,
    underline: true,
    wrap: false,
  },
});
