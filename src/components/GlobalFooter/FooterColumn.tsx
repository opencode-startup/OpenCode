import { FooterColumnProps } from './types';

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex min-w-0 grow basis-0 flex-col items-start gap-4 overflow-hidden">
      <h3 className="typo-heading-14 text-gray-1000 text-center text-nowrap">{title}</h3>
      <nav className="flex shrink-0 flex-col items-start gap-2.5 overflow-hidden">{children}</nav>
    </div>
  );
};

export default FooterColumn;
