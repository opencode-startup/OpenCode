import { useId } from 'react';

import { FooterColumnProps } from './types';

const FooterColumn = ({ title, children, id, 'data-testid': dataTestId }: FooterColumnProps) => {
  const generatedId = useId();
  const headingId = id || generatedId;

  return (
    <div
      className="flex min-w-32 grow basis-0 flex-col items-start gap-4 overflow-hidden"
      data-testid={dataTestId}
    >
      <h2 id={headingId} className="typo-heading-14 text-gray-1000 text-center text-nowrap">
        {title}
      </h2>
      <nav
        aria-labelledby={headingId}
        className="flex shrink-0 flex-col items-start gap-2.5 overflow-hidden"
      >
        {children}
      </nav>
    </div>
  );
};

export default FooterColumn;
