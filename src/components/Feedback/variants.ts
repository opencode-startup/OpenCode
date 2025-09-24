import { tv } from 'tailwind-variants';

export const feedbackTriggerVariants = tv({
  base: `focus-ring relative overflow-hidden border border-solid border-gray-400 bg-transparent
  transition-all duration-500`,
  variants: {
    state: {
      default: 'rounded-[2rem]',
      expanded: 'w-full rounded-[0.75rem] border-gray-500',
      submitted: 'w-full rounded-[0.75rem] border-gray-500 opacity-75',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
  },
  defaultVariants: {
    state: 'default',
    disabled: false,
  },
});

export const feedbackRatingButtonVariants = tv({
  base: 'relative flex text-gray-900 transition-colors duration-200 hover:text-blue-900',
  variants: {
    selected: {
      true: 'bg-blue-300 text-blue-900 hover:bg-blue-300',
      false: 'bg-transparent hover:bg-blue-300',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    selected: false,
    disabled: false,
  },
});
