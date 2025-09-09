import { useEffect, useState } from 'react';

import { UseModalAnimationProps } from '../types';

export const useModalAnimation = ({ isOpen }: UseModalAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
    } else if (isVisible) {
      setIsAnimating(false);
      // Wait for exit animation to complete before hiding
      setTimeout(() => setIsVisible(false), 200);
    }
  }, [isOpen, isVisible]);

  return {
    isVisible,
    isAnimating,
  };
};
