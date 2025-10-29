'use client';

import { useEffect, useRef } from 'react';

import { OptionItemProps } from './types';
import { selectItemVariants } from './variants';

export const OptionItem = ({
  option,
  index,
  selectId,
  selectedValue,
  focusedIndex,
  size,
  listboxSize,
  disableSelection,
  onSelectAction,
}: OptionItemProps) => {
  const actualSize = listboxSize || size;
  const isFocused = index === focusedIndex;
  const optionRef = useRef<HTMLLIElement>(null);

  // Scroll focused option into view
  useEffect(() => {
    if (isFocused && optionRef.current) {
      optionRef.current.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [isFocused]);

  const handleClick = () => {
    if (option.onClick) {
      option.onClick();
    }
    // Always call onSelectAction to close the dropdown, even if selection is disabled
    onSelectAction(option.value);
  };

  const itemClasses = selectItemVariants({
    size: actualSize,
    selected: !disableSelection && option.value === selectedValue,
    focused: isFocused,
    disabled: option.disabled,
  });

  return (
    <li
      ref={optionRef}
      id={`${selectId}-option-${index}`}
      role="option"
      aria-selected={!disableSelection && option.value === selectedValue}
      aria-disabled={option.disabled}
      data-selected={!disableSelection && option.value === selectedValue}
      data-focused={isFocused}
    >
      <div className={itemClasses} onClick={handleClick}>
        <div className="flex min-w-0 flex-1 items-center gap-2">
          {option.leftIcon && <span className="flex shrink-0 items-center">{option.leftIcon}</span>}
          <span className="flex-1 truncate">{option.label}</span>
          {option.rightIcon && (
            <span className="flex shrink-0 items-center">{option.rightIcon}</span>
          )}
        </div>
      </div>
    </li>
  );
};
