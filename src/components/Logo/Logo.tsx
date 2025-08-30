import Link from 'next/link';
import { forwardRef, Ref } from 'react';

import { Icon } from '@/components';

import { useTypingAnimation } from './hooks';
import { LogoProps } from './types';
import { iconSizes, logoIconVariants, logoTextVariants, logoVariants } from './variants';

const Logo = forwardRef(
  (
    { size = 'large', className, animated = true, text, as = 'div', ...props }: LogoProps,
    ref: Ref<HTMLDivElement | HTMLAnchorElement>,
  ) => {
    const showText = Boolean(text);
    const iconSize = iconSizes[size];
    const { displayText, showCursor } = useTypingAnimation({
      text,
    });

    const renderContent = () => (
      <>
        <div className={logoIconVariants({ size })}>
          <Icon name={'logo'} {...iconSize} />
        </div>
        {showText && (
          <div className={logoTextVariants({ size })}>
            <p className="relative">
              {animated ? (
                <>
                  {/* Invisible placeholder to maintain consistent width */}
                  <span className="invisible" aria-hidden="true">
                    {text}_
                  </span>
                  {/* Visible animated text positioned absolutely */}
                  <span className="absolute inset-0">
                    {displayText.split('').map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block translate-y-0 transform opacity-100 transition-all duration-300 ease-out"
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </span>
                    ))}
                    {showCursor && <span className="inline-block w-[0.6em] text-current">_</span>}
                  </span>
                </>
              ) : (
                text
              )}
            </p>
          </div>
        )}
      </>
    );

    if (as === 'link') {
      const { href, ...linkProps } = props as any;

      return (
        <Link
          ref={ref as any}
          href={href}
          className={logoVariants({ size, showText, className })}
          {...linkProps}
        >
          {renderContent()}
        </Link>
      );
    }

    return (
      <div
        ref={ref as any}
        className={logoVariants({ size, showText, className })}
        {...(props as any)}
      >
        {renderContent()}
      </div>
    );
  },
);

Logo.displayName = 'Logo';

export default Logo;
