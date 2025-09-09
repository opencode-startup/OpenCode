import { useCallback, useEffect, useRef } from 'react';

import { UseModalProps, UseModalReturn } from '../types';

export const useModal = ({
  isOpen,
  onClose,
  closeOnEscape = true,
  closeOnBackdropClick = true,
}: UseModalProps): UseModalReturn => {
  const backdropRef = useRef<HTMLDivElement>(null);

  // Handle escape key press
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Handle backdrop click
  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === backdropRef.current && closeOnBackdropClick) {
        onClose?.();
      }
    },
    [closeOnBackdropClick, onClose],
  );

  return {
    backdropRef,
    handleBackdropClick,
  };
};
