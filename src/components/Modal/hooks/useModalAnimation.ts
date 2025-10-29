import { useEffect, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks';

import { UseModalAnimationProps } from '../types';

export const useModalAnimation = ({ isOpen }: UseModalAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Detect user's motion preference for accessibility
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
    } else if (isVisible) {
      setIsAnimating(false);
      // Wait for exit animation to complete before hiding
      // Skip delay if animations are disabled
      const delay = shouldAnimate ? 200 : 0;
      setTimeout(() => setIsVisible(false), delay);
    }
  }, [isOpen, isVisible, shouldAnimate]);

  return {
    isVisible,
    isAnimating,
    shouldAnimate,
  };
};
