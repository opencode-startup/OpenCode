import { HTMLAttributes, ReactNode, RefObject } from 'react';

export type TabsSize = 'small' | 'medium' | 'large';

export interface TabOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: TabsSize;
  disabled?: boolean;
  // Accessibility enhancements
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  // Testing support
  'data-testid'?: string;
  baseId?: string;
}

export interface UseTabsProps {
  tabs: TabOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export interface UseTabsAnimationProps {
  tabs: TabOption[];
  currentValue: string;
  containerRef: RefObject<HTMLDivElement | null>;
}

export interface TabIndicatorStyle {
  left: number;
  width: number;
}
