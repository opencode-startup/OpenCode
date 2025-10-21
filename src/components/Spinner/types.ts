import React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  className?: string;
  'data-testid'?: string;
}
