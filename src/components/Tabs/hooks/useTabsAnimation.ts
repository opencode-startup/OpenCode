import { useEffect, useState } from 'react';

import { TabIndicatorStyle, UseTabsAnimationProps } from '../types';

export const useTabsAnimation = ({ tabs, currentValue, containerRef }: UseTabsAnimationProps) => {
  const [indicatorStyle, setIndicatorStyle] = useState<TabIndicatorStyle>({
    left: 0,
    width: 0,
  });
  const [shouldAnimate, setShouldAnimate] = useState(false);

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

    // Enable animation after the first render
    if (!shouldAnimate) {
      setShouldAnimate(true);
    }
  }, [tabs, currentValue, containerRef, shouldAnimate]);

  return {
    indicatorStyle,
    shouldAnimate,
  };
};
