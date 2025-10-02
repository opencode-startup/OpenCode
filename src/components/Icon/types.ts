import React from 'react';

export type IconName =
  | 'warning-fill'
  | 'arrow-right'
  | 'logo'
  | 'chevron-down'
  | 'cross'
  | 'face-smile'
  | 'face-happy'
  | 'face-unhappy'
  | 'face-sad'
  | 'check-circle-fill'
  | 'menu'
  | 'chart-trending-up'
  | 'user'
  | 'settings-gear'
  | 'logout';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  className?: string;
}
