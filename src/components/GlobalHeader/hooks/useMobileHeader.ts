import { useEffect, useState } from 'react';

import { usePrefersReducedMotion } from '@/hooks';

import { MAX_ANIMATION_DELAY, MOBILE_HEADER_CONTENT_DURATION } from '../constants';

export const useMobileHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Detect user's motion preference for accessibility
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  // Set viewport height CSS variable for mobile Safari
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  useEffect(() => {
    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded && shouldAnimate) {
      // Set animation delays for menu items only when animations are enabled
      const menuItems = document.querySelectorAll('.global-mobile-header-item');
      const itemCount = menuItems.length;
      const delayPerItem = Math.min(
        MOBILE_HEADER_CONTENT_DURATION / itemCount,
        MAX_ANIMATION_DELAY,
      );

      menuItems.forEach((item, index) => {
        (item as HTMLElement).style.animationDelay = `${index * delayPerItem}ms`;
      });
    }
  }, [isExpanded, shouldAnimate]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isExpanded]);

  const handleMenuToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return {
    isExpanded,
    handleMenuToggle,
    shouldAnimate,
  };
};
