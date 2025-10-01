'use client';

import { forwardRef, useId } from 'react';

import { Icon, Spinner } from '@/components';

import { useSelect } from './hooks';
import { OptionItem } from './OptionItem';
import { SelectProps, SelectSize } from './types';
import { isGroupedOptions } from './utils';
import {
  selectContentVariants,
  selectDividerVariants,
  selectFooterVariants,
  selectHeaderVariants,
  selectIconVariants,
  selectTriggerVariants,
  sizeConfig,
} from './variants';

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      id,
      placeholder = 'Select an option...',
      size = 'large',
      buttonSize,
      listboxSize,
      popupWidth,
      className,
      disabled = false,
      loading = false,
      fullWidth = false,
      required = false,
      options = [],
      value,
      defaultValue,
      leftIcon,
      rightIcon,
      header,
      footer,
      hideChevron = false,
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
    const actualButtonSize: SelectSize = buttonSize || size;
    const actualListboxSize: SelectSize = listboxSize || size;
    const generatedId = useId();
    const selectId = id || generatedId;
    const listboxId = `${selectId}-listbox`;

    const {
      isOpen,
      selectedValue,
      selectedOption,
      triggerRef,
      contentRef,
      handleToggle,
      handleSelectOption,
      handleKeyDown,
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

    // Helper function to render right icon section
    const renderRightIconSection = () => {
      if (!loading && hideChevron) {
        return null;
      }

      return (
        <div className="flex shrink-0 items-center gap-2">
          {loading ? (
            <Spinner
              size={sizeConfig[actualButtonSize].spinnerSize}
              role="status"
              aria-label="Loading"
            />
          ) : (
            <Icon
              className={selectIconVariants({
                size: actualButtonSize,
                open: isOpen,
              })}
              name={'chevron-down'}
            />
          )}
        </div>
      );
    };

    // Helper function to render options
    const renderOptions = () => {
      if (isGroupedOptions(options)) {
        // Render grouped options with dividers (array of arrays)
        return options.map((group, groupIndex) => {
          let flatIndex = 0;
          // Calculate starting flat index for this group
          for (let i = 0; i < groupIndex; i++) {
            flatIndex += options[i].length;
          }

          return (
            <div key={`group-${groupIndex}`}>
              {groupIndex > 0 && (
                <div className={selectDividerVariants({ size: actualListboxSize })} />
              )}
              {group.map((option, optionIndex) => {
                const currentFlatIndex = flatIndex + optionIndex;
                return (
                  <OptionItem
                    key={option.value}
                    option={option}
                    index={currentFlatIndex}
                    selectId={selectId}
                    selectedValue={selectedValue}
                    size={actualButtonSize}
                    listboxSize={actualListboxSize}
                    onSelectAction={handleSelectOption}
                  />
                );
              })}
            </div>
          );
        });
      } else {
        // Render flat options (backward compatibility)
        return options.map((option, index) => (
          <OptionItem
            key={option.value}
            option={option}
            index={index}
            selectId={selectId}
            selectedValue={selectedValue}
            size={actualButtonSize}
            listboxSize={actualListboxSize}
            onSelectAction={handleSelectOption}
          />
        ));
      }
    };

    // Generate ARIA attributes
    const ariaAttributes = {
      'aria-required': required || ariaRequired,
      'aria-busy': loading,
      'aria-expanded': isOpen,
      'aria-haspopup': 'listbox' as const,
      'aria-owns': isOpen ? listboxId : undefined,
    };

    return (
      <div className="flex flex-col gap-1">
        <div className="relative">
          <button
            ref={ref || triggerRef}
            id={selectId}
            name={name}
            disabled={disabled}
            type="button"
            className={selectTriggerVariants({
              size: actualButtonSize,
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
            <div className="flex min-w-0 flex-1 items-center gap-2">
              {leftIcon && <span className="flex shrink-0 items-center">{leftIcon}</span>}
              <span className={`truncate ${sizeConfig[actualButtonSize].text}`}>{displayText}</span>
              {rightIcon && <span className="flex shrink-0 items-center">{rightIcon}</span>}
            </div>

            {renderRightIconSection()}
          </button>

          {isOpen && (
            <div
              ref={contentRef}
              role="listbox"
              id={listboxId}
              aria-label={ariaLabel || 'Options'}
              data-state="open"
              style={{
                ...(popupWidth && {
                  width: typeof popupWidth === 'number' ? `${popupWidth}px` : popupWidth,
                }),
              }}
              className={selectContentVariants({
                size: actualListboxSize,
              })}
            >
              {header && (
                <div
                  className={selectHeaderVariants({
                    size: actualListboxSize,
                  })}
                >
                  {header}
                </div>
              )}
              {renderOptions()}
              {footer && (
                <div
                  className={selectFooterVariants({
                    size: actualListboxSize,
                  })}
                >
                  {footer}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  },
);

Select.displayName = 'Select';

export default Select;
