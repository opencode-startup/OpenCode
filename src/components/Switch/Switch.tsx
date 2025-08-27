'use client';

import { forwardRef, useId } from 'react';

import { useSwitch } from './hooks';
import { SwitchProps } from './types';
import { switchContainerVariants, switchOptionVariants } from './variants';

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      options,
      value,
      defaultValue,
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
    const generatedId = useId();
    const { currentValue, handleOptionClick, handleKeyDown } = useSwitch({
      options,
      value,
      defaultValue,
      onChange,
      disabled,
    });

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        className={switchContainerVariants({
          size,
          disabled,
          className,
        })}
        {...props}
      >
        {options.map((option, index) => {
          const isSelected = currentValue === option.value;
          const isOptionDisabled = disabled || option.disabled;
          const optionId = `${generatedId}-option-${index}`;

          return (
            <div
              key={option.value}
              id={optionId}
              role="radio"
              aria-checked={isSelected}
              aria-disabled={isOptionDisabled}
              tabIndex={isOptionDisabled ? -1 : isSelected ? 0 : -1}
              className={switchOptionVariants({
                size,
                selected: isSelected,
                disabled: isOptionDisabled,
              })}
              onClick={handleOptionClick(option.value)}
              onKeyDown={handleKeyDown(option.value)}
            >
              <div className="relative flex shrink-0 flex-col justify-center text-nowrap">
                <p className="whitespace-pre">{option.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;
