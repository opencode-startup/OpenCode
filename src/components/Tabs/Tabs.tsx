'use client';

import { forwardRef, Ref, useCallback, useId, useRef } from 'react';

import { useTabs, useTabsAnimation } from './hooks';
import { TabsProps } from './types';
import { tabIndicatorVariants, tabOptionVariants, tabsContainerVariants } from './variants';

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      tabs,
      value,
      defaultValue,
      onChange,
      size = 'medium',
      disabled = false,
      className,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const containerRef = useRef<HTMLDivElement>(null);
    const { currentValue, handleTabClick } = useTabs({
      tabs,
      value,
      defaultValue,
      onChange,
      disabled,
    });
    const { indicatorStyle, shouldAnimate } = useTabsAnimation({
      tabs,
      currentValue,
      containerRef,
    });

    // Merge refs utility
    const mergedRef = useCallback(
      (ref: Ref<HTMLDivElement>) => (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [],
    );

    return (
      <div
        ref={mergedRef(ref)}
        role="tablist"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        className={tabsContainerVariants({
          size,
          disabled,
          className,
        })}
        {...props}
      >
        {tabs.map((tab, index) => {
          const isSelected = currentValue === tab.value;
          const isTabDisabled = disabled || tab.disabled;
          const tabId = `${generatedId}-tab-${index}`;

          return (
            <div
              key={tab.value}
              id={tabId}
              role="tab"
              aria-selected={isSelected}
              aria-disabled={isTabDisabled}
              tabIndex={isTabDisabled ? -1 : isSelected ? 0 : -1}
              className={tabOptionVariants({
                size,
                selected: isSelected,
                disabled: isTabDisabled,
              })}
              onClick={handleTabClick(tab.value)}
            >
              <div className="relative flex shrink-0 flex-col justify-center text-nowrap">
                <span className="whitespace-pre">{tab.label}</span>
              </div>
            </div>
          );
        })}

        {/* Animated indicator */}
        <div
          className={tabIndicatorVariants({
            className: shouldAnimate ? '' : 'opacity-0',
          })}
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
        />
      </div>
    );
  },
);

Tabs.displayName = 'Tabs';

export default Tabs;
