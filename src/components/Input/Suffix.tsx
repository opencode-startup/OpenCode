import clsx from 'clsx';

import { Icon } from '../Icon';
import { SuffixProps } from './types';

const suffixSizeClasses = {
  small: 'px-2',
  medium: 'px-3',
  large: 'px-3',
};

const iconSizes = {
  small: 14,
  medium: 16,
  large: 16,
};

export const Suffix = ({
  children,
  size = 'medium',
  disabled,
  hasStyling = true,
  className,
}: SuffixProps) => {
  if (!children) return null;

  return (
    <div
      className={clsx(
        'flex h-full items-center justify-center',
        {
          'shadow-[-1px_0px_0px_0px_var(--gray-alpha-400)]': hasStyling,
          'pl-0': !hasStyling,
          'opacity-50': disabled,
        },
        suffixSizeClasses[size],
        className,
      )}
    >
      {typeof children === 'string' ? (
        <Icon name={children as any} size={iconSizes[size]} className="text-gray-700" />
      ) : (
        children
      )}
    </div>
  );
};
