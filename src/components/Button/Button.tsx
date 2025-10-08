'use client';

import NextLink from 'next/link';
import React, { forwardRef, Ref } from 'react';

import { Spinner } from '@/components';

import { useButton } from './hooks';
import { ButtonProps } from './types';
import { sizeConfig } from './variants';

const Button = forwardRef(
  (
    {
      size = 'medium',
      loading = false,
      leftIcon,
      rightIcon,
      children,
      iconOnly = false,
      variant,
      shape,
      fullWidth,
      disabled,
      className,
      as = 'button',
      ...restProps
    }: ButtonProps,
    ref: Ref<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    const { isDisabled, commonProps, handleLinkClick, handleLinkKeyDown } = useButton({
      variant,
      size,
      shape,
      loading,
      fullWidth,
      iconOnly,
      disabled,
      className,
      as,
    } as ButtonProps);

    const renderContent = () => (
      <>
        {loading && (
          <Spinner size={sizeConfig[size].spinnerSize} role="status" aria-label="Loading" />
        )}

        {!loading && !iconOnly && leftIcon && (
          <span className="flex shrink-0 items-center">{leftIcon}</span>
        )}

        {iconOnly
          ? !loading && children && <span className="flex shrink-0 items-center">{children}</span>
          : children && <span className="truncate">{children}</span>}

        {!loading && !iconOnly && rightIcon && (
          <span className="flex shrink-0 items-center">{rightIcon}</span>
        )}
      </>
    );

    if (as === 'link') {
      const { href, ...linkProps } = restProps as any;

      return (
        <NextLink
          ref={ref as any}
          {...commonProps}
          href={href}
          onClick={handleLinkClick}
          onKeyDown={handleLinkKeyDown}
          {...linkProps}
        >
          {renderContent()}
        </NextLink>
      );
    }

    const { type = 'button', ...buttonProps } = restProps as any;

    return (
      <button ref={ref as any} {...commonProps} type={type} disabled={isDisabled} {...buttonProps}>
        {renderContent()}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
