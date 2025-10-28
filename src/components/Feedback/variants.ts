import { tv } from 'tailwind-variants';

export const feedbackContainerVariants = tv({
  base: 'flex flex-col',
  variants: {
    fullWidth: {
      true: 'w-full',
      false: 'w-fit',
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export const feedbackTriggerVariants = tv({
  base: 'focus-ring relative overflow-hidden border border-solid border-gray-400 bg-transparent',
  variants: {
    expanded: {
      true: 'w-full rounded-[0.75rem] border-gray-500',
      false: 'rounded-[2rem]',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
    shouldAnimate: {
      true: 'transition-all duration-500',
      false: '',
    },
  },
  defaultVariants: {
    state: 'collapsed',
    expanded: false,
    disabled: false,
    shouldAnimate: true,
  },
});

export const feedbackRatingButtonVariants = tv({
  base: 'relative flex text-gray-900 hover:text-blue-900',
  variants: {
    selected: {
      true: 'bg-blue-300 text-blue-900 hover:bg-blue-300',
      false: 'bg-transparent hover:bg-blue-300',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50 disabled:border-none disabled:bg-transparent',
      false: 'cursor-pointer',
    },
    shouldAnimate: {
      true: 'transition-colors duration-200',
      false: '',
    },
  },
  defaultVariants: {
    selected: false,
    disabled: false,
    shouldAnimate: true,
  },
});
