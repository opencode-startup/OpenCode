'use client';

import './animations.css';

import clsx from 'clsx';

import { Button, Icon, Logo } from '@/components';

import { BurgerIcon } from './BurgerIcon';
import { MOBILE_HEADER_CONTENT_DURATION, MOBILE_HEADER_WRAPPER_DURATION } from './constants';
import { HeaderWrapper } from './HeaderWrapper';
import { useMobileHeader } from './hooks';
import { HeaderProps } from './types';

const MobileHeader = ({
  isLoggedIn = false,
  userEmail = 'johndoe@gmail.com',
  onSignUpClick,
  onLogInClick,
  onContactClick,
  onPricingClick,
  onAccountSettingsClick,
  onLogoutClick,
  onUpgradeClick,
}: HeaderProps) => {
  const { isExpanded, handleMenuToggle } = useMobileHeader();

  return (
    <HeaderWrapper
      className={clsx(
        'flex flex-col items-start justify-center transition-colors md:hidden',
        isExpanded && 'bg-background-200',
      )}
      style={{ transitionDuration: `${MOBILE_HEADER_WRAPPER_DURATION}ms` }}
    >
      <div
        className={clsx(
          `flex h-[var(--global-header-height)] w-full items-center justify-between overflow-hidden border-b
          border-gray-400 px-4`,
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
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
          >
            <BurgerIcon isOpen={isExpanded} />
          </Button>
        </div>
      </div>

      <div
        className={clsx(
          'bg-background-200 fixed top-[var(--global-header-height)] left-0 w-full overflow-hidden',
          'transition-all ease-out',
        )}
        style={{
          transitionDuration: `${MOBILE_HEADER_CONTENT_DURATION}ms`,
          height: isExpanded ? 'calc(var(--vh, 1vh) * 100 - var(--global-header-height))' : '0',
        }}
      >
        <div className="flex h-full w-full flex-col justify-between overflow-auto">
          {isLoggedIn ? (
            <>
              <div className="flex w-full flex-col">
                <div className="border-gray-alpha-400 flex w-full flex-col gap-4 border-b px-2 pt-4 pb-2">
                  <div className="flex items-center px-4">
                    <span className="typo-label-16 text-gray-1000 truncate">{userEmail}</span>
                  </div>
                  <Button
                    variant="tertiary"
                    size="medium"
                    fullWidth
                    onClick={onAccountSettingsClick}
                    className={clsx(
                      'justify-between',
                      isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit',
                    )}
                    rightIcon={<Icon name="settings-gear" size={16} />}
                  >
                    Account Settings
                  </Button>
                </div>

                <div className="border-gray-alpha-400 flex w-full flex-col border-b p-2">
                  <Button
                    variant="tertiary"
                    size="medium"
                    fullWidth
                    onClick={onLogoutClick}
                    className={clsx(
                      'justify-between',
                      isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit',
                    )}
                    rightIcon={<Icon name="logout" size={16} />}
                  >
                    Log Out
                  </Button>
                </div>
              </div>

              <div className="flex w-full flex-col px-5 py-2">
                <Button
                  variant="success"
                  size="large"
                  fullWidth
                  onClick={onUpgradeClick}
                  className={clsx(
                    isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit',
                  )}
                >
                  Upgrade to Pro
                </Button>
              </div>
            </>
          ) : (
            <div className="flex h-full w-full flex-col gap-6 p-3">
              <div className="flex w-full flex-col gap-3">
                <Button
                  variant="primary"
                  size="medium"
                  fullWidth
                  onClick={onSignUpClick}
                  className={clsx(
                    isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit',
                  )}
                >
                  Sign Up
                </Button>
                <Button
                  variant="secondary"
                  size="medium"
                  onClick={onLogInClick}
                  fullWidth
                  className={clsx(
                    isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit',
                  )}
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
                  className={clsx(
                    'justify-start',
                    isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit',
                  )}
                >
                  Pricing
                </Button>
                <Button
                  variant="tertiary"
                  size="medium"
                  fullWidth
                  onClick={onContactClick}
                  className={clsx(
                    'justify-start',
                    isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit',
                  )}
                >
                  Contact
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default MobileHeader;
