import { HTMLAttributes, ReactNode } from 'react';

export interface HeaderProps {
  isLoggedIn?: boolean;
  userName?: string;
  userEmail?: string;
  onSignUpClick?: () => void;
  onLogInClick?: () => void;
  onContactClick?: () => void;
  onPricingClick?: () => void;
  onMyProgressClick?: () => void;
  onAccountSettingsClick?: () => void;
  onLogoutClick?: () => void;
  onUpgradeClick?: () => void;
  // Testing support
  'data-testid'?: string;
  baseId?: string;
}

export interface HeaderWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  'aria-label'?: string;
}

export interface BurgerIconProps {
  isOpen: boolean;
}
