'use client';

import { Input } from '@/components';

export default function Home() {
  return (
    <div className={'flex h-screen flex-1 flex-col items-center justify-center gap-6 p-8'}>
      <Input loading disabled size={'large'} placeholder={'Loading...'} />
    </div>
  );
}
