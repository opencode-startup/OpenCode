import { useCallback, useRef, useState } from 'react';

export type AnimationState = 'idle' | 'animating' | 'completed';

export interface UseAnimatedCTAProps {
  text: string;
}

export function useAnimatedCTA({ text }: UseAnimatedCTAProps) {
  const [animationState, setAnimationState] = useState<AnimationState>('idle');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate total animation duration: last letter delay + transition duration
  const totalAnimationDuration = text.length * 50 + 400;

  const handleMouseEnter = useCallback(() => {
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
  }, [animationState, totalAnimationDuration]);

  return {
    animationState,
    handleMouseEnter,
    isAnimating: animationState === 'animating',
  };
}
