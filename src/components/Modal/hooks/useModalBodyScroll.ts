import { useEffect } from 'react';

interface UseModalBodyScrollProps {
  isOpen: boolean;
  preventBodyScroll?: boolean;
}

export const useModalBodyScroll = ({
  isOpen,
  preventBodyScroll = true,
}: UseModalBodyScrollProps): void => {
  // Handle body scroll prevention
  useEffect(() => {
    if (!isOpen || !preventBodyScroll) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen, preventBodyScroll]);
};
