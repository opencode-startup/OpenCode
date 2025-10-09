import { useCallback, useEffect, useRef, useState } from 'react';

import { AnimationState, UseAnimatedCTAParams } from '../types';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useAnimatedCTA({ text }: UseAnimatedCTAParams) {
  const [animationState, setAnimationState] = useState<AnimationState>('idle');
  const prefersReducedMotion = usePrefersReducedMotion();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimating = animationState === 'animating' && !prefersReducedMotion;

  // Calculate total animation duration: last letter delay + transition duration
  const totalAnimationDuration = text.length * 50 + 400;

  const startAnimation = useCallback(() => {
    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      return;
    }

    // Only start animation if idle
    if (animationState === 'idle') {
      setAnimationState('animating');

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set timeout to mark as completed, then reset to idle
      timeoutRef.current = setTimeout(() => {
        setAnimationState('completed');
        // Short delay before allowing next animation
        setTimeout(() => {
          setAnimationState('idle');
        }, 50);

        timeoutRef.current = null;
      }, totalAnimationDuration);
    }
  }, [animationState, totalAnimationDuration, prefersReducedMotion]);

  const handleMouseEnter = useCallback(() => {
    startAnimation();
  }, [startAnimation]);

  const handleTouchStart = useCallback(() => {
    startAnimation();
  }, [startAnimation]);

  // Cleanup timeout on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return {
    animationState,
    handleMouseEnter,
    handleTouchStart,
    isAnimating,
    prefersReducedMotion,
  };
}
