import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

import { SelectOption } from '../types';

interface UseSelectProps {
  options: SelectOption[];
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
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Find selected option
  const selectedOption = options.find((option) => option.value === selectedValue);

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
    if (newOpen) {
      setHighlightedIndex(options.findIndex((option) => option.value === selectedValue));
    }
  }, [disabled, loading, isOpen, onOpenChange, options, selectedValue]);

  const handleSelectOption = useCallback(
    (optionValue: string) => {
      const option = options.find((opt) => opt.value === optionValue);
      if (option && !option.disabled) {
        setSelectedValue(optionValue);
        onValueChange?.(optionValue);
        setIsOpen(false);
        setHighlightedIndex(-1);
        onOpenChange?.(false);
      }
    },
    [options, onValueChange, onOpenChange],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (disabled || loading) return;

      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (isOpen && highlightedIndex >= 0) {
            handleSelectOption(options[highlightedIndex].value);
          } else {
            setIsOpen(!isOpen);
            onOpenChange?.(!isOpen);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setHighlightedIndex(-1);
          onOpenChange?.(false);
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            onOpenChange?.(true);
          } else {
            setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            onOpenChange?.(true);
          } else {
            setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
          }
          break;
        case 'Home':
          event.preventDefault();
          if (isOpen) {
            setHighlightedIndex(0);
          }
          break;
        case 'End':
          event.preventDefault();
          if (isOpen) {
            setHighlightedIndex(options.length - 1);
          }
          break;
      }
    },
    [disabled, loading, isOpen, highlightedIndex, options, onOpenChange, handleSelectOption],
  );

  const handleOptionMouseEnter = useCallback((index: number) => {
    setHighlightedIndex(index);
  }, []);

  return {
    isOpen,
    selectedValue,
    highlightedIndex,
    selectedOption,
    triggerRef,
    contentRef,
    handleToggle,
    handleSelectOption,
    handleKeyDown,
    handleOptionMouseEnter,
  };
};
