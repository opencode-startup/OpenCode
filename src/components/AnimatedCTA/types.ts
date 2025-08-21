import { ButtonHTMLAttributes, ReactNode } from 'react';

import { IconName } from '@/components/Icon/types';

export type AnimatedCTASize = 'small' | 'medium' | 'large';

export interface AnimatedCTAProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  size?: AnimatedCTASize;
  children?: ReactNode;
  leftIcon?: IconName;
  rightIcon?: IconName;
}
