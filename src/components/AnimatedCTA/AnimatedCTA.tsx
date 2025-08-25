'use client';

import './animation.css';

import { forwardRef, Ref } from 'react';

import { Icon } from '@/components/Icon';

import { useAnimatedCTA } from './hooks';
import { AnimatedCTAProps } from './types';
import { getIconLayout } from './utils';
import { sizeConfig, variants } from './variants';

const AnimatedCTA = forwardRef(
  (
    {
      size = 'large',
      text,
      className,
      leftIcon,
      rightIcon,
      fullWidth = false,
      as = 'button',
      ...props
    }: AnimatedCTAProps,
    ref: Ref<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    const { handleMouseEnter, isAnimating } = useAnimatedCTA({ text });
    const config = sizeConfig[size];
    const iconLayout = getIconLayout(leftIcon, rightIcon);

    const commonProps = {
      ref: ref as any,
      className: `group relative ${isAnimating ? 'animating' : ''} ${variants({
        size,
        iconLayout,
        fullWidth,
        className,
      })}`,
      onMouseEnter: handleMouseEnter,
    };

    const renderContent = () => (
      <>
        {leftIcon && (
          <div
            className={`bg-gray-1000 flex shrink-0 items-center justify-center rounded-full ${config.icon}`}
          >
            <Icon name={leftIcon} size={config.iconSize} className="text-background-200" />
          </div>
        )}

        <div className={'relative'}>
          <div className={`text-gray-1000 text-nowrap ${config.text} relative`}>
            {text.split('').map((letter: string, index: number) => (
              <span
                key={index}
                className="animated-front-letter front-letter inline-block"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
          <div className={`text-gray-1000 text-nowrap ${config.text} absolute top-0 left-0`}>
            {text.split('').map((letter: string, index: number) => (
              <span
                key={index}
                className="animated-back-letter back-letter inline-block"
                style={{
                  transitionDelay: `${50 + index * 50}ms`,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        </div>

        {rightIcon && (
          <div
            className={`bg-gray-1000 flex shrink-0 items-center justify-center rounded-full ${config.icon}`}
          >
            <Icon name={rightIcon} size={config.iconSize} className="text-background-200" />
          </div>
        )}
      </>
    );

    if (as === 'link') {
      return (
        <a {...commonProps} {...(props as any)}>
          {renderContent()}
        </a>
      );
    }

    return (
      <button {...commonProps} {...(props as any)}>
        {renderContent()}
      </button>
    );
  },
);

AnimatedCTA.displayName = 'AnimatedCTA';

export default AnimatedCTA;
