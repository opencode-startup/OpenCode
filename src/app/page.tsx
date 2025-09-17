'use client';

import { Button } from '@/components';
import { useToast } from '@/components/Toast/hooks';

export default function Home() {
  const { openToast } = useToast();

  return (
    <div className={'flex min-h-screen flex-1 flex-col items-center gap-8 p-8'}>
      <Button
        onClick={() => {
          openToast(
            {
              type: 'warning',
              message: 'This is a toast',
            },
            {
              duration: Infinity,
            },
          );
        }}
        shape={'rounded'}
        size={'small'}
      >
        Open Toast
      </Button>
    </div>
  );
}
