'use client';

import { useState } from 'react';

import { Button, Modal, Select } from '@/components';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={'flex min-h-screen flex-1 flex-col items-center gap-8 p-8'}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Modal Component</h2>
          <Button onClick={handleOpenModal}>Open Modal</Button>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Select</h2>
          <Select
            size={'small'}
            header={
              <span style={{ display: 'inline-flex', flexDirection: 'column' }}>
                <span>User name</span>
                <span>User name</span>
                <span>User name</span>
              </span>
            }
            footer={
              <Button size={'small'} fullWidth={true}>
                Upgrade
              </Button>
            }
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

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Tracking Preferences"
        showActions={true}
        placement={'center'}
        subtitle={
          'We use cookies and similar technologies to enhance your experience. You can choose to enable or disable their use.'
        }
        // leftActions={[
        //   {
        //     children: 'Deny',
        //     variant: 'secondary',
        //     onClick: handleCloseModal,
        //   },
        // ]}
        centerActions={[
          {
            fullWidth: true,
            children: 'Accept All',
            variant: 'primary',
            onClick: handleCloseModal,
          },
        ]}
        // rightActions={[
        //   {
        //     children: 'Save',
        //     variant: 'primary',
        //     onClick: handleCloseModal,
        //   },
        // ]}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s.
        </p>
      </Modal>
    </div>
  );
}
