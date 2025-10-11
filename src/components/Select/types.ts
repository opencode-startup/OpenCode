import { ReactNode } from 'react';

export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export interface SelectProps {
  options: SelectOption[] | SelectOption[][];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  size?: SelectSize;
  buttonSize?: SelectSize;
  listboxSize?: SelectSize;
  popupWidth?: string | number;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  hideChevron?: boolean;
  onValueChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
  id?: string;
  name?: string;
  // Accessibility props
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
  // Testing support
  'data-testid'?: string;
}

export interface OptionItemProps {
  option: SelectOption;
  index: number;
  selectId: string;
  selectedValue: string;
  size: SelectSize;
  listboxSize?: SelectSize;
  onSelectAction: (value: string) => void;
}
