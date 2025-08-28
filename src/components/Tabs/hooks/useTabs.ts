import { useCallback, useState } from 'react';

import { UseTabsProps } from '../types';

export const useTabs = ({
  tabs,
  value,
  defaultValue,
  onChange,
  disabled = false,
}: UseTabsProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue || tabs[0]?.value || '');

  // Use controlled value if provided, otherwise use internal state
  const currentValue = value !== undefined ? value : internalValue;

  const handleTabClick = useCallback(
    (tabValue: string) => () => {
      if (disabled) return;

      const tab = tabs.find((tab) => tab.value === tabValue);
      if (tab?.disabled) return;

      // Update internal state if uncontrolled
      if (value === undefined) {
        setInternalValue(tabValue);
      }

      // Call onChange callback
      onChange?.(tabValue);
    },
    [disabled, onChange, tabs, value],
  );

  return {
    currentValue,
    handleTabClick,
  };
};
