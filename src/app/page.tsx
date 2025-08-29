'use client';

import { GuideCross } from '@/components';

export default function Home() {
  return (
    <div className={'flex h-screen flex-1 flex-col items-center justify-center gap-12 p-8'}>
      <div className="flex w-full max-w-2xl flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <GuideCross size="small" />
              <GuideCross size="medium" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
