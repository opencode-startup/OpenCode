import { KeyboardEvent, useCallback, useState } from 'react';

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

  const handleKeyDown = useCallback(
    (tabValue: string) => (event: KeyboardEvent) => {
      if (disabled) return;

      const enabledTabs = tabs.filter((tab) => !tab.disabled);
      const currentEnabledIndex = enabledTabs.findIndex((tab) => tab.value === currentValue);

      const updateValue = (newValue: string) => {
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
      };

      const focusSelectedTab = () => {
        setTimeout(() => {
          const selectedElement = document.querySelector(
            '[role="tab"][aria-selected="true"]',
          ) as HTMLElement;
          selectedElement?.focus();
        }, 0);
      };

      switch (event.key) {
        case 'Enter':
        case ' ': {
          event.preventDefault();
          handleTabClick(tabValue)();
          break;
        }
        case 'ArrowLeft':
        case 'ArrowUp': {
          event.preventDefault();
          if (currentEnabledIndex > 0) {
            const prevEnabledIndex = currentEnabledIndex - 1;
            const prevTab = enabledTabs[prevEnabledIndex];
            if (prevTab) {
              updateValue(prevTab.value);
              focusSelectedTab();
            }
          }
          break;
        }
        case 'ArrowRight':
        case 'ArrowDown': {
          event.preventDefault();
          if (currentEnabledIndex < enabledTabs.length - 1) {
            const nextEnabledIndex = currentEnabledIndex + 1;
            const nextTab = enabledTabs[nextEnabledIndex];
            if (nextTab) {
              updateValue(nextTab.value);
              focusSelectedTab();
            }
          }
          break;
        }
        case 'Home': {
          event.preventDefault();
          const firstTab = enabledTabs[0];
          if (firstTab) {
            updateValue(firstTab.value);
            focusSelectedTab();
          }
          break;
        }
        case 'End': {
          event.preventDefault();
          const lastTab = enabledTabs[enabledTabs.length - 1];
          if (lastTab) {
            updateValue(lastTab.value);
            focusSelectedTab();
          }
          break;
        }
        default:
          break;
      }
    },
    [disabled, tabs, currentValue, value, onChange, handleTabClick, setInternalValue],
  );

  return {
    currentValue,
    handleTabClick,
    handleKeyDown,
  };
};
