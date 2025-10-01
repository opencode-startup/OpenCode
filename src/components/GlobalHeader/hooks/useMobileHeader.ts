import { useEffect, useState } from 'react';

export const useMobileHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded) {
      // Set animation delays for menu items
      const menuItems = document.querySelectorAll('.global-mobile-header-item');
      menuItems.forEach((item, index) => {
        (item as HTMLElement).style.animationDelay = `${index * 50}ms`;
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
