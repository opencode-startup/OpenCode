'use client';

import { Link } from '@/components';

export default function Home() {
  return (
    <div className={'flex h-screen flex-1 flex-col items-center justify-center gap-12 p-8'}>
      <div className="flex w-full max-w-2xl flex-col items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">Link Component</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="#" size="small" text="Small Link" disabled />
            <Link href="#" size="medium" text="Medium Link" />
            <Link href="#" size="large" text="Large Link" underline={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
