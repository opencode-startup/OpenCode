import clsx from 'clsx';

import { BurgerIconProps } from './types';

export const BurgerIcon = ({ isOpen }: BurgerIconProps) => {
  return (
    <div className="relative flex h-4 w-4 flex-col items-center justify-center">
      <span
        className={clsx(
          'absolute block h-0.5 bg-current transition-all duration-300 ease-out',
          isOpen ? 'w-[120%] rotate-45' : 'w-full -translate-y-1.5 rotate-0',
        )}
      />
      <span
        className={clsx(
          'absolute block h-0.5 w-full bg-current transition-all duration-300 ease-out',
          isOpen ? 'opacity-0' : 'opacity-100',
        )}
      />
      <span
        className={clsx(
          'absolute block h-0.5 bg-current transition-all duration-300 ease-out',
          isOpen ? 'w-[120%] -rotate-45' : 'w-full translate-y-1.5 rotate-0',
        )}
      />
    </div>
  );
};
