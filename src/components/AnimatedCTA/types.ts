import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { IconName } from '@/components/Icon/types';

export type AnimatedCTASize = 'small' | 'medium' | 'large';
export type AnimatedCTAAs = 'button' | 'link';

// Base props shared between both button and link variants
interface BaseAnimatedCTAProps {
  size?: AnimatedCTASize;
  text: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  fullWidth?: boolean;
  as?: AnimatedCTAAs;
}

// Button variant props
interface ButtonAnimatedCTAProps
  extends BaseAnimatedCTAProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  as?: 'button';
}

// Link variant props
interface LinkAnimatedCTAProps
  extends BaseAnimatedCTAProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'size'> {
  as: 'link';
  href: string;
}

export type AnimatedCTAProps = ButtonAnimatedCTAProps | LinkAnimatedCTAProps;
