import { ReactNode } from 'react';

export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  size?: SelectSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  className?: string;
  onValueChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
  id?: string;
  name?: string;
  // Accessibility props
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
}
