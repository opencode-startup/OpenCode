import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning' | 'success';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonShape = 'square' | 'rounded';

export type ButtonAs = 'button' | 'link';

// Base props shared between both button and link variants
interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  fullWidth?: boolean;
  iconOnly?: boolean;
  disabled?: boolean;
  as?: ButtonAs;
  'data-testid'?: string;
}

// Button variant props
interface ButtonElementProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  as?: 'button';
  href?: never;
}

// Link variant props
interface ButtonLinkProps
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  as: 'link';
  href: string;
}

export type ButtonProps = ButtonElementProps | ButtonLinkProps;
