'use client';

import { forwardRef } from 'react';

import { ButtonProps } from './types';
import { variants } from './variants';

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
          <div
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            role="status"
            aria-label="Loading"
          />
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
