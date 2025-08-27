'use client';

import { forwardRef, useId } from 'react';

import { Spinner } from '@/components';

import { Helper } from './Helper';
import { Label } from './Label';
import { Prefix } from './Prefix';
import { Suffix } from './Suffix';
import { InputProps } from './types';
import { generateInputAriaAttributes } from './utils';
import { inputContainerVariants, inputFieldVariants, sizeConfig } from './variants';

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
          className={inputContainerVariants({
            size,
            disabled,
            error: !!error,
            className,
          })}
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
            className={inputFieldVariants({
              disabled,
            })}
            {...props}
          />

          {loading && (
            <div className="flex h-full items-center justify-center pr-3">
              <Spinner size={sizeConfig[size].spinnerSize} role="status" aria-label="Loading" />
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
