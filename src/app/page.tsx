'use client';

import { useState } from 'react';

import { Switch } from '@/components';

export default function Home() {
  const [switchValue, setSwitchValue] = useState('option3');

  const switchOptions = [
    { value: 'option1', label: 'Option 1', disabled: true },
    { value: 'option2', label: 'Option 22' },
    { value: 'option3', label: 'Option 23', disabled: true },
    { value: 'option24', label: 'Option 24' },
    { value: 'option22', label: 'Option 25' },
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
