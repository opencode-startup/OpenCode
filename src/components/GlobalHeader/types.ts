import { HTMLAttributes } from 'react';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  onSignUpClick?: () => void;
  onLogInClick?: () => void;
  onContactClick?: () => void;
  onPricingClick?: () => void;
  className?: string;
}
