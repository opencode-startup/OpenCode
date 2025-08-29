'use client';

import NextLink from 'next/link';
import { forwardRef } from 'react';

import { LinkProps } from './types';
import { linkVariants } from './variants';

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      text,
      href,
      size = 'large',
      disabled = false,
      underline = true,
      className,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const content = children || text || 'Link';

    if (disabled) {
      return (
        <span
          ref={ref as any}
          className={linkVariants({
            size,
            disabled: true,
            underline,
            className,
          })}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          {...(props as any)}
        >
          {content}
        </span>
      );
    }

    return (
      <NextLink
        href={href}
        ref={ref}
        className={linkVariants({
          size,
          disabled: false,
          underline,
          className,
        })}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        {...props}
      >
        {content}
      </NextLink>
    );
  },
);

Link.displayName = 'Link';

export default Link;
