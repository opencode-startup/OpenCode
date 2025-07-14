import React from 'react';

export type IconName = 'warning-fill' | 'arrow-right';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  className?: string;
}
