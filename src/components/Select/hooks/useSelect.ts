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
}

export const useSelect = ({
  options,
  value,
  defaultValue,
  onValueChange,
  onOpenChange,
  disabled = false,
  loading = false,
}: UseSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');

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
        setSelectedValue(optionValue);
        onValueChange?.(optionValue);
        setIsOpen(false);
        onOpenChange?.(false);
      }
    },
    [flatOptions, onValueChange, onOpenChange],
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
          }
          break;
        case 'Escape':
          setIsOpen(false);
          onOpenChange?.(false);
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            onOpenChange?.(true);
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            onOpenChange?.(true);
          }
          break;
      }
    },
    [disabled, loading, isOpen, onOpenChange],
  );

  return {
    isOpen,
    selectedValue,
    selectedOption,
    triggerRef,
    contentRef,
    handleToggle,
    handleSelectOption,
    handleKeyDown,
  };
};
