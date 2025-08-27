import { Icon } from '../Icon';
import { SuffixProps } from './types';
import { iconSizeConfig, suffixVariants } from './variants';

export const Suffix = ({
  children,
  size = 'medium',
  disabled,
  hasStyling = true,
  className,
}: SuffixProps) => {
  if (!children) return null;

  return (
    <div
      className={suffixVariants({
        size,
        disabled,
        hasStyling,
        className,
      })}
    >
      {typeof children === 'string' ? (
        <Icon name={children as any} size={iconSizeConfig[size]} className="text-gray-700" />
      ) : (
        children
      )}
    </div>
  );
};
