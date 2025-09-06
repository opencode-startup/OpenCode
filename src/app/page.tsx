'use client';

import { Select } from '@/components';

export default function Home() {
  return (
    <div className={'flex min-h-screen flex-1 flex-col items-center justify-center gap-8 p-8'}>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Select</h2>
          <Select
            size={'large'}
            placeholder="Select your choice..."
            options={[
              // { value: 'option1', label: 'Option 1', leftIcon: <Icon name={'warning-fill'} /> },
              // { value: 'option2', label: 'Option 2' },
              // { value: 'option3', label: 'Option 3' },
              [{ value: 'option4', label: 'Option 4' }],
              // [
              //   {
              //     value: 'option5',
              //     label: 'Option 5',
              //   },
              // ],
              [
                {
                  value: 'option6',
                  label: 'Option 6',
                },
                {
                  value: 'option7',
                  label: 'Option 7',
                },
              ],
            ]}
            onValueChange={(value: any) => console.log('Selected:', value)}
          />
        </div>
      </div>
    </div>
  );
}
