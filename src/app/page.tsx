'use client';

import { Icon, Input } from '@/components';

export default function Home() {
  return (
    <div className={'flex h-screen flex-1 flex-col items-center justify-center gap-6 p-8'}>
      <Input
        size={'large'}
        placeholder={'johndoe@gmail.com'}
        helper={'Enter your email address'}
        prefix={<Icon name={'warning-fill'} />}
        suffix={<Icon name={'warning-fill'} />}
        className={'w-full'}
      />
    </div>
  );
}
