'use client';

import { useId } from 'react';

import { Link, Logo } from '@/components';

import FooterColumn from './FooterColumn';
import { GlobalFooterProps } from './types';

const GlobalFooter = ({ 'data-testid': dataTestId, baseId }: GlobalFooterProps = {}) => {
  const generatedId = useId();
  const footerId = baseId || generatedId;
  const fullYear = new Date().getFullYear();

  return (
    <footer
      className="bg-background-100 border-t border-gray-400"
      aria-label="Site footer"
      data-testid={dataTestId}
    >
      <div
        className="mx-auto box-border flex max-w-[var(--global-content-max-width)] flex-col items-center justify-center
          gap-9 p-4"
      >
        <div className="flex w-full items-start justify-between">
          <div className="flex w-full grow flex-wrap items-start gap-6 lg:gap-2.5">
            <FooterColumn
              title="Company"
              id={`${footerId}-company`}
              data-testid={`${footerId}-company-column`}
            >
              <Link
                href="/about"
                size="small"
                underline={false}
                data-testid={`${footerId}-about-link`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                size="small"
                underline={false}
                data-testid={`${footerId}-contact-link`}
              >
                Contact
              </Link>
            </FooterColumn>

            <FooterColumn
              title="Product"
              id={`${footerId}-product`}
              data-testid={`${footerId}-product-column`}
            >
              <Link
                href="/pricing"
                size="small"
                underline={false}
                data-testid={`${footerId}-pricing-link`}
              >
                Pricing
              </Link>
            </FooterColumn>

            <FooterColumn
              title="Legal"
              id={`${footerId}-legal`}
              data-testid={`${footerId}-legal-column`}
            >
              <Link
                href="/terms"
                size="small"
                underline={false}
                data-testid={`${footerId}-terms-link`}
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                size="small"
                underline={false}
                data-testid={`${footerId}-privacy-link`}
              >
                Privacy Policy
              </Link>
            </FooterColumn>
          </div>

          <div className="flex h-8 w-8 shrink-0 items-center gap-2.5 overflow-hidden">
            <Logo size="small" as="link" href="/" data-testid={`${footerId}-logo`} />
          </div>
        </div>

        <div className="h-[0.5px] w-full shrink-0 bg-gray-400" />

        <div className="flex w-full shrink-0 items-baseline justify-between">
          <p
            className="typo-label-14 text-center text-nowrap text-gray-600"
            data-testid={`${footerId}-copyright`}
          >
            © {fullYear} OpenCode. All rights reserved.
          </p>
          <div className="shrink-0"></div>
        </div>
      </div>
    </footer>
  );
};

GlobalFooter.displayName = 'GlobalFooter';

export default GlobalFooter;
