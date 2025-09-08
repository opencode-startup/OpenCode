import { SelectOption } from './types';

/**
 * Type guard to check if options array contains grouped options (array of arrays)
 */
export const isGroupedOptions = (
  options: SelectOption[] | SelectOption[][],
): options is SelectOption[][] => {
  return options.length > 0 && Array.isArray(options[0]);
};

/**
 * Flatten grouped options into a flat array for easier processing
 */
export const flattenOptions = (options: SelectOption[] | SelectOption[][]): SelectOption[] => {
  if (!isGroupedOptions(options)) {
    return options;
  }

  return options.reduce<SelectOption[]>((acc, group) => {
    return acc.concat(group);
  }, []);
};

/**
 * Get the total number of options (including grouped options)
 */
export const getTotalOptionsCount = (options: SelectOption[] | SelectOption[][]): number => {
  return flattenOptions(options).length;
};

/**
 * Get option by flat index (useful for keyboard navigation)
 */
export const getOptionByFlatIndex = (
  options: SelectOption[] | SelectOption[][],
  index: number,
): SelectOption | undefined => {
  const flatOptions = flattenOptions(options);
  return flatOptions[index];
};

/**
 * Get flat index of an option by its value
 */
export const getFlatIndexByValue = (
  options: SelectOption[] | SelectOption[][],
  value: string,
): number => {
  const flatOptions = flattenOptions(options);
  return flatOptions.findIndex((option) => option.value === value);
};
