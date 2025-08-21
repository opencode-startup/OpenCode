'use client';

import { forwardRef } from 'react';

import { Icon } from '@/components/Icon';

import { AnimatedCTAProps } from './types';
import { getIconLayout } from './utils';
import { sizeConfig, variants } from './variants';

const AnimatedCTA = forwardRef<HTMLButtonElement, AnimatedCTAProps>(
  ({ size = 'large', children, className, leftIcon, rightIcon, ...props }, ref) => {
    const config = sizeConfig[size];
    const iconLayout = getIconLayout(leftIcon, rightIcon);

    return (
      <button
        ref={ref}
        className={variants({
          size,
          iconLayout,
          className,
        })}
        {...props}
      >
        {leftIcon && (
          <div
            className={`bg-gray-1000 flex shrink-0 items-center justify-center rounded-full ${config.icon}`}
          >
            <Icon name={leftIcon} size={config.iconSize} className="text-background-200" />
          </div>
        )}

        <div className={`font-geist text-gray-1000 font-semibold text-nowrap ${config.text}`}>
          {children}
        </div>

        {rightIcon && (
          <div
            className={`bg-gray-1000 flex shrink-0 items-center justify-center rounded-full ${config.icon}`}
          >
            <Icon name={rightIcon} size={config.iconSize} className="text-background-200" />
          </div>
        )}
      </button>
    );
  },
);

AnimatedCTA.displayName = 'AnimatedCTA';

export default AnimatedCTA;
