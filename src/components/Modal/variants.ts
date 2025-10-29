import { tv } from 'tailwind-variants';

export const backdropVariants = tv({
  base: [
    'fixed inset-0 z-50',
    'bg-black/30 backdrop-blur-[2px] backdrop-filter',
    'flex items-center justify-center',
  ],
  variants: {
    placement: {
      center: 'p-6',
      top: 'items-start p-6 pt-24',
      bottom: 'items-end p-6 pb-24',
    },
    shouldAnimate: {
      true: 'transition-all duration-200 ease-out',
      false: '',
    },
  },
  defaultVariants: {
    placement: 'center',
    shouldAnimate: true,
  },
});

export const actionGroupVariants = tv({
  base: ['flex items-center gap-3'],
  variants: {
    side: {
      left: 'flex-1 justify-start',
      center: 'flex-1 justify-center',
      right: 'flex-1 justify-end',
    },
  },
});
