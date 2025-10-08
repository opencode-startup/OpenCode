import React from 'react';

import { ButtonProps } from '../types';
import { variants } from '../variants';

export const useButton = ({
  variant = 'primary',
  size = 'medium',
  shape = 'square',
  loading = false,
  fullWidth = false,
  iconOnly = false,
  disabled,
  className,
  as = 'button',
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const commonProps = {
    className: variants({
      variant,
      size,
      shape,
      fullWidth,
      loading,
      iconOnly,
      disabled: isDisabled,
      className,
    }),
    ...(as === 'link' && { role: 'button' }),
    ...(loading && { 'aria-busy': true }),
    ...(isDisabled && { 'aria-disabled': true }),
    ...(isDisabled && { tabIndex: -1 }),
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  };

  const handleLinkKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    // Space or Enter should activate button-like links
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.click();
    }
  };

  return {
    isDisabled,
    commonProps,
    handleLinkClick,
    handleLinkKeyDown,
  };
};
