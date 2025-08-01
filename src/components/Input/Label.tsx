import clsx from 'clsx';

import { LabelProps } from './types';

const labelSizeClasses = {
  small: 'text-[0.625rem] leading-[0.875rem]', // 10px / 14px
  medium: 'text-[0.75rem] leading-[1rem]', // 12px / 16px
  large: 'text-[0.875rem] leading-[1.25rem]', // 14px / 20px
};

export const Label = ({ htmlFor, size = 'medium', error, children, className }: LabelProps) => {
  if (!children) return null;

  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        'font-normal',
        labelSizeClasses[size],
        {
          'text-red-900': error,
          'text-gray-900': !error,
        },
        className,
      )}
    >
      {children}
    </label>
  );
};
