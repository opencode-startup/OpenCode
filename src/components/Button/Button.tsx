'use client';

import NextLink from 'next/link';
import React, { forwardRef, Ref } from 'react';

import { Spinner } from '@/components';

import { ButtonProps } from './types';
import { sizeConfig, variants } from './variants';

const Button = forwardRef(
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
      iconOnly = false,
      disabled,
      className,
      as = 'button',
      ...props
    }: ButtonProps,
    ref: Ref<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    const isDisabled = disabled || loading;

    const commonProps = {
      ref: ref as any,
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
      'aria-busy': loading,
      'aria-disabled': isDisabled,
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isDisabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    };

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
      const { href, ...linkProps } = props as any;

      return (
        <NextLink {...commonProps} href={href} onClick={handleLinkClick} {...linkProps}>
          {renderContent()}
        </NextLink>
      );
    }

    return (
      <button {...commonProps} type="button" disabled={isDisabled} {...(props as any)}>
        {renderContent()}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
