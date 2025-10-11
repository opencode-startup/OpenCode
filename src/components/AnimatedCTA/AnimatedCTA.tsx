'use client';

import './animation.css';

import clsx from 'clsx';
import { forwardRef, Ref } from 'react';

import { Icon } from '@/components/Icon';

import { LETTER_DELAY, useAnimatedCTA } from './hooks';
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
      'data-testid': dataTestId,
      ...props
    }: AnimatedCTAProps,
    ref: Ref<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    const { handleMouseEnter, handleTouchStart, isAnimating } = useAnimatedCTA({ text });
    const config = sizeConfig[size];
    const iconLayout = getIconLayout(leftIcon, rightIcon);

    const commonProps = {
      ref: ref as any,
      className: clsx(
        'group relative',
        isAnimating && 'animating',
        variants({
          size,
          iconLayout,
          fullWidth,
          className,
        }),
      ),
      onMouseEnter: handleMouseEnter,
      onTouchStart: handleTouchStart,
      ...(as === 'link' && { role: 'button' }),
      'data-testid': dataTestId,
    };

    const renderContent = () => (
      <>
        {leftIcon && (
          <div
            className={clsx(
              'bg-gray-1000 flex shrink-0 items-center justify-center rounded-full',
              config.icon,
            )}
          >
            <Icon name={leftIcon} size={config.iconSize} className="text-background-200" />
          </div>
        )}

        <div className="relative">
          <div className={clsx('text-gray-1000 relative text-nowrap', config.text)}>
            {text.split('').map((letter: string, index: number) => (
              <span
                key={index}
                className="animated-front-letter front-letter inline-block"
                style={{
                  transitionDelay: `${index * LETTER_DELAY}ms`,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
          <div className={clsx('text-gray-1000 absolute top-0 left-0 text-nowrap', config.text)}>
            {text.split('').map((letter: string, index: number) => (
              <span
                key={index}
                className="animated-back-letter back-letter inline-block"
                style={{
                  transitionDelay: `${LETTER_DELAY + index * LETTER_DELAY}ms`,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        </div>

        {rightIcon && (
          <div
            className={clsx(
              'bg-gray-1000 flex shrink-0 items-center justify-center rounded-full',
              config.icon,
            )}
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
