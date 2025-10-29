import { HTMLAttributes, ReactNode } from 'react';

import { ButtonProps } from '@/components/Button/types';

export type ModalPlacement = 'center' | 'top' | 'bottom';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  placement?: ModalPlacement;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  leftActions?: ButtonProps[];
  centerActions?: ButtonProps[];
  rightActions?: ButtonProps[];
  showActions?: boolean;
  className?: string;
  backdropClassName?: string;
  preventBodyScroll?: boolean;
  // Testing support
  'data-testid'?: string;
  baseId?: string;
}

export interface UseModalProps {
  isOpen: boolean;
  onClose?: () => void;
  closeOnEscape?: boolean;
  closeOnBackdropClick?: boolean;
}

export interface UseModalReturn {
  backdropRef: React.RefObject<HTMLDivElement | null>;
  handleBackdropClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export interface UseModalAnimationProps {
  isOpen: boolean;
}
