type InputSize = 'small' | 'medium' | 'large';

// Size-specific configuration for spinner sizes
export const sizeConfig = {
  small: {
    spinnerSize: 16,
  },
  medium: {
    spinnerSize: 18,
  },
  large: {
    spinnerSize: 20,
  },
} as const satisfies Record<
  InputSize,
  {
    spinnerSize: number;
  }
>;
