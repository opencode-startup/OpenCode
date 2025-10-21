import { LinkProps as NextLinkProps } from 'next/link';
import { HTMLAttributes } from 'react';
import { VariantProps } from 'tailwind-variants';

import { logoVariants } from './variants';

export type LogoSize = 'small' | 'medium' | 'large';
export type LogoAs = 'div' | 'link';

// Base props shared between both div and link variants
interface BaseLogoProps extends VariantProps<typeof logoVariants> {
  as?: LogoAs;
  className?: string;
  text?: string;
  animated?: boolean;
  'data-testid'?: string;
}

// Div variant props (default)
interface DivLogoProps extends BaseLogoProps, Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
  as?: 'div';
}

// Link variant props using Next.js Link
interface LinkLogoProps extends BaseLogoProps, Omit<NextLinkProps, 'size'> {
  as: 'link';
  href: string;
}

export type LogoProps = DivLogoProps | LinkLogoProps;
