'use client';

import { Link, Logo } from '@/components';

import FooterColumn from './FooterColumn';

const GlobalFooter = () => {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="bg-background-100 border-t border-gray-400">
      <div
        className="mx-auto box-border flex max-w-[var(--global-content-max-width)] flex-col items-center justify-center
          gap-9 p-4"
      >
        <div className="flex w-full items-start justify-between">
          <div className="flex w-full grow flex-wrap items-start gap-6 lg:gap-2.5">
            <FooterColumn title="Company">
              <Link href="/about" size="small" underline={false}>
                About Us
              </Link>
              <Link href="/contact" size="small" underline={false}>
                Contact
              </Link>
            </FooterColumn>

            <FooterColumn title="Product">
              <Link href="/pricing" size="small" underline={false}>
                Pricing
              </Link>
            </FooterColumn>

            <FooterColumn title="Legal">
              <Link href="/terms" size="small" underline={false}>
                Terms of Use
              </Link>
              <Link href="/privacy" size="small" underline={false}>
                Privacy Policy
              </Link>
            </FooterColumn>
          </div>

          <div className="flex h-8 w-8 shrink-0 items-center gap-2.5 overflow-hidden">
            <Logo size="small" as="link" href="/" />
          </div>
        </div>

        <div className="h-[0.5px] w-full shrink-0 bg-gray-400" />

        <div className="flex w-full shrink-0 items-baseline justify-between">
          <p className="typo-label-14 text-center text-nowrap text-gray-600">
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
