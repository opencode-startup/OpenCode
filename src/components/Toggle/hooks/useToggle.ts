import { KeyboardEvent, useCallback, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks';

import { UseToggleProps } from '../types';

export const useToggle = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
}: UseToggleProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  // Use controlled value if provided, otherwise use internal state
  const currentChecked = checked !== undefined ? checked : internalChecked;

  // Detect user's motion preference for accessibility
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  const handleToggle = useCallback(() => {
    if (disabled) return;

    const newChecked = !currentChecked;

    // Update internal state if uncontrolled
    if (checked === undefined) {
      setInternalChecked(newChecked);
    }

    // Call onChange callback
    onChange?.(newChecked);
  }, [disabled, onChange, checked, currentChecked]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleToggle();
      }
    },
    [handleToggle],
  );

  return {
    currentChecked,
    handleToggle,
    handleKeyDown,
    shouldAnimate,
  };
};
