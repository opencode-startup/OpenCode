'use client';

import { forwardRef, Ref, useCallback, useId, useRef } from 'react';

import { useSwitch, useSwitchAnimation } from './hooks';
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
    const containerRef = useRef<HTMLDivElement>(null);
    const { currentValue, handleOptionClick, handleKeyDown } = useSwitch({
      options,
      value,
      defaultValue,
      onChange,
      disabled,
    });
    const { backgroundStyle, shouldAnimate } = useSwitchAnimation({
      options,
      currentValue,
      containerRef,
    });

    // Merge refs utility
    const mergedRef = useCallback(
      (ref: Ref<HTMLDivElement>) => (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [],
    );

    return (
      <div
        ref={mergedRef(ref)}
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
        {/* Moving background indicator */}
        <div
          className={`pointer-events-none absolute top-1 bottom-1 rounded-[0.125rem] bg-gray-100
            ${shouldAnimate ? 'transition-all duration-200 ease-out' : ''}`}
          style={{
            left: `${backgroundStyle.left}px`,
            width: `${backgroundStyle.width}px`,
          }}
        />
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
