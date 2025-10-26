'use client';

import { forwardRef, useId } from 'react';

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
      'data-testid': dataTestId,
      baseId,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const toggleId = baseId || generatedId;

    const { currentChecked, handleToggle, handleKeyDown, shouldAnimate } = useToggle({
      checked,
      defaultChecked,
      onChange,
      disabled,
    });

    return (
      <button
        ref={ref}
        id={toggleId}
        type="button"
        role="switch"
        aria-checked={currentChecked}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        data-testid={dataTestId}
        disabled={disabled}
        className={toggleContainerVariants({
          size,
          checked: currentChecked,
          disabled,
          shouldAnimate,
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
            shouldAnimate,
          })}
        />
      </button>
    );
  },
);

Toggle.displayName = 'Toggle';

export default Toggle;
