import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

import { SelectOption } from '../types';
import { flattenOptions } from '../utils';

interface UseSelectProps {
  options: SelectOption[] | SelectOption[][];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
  disableSelection?: boolean;
}

export const useSelect = ({
  options,
  value,
  defaultValue,
  onValueChange,
  onOpenChange,
  disabled = false,
  loading = false,
  disableSelection = false,
}: UseSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLUListElement>(null);

  // Find selected option (flatten grouped options first)
  const flatOptions = flattenOptions(options);
  const selectedOption = flatOptions.find((option) => option.value === selectedValue);

  // Handle value changes (controlled component support)
  useEffect(() => {
    if (value !== undefined && value !== selectedValue) {
      setSelectedValue(value);
    }
  }, [value, selectedValue]);

  // Reset focused index when dropdown opens/closes
  useEffect(() => {
    if (isOpen) {
      // Set focus to selected option or first option
      const selectedIndex = flatOptions.findIndex((opt) => opt.value === selectedValue);
      setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    } else {
      setFocusedIndex(-1);
    }
  }, [isOpen, selectedValue, flatOptions]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleToggle = useCallback(() => {
    if (disabled || loading) return;
    const newOpen = !isOpen;
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  }, [disabled, loading, isOpen, onOpenChange]);

  const handleSelectOption = useCallback(
    (optionValue: string) => {
      const option = flatOptions.find((opt) => opt.value === optionValue);
      if (option && !option.disabled) {
        // Only update selected value if selection is enabled
        if (!disableSelection) {
          setSelectedValue(optionValue);
          onValueChange?.(optionValue);
        }
        // Always close the dropdown
        setIsOpen(false);
        onOpenChange?.(false);
      }
    },
    [flatOptions, onValueChange, onOpenChange, disableSelection],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (disabled || loading) return;

      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            onOpenChange?.(true);
          } else if (focusedIndex >= 0 && focusedIndex < flatOptions.length) {
            // Select the focused option
            const focusedOption = flatOptions[focusedIndex];
            if (focusedOption && !focusedOption.disabled) {
              handleSelectOption(focusedOption.value);
            }
          }
          break;
        case 'Escape':
          event.preventDefault();
          setIsOpen(false);
          onOpenChange?.(false);
          triggerRef.current?.focus();
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            onOpenChange?.(true);
          } else {
            // Navigate to next non-disabled option
            let nextIndex = focusedIndex + 1;
            while (nextIndex < flatOptions.length && flatOptions[nextIndex]?.disabled) {
              nextIndex++;
            }
            if (nextIndex < flatOptions.length) {
              setFocusedIndex(nextIndex);
            }
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            onOpenChange?.(true);
          } else {
            // Navigate to previous non-disabled option
            let prevIndex = focusedIndex - 1;
            while (prevIndex >= 0 && flatOptions[prevIndex]?.disabled) {
              prevIndex--;
            }
            if (prevIndex >= 0) {
              setFocusedIndex(prevIndex);
            }
          }
          break;
        case 'Home':
          if (isOpen) {
            event.preventDefault();
            // Jump to first non-disabled option
            const firstIndex = flatOptions.findIndex((opt) => !opt.disabled);
            if (firstIndex >= 0) {
              setFocusedIndex(firstIndex);
            }
          }
          break;
        case 'End':
          if (isOpen) {
            event.preventDefault();
            // Jump to last non-disabled option
            for (let i = flatOptions.length - 1; i >= 0; i--) {
              if (!flatOptions[i]?.disabled) {
                setFocusedIndex(i);
                break;
              }
            }
          }
          break;
      }
    },
    [disabled, loading, isOpen, focusedIndex, flatOptions, onOpenChange, handleSelectOption],
  );

  return {
    isOpen,
    selectedValue,
    selectedOption,
    focusedIndex,
    triggerRef,
    contentRef,
    handleToggle,
    handleSelectOption,
    handleKeyDown,
  };
};
