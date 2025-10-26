import { useEffect, useRef, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks';

import { BackgroundStyle, UseSwitchAnimationProps } from '../types';

export const useSwitchAnimation = ({
  options,
  containerRef,
  currentValue,
}: UseSwitchAnimationProps) => {
  const hasChangedRef = useRef(false);
  const initialValueRef = useRef(currentValue);
  const [backgroundStyle, setBackgroundStyle] = useState<BackgroundStyle>({
    left: 0,
    width: 0,
  });

  // Detect user's motion preference
  const prefersReducedMotion = usePrefersReducedMotion();

  // Track if value has changed from initial
  useEffect(() => {
    if (currentValue !== initialValueRef.current) {
      hasChangedRef.current = true;
    }
  }, [currentValue]);

  // Calculate background position and width
  useEffect(() => {
    if (!containerRef.current) return;

    const selectedIndex = options.findIndex((option) => option.value === currentValue);
    if (selectedIndex === -1) return;

    const optionElements = containerRef.current.children;
    if (optionElements.length === 0) return;

    // Skip the background element (first child) and get the actual option element
    // The background div is at index 0, so option elements start at index 1
    const targetIndex = selectedIndex + 1;
    const selectedElement = optionElements[targetIndex] as HTMLElement;

    if (!selectedElement) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const selectedRect = selectedElement.getBoundingClientRect();

    setBackgroundStyle({
      left: selectedRect.left - containerRect.left,
      width: selectedRect.width,
    });
  }, [currentValue, containerRef, options]);

  return {
    backgroundStyle,
    shouldAnimate: hasChangedRef.current && !prefersReducedMotion,
  };
};
