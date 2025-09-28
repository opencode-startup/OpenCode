'use client';

import { forwardRef } from 'react';

import { Button, Icon, Logo } from '@/components';

import { MobileHeaderProps } from './types';

const MobileHeader = forwardRef<HTMLElement, MobileHeaderProps>(
  ({ onMenuClick, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={
          'fixed top-0 left-0 z-999 flex min-h-[var(--global-header-height)] w-full justify-center md:hidden'
        }
        {...props}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0)] backdrop-blur-sm
            backdrop-filter`}
        />
        <div
          className={`absolute top-0 flex h-[var(--global-header-height)] w-full items-center justify-between
            overflow-hidden px-4`}
        >
          <div className="flex items-center gap-8">
            <Logo size="small" text="OpenCode" />
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              shape="rounded"
              iconOnly
              size="medium"
              onClick={onMenuClick}
              className="h-10 w-10 rounded-full"
            >
              <Icon name="menu" size={16} />
            </Button>
          </div>
        </div>
      </header>
    );
  },
);

MobileHeader.displayName = 'MobileHeader';

export default MobileHeader;
