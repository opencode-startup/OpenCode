'use client';

import NextLink from 'next/link';
import { forwardRef } from 'react';

import { Icon } from '@/components';

import { useLink } from './hooks';
import { LinkProps } from './types';

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      text,
      href,
      size = 'large',
      disabled = false,
      underline = true,
      wrap = false,
      className,
      external,
      showExternalIcon = false,
      prefetch,
      replace,
      scroll,
      shallow,
      locale,
      onClick,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const {
      isExternal,
      showExternalIcon: shouldShowIcon,
      linkClassName,
      ariaAttributes,
      externalLinkProps,
      nextLinkProps,
      handleClick,
    } = useLink({
      href,
      size,
      disabled,
      underline,
      wrap,
      className,
      external,
      showExternalIcon,
      prefetch,
      replace,
      scroll,
      shallow,
      locale,
      onClick,
      target: props.target,
      rel: props.rel,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
    });

    const content = children || text;

    // Content with optional external icon
    const linkContent = (
      <>
        {content}
        {isExternal && shouldShowIcon && (
          <Icon name="arrow-right" size={12} className="ml-1 inline-block rotate-[-45deg]" />
        )}
      </>
    );

    return (
      <NextLink
        href={href}
        ref={ref}
        className={linkClassName}
        onClick={handleClick}
        {...ariaAttributes}
        {...externalLinkProps}
        {...nextLinkProps}
        {...props}
      >
        {linkContent}
      </NextLink>
    );
  },
);

Link.displayName = 'Link';

export default Link;
