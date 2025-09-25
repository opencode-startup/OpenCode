import { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  label?: string;
  helper?: ReactNode;
  error?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: InputSize;
  prefixHasStyling?: boolean;
  suffixHasStyling?: boolean;
  // Multiline support
  multiline?: boolean;
  rows?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  // Accessibility enhancements
  loading?: boolean;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export interface LabelProps {
  htmlFor?: string;
  size?: InputSize;
  error?: boolean;
  children?: ReactNode;
  className?: string;
}

export interface PrefixProps {
  children?: ReactNode;
  size?: InputSize;
  disabled?: boolean;
  hasStyling?: boolean;
  className?: string;
}

export interface SuffixProps {
  children?: ReactNode;
  size?: InputSize;
  disabled?: boolean;
  hasStyling?: boolean;
  className?: string;
}

export interface HelperProps {
  id?: string;
  children?: ReactNode;
  error?: ReactNode;
  size?: InputSize;
  className?: string;
}
