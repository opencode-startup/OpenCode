'use client';

import { Button, Logo } from '@/components';

import { HeaderWrapper } from './HeaderWrapper';
import { HeaderProps } from './types';

const DesktopHeader = ({
  onSignUpClick,
  onLogInClick,
  onContactClick,
  onPricingClick,
}: HeaderProps) => {
  return (
    <HeaderWrapper className="hidden justify-center md:flex">
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
    </HeaderWrapper>
  );
};

export default DesktopHeader;
