import { useEffect, useRef, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks';

import { TabIndicatorStyle, UseTabsAnimationProps } from '../types';

export const useTabsAnimation = ({ tabs, currentValue, containerRef }: UseTabsAnimationProps) => {
  const hasChangedRef = useRef(false);
  const initialValueRef = useRef(currentValue);
  const [indicatorStyle, setIndicatorStyle] = useState<TabIndicatorStyle>({
    left: 0,
    width: 0,
  });

  // Detect user's motion preference for accessibility
  const prefersReducedMotion = usePrefersReducedMotion();

  // Track if value has changed from initial
  useEffect(() => {
    if (currentValue !== initialValueRef.current) {
      hasChangedRef.current = true;
    }
  }, [currentValue]);

  // Calculate indicator position and width
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const currentIndex = tabs.findIndex((tab) => tab.value === currentValue);

    if (currentIndex === -1) return;

    const tabElements = container.querySelectorAll('[role="tab"]');
    const currentTabElement = tabElements[currentIndex] as HTMLElement;

    if (!currentTabElement) return;

    const containerRect = container.getBoundingClientRect();
    const tabRect = currentTabElement.getBoundingClientRect();

    const newStyle: TabIndicatorStyle = {
      left: tabRect.left - containerRect.left,
      width: tabRect.width,
    };

    setIndicatorStyle(newStyle);
  }, [tabs, currentValue, containerRef]);

  return {
    indicatorStyle,
    shouldAnimate: hasChangedRef.current && !prefersReducedMotion,
  };
};
