import clsx from 'clsx';

import { HeaderWrapperProps } from './types';

export const HeaderWrapper = ({ children, className, ...props }: HeaderWrapperProps) => {
  return (
    <header
      className={clsx(
        'fixed top-0 left-0 z-999 min-h-[var(--global-header-height)] w-full border-b border-gray-400',
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0)] backdrop-blur-md
          backdrop-filter"
      />
      {children}
    </header>
  );
};
