import { forwardRef } from 'react';

import iconMap from './icon-map';
import { IconProps } from './types';

const DEFAULT_SIZE = 16;

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = DEFAULT_SIZE, className, children, ...props }, ref) => {
    // If name is provided, render the specific icon
    if (name) {
      const IconComponent = iconMap[name];

      if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
      }

      return <IconComponent width={size} height={size} className={className} {...props} />;
    }

    // Fallback to generic SVG wrapper for custom Icon
    return (
      <svg ref={ref} width={size} height={size} className={className} {...props}>
        {children}
      </svg>
    );
  },
);

Icon.displayName = 'Icon';

export default Icon;
