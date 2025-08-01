import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  label?: string;
  helper?: ReactNode;
  error?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: 'small' | 'medium' | 'large';
}
