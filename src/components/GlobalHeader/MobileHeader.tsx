'use client';

import './animations.css';

import clsx from 'clsx';
import { useId } from 'react';

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
  'data-testid': dataTestId,
  baseId,
}: HeaderProps) => {
  const generatedId = useId();
  const headerId = baseId || generatedId;
  const { isExpanded, handleMenuToggle, shouldAnimate } = useMobileHeader();

  return (
    <HeaderWrapper
      data-testid={dataTestId}
      className={clsx(
        'flex flex-col items-start justify-center md:hidden',
        shouldAnimate && 'transition-colors',
        isExpanded && 'bg-background-200',
      )}
      style={{ transitionDuration: shouldAnimate ? `${MOBILE_HEADER_WRAPPER_DURATION}ms` : '0ms' }}
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
            id={`${headerId}-menu-toggle`}
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
          shouldAnimate && 'transition-all ease-out',
        )}
        style={{
          transitionDuration: shouldAnimate ? `${MOBILE_HEADER_CONTENT_DURATION}ms` : '0ms',
          height: isExpanded ? 'calc(var(--vh, 1vh) * 100 - var(--global-header-height))' : '0',
        }}
        role="menu"
        aria-label="Mobile navigation menu"
        aria-hidden={!isExpanded}
      >
        <div className="flex h-full w-full flex-col justify-between overflow-auto">
          {isLoggedIn ? (
            <>
              <div className="flex w-full flex-col" aria-label="User account navigation">
                <div className="border-gray-alpha-400 flex w-full flex-col gap-4 border-b px-2 pt-4 pb-2">
                  <div className="flex items-center px-4">
                    <span className="typo-label-16 text-gray-1000 truncate">{userEmail}</span>
                  </div>
                  <Button
                    id={`${headerId}-account-settings`}
                    variant="tertiary"
                    size="medium"
                    fullWidth
                    onClick={onAccountSettingsClick}
                    className={clsx(
                      'justify-between',
                      shouldAnimate &&
                        (isExpanded
                          ? 'global-mobile-header-item'
                          : 'global-mobile-header-item-exit'),
                    )}
                    rightIcon={<Icon name="settings-gear" size={16} />}
                  >
                    Account Settings
                  </Button>
                </div>

                <div className="border-gray-alpha-400 flex w-full flex-col border-b p-2">
                  <Button
                    id={`${headerId}-logout`}
                    variant="tertiary"
                    size="medium"
                    fullWidth
                    onClick={onLogoutClick}
                    className={clsx(
                      'justify-between',
                      shouldAnimate &&
                        (isExpanded
                          ? 'global-mobile-header-item'
                          : 'global-mobile-header-item-exit'),
                    )}
                    rightIcon={<Icon name="logout" size={16} />}
                  >
                    Log Out
                  </Button>
                </div>
              </div>

              <div className="flex w-full flex-col px-5 py-2">
                <Button
                  id={`${headerId}-upgrade`}
                  variant="success"
                  size="large"
                  fullWidth
                  onClick={onUpgradeClick}
                  className={clsx(
                    shouldAnimate &&
                      (isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit'),
                  )}
                >
                  Upgrade to Pro
                </Button>
              </div>
            </>
          ) : (
            <div className="flex h-full w-full flex-col gap-6 p-3" aria-label="Guest navigation">
              <div className="flex w-full flex-col gap-3" aria-label="Authentication actions">
                <Button
                  id={`${headerId}-sign-up`}
                  variant="primary"
                  size="medium"
                  fullWidth
                  onClick={onSignUpClick}
                  className={clsx(
                    shouldAnimate &&
                      (isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit'),
                  )}
                >
                  Sign Up
                </Button>
                <Button
                  id={`${headerId}-log-in`}
                  variant="secondary"
                  size="medium"
                  onClick={onLogInClick}
                  fullWidth
                  className={clsx(
                    shouldAnimate &&
                      (isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit'),
                  )}
                >
                  Log In
                </Button>
              </div>

              <div className="flex w-full flex-col gap-1" aria-label="Site navigation">
                <Button
                  id={`${headerId}-pricing`}
                  variant="tertiary"
                  size="medium"
                  onClick={onPricingClick}
                  fullWidth
                  className={clsx(
                    'justify-start',
                    shouldAnimate &&
                      (isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit'),
                  )}
                >
                  Pricing
                </Button>
                <Button
                  id={`${headerId}-contact`}
                  variant="tertiary"
                  size="medium"
                  fullWidth
                  onClick={onContactClick}
                  className={clsx(
                    'justify-start',
                    shouldAnimate &&
                      (isExpanded ? 'global-mobile-header-item' : 'global-mobile-header-item-exit'),
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
