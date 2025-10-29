import { MouseEvent, useMemo } from 'react';

import { LinkProps } from '../types';
import { isExternalUrl } from '../utils';
import { linkVariants } from '../variants';

export const useLink = ({
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
  target,
  rel,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
}: LinkProps) => {
  // Auto-detect external links if not explicitly set
  const isExternal = useMemo(() => external ?? isExternalUrl(href), [external, href]);

  // Prepare link class names
  const linkClassName = useMemo(
    () =>
      linkVariants({
        size,
        disabled,
        underline,
        wrap,
        className,
      }),
    [size, disabled, underline, wrap, className],
  );

  // Prepare ARIA attributes
  const ariaAttributes = useMemo(
    () => ({
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-disabled': disabled ? true : undefined,
    }),
    [ariaLabel, ariaLabelledBy, ariaDescribedBy, disabled],
  );

  // Security attributes for external links
  const externalLinkProps = useMemo(
    () =>
      isExternal
        ? {
            target: target || '_blank',
            rel: rel || 'noopener noreferrer',
          }
        : {},
    [isExternal, target, rel],
  );

  // Next.js Link specific props
  const nextLinkProps = useMemo(() => {
    const props = {
      prefetch,
      replace,
      scroll,
      shallow,
      locale,
    };

    // Filter out undefined Next.js props
    return Object.fromEntries(Object.entries(props).filter(([, value]) => value !== undefined));
  }, [prefetch, replace, scroll, shallow, locale]);

  // Handle disabled link clicks
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return {
    isExternal,
    showExternalIcon,
    linkClassName,
    ariaAttributes,
    externalLinkProps,
    nextLinkProps,
    handleClick,
  };
};
