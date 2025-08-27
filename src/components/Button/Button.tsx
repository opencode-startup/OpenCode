'use client';

import { forwardRef } from 'react';

import { Spinner } from '@/components';

import { ButtonProps } from './types';
import { sizeConfig, variants } from './variants';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      shape = 'square',
      loading = false,
      leftIcon,
      rightIcon,
      children,
      fullWidth = false,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={variants({
          variant,
          size,
          shape,
          fullWidth,
          loading,
          className,
        })}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <Spinner size={sizeConfig[size].spinnerSize} role={'status'} aria-label="Loading" />
        )}

        {!loading && leftIcon && <span className="flex shrink-0 items-center">{leftIcon}</span>}

        {children && <span className="truncate">{children}</span>}

        {!loading && rightIcon && <span className="flex shrink-0 items-center">{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
