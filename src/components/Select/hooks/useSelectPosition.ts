import { useEffect, useState } from 'react';

type Position = 'top' | 'bottom';

interface UseSelectPositionProps {
  isOpen: boolean;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

interface UseSelectPositionReturn {
  position: Position;
  contentStyle: React.CSSProperties;
}

export const useSelectPosition = ({
  isOpen,
  triggerRef,
  contentRef,
}: UseSelectPositionProps): UseSelectPositionReturn => {
  const [position, setPosition] = useState<Position>('bottom');
  const [contentStyle, setContentStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!isOpen || !triggerRef.current || !contentRef.current) {
      return;
    }

    const updatePosition = () => {
      const triggerElement = triggerRef.current;
      const contentElement = contentRef.current;

      if (!triggerElement || !contentElement) {
        return;
      }

      const triggerRect = triggerElement.getBoundingClientRect();
      const contentRect = contentElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate available space above and below the trigger
      const spaceAbove = triggerRect.top;
      const spaceBelow = viewportHeight - triggerRect.bottom;

      // Estimate content height (we'll use actual height if available)
      const estimatedContentHeight = contentRect.height || 200; // fallback estimate

      // Determine optimal position
      let newPosition: Position = 'bottom';

      // If there's not enough space below but enough space above
      if (spaceBelow < estimatedContentHeight && spaceAbove >= estimatedContentHeight) {
        newPosition = 'top';
      }
      // If there's not enough space in either direction, choose the one with more space
      else if (spaceBelow < estimatedContentHeight && spaceAbove < estimatedContentHeight) {
        newPosition = spaceAbove > spaceBelow ? 'top' : 'bottom';
      }

      setPosition(newPosition);

      // Set content styles for positioning
      const newStyle: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 50,
      };

      if (newPosition === 'top') {
        newStyle.bottom = '100%';
        newStyle.marginBottom = '4px';
      } else {
        newStyle.top = '100%';
        newStyle.marginTop = '4px';
      }

      setContentStyle(newStyle);
    };

    // Initial position calculation
    updatePosition();

    // Update position on scroll and resize
    const handleResize = () => updatePosition();
    const handleScroll = () => updatePosition();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, triggerRef, contentRef]);

  return {
    position,
    contentStyle,
  };
};
