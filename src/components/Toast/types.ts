import { HTMLAttributes, ReactNode } from 'react';

export type ToastType = 'default' | 'success' | 'warning' | 'error';

export type ToastActions = 'none' | 'two' | 'three';

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'type' | 'id'> {
  id?: string | number;
  message?: string;
  type?: ToastType;
  withCloseButton?: boolean;
  actions?: ToastActions;
  onClose?: () => void;
  children?: ReactNode;
}
