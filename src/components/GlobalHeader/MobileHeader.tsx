'use client';

import './animations.css';

import clsx from 'clsx';
import { forwardRef } from 'react';

import { Button, Icon, Logo } from '@/components';

import { useMobileHeader } from './hooks';
import { HeaderProps } from './types';

const MobileHeader = forwardRef<HTMLElement, HeaderProps>(
  ({ onSignUpClick, onLogInClick, onContactClick, onPricingClick, ...props }, ref) => {
    const { isExpanded, handleMenuToggle } = useMobileHeader();

    return (
      <header
        ref={ref}
        className={clsx(
          'fixed top-0 left-0 z-999 flex min-h-[var(--global-header-height)] w-full flex-col items-start',
          'justify-center transition-colors duration-500 md:hidden',
          isExpanded && 'bg-background-200',
        )}
        {...props}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0)] backdrop-blur-md
            backdrop-filter"
        />
        <div
          className={clsx(
            'flex h-[var(--global-header-height)] w-full items-center justify-between overflow-hidden px-4',
            isExpanded ? 'relative' : 'absolute top-0',
          )}
        >
          <div className="flex items-center overflow-hidden">
            <Logo size="small" text="OpenCode" />
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              shape="rounded"
              iconOnly
              size="medium"
              onClick={handleMenuToggle}
              className="h-10 w-10 rounded-full"
            >
              <Icon name={isExpanded ? 'cross' : 'menu'} size={16} />
            </Button>
          </div>
        </div>

        <div
          className={clsx(
            'bg-background-200 fixed top-[var(--global-header-height)] left-0 w-full overflow-hidden',
            'transition-all duration-200 ease-out',
            isExpanded ? 'h-[calc(100vh-var(--global-header-height))]' : 'h-0',
          )}
        >
          <div className="flex h-full w-full flex-col gap-6 overflow-auto p-3">
            <div className="flex w-full flex-col gap-3">
              <Button
                variant="primary"
                size="medium"
                fullWidth
                onClick={onSignUpClick}
                className={clsx(isExpanded && 'mobile-menu-item')}
              >
                Sign Up
              </Button>
              <Button
                variant="secondary"
                size="medium"
                onClick={onLogInClick}
                fullWidth
                className={clsx(isExpanded && 'mobile-menu-item')}
              >
                Log In
              </Button>
            </div>

            <div className="flex w-full flex-col gap-1">
              <Button
                variant="tertiary"
                size="medium"
                onClick={onPricingClick}
                fullWidth
                className={clsx('justify-start', isExpanded && 'mobile-menu-item')}
              >
                Pricing
              </Button>
              <Button
                variant="tertiary"
                size="medium"
                fullWidth
                onClick={onContactClick}
                className={clsx('justify-start', isExpanded && 'mobile-menu-item')}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  },
);

MobileHeader.displayName = 'MobileHeader';

export default MobileHeader;
