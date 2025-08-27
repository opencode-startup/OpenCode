import { Icon } from '../Icon';
import { PrefixProps } from './types';
import { iconSizeConfig, prefixVariants } from './variants';

export const Prefix = ({
  children,
  size = 'medium',
  disabled,
  hasStyling = true,
  className,
}: PrefixProps) => {
  if (!children) return null;

  return (
    <div
      className={prefixVariants({
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
