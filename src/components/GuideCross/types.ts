import { HTMLAttributes } from 'react';

export type GuideCrossSize = 'small' | 'medium';
export type GuideCrossThickness = 'thin' | 'normal';
export type GuideCrossPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface GuideCrossProps extends HTMLAttributes<HTMLDivElement> {
  size?: GuideCrossSize;
  thickness?: GuideCrossThickness;
  position?: GuideCrossPosition;
}
