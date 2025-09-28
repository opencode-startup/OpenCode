import { HTMLAttributes } from 'react';

export type GlobalHeaderAuthState = 'logged-in' | 'logged-out';

export interface MobileHeaderProps extends HTMLAttributes<HTMLElement> {
  authState?: GlobalHeaderAuthState;
  onMenuClick?: () => void;
  onSignUpClick?: () => void;
  onLogInClick?: () => void;
  onContactClick?: () => void;
  onPricingClick?: () => void;
  className?: string;
}

export type DesktopHeaderProps = Omit<MobileHeaderProps, 'onMenuClick'>;
