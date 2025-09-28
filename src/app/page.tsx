'use client';

import { Button, Feedback, Input } from '@/components';

export default function Home() {
  return (
    <div className={'flex min-h-[200vh] flex-1 flex-col items-center gap-8 p-8'}>
      <section className="w-full max-w-4xl">
        <h1 className="typo-heading-48 mb-6">Welcome to OpenCode</h1>
        <p className="typo-copy-18 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="typo-copy-16 mb-8">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="w-full max-w-4xl">
        <h2 className="typo-heading-32 mb-4">Getting Started</h2>
        <p className="typo-copy-16 mb-4">
          Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Nisl nunc mi ipsum
          faucibus vitae aliquet nec. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu
          vitae elementum.
        </p>
        <p className="typo-copy-16 mb-6">
          Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Consectetur adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
      </section>

      <Feedback />

      <section className="w-full max-w-4xl">
        <h2 className="typo-heading-32 mb-4">Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="typo-heading-20 mb-2">Modern Development</h3>
            <p className="typo-copy-14">
              Built with the latest technologies including Next.js 15, React 19, and TypeScript for
              a modern development experience.
            </p>
          </div>
          <div>
            <h3 className="typo-heading-20 mb-2">Responsive Design</h3>
            <p className="typo-copy-14">
              Fully responsive design that works seamlessly across all devices and screen sizes.
            </p>
          </div>
        </div>
      </section>

      <Input multiline />

      <section className="w-full max-w-4xl">
        <h2 className="typo-heading-32 mb-4">Documentation</h2>
        <p className="typo-copy-16 mb-4">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
        </p>
        <p className="typo-copy-16 mb-4">
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
          placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
        </p>
        <p className="typo-copy-16 mb-6">
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
          fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
          enim ac dui.
        </p>
      </section>

      <section className="w-full max-w-4xl">
        <h2 className="typo-heading-32 mb-4">Community</h2>
        <p className="typo-copy-16 mb-4">
          Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
        </p>
        <p className="typo-copy-16 mb-6">
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
          metus. Phasellus ultrices nulla quis nibh. Quisque a lectus.
        </p>
      </section>

      <Button>Get Started</Button>

      <section className="w-full max-w-4xl">
        <h2 className="typo-heading-32 mb-4">Contact</h2>
        <p className="typo-copy-16 mb-4">
          Donec consectetuer tristique tortor. Nam vestibulum accumsan nisl. Sed a libero. Aliquam
          erat volutpat. Etiam imperdiet imperdiet orci.
        </p>
        <p className="typo-copy-16">
          Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
          Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
        </p>
      </section>
    </div>
  );
}
