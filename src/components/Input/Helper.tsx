import { Icon } from '../Icon';
import { HelperProps } from './types';
import { helperTextVariants, helperVariants } from './variants';

export const Helper = ({ id, children, error, size = 'medium', className }: HelperProps) => {
  if (!children && !error) return null;

  return (
    <div id={id} className={helperVariants({ className })} role={error ? 'alert' : undefined}>
      {error && <Icon name="warning-fill" size={12} className="text-red-900" />}
      <span
        className={helperTextVariants({
          size,
          error: !!error,
        })}
      >
        {error || children}
      </span>
    </div>
  );
};
