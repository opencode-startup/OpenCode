import { AnchorHTMLAttributes, ReactNode } from 'react';

export type LinkSize = 'small' | 'medium' | 'large';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  children?: ReactNode;
  text?: string;
  size?: LinkSize;
  disabled?: boolean;
  underline?: boolean;
  // Next.js Link compatibility
  href: string;
  // Accessibility enhancements
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}
