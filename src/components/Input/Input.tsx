'use client';

import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import { Icon } from '../icons';
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
      className = '',
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={inputId}
            className={clsx('text-label-12', {
              'text-red-900': error,
              'text-gray-900': !error,
            })}
          >
            {label}
          </label>
        )}

        <div
          className={clsx(
            'bg-background-200 flex items-center overflow-hidden rounded transition-shadow duration-200 ease-out',
            { 'bg-gray-100': disabled },
            sizeClasses[size],
            {
              'cursor-not-allowed opacity-50': disabled,
              [`shadow-[0px_0px_0px_1px_var(--gray-alpha-400)]
              focus-within:!shadow-[0px_0px_0px_1px_var(--gray-alpha-800),0px_0px_0px_4px_var(--gray-alpha-400)]
              hover:shadow-[0px_0px_0px_1px_var(--gray-alpha-500)]`]: !disabled && !error,
              [`shadow-[0px_0px_0px_1px_var(--red-800),0px_0px_0px_4px_var(--red-400)]
              focus-within:shadow-[0px_0px_0px_1px_var(--red-900),0px_0px_0px_4px_var(--red-500)]
              hover:shadow-[0px_0px_0px_1px_var(--red-900),0px_0px_0px_4px_var(--red-500)]`]:
                error && !disabled,
              'shadow-[0px_0px_0px_1px_var(--gray-alpha-400)]': disabled,
            },
            className,
          )}
        >
          {prefix && (
            <div
              className="bg-background-200 flex h-full items-center justify-center px-3
                shadow-[1px_0px_0px_0px_var(--gray-alpha-400)]"
            >
              {typeof prefix === 'string' ? (
                <Icon name={prefix as any} size={16} className="text-gray-700" />
              ) : (
                prefix
              )}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={`text-gray-1000 flex-1 px-3 py-0 leading-5 font-normal outline-none placeholder:text-gray-700
              disabled:cursor-not-allowed`}
            {...props}
          />

          {suffix && (
            <div
              className="bg-background-200 flex h-full items-center justify-center px-3
                shadow-[-1px_0px_0px_0px_var(--gray-alpha-400)]"
            >
              {typeof suffix === 'string' ? (
                <Icon name={suffix as any} size={16} className="text-gray-700" />
              ) : (
                suffix
              )}
            </div>
          )}
        </div>

        {(helper || error) && (
          <div className="flex items-center gap-1">
            {error && <Icon name="warning-fill" size={12} className="text-red-900" />}
            <span
              className={clsx('text-label-12', {
                'text-red-900': error,
                'text-gray-900': !error,
              })}
            >
              {error || helper}
            </span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
