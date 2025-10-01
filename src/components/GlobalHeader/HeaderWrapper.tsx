import { HeaderWrapperProps } from './types';

export const HeaderWrapper = ({ children, className }: HeaderWrapperProps) => {
  return (
    <header
      className={`fixed top-0 left-0 z-999 min-h-[var(--global-header-height)] w-full ${className || ''}`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0)] backdrop-blur-md
          backdrop-filter"
      />
      {children}
    </header>
  );
};
