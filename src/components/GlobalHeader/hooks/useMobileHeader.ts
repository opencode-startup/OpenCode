import { useEffect, useState } from 'react';

import { MAX_ANIMATION_DELAY, MOBILE_HEADER_CONTENT_DURATION } from '../constants';

export const useMobileHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
    if (isExpanded) {
      // Set animation delays for menu items
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
  }, [isExpanded]);

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
  };
};
