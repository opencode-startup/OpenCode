'use client';

import { Button } from '@/components';
import { closeToast, openToast } from '@/lib';

export default function Home() {
  return (
    <div className={'flex min-h-screen flex-1 flex-col items-center gap-8 p-8'}>
      <Button
        onClick={() => {
          openToast(
            {
              type: 'default',
              className: 'w-[500px]',
              withCloseButton: false,
              message:
                'We use cookies and similar technologies to analyze traffic, improve user experience, and measure the effectiveness of our content. You can accept all or manage your preferences.',
              actions: [
                {
                  label: 'Deny',
                  variant: 'secondary',
                  onClick: () => console.log('Action clicked'),
                },
                {
                  label: 'Accept All',
                  variant: 'secondary',
                  dismiss: false,
                  onClick: (event, id) => {
                    console.log(event);
                    setTimeout(() => {
                      closeToast(id);
                    }, 3000);
                  },
                },
                {
                  label: 'Customize Settings',
                  onClick: () => console.log('Action clicked'),
                },
              ],
            },
            {
              position: 'bottom-left',
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
