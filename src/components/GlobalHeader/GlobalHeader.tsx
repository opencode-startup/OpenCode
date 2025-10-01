'use client';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const GlobalHeader = () => {
  return (
    <>
      <DesktopHeader isLoggedIn />
      <MobileHeader />
    </>
  );
};

GlobalHeader.displayName = 'GlobalHeader';

export default GlobalHeader;
