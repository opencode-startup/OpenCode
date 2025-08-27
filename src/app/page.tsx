'use client';

import { useState } from 'react';

import { Switch } from '@/components';

export default function Home() {
  const [switchValue, setSwitchValue] = useState('option1');

  const switchOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  return (
    <div className={'flex h-screen flex-1 flex-col items-center justify-center gap-6 p-8'}>
      <Switch
        options={switchOptions}
        value={switchValue}
        onChange={setSwitchValue}
        size="small"
        aria-label="Small switch example"
      />
    </div>
  );
}
