import { KeyboardEvent, useCallback } from 'react';

import { UseToastProps } from '../types';

export const useToast = ({ onClose }: UseToastProps) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClose?.();
      }
    },
    [onClose],
  );

  return {
    handleKeyDown,
  };
};
