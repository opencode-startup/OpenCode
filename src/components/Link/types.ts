import { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';

export type LinkSize = 'small' | 'medium' | 'large';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  children?: ReactNode;
  text?: string;
  size?: LinkSize;
  disabled?: boolean;
  underline?: boolean;
  wrap?: boolean;
  // Next.js Link compatibility
  href: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  locale?: string | false;
  // External link options
  external?: boolean;
  showExternalIcon?: boolean;
  // Accessibility enhancements
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  // Event handlers
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}
