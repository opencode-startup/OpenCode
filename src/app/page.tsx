'use client';

import { Button, Feedback, Input } from '@/components';

export default function Home() {
  return (
    <div className={'flex min-h-screen flex-1 flex-col items-center gap-8 p-8'}>
      <Feedback />
      <Input multiline />
      <Button>Click</Button>
    </div>
  );
}
