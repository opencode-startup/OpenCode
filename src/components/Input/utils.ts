/**
 * Utility functions for Input component
 */

/**
 * Combines multiple aria-describedby values into a single string
 * @param values - Array of potential aria-describedby values
 * @returns Combined string or undefined if no valid values
 */
export function combineAriaDescribedBy(
  ...values: (string | undefined | null)[]
): string | undefined {
  const filtered = values.filter(Boolean) as string[];
  return filtered.length > 0 ? filtered.join(' ') : undefined;
}

/**
 * Generates ARIA attributes for input element
 * @param options - Configuration options for ARIA attributes
 * @returns Object with computed ARIA attributes
 */
export interface AriaAttributesOptions {
  helperId?: string;
  hasHelperContent?: boolean;
  userAriaDescribedBy?: string;
  error?: unknown;
  required?: boolean;
  loading?: boolean;
  userAriaInvalid?: boolean;
  userAriaRequired?: boolean;
}

export function generateInputAriaAttributes({
  helperId,
  hasHelperContent = false,
  userAriaDescribedBy,
  error,
  required,
  loading = false,
  userAriaInvalid,
  userAriaRequired,
}: AriaAttributesOptions) {
  return {
    'aria-describedby': combineAriaDescribedBy(
      userAriaDescribedBy,
      hasHelperContent ? helperId : undefined,
    ),
    'aria-invalid': userAriaInvalid ?? !!error,
    'aria-required': userAriaRequired ?? required,
    'aria-busy': loading,
  };
}
