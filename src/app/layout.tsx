import './globals.css';

import { Geist } from 'next/font/google';
import { ReactNode } from 'react';
export { DEFAULT_PAGE_META as metadata } from '@/lib';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={geistSans.className}>
      <body>{children}</body>
    </html>
  );
}
