import React from 'react';

export type IconName = 'warning-fill' | 'arrow-right' | 'logo';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  className?: string;
}
