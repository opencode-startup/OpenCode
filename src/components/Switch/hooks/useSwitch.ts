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
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleOptionClick(optionValue);
      }
    },
    [handleOptionClick],
  );

  return {
    currentValue,
    handleOptionClick,
    handleKeyDown,
  };
};
