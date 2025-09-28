'use client';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const GlobalHeader = () => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
};

GlobalHeader.displayName = 'GlobalHeader';

export default GlobalHeader;
