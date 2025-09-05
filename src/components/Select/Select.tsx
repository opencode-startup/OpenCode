'use client';

import { forwardRef, useId } from 'react';

import { Icon, Spinner } from '@/components';

import { useSelect } from './hooks';
import { SelectProps } from './types';
import {
  selectContentVariants,
  selectIconVariants,
  selectItemVariants,
  selectTriggerVariants,
  sizeConfig,
} from './variants';

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      id,
      placeholder = 'Select an option...',
      size = 'large',
      className,
      disabled = false,
      loading = false,
      fullWidth = false,
      required = false,
      options = [],
      value,
      defaultValue,
      onValueChange,
      onOpenChange,
      name,
      'aria-required': ariaRequired,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const listboxId = `${selectId}-listbox`;

    const {
      isOpen,
      selectedValue,
      highlightedIndex,
      selectedOption,
      triggerRef,
      contentRef,
      handleToggle,
      handleSelectOption,
      handleKeyDown,
      handleOptionMouseEnter,
    } = useSelect({
      options,
      value,
      defaultValue,
      onValueChange,
      onOpenChange,
      disabled,
      loading,
    });

    const displayText = selectedOption?.label || placeholder;

    // Generate ARIA attributes
    const ariaAttributes = {
      'aria-required': required || ariaRequired,
      'aria-busy': loading,
      'aria-expanded': isOpen,
      'aria-haspopup': 'listbox' as const,
      'aria-owns': isOpen ? listboxId : undefined,
      'aria-activedescendant':
        isOpen && highlightedIndex >= 0 ? `${selectId}-option-${highlightedIndex}` : undefined,
    };

    return (
      <div className="flex w-full flex-col gap-1">
        <div className="relative">
          <button
            ref={ref || triggerRef}
            id={selectId}
            name={name}
            disabled={disabled}
            type="button"
            className={selectTriggerVariants({
              size,
              fullWidth,
              disabled,
              className,
            })}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            {...ariaAttributes}
            {...props}
          >
            <span className={`truncate ${sizeConfig[size].text}`}>{displayText}</span>

            <div className="flex items-center gap-2">
              {loading && (
                <Spinner size={sizeConfig[size].spinnerSize} role="status" aria-label="Loading" />
              )}

              {!loading && (
                <Icon
                  className={selectIconVariants({
                    size,
                    open: isOpen,
                  })}
                  name={'chevron-down'}
                />
              )}
            </div>
          </button>

          {isOpen && (
            <div
              ref={contentRef}
              role="listbox"
              id={listboxId}
              aria-label={ariaLabel || 'Options'}
              data-state="open"
              className={selectContentVariants({
                size,
              })}
            >
              {options.map((option, index) => (
                <div
                  key={option.value}
                  id={`${selectId}-option-${index}`}
                  role="option"
                  aria-selected={option.value === selectedValue}
                  aria-disabled={option.disabled}
                  data-highlighted={index === highlightedIndex}
                  data-selected={option.value === selectedValue}
                  className={selectItemVariants({
                    size,
                    selected: option.value === selectedValue,
                    highlighted: index === highlightedIndex,
                    disabled: option.disabled,
                  })}
                  onClick={() => handleSelectOption(option.value)}
                  onMouseEnter={() => handleOptionMouseEnter(index)}
                >
                  {option.icon && <span className="flex shrink-0 items-center">{option.icon}</span>}
                  <span className="truncate">{option.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
);

Select.displayName = 'Select';

export default Select;
