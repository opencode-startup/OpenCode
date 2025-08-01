import clsx from 'clsx';

import { Icon } from '../Icon';
import { HelperProps } from './types';

const helperSizeClasses = {
  small: 'text-[0.625rem] leading-[0.875rem]', // 10px / 14px
  medium: 'text-[0.75rem] leading-[1rem]', // 12px / 16px
  large: 'text-[0.875rem] leading-[1.25rem]', // 14px / 20px
};

export const Helper = ({ children, error, size = 'medium', className }: HelperProps) => {
  if (!children && !error) return null;

  return (
    <div className={clsx('flex items-center gap-1', className)}>
      {error && <Icon name="warning-fill" size={12} className="text-red-900" />}
      <span
        className={clsx('font-normal', helperSizeClasses[size], {
          'text-red-900': error,
          'text-gray-900': !error,
        })}
      >
        {error || children}
      </span>
    </div>
  );
};
