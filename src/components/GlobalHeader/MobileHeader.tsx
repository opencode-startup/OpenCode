'use client';

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
        className={`fixed top-0 left-0 z-999 flex w-full flex-col items-start md:hidden ${
          isExpanded
            ? 'bg-background-200 h-screen'
            : 'min-h-[var(--global-header-height)] justify-center'
          }`}
        {...props}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0)] backdrop-blur-sm
            backdrop-filter`}
        />
        <div
          className={`flex h-[var(--global-header-height)] w-full items-center justify-between overflow-hidden px-4 ${
            isExpanded ? 'relative' : 'absolute top-0' }`}
        >
          <div className={'flex items-center overflow-hidden'}>
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

        {isExpanded && (
          <div className="flex w-full flex-1 flex-col gap-6 overflow-auto p-3">
            <div className="flex w-full flex-col gap-3">
              <Button variant="primary" size="medium" fullWidth onClick={onSignUpClick}>
                Sign Up
              </Button>
              <Button variant="secondary" size="medium" onClick={onLogInClick} fullWidth>
                Log In
              </Button>
            </div>

            <div className="flex w-full flex-col gap-1">
              <Button
                variant="tertiary"
                size="medium"
                onClick={onPricingClick}
                fullWidth
                className="justify-start"
              >
                Pricing
              </Button>
              <Button
                variant="tertiary"
                size="medium"
                fullWidth
                onClick={onContactClick}
                className="justify-start"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </header>
    );
  },
);

MobileHeader.displayName = 'MobileHeader';

export default MobileHeader;
