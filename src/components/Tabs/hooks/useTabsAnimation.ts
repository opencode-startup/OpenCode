import { useEffect, useRef, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks';

import { TabIndicatorStyle, UseTabsAnimationProps } from '../types';

export const useTabsAnimation = ({ tabs, currentValue, containerRef }: UseTabsAnimationProps) => {
  const isFirstRenderRef = useRef(true);
  const [indicatorStyle, setIndicatorStyle] = useState<TabIndicatorStyle>({
    left: 0,
    width: 0,
  });

  // Detect user's motion preference for accessibility
  const prefersReducedMotion = usePrefersReducedMotion();

  // Calculate indicator position and width
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const currentIndex = tabs.findIndex((tab) => tab.value === currentValue);

    if (currentIndex === -1) return;

    const tabElements = container.querySelectorAll('[role="tab"]');
    const currentTabElement = tabElements[currentIndex] as HTMLElement;

    if (!currentTabElement) return;

    const calculatePosition = () => {
      const containerRect = container.getBoundingClientRect();
      const tabRect = currentTabElement.getBoundingClientRect();

      const newStyle: TabIndicatorStyle = {
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      };

      setIndicatorStyle(newStyle);

      // After first render, enable animations for subsequent changes
      if (isFirstRenderRef.current) {
        // Use a small timeout to ensure position is set before enabling transitions
        setTimeout(() => {
          isFirstRenderRef.current = false;
        }, 50);
      }
    };

    // Use requestAnimationFrame to ensure layout is complete
    requestAnimationFrame(calculatePosition);
  }, [tabs, currentValue, containerRef]);

  return {
    indicatorStyle,
    shouldAnimate: !isFirstRenderRef.current && !prefersReducedMotion,
  };
};
