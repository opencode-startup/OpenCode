'use client';

import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import { Helper } from './Helper';
import { Label } from './Label';
import { Prefix } from './Prefix';
import { Suffix } from './Suffix';
import { InputProps } from './types';

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
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

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
            className={clsx(
              `text-gray-1000 flex-1 bg-transparent py-0 leading-5 font-normal outline-none
              placeholder:text-gray-700`,
              'disabled:cursor-not-allowed disabled:text-gray-600',
              'px-3',
            )}
            {...props}
          />

          <Suffix size={size} disabled={disabled} hasStyling={suffixHasStyling}>
            {suffix}
          </Suffix>
        </div>

        <Helper size={size} error={error}>
          {helper}
        </Helper>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
