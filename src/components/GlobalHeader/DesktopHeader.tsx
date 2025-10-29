'use client';

import { useId } from 'react';

import { Button, Icon, Logo, Select } from '@/components';
import { content } from '@/lib';

import { HeaderWrapper } from './HeaderWrapper';
import { HeaderProps } from './types';

const DesktopHeader = ({
  isLoggedIn = false,
  userName = content.header.defaults.userName,
  userEmail = content.header.defaults.userEmail,
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
        label: content.header.buttons.accountSettings,
        rightIcon: <Icon name="settings-gear" size={12} />,
      },
    ],
    [
      {
        value: 'logout',
        label: content.header.buttons.logOut,
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
          <Logo size="small" text={content.app.name} as={'link'} href={content.links.home} />
          <div
            className="flex flex-col items-start gap-2.5"
            role="group"
            aria-label={content.header.navigation.siteNavigation}
          >
            <Button
              id={`${headerId}-pricing`}
              variant="tertiary"
              shape="rounded"
              size="small"
              onClick={onPricingClick}
            >
              {content.header.buttons.pricing}
            </Button>
          </div>
        </div>
        <div
          className="flex items-center gap-3"
          role="group"
          aria-label={content.header.navigation.userActions}
        >
          {isLoggedIn ? (
            <>
              <Button
                id={`${headerId}-my-progress`}
                leftIcon={<Icon name="chart-trending-up" size={12} />}
                variant="tertiary"
                size="small"
                onClick={onMyProgressClick}
              >
                {content.header.buttons.myProgress}
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
                    {content.header.buttons.upgradeToPro}
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
                {content.header.buttons.logIn}
              </Button>
              <Button
                id={`${headerId}-contact`}
                variant="secondary"
                size="small"
                onClick={onContactClick}
              >
                {content.header.buttons.contact}
              </Button>
              <Button
                id={`${headerId}-sign-up`}
                variant="primary"
                size="small"
                onClick={onSignUpClick}
              >
                {content.header.buttons.signUp}
              </Button>
            </>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default DesktopHeader;
