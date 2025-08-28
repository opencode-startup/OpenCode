'use client';

import { forwardRef } from 'react';

import { useToggle } from './hooks';
import { ToggleProps } from './types';
import { toggleContainerVariants, toggleIndicatorVariants } from './variants';

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked,
      defaultChecked,
      onChange,
      size = 'medium',
      disabled = false,
      className,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const { currentChecked, handleToggle, handleKeyDown } = useToggle({
      checked,
      defaultChecked,
      onChange,
      disabled,
    });

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={currentChecked}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        disabled={disabled}
        className={toggleContainerVariants({
          size,
          checked: currentChecked,
          disabled,
          className,
        })}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div
          className={toggleIndicatorVariants({
            size,
            checked: currentChecked,
            disabled,
          })}
        />
      </button>
    );
  },
);

Toggle.displayName = 'Toggle';

export default Toggle;
