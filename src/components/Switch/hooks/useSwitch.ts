import { KeyboardEvent, useCallback, useState } from 'react';

import { UseSwitchProps } from '../types';

export const useSwitch = ({
  options,
  value,
  defaultValue,
  onChange,
  disabled = false,
}: UseSwitchProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue || options[0]?.value || '');

  // Use controlled value if provided, otherwise use internal state
  const currentValue = value !== undefined ? value : internalValue;

  const handleOptionClick = useCallback(
    (optionValue: string) => () => {
      if (disabled) return;

      const option = options.find((opt) => opt.value === optionValue);
      if (option?.disabled) return;

      // Update internal state if uncontrolled
      if (value === undefined) {
        setInternalValue(optionValue);
      }

      // Call onChange callback
      onChange?.(optionValue);
    },
    [disabled, onChange, options, value],
  );

  const handleKeyDown = useCallback(
    (optionValue: string) => (event: KeyboardEvent) => {
      if (disabled) return;

      const enabledOptions = options.filter((opt) => !opt.disabled);
      const currentEnabledIndex = enabledOptions.findIndex((opt) => opt.value === currentValue);

      const updateValue = (newValue: string) => {
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
      };

      const focusSelectedOption = () => {
        setTimeout(() => {
          const selectedElement = document.querySelector(
            '[role="radio"][aria-checked="true"]',
          ) as HTMLElement;
          selectedElement?.focus();
        }, 0);
      };

      switch (event.key) {
        case 'Enter':
        case ' ': {
          event.preventDefault();
          handleOptionClick(optionValue)();
          break;
        }
        case 'ArrowLeft':
        case 'ArrowUp': {
          event.preventDefault();
          if (currentEnabledIndex > 0) {
            const prevEnabledIndex = currentEnabledIndex - 1;
            const prevOption = enabledOptions[prevEnabledIndex];
            if (prevOption) {
              updateValue(prevOption.value);
              focusSelectedOption();
            }
          }
          break;
        }
        case 'ArrowRight':
        case 'ArrowDown': {
          event.preventDefault();
          if (currentEnabledIndex < enabledOptions.length - 1) {
            const nextEnabledIndex = currentEnabledIndex + 1;
            const nextOption = enabledOptions[nextEnabledIndex];
            if (nextOption) {
              updateValue(nextOption.value);
              focusSelectedOption();
            }
          }
          break;
        }
        case 'Home': {
          event.preventDefault();
          const firstOption = enabledOptions[0];
          if (firstOption) {
            updateValue(firstOption.value);
            focusSelectedOption();
          }
          break;
        }
        case 'End': {
          event.preventDefault();
          const lastOption = enabledOptions[enabledOptions.length - 1];
          if (lastOption) {
            updateValue(lastOption.value);
            focusSelectedOption();
          }
          break;
        }
        default:
          break;
      }
    },
    [disabled, options, currentValue, value, onChange, handleOptionClick, setInternalValue],
  );

  return {
    currentValue,
    handleOptionClick,
    handleKeyDown,
  };
};
