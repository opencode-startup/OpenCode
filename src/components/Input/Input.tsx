'use client';

import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import { Helper } from './Helper';
import { Label } from './Label';
import { Prefix } from './Prefix';
import { Suffix } from './Suffix';
import { InputProps } from './types';
import { generateInputAriaAttributes } from './utils';

const sizeClasses = {
  small: 'h-8 text-sm',
  medium: 'h-10 text-sm',
  large: 'h-12 text-base',
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      helper,
      error,
      prefix,
      suffix,
      size = 'medium',
      className,
      disabled,
      prefixHasStyling = true,
      suffixHasStyling = true,
      loading = false,
      required,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      'aria-required': ariaRequired,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const helperId = `${inputId}-helper`;
    const hasHelperContent = !!(helper || error);

    // Generate ARIA attributes using utils
    const ariaAttributes = generateInputAriaAttributes({
      helperId,
      hasHelperContent,
      userAriaDescribedBy: ariaDescribedBy,
      error,
      required,
      loading,
      userAriaInvalid: ariaInvalid,
      userAriaRequired: ariaRequired,
    });

    return (
      <div className="flex flex-col gap-1">
        <Label htmlFor={inputId} size={size} error={!!error}>
          {label}
        </Label>

        <div
          className={clsx(
            'bg-background-100 flex items-center overflow-hidden rounded transition-shadow duration-200 ease-out',
            { 'bg-gray-100': disabled },
            sizeClasses[size],
            {
              'cursor-not-allowed': disabled,
              [`shadow-[0px_0px_0px_1px_var(--gray-alpha-400)]
              focus-within:!shadow-[0px_0px_0px_1px_var(--gray-alpha-800),0px_0px_0px_4px_var(--gray-alpha-400)]
              hover:shadow-[0px_0px_0px_1px_var(--gray-alpha-500)]`]: !disabled && !error,
              [`shadow-[0px_0px_0px_1px_var(--red-800),0px_0px_0px_4px_var(--red-400)]
              focus-within:shadow-[0px_0px_0px_1px_var(--red-900),0px_0px_0px_4px_var(--red-500)]
              hover:shadow-[0px_0px_0px_1px_var(--red-900),0px_0px_0px_4px_#df434880]`]:
                error && !disabled,
              'shadow-[0px_0px_0px_1px_var(--gray-alpha-400)]': disabled,
            },
            className,
          )}
        >
          <Prefix size={size} disabled={disabled} hasStyling={prefixHasStyling}>
            {prefix}
          </Prefix>

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-describedby={ariaAttributes['aria-describedby']}
            aria-invalid={ariaAttributes['aria-invalid']}
            aria-required={ariaAttributes['aria-required']}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-busy={ariaAttributes['aria-busy']}
            className={clsx(
              `text-gray-1000 flex-1 bg-transparent py-0 leading-5 font-normal outline-none
              placeholder:text-gray-700`,
              'disabled:cursor-not-allowed disabled:text-gray-600',
              'px-3',
            )}
            {...props}
          />

          {loading && (
            <div className="flex h-full items-center justify-center px-3">
              <div
                className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"
                role="status"
                aria-label="Loading"
              />
            </div>
          )}

          <Suffix size={size} disabled={disabled} hasStyling={suffixHasStyling}>
            {suffix}
          </Suffix>
        </div>

        <Helper id={helperId} size={size} error={error}>
          {helper}
        </Helper>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
