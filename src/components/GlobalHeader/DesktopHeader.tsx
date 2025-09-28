'use client';

import { forwardRef } from 'react';

import { Button, Logo } from '@/components';

import { DesktopHeaderProps } from './types';

const DesktopHeader = forwardRef<HTMLElement, DesktopHeaderProps>(
  ({ onSignUpClick, onLogInClick, onContactClick, onPricingClick, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={
          'fixed top-0 left-0 z-999 hidden min-h-[var(--global-header-height)] w-full justify-center md:flex'
        }
        {...props}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0)] backdrop-blur-xs
            backdrop-filter`}
        />
        <div
          className={`absolute top-0 flex h-[var(--global-header-height)] w-full max-w-[var(--global-header-max-width)]
            items-center justify-between overflow-hidden px-4`}
        >
          <div className="flex items-center gap-8">
            <Logo size="small" text="OpenCode" as={'link'} href={'/'} />
            <div className="flex flex-col items-start gap-2.5">
              <Button variant="tertiary" shape="rounded" size="small" onClick={onPricingClick}>
                Pricing
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="small" onClick={onLogInClick}>
              Log In
            </Button>
            <Button variant="secondary" size="small" onClick={onContactClick}>
              Contact
            </Button>
            <Button variant="primary" size="small" onClick={onSignUpClick}>
              Sign Up
            </Button>
          </div>
        </div>
      </header>
    );
  },
);

DesktopHeader.displayName = 'DesktopHeader';

export default DesktopHeader;
