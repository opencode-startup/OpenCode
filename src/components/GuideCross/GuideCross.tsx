import { forwardRef } from 'react';

import { GuideCrossProps } from './types';
import { crossLineVariants, variants } from './variants';

export const GuideCross = forwardRef<HTMLDivElement, GuideCrossProps>(
  ({ size, thickness, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={variants({
          size,
          className,
        })}
        {...props}
      >
        <div
          className={crossLineVariants({
            size,
            thickness,
            orientation: 'horizontal',
          })}
        />
        <div
          className={crossLineVariants({
            size,
            thickness,
            orientation: 'vertical',
          })}
        />
      </div>
    );
  },
);

GuideCross.displayName = 'GuideCross';
