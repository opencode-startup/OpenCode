'use client';

import { OptionItemProps } from './types';
import { selectItemVariants } from './variants';

export const OptionItem = ({
  option,
  index,
  selectId,
  selectedValue,
  size,
  listboxSize,
  onSelectAction,
}: OptionItemProps) => {
  const actualSize = listboxSize || size;

  return (
    <div
      id={`${selectId}-option-${index}`}
      role="option"
      aria-selected={option.value === selectedValue}
      aria-disabled={option.disabled}
      data-selected={option.value === selectedValue}
      className={selectItemVariants({
        size: actualSize,
        selected: option.value === selectedValue,
        disabled: option.disabled,
      })}
      onClick={() => onSelectAction(option.value)}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        {option.leftIcon && <span className="flex shrink-0 items-center">{option.leftIcon}</span>}
        <span className="flex-1 truncate">{option.label}</span>
        {option.rightIcon && <span className="flex shrink-0 items-center">{option.rightIcon}</span>}
      </div>
    </div>
  );
};
