'use client';

import './animations.css';

import clsx from 'clsx';

import { Button, Icon, Logo } from '@/components';

import { HeaderWrapper } from './HeaderWrapper';
import { useMobileHeader } from './hooks';
import { HeaderProps } from './types';

const MobileHeader = ({
  onSignUpClick,
  onLogInClick,
  onContactClick,
  onPricingClick,
}: HeaderProps) => {
  const { isExpanded, handleMenuToggle } = useMobileHeader();

  return (
    <HeaderWrapper
      className={clsx(
        'flex flex-col items-start justify-center transition-colors duration-500 md:hidden',
        isExpanded && 'bg-background-200',
      )}
    >
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
    </HeaderWrapper>
  );
};

export default MobileHeader;
