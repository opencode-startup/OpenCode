import { HTMLAttributes, ReactNode, RefObject } from 'react';

export type SwitchSize = 'small' | 'medium' | 'large';

export interface SwitchOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface SwitchProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: SwitchOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: SwitchSize;
  disabled?: boolean;
  // Accessibility enhancements
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  // Testing support
  'data-testid'?: string;
}

export interface UseSwitchProps {
  options: SwitchOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  baseId?: string;
}

export interface UseSwitchAnimationProps {
  options: SwitchOption[];
  currentValue: string;
  containerRef: RefObject<HTMLDivElement | null>;
}

export interface BackgroundStyle {
  left: number;
  width: number;
}
