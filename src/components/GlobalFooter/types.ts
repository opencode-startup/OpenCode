import { ReactNode } from 'react';

export interface GlobalFooterProps {
  // Testing support
  'data-testid'?: string;
  baseId?: string;
}

export interface FooterColumnProps {
  title: string;
  children: ReactNode;
  id?: string;
  'data-testid'?: string;
}
