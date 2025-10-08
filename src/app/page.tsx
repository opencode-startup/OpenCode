'use client';

import { useState } from 'react';
import { toast } from 'sonner';

import {
  AnimatedCTA,
  Button,
  Feedback,
  GuideCross,
  Icon,
  Input,
  Link,
  Logo,
  Modal,
  Select,
  Spinner,
  Switch,
  Tabs,
  Toast,
  Toggle,
} from '@/components';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [switchValue, setSwitchValue] = useState('option1');
  const [tabValue, setTabValue] = useState('tab1');
  const [selectValue, setSelectValue] = useState('');

  return (
    <div className="flex min-h-screen flex-1 flex-col gap-16 p-8">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl">
        <h1 className="typo-heading-48 mb-4">OpenCode Component Library</h1>
        <p className="typo-copy-18 text-gray-700">
          A comprehensive showcase of all available components with their various states and
          variants.
        </p>
      </section>

      {/* Button Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Button Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Interactive button component with multiple variants, sizes, and states. Supports icons,
          loading states, and full-width layouts.
        </p>

        <div className="flex flex-col gap-6">
          {/* Variants */}
          <div>
            <h3 className="typo-heading-20 mb-4">Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="success">Success</Button>
              <Button variant="error">Error</Button>
              <Button variant="warning">Warning</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
          </div>

          {/* Shapes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Shapes</h3>
            <div className="flex flex-wrap gap-3">
              <Button shape="square">Square</Button>
              <Button shape="rounded">Rounded</Button>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h3 className="typo-heading-20 mb-4">With Icons</h3>
            <div className="flex flex-wrap gap-3">
              <Button leftIcon={<Icon name="arrow-right" />}>Left Icon</Button>
              <Button rightIcon={<Icon name="arrow-right" />}>Right Icon</Button>
              <Button iconOnly>
                <Icon name="cross" />
              </Button>
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="typo-heading-20 mb-4">States</h3>
            <div className="flex flex-wrap gap-3">
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button fullWidth>Full Width</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Input Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Input Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Form input component with label, helper text, error states, and support for prefix/suffix
          content. Includes multiline textarea variant.
        </p>

        <div className="flex flex-col gap-6">
          {/* Basic Inputs */}
          <div>
            <h3 className="typo-heading-20 mb-4">Basic Inputs</h3>
            <div className="flex flex-col gap-4">
              <Input label="Email" placeholder="Enter your email" />
              <Input label="Password" type="password" placeholder="Enter password" />
              <Input label="Required Field" required placeholder="This field is required" />
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-col gap-4">
              <Input label="Small" size="small" placeholder="Small input" />
              <Input label="Medium" size="medium" placeholder="Medium input" />
              <Input label="Large" size="large" placeholder="Large input" />
            </div>
          </div>

          {/* With Helper Text */}
          <div>
            <h3 className="typo-heading-20 mb-4">With Helper Text</h3>
            <Input label="Username" helper="Choose a unique username" placeholder="username" />
          </div>

          {/* Error State */}
          <div>
            <h3 className="typo-heading-20 mb-4">Error State</h3>
            <Input label="Email" error="Please enter a valid email address" placeholder="email" />
          </div>

          {/* With Prefix/Suffix */}
          <div>
            <h3 className="typo-heading-20 mb-4">With Prefix/Suffix</h3>
            <div className="flex flex-col gap-4">
              <Input label="Price" prefix="$" suffix="USD" placeholder="0.00" />
              <Input
                label="Website"
                prefix="https://"
                suffix={<Icon name="arrow-right" />}
                placeholder="example.com"
              />
            </div>
          </div>

          {/* Loading State */}
          <div>
            <h3 className="typo-heading-20 mb-4">Loading State</h3>
            <Input label="Search" loading placeholder="Searching..." />
          </div>

          {/* Multiline */}
          <div>
            <h3 className="typo-heading-20 mb-4">Multiline (Textarea)</h3>
            <Input
              label="Description"
              multiline
              rows={6}
              placeholder="Enter a detailed description..."
            />
          </div>

          {/* Disabled */}
          <div>
            <h3 className="typo-heading-20 mb-4">Disabled State</h3>
            <Input label="Disabled Input" disabled placeholder="Cannot edit" />
          </div>
        </div>
      </section>

      {/* Select Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Select Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Dropdown select component with search, grouping, and custom icons. Supports different
          sizes and full-width layouts.
        </p>

        <div className="flex flex-col gap-6">
          {/* Basic Select */}
          <div>
            <h3 className="typo-heading-20 mb-4">Basic Select</h3>
            <Select
              placeholder="Choose an option"
              value={selectValue}
              onValueChange={setSelectValue}
              options={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ]}
            />
          </div>

          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-col gap-4">
              <Select
                size="small"
                placeholder="Small"
                options={[
                  { label: 'Small 1', value: 's1' },
                  { label: 'Small 2', value: 's2' },
                ]}
              />
              <Select
                size="medium"
                placeholder="Medium"
                options={[
                  { label: 'Medium 1', value: 'm1' },
                  { label: 'Medium 2', value: 'm2' },
                ]}
              />
              <Select
                size="large"
                placeholder="Large"
                options={[
                  { label: 'Large 1', value: 'l1' },
                  { label: 'Large 2', value: 'l2' },
                ]}
              />
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h3 className="typo-heading-20 mb-4">With Icons</h3>
            <Select
              placeholder="With left icon"
              leftIcon={<Icon name="settings-gear" />}
              options={[
                { label: 'Settings 1', value: 'set1' },
                { label: 'Settings 2', value: 'set2' },
              ]}
            />
          </div>

          {/* States */}
          <div>
            <h3 className="typo-heading-20 mb-4">States</h3>
            <div className="flex flex-col gap-4">
              <Select
                loading
                placeholder="Loading..."
                options={[{ label: 'Option', value: 'opt' }]}
              />
              <Select
                disabled
                placeholder="Disabled"
                options={[{ label: 'Option', value: 'opt' }]}
              />
              <Select
                fullWidth
                placeholder="Full Width"
                options={[{ label: 'Option', value: 'opt' }]}
              />
            </div>
          </div>

          {/* Grouped Options */}
          <div>
            <h3 className="typo-heading-20 mb-4">Grouped Options</h3>
            <Select
              placeholder="Select with groups"
              options={[
                [
                  { label: 'Group 1 - Option 1', value: 'g1o1' },
                  { label: 'Group 1 - Option 2', value: 'g1o2' },
                ],
                [
                  { label: 'Group 2 - Option 1', value: 'g2o1' },
                  { label: 'Group 2 - Option 2', value: 'g2o2' },
                ],
              ]}
            />
          </div>
        </div>
      </section>

      {/* Tabs Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Tabs Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Tab navigation component with animated indicator. Supports keyboard navigation and
          disabled states.
        </p>

        <div className="flex flex-col gap-6">
          {/* Basic Tabs */}
          <div>
            <h3 className="typo-heading-20 mb-4">Basic Tabs</h3>
            <Tabs
              value={tabValue}
              onChange={setTabValue}
              tabs={[
                { label: 'Tab 1', value: 'tab1' },
                { label: 'Tab 2', value: 'tab2' },
                { label: 'Tab 3', value: 'tab3' },
              ]}
            />
          </div>

          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-col gap-4">
              <Tabs
                size="small"
                tabs={[
                  { label: 'Small 1', value: 's1' },
                  { label: 'Small 2', value: 's2' },
                ]}
              />
              <Tabs
                size="medium"
                tabs={[
                  { label: 'Medium 1', value: 'm1' },
                  { label: 'Medium 2', value: 'm2' },
                ]}
              />
              <Tabs
                size="large"
                tabs={[
                  { label: 'Large 1', value: 'l1' },
                  { label: 'Large 2', value: 'l2' },
                ]}
              />
            </div>
          </div>

          {/* With Disabled Tab */}
          <div>
            <h3 className="typo-heading-20 mb-4">With Disabled Tab</h3>
            <Tabs
              tabs={[
                { label: 'Enabled', value: 'en1' },
                { label: 'Disabled', value: 'dis', disabled: true },
                { label: 'Enabled', value: 'en2' },
              ]}
            />
          </div>

          {/* Fully Disabled */}
          <div>
            <h3 className="typo-heading-20 mb-4">Fully Disabled</h3>
            <Tabs
              disabled
              tabs={[
                { label: 'Tab 1', value: 't1' },
                { label: 'Tab 2', value: 't2' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Switch Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Switch Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Multi-option switch component with animated selection indicator. Functions as a radio
          group for mutually exclusive options.
        </p>

        <div className="flex flex-col gap-6">
          {/* Basic Switch */}
          <div>
            <h3 className="typo-heading-20 mb-4">Basic Switch</h3>
            <Switch
              value={switchValue}
              onChange={setSwitchValue}
              options={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ]}
            />
          </div>

          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-col gap-4">
              <Switch
                size="small"
                options={[
                  { label: 'Small 1', value: 's1' },
                  { label: 'Small 2', value: 's2' },
                ]}
              />
              <Switch
                size="medium"
                options={[
                  { label: 'Medium 1', value: 'm1' },
                  { label: 'Medium 2', value: 'm2' },
                ]}
              />
              <Switch
                size="large"
                options={[
                  { label: 'Large 1', value: 'l1' },
                  { label: 'Large 2', value: 'l2' },
                ]}
              />
            </div>
          </div>

          {/* With Disabled Option */}
          <div>
            <h3 className="typo-heading-20 mb-4">With Disabled Option</h3>
            <Switch
              options={[
                { label: 'Enabled', value: 'en1' },
                { label: 'Disabled', value: 'dis', disabled: true },
                { label: 'Enabled', value: 'en2' },
              ]}
            />
          </div>

          {/* Fully Disabled */}
          <div>
            <h3 className="typo-heading-20 mb-4">Fully Disabled</h3>
            <Switch
              disabled
              options={[
                { label: 'Option 1', value: 'o1' },
                { label: 'Option 2', value: 'o2' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Toggle Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Toggle Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Boolean toggle switch component for on/off states. Implements ARIA switch pattern for
          accessibility.
        </p>

        <div className="flex flex-col gap-6">
          {/* Basic Toggle */}
          <div>
            <h3 className="typo-heading-20 mb-4">Basic Toggle</h3>
            <div className="flex items-center gap-3">
              <Toggle checked={toggleChecked} onChange={setToggleChecked} />
              <span className="typo-copy-16">Toggle is {toggleChecked ? 'On' : 'Off'}</span>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Toggle size="small" />
                <span className="typo-copy-14">Small</span>
              </div>
              <div className="flex items-center gap-2">
                <Toggle size="medium" />
                <span className="typo-copy-14">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <Toggle size="large" />
                <span className="typo-copy-14">Large</span>
              </div>
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="typo-heading-20 mb-4">States</h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Toggle checked={false} />
                <span className="typo-copy-14">Unchecked</span>
              </div>
              <div className="flex items-center gap-2">
                <Toggle checked={true} />
                <span className="typo-copy-14">Checked</span>
              </div>
              <div className="flex items-center gap-2">
                <Toggle disabled />
                <span className="typo-copy-14">Disabled</span>
              </div>
              <div className="flex items-center gap-2">
                <Toggle checked disabled />
                <span className="typo-copy-14">Checked & Disabled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Modal Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Dialog overlay component with customizable actions, placement, and animations. Manages
          focus trap and body scroll.
        </p>

        <div className="flex flex-col gap-6">
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Modal Title"
            subtitle="This is a modal subtitle providing additional context"
            showActions
            rightActions={[
              {
                children: 'Cancel',
                variant: 'secondary',
                onClick: () => setModalOpen(false),
              },
              {
                children: 'Confirm',
                variant: 'primary',
                onClick: () => {
                  setModalOpen(false);
                  toast.custom(() => <Toast message="Action confirmed!" type="success" />);
                },
              },
            ]}
          >
            <p className="typo-copy-16 mb-4">
              This is the modal content. You can place any content here including forms, text, or
              other components.
            </p>
            <p className="typo-copy-16">
              The modal supports keyboard navigation (ESC to close) and backdrop clicks.
            </p>
          </Modal>

          <div>
            <h3 className="typo-heading-20 mb-4">Placement Options</h3>
            <p className="typo-copy-14 text-gray-700">
              Modals can be positioned at: center (default), top, bottom, left, right
            </p>
          </div>
        </div>
      </section>

      {/* Toast Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Toast Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Notification toast component with different types and optional actions. Automatically
          dismissible with customizable duration.
        </p>

        <div className="flex flex-col gap-6">
          {/* Toast Types */}
          <div>
            <h3 className="typo-heading-20 mb-4">Toast Types</h3>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="secondary"
                onClick={() =>
                  toast.custom(() => <Toast message="Default notification" type="default" />)
                }
              >
                Show Default
              </Button>
              <Button
                variant="success"
                onClick={() =>
                  toast.custom(() => <Toast message="Success notification!" type="success" />)
                }
              >
                Show Success
              </Button>
              <Button
                variant="error"
                onClick={() => toast.custom(() => <Toast message="Error occurred!" type="error" />)}
              >
                Show Error
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  toast.custom(() => <Toast message="Warning message" type="warning" />)
                }
              >
                Show Warning
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  toast.custom(() => <Toast message="Default message" type="default" />)
                }
              >
                Show Default
              </Button>
            </div>
          </div>

          {/* With Actions */}
          <div>
            <h3 className="typo-heading-20 mb-4">With Actions</h3>
            <Button
              variant="secondary"
              onClick={() =>
                toast.custom(() => (
                  <Toast
                    message="Would you like to proceed?"
                    type="default"
                    actions={[
                      { label: 'Cancel', variant: 'secondary' },
                      { label: 'Confirm', variant: 'primary' },
                    ]}
                  />
                ))
              }
            >
              Show Toast with Actions
            </Button>
          </div>

          {/* Without Close Button */}
          <div>
            <h3 className="typo-heading-20 mb-4">Without Close Button</h3>
            <Button
              variant="secondary"
              onClick={() =>
                toast.custom(() => (
                  <Toast message="Auto-dismiss only" type="default" withCloseButton={false} />
                ))
              }
            >
              Show Toast (No Close)
            </Button>
          </div>
        </div>
      </section>

      {/* Link Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Link Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Navigation link component built on Next.js Link with optional underline and disabled
          states.
        </p>

        <div className="flex flex-col gap-6">
          {/* Basic Links */}
          <div>
            <h3 className="typo-heading-20 mb-4">Basic Links</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/">Home Link</Link>
              <Link href="/about">About Link</Link>
              <Link href="/contact" underline={false}>
                No Underline
              </Link>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-wrap items-baseline gap-4">
              <Link href="/" size="small">
                Small Link
              </Link>
              <Link href="/" size="medium">
                Medium Link
              </Link>
              <Link href="/" size="large">
                Large Link
              </Link>
            </div>
          </div>

          {/* Disabled */}
          <div>
            <h3 className="typo-heading-20 mb-4">Disabled State</h3>
            <Link href="/" disabled>
              Disabled Link
            </Link>
          </div>
        </div>
      </section>

      {/* Icon Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Icon Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          SVG icon component with type-safe icon names and customizable size and color through
          className.
        </p>

        <div className="flex flex-col gap-6">
          {/* Icon Gallery */}
          <div>
            <h3 className="typo-heading-20 mb-4">Available Icons</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center gap-2">
                <Icon name="arrow-right" size={24} />
                <span className="typo-copy-12">arrow-right</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="chevron-down" size={24} />
                <span className="typo-copy-12">chevron-down</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="cross" size={24} />
                <span className="typo-copy-12">cross</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="check-circle-fill" size={24} />
                <span className="typo-copy-12">check-circle-fill</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="warning-fill" size={24} />
                <span className="typo-copy-12">warning-fill</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="settings-gear" size={24} />
                <span className="typo-copy-12">settings-gear</span>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Icon name="warning-fill" size={16} />
              <Icon name="warning-fill" size={24} />
              <Icon name="warning-fill" size={32} />
              <Icon name="warning-fill" size={48} />
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="typo-heading-20 mb-4">Colors (via className)</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Icon name="check-circle-fill" size={32} className="text-green-600" />
              <Icon name="warning-fill" size={32} className="text-red-600" />
              <Icon name="warning-fill" size={32} className="text-yellow-600" />
              <Icon name="settings-gear" size={32} className="text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Spinner Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Spinner Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Loading spinner component with customizable size. Used within buttons and other components
          to indicate loading states.
        </p>

        <div className="flex flex-col gap-6">
          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-6">
              <Spinner size={16} />
              <Spinner size={24} />
              <Spinner size={32} />
              <Spinner size={48} />
              <Spinner size={64} />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Logo Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Brand logo component with optional text and typing animation. Can render as a div or link
          element.
        </p>

        <div className="flex flex-col gap-6">
          {/* Logo Only */}
          <div>
            <h3 className="typo-heading-20 mb-4">Logo Only</h3>
            <div className="flex flex-wrap items-center gap-6">
              <Logo size="small" animated={false} />
              <Logo size="medium" animated={false} />
              <Logo size="large" animated={false} />
            </div>
          </div>

          {/* Logo with Text */}
          <div>
            <h3 className="typo-heading-20 mb-4">Logo with Text</h3>
            <div className="flex flex-col gap-4">
              <Logo size="small" text="OpenCode" animated={false} />
              <Logo size="medium" text="OpenCode" animated={false} />
              <Logo size="large" text="OpenCode" animated={false} />
            </div>
          </div>

          {/* As Link */}
          <div>
            <h3 className="typo-heading-20 mb-4">As Link</h3>
            <Logo size="medium" text="OpenCode" as="link" href="/" animated={false} />
          </div>

          {/* With Animation */}
          <div>
            <h3 className="typo-heading-20 mb-4">With Typing Animation</h3>
            <Logo size="large" text="OpenCode" animated={true} />
          </div>
        </div>
      </section>

      {/* AnimatedCTA Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">AnimatedCTA Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Call-to-action component with letter-by-letter animation on hover. Can render as button or
          anchor element.
        </p>

        <div className="flex flex-col gap-6">
          {/* Basic CTA */}
          <div>
            <h3 className="typo-heading-20 mb-4">Basic CTA (Hover to Animate)</h3>
            <AnimatedCTA text="Get Started" />
          </div>

          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-col items-start gap-4">
              <AnimatedCTA text="Small CTA" size="small" />
              <AnimatedCTA text="Medium CTA" size="medium" />
              <AnimatedCTA text="Large CTA" size="large" />
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h3 className="typo-heading-20 mb-4">With Icons</h3>
            <div className="flex flex-col items-start gap-4">
              <AnimatedCTA text="With Left Icon" leftIcon="arrow-right" />
              <AnimatedCTA text="With Right Icon" rightIcon="arrow-right" />
            </div>
          </div>

          {/* As Link */}
          <div>
            <h3 className="typo-heading-20 mb-4">As Link</h3>
            <AnimatedCTA text="Go to Homepage" as="link" href="/" />
          </div>

          {/* Full Width */}
          <div>
            <h3 className="typo-heading-20 mb-4">Full Width</h3>
            <AnimatedCTA text="Full Width CTA" fullWidth />
          </div>
        </div>
      </section>

      {/* GuideCross Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">GuideCross Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          Visual guide cross component for layout alignment and positioning reference. Useful in
          design systems and component development.
        </p>

        <div className="flex flex-col gap-6">
          {/* Sizes */}
          <div>
            <h3 className="typo-heading-20 mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-8">
              <GuideCross size="small" />
              <GuideCross size="medium" />
            </div>
          </div>

          {/* Thickness */}
          <div>
            <h3 className="typo-heading-20 mb-4">Thickness Variants</h3>
            <div className="flex flex-wrap items-center gap-8">
              <GuideCross thickness="thin" />
              <GuideCross thickness="normal" />
            </div>
          </div>

          {/* Positions */}
          <div>
            <h3 className="typo-heading-20 mb-4">Position Variants</h3>
            <div className="relative h-64 w-full border border-gray-400">
              <GuideCross position="top-left" size="small" />
              <GuideCross position="top-right" size="small" />
              <GuideCross position="bottom-left" size="small" />
              <GuideCross position="bottom-right" size="small" />
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Component */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="typo-heading-32 mb-6">Feedback Component</h2>
        <p className="typo-copy-16 mb-6 text-gray-700">
          User feedback widget with emoji rating system and optional comment textarea. Includes
          submission handling and success state.
        </p>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="typo-heading-20 mb-4">Interactive Feedback Widget</h3>
            <Feedback
              label="How was your experience?"
              onRatingSelect={(rating) => console.log('Rating:', rating)}
              onSubmit={(rating, comment) => console.log('Submitted:', rating, comment)}
            />
          </div>

          <div>
            <h3 className="typo-heading-20 mb-4">Disabled State</h3>
            <Feedback disabled label="Feedback (Disabled)" />
          </div>

          <div>
            <h3 className="typo-heading-20 mb-4">Custom Labels</h3>
            <Feedback
              label="Rate this article"
              textareaPlaceholder="Tell us more..."
              sendButtonText="Submit Feedback"
            />
          </div>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-16" />
    </div>
  );
}
