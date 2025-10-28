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
      fullWidth = false,
      className,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'data-testid': dataTestId,
      baseId,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const tabsId = baseId || generatedId;
    const containerRef = useRef<HTMLDivElement>(null);
    const { currentValue, handleTabClick, handleKeyDown } = useTabs({
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
        data-testid={dataTestId}
        className={tabsContainerVariants({
          size,
          disabled,
          fullWidth,
          className,
        })}
        {...props}
      >
        {tabs.map((tab, index) => {
          const isSelected = currentValue === tab.value;
          const isTabDisabled = disabled || tab.disabled;
          const tabId = `${tabsId}-tab-${index}`;

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
                shouldAnimate,
              })}
              onClick={handleTabClick(tab.value)}
              onKeyDown={handleKeyDown(tab.value)}
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
            shouldAnimate,
            className: !shouldAnimate || !indicatorStyle.width ? 'opacity-0' : '',
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
