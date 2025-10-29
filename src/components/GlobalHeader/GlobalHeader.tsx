'use client';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import { HeaderProps } from './types';

const GlobalHeader = (props: HeaderProps) => {
  return (
    <>
      <DesktopHeader {...props} />
      <MobileHeader {...props} />
    </>
  );
};

GlobalHeader.displayName = 'GlobalHeader';

export default GlobalHeader;
