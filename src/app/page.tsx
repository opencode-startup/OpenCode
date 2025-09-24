'use client';

import { Feedback } from '@/components';

export default function Home() {
  return (
    <div className={'flex min-h-screen flex-1 flex-col items-center justify-center gap-8 p-8'}>
      <Feedback />
    </div>
  );
}
