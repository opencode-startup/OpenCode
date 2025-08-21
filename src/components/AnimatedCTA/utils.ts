import { IconName } from '@/components/Icon/types';

export type IconLayout = 'none' | 'left' | 'right' | 'both';

/**
 * Determines the icon layout based on the presence of left and right icons
 */
export function getIconLayout(leftIcon?: IconName, rightIcon?: IconName): IconLayout {
  if (leftIcon && rightIcon) {
    return 'both';
  }

  if (leftIcon) {
    return 'left';
  }

  if (rightIcon) {
    return 'right';
  }

  return 'none';
}
