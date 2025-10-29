import { HTMLAttributes, MouseEvent, ReactNode } from 'react';

import { ButtonProps } from '@/components/Button/types';

export type ToastType = 'default' | 'success' | 'warning' | 'error';

export interface ToastActionProps extends Omit<ButtonProps, 'onClick'> {
  label: string;
  dismiss?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>, id?: string | number) => void;
}

export interface ToastProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'type' | 'id' | 'children'> {
  id?: string | number;
  message?: ReactNode;
  type?: ToastType;
  withCloseButton?: boolean;
  actions?: ToastActionProps[];
  onClose?: () => void;
  // Testing support
  'data-testid'?: string;
  baseId?: string;
}
