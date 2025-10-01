import { ReactNode } from 'react';

export interface HeaderProps {
  onSignUpClick?: () => void;
  onLogInClick?: () => void;
  onContactClick?: () => void;
  onPricingClick?: () => void;
}

export interface HeaderWrapperProps {
  children: ReactNode;
  className?: string;
}
