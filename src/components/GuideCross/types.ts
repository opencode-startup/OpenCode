import { HTMLAttributes } from 'react';

export type GuideCrossSize = 'small' | 'medium';
export type GuideCrossThickness = 'thin' | 'normal';

export interface GuideCrossProps extends HTMLAttributes<HTMLDivElement> {
  size?: GuideCrossSize;
  thickness?: GuideCrossThickness;
}
