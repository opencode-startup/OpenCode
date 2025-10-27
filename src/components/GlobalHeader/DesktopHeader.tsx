'use client';

import { useId } from 'react';

import { Button, Icon, Logo, Select } from '@/components';

import { HeaderWrapper } from './HeaderWrapper';
import { HeaderProps } from './types';

const DesktopHeader = ({
  isLoggedIn = false,
  userName = 'John Doe',
  userEmail = 'johndoe@gmail.com',
  onSignUpClick,
  onLogInClick,
  onContactClick,
  onPricingClick,
  onMyProgressClick,
  onAccountSettingsClick,
  onLogoutClick,
  onUpgradeClick,
  'data-testid': dataTestId,
  baseId,
}: HeaderProps) => {
  const generatedId = useId();
  const headerId = baseId || generatedId;
  const userMenuOptions = [
    [
      {
        value: 'user-email',
        label: userEmail,
      },
      {
        value: 'account-settings',
        label: 'Account Settings',
        rightIcon: <Icon name="settings-gear" size={12} />,
      },
    ],
    [
      {
        value: 'logout',
        label: 'Log Out',
        rightIcon: <Icon name="logout" size={12} />,
      },
    ],
  ];

  const handleUserMenuChange = (value: string) => {
    switch (value) {
      case 'account-settings':
        onAccountSettingsClick?.();
        break;
      case 'logout':
        onLogoutClick?.();
        break;
    }
  };

  return (
    <HeaderWrapper data-testid={dataTestId} className="hidden justify-center md:flex">
      <div
        className="absolute top-0 flex h-[var(--global-header-height)] w-full max-w-[var(--global-content-max-width)]
          items-center justify-between px-4"
      >
        <div className="flex items-center gap-8">
          <Logo size="small" text="OpenCode" as={'link'} href={'/'} />
          <div
            className="flex flex-col items-start gap-2.5"
            role="group"
            aria-label="Site navigation"
          >
            <Button
              id={`${headerId}-pricing`}
              variant="tertiary"
              shape="rounded"
              size="small"
              onClick={onPricingClick}
            >
              Pricing
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-3" role="group" aria-label="User actions">
          {isLoggedIn ? (
            <>
              <Button
                id={`${headerId}-my-progress`}
                leftIcon={<Icon name="chart-trending-up" size={12} />}
                variant="tertiary"
                size="small"
                onClick={onMyProgressClick}
              >
                My Progress
              </Button>
              <Select
                data-testid={`${headerId}-user-menu`}
                buttonSize="small"
                listboxSize="large"
                popupWidth={240}
                hideChevron
                position={'right'}
                disableSelection
                placeholder={userName}
                leftIcon={<Icon name="user" size={12} />}
                options={userMenuOptions}
                onValueChange={handleUserMenuChange}
                footer={
                  <Button
                    id={`${headerId}-upgrade`}
                    variant="success"
                    size="small"
                    fullWidth
                    onClick={onUpgradeClick}
                  >
                    Upgrade to Pro
                  </Button>
                }
              />
            </>
          ) : (
            <>
              <Button
                id={`${headerId}-log-in`}
                variant="secondary"
                size="small"
                onClick={onLogInClick}
              >
                Log In
              </Button>
              <Button
                id={`${headerId}-contact`}
                variant="secondary"
                size="small"
                onClick={onContactClick}
              >
                Contact
              </Button>
              <Button
                id={`${headerId}-sign-up`}
                variant="primary"
                size="small"
                onClick={onSignUpClick}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default DesktopHeader;
