'use client';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const GlobalHeader = () => {
  return (
    <>
      <DesktopHeader isLoggedIn />
      <MobileHeader isLoggedIn />
    </>
  );
};

GlobalHeader.displayName = 'GlobalHeader';

export default GlobalHeader;
