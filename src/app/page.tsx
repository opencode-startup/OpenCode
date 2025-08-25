'use client';

import { Logo } from '@/components';

export default function Home() {
  return (
    <div className={'flex h-screen flex-1 flex-col items-center justify-center gap-6 p-8'}>
      <Logo href={'/'} size={'large'} text={'OpenCode'} />
    </div>
  );
}
