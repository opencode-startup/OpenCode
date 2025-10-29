import { KeyboardEvent, useCallback, useState } from 'react';

import { UseSwitchProps } from '../types';

export const useSwitch = ({
  options,
  value,
  defaultValue,
  onChange,
  disabled = false,
  id,
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

      const focusSelectedOption = (newValue: string) => {
        if (!id) return;

        setTimeout(() => {
          const selectedIndex = options.findIndex((opt) => opt.value === newValue);
          if (selectedIndex === -1) return;

          const optionId = `${id}-option-${selectedIndex}`;
          const selectedElement = document.getElementById(optionId);
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
              focusSelectedOption(prevOption.value);
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
              focusSelectedOption(nextOption.value);
            }
          }
          break;
        }
        case 'Home': {
          event.preventDefault();
          const firstOption = enabledOptions[0];
          if (firstOption) {
            updateValue(firstOption.value);
            focusSelectedOption(firstOption.value);
          }
          break;
        }
        case 'End': {
          event.preventDefault();
          const lastOption = enabledOptions[enabledOptions.length - 1];
          if (lastOption) {
            updateValue(lastOption.value);
            focusSelectedOption(lastOption.value);
          }
          break;
        }
        default:
          break;
      }
    },
    [disabled, options, currentValue, value, onChange, handleOptionClick, setInternalValue, id],
  );

  return {
    currentValue,
    handleOptionClick,
    handleKeyDown,
  };
};
