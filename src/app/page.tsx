'use client';

import { GuideCross } from '@/components';

export default function Home() {
  return (
    <div className={'flex h-screen flex-1 flex-col items-center justify-center gap-12 p-8'}>
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-64 w-96 border-[0.5px] border-gray-300">
          <GuideCross size="small" position="top-left" />
          <GuideCross size="small" position="top-right" />
          <GuideCross size="small" position="bottom-left" />
          <GuideCross size="small" position="bottom-right" />
        </div>
      </div>
    </div>
  );
}
