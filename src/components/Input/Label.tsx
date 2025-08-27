import { LabelProps } from './types';
import { labelVariants } from './variants';

export const Label = ({ htmlFor, size = 'medium', error, children, className }: LabelProps) => {
  if (!children) return null;

  return (
    <label
      htmlFor={htmlFor}
      className={labelVariants({
        size,
        error,
        className,
      })}
    >
      {children}
    </label>
  );
};
