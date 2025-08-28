'use client';

import { useState } from 'react';

import { Switch, Tabs, Toggle } from '@/components';

export default function Home() {
  const [switchValue, setSwitchValue] = useState('option3');
  const [tabValue, setTabValue] = useState('tab1');
  const [toggleValue, setToggleValue] = useState(false);

  const switchOptions = [
    { value: 'option1', label: 'Option 1', disabled: true },
    { value: 'option2', label: 'Option 22' },
    { value: 'option3', label: 'Option 23', disabled: true },
    { value: 'option24', label: 'Option 24' },
    { value: 'option22', label: 'Option 25' },
  ];

  const tabOptions = [
    { value: 'tab1', label: 'Dashboard' },
    { value: 'tab2', label: 'Analytics' },
    { value: 'tab3', label: 'Reports', disabled: true },
    { value: 'tab4', label: 'Settings' },
    { value: 'tab5', label: 'Profile' },
  ];

  return (
    <div className={'flex h-screen flex-1 flex-col items-center justify-center gap-12 p-8'}>
      <div className="flex w-full max-w-2xl flex-col items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">Tabs Component</h2>
        <Tabs
          tabs={tabOptions}
          value={tabValue}
          onChange={setTabValue}
          size="medium"
          aria-label="Navigation tabs example"
        />
      </div>

      <div className="flex w-full max-w-2xl flex-col items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">Switch Component</h2>
        <Switch
          options={switchOptions}
          value={switchValue}
          onChange={setSwitchValue}
          size="small"
          aria-label="Small switch example"
        />
      </div>

      <div className="flex w-full max-w-2xl flex-col items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">Toggle Component</h2>
        <div className="flex items-center gap-4">
          <Toggle
            checked={toggleValue}
            onChange={setToggleValue}
            size="small"
            aria-label="Small toggle example"
          />
          <Toggle
            checked={toggleValue}
            onChange={setToggleValue}
            size="medium"
            aria-label="Medium toggle example"
          />
          <Toggle
            checked={toggleValue}
            onChange={setToggleValue}
            size="large"
            aria-label="Large toggle example"
          />
        </div>
      </div>
    </div>
  );
}
