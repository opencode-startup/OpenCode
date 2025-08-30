'use client';

import {
  AnimatedCTA,
  Button,
  GuideCross,
  Icon,
  Input,
  Link,
  Logo,
  Spinner,
  Switch,
  Tabs,
  Toggle,
} from '@/components';

export default function Home() {
  return (
    <div className={'flex min-h-screen flex-1 flex-col items-center justify-center gap-8 p-8'}>
      <div className="flex flex-col items-center gap-6">
        <h1 className="mb-4 text-2xl font-bold">All Components Showcase</h1>

        {/* AnimatedCTA */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">AnimatedCTA</h2>
          <AnimatedCTA
            text="Get Started"
            rightIcon={'arrow-right'}
            as={'link'}
            target={'_blank'}
            href={'https://www.google.com'}
          />
        </div>

        {/* Button */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Button</h2>
          <Button onClick={() => alert('123')}>Click Me</Button>
        </div>

        {/* GuideCross */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">GuideCross</h2>
          <div className="relative h-32 w-32 border-[0.5px] border-gray-300">
            <GuideCross size="small" position="top-left" />
          </div>
        </div>

        {/* Icon */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Icon</h2>
          <Icon name="logo" size={24} />
        </div>

        {/* Input */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Input</h2>
          <Input placeholder="Enter text here" />
        </div>

        {/* Link */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Link</h2>
          <Link target={'_blank'} href={'https://www.google.com'}>
            Sample Link
          </Link>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Logo</h2>
          <Logo />
        </div>

        {/* Spinner */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Spinner</h2>
          <Spinner />
        </div>

        {/* Switch */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Switch</h2>
          <Switch
            onChange={() => alert('123')}
            options={[
              {
                value: 'option1',
                label: 'Option 1',
              },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
              { value: 'option4', label: 'Option 4' },
            ]}
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Tabs</h2>
          <Tabs
            tabs={[
              { label: 'Tab 1', value: 'tab1' },
              { label: 'Tab 2', value: 'tab2' },
            ]}
          />
        </div>

        {/* Toggle */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Toggle</h2>
          <Toggle />
        </div>
      </div>
    </div>
  );
}
