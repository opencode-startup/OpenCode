'use client';

import './animation.css';

import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components';

import { useModal, useModalAnimation, useModalBodyScroll } from './hooks';
import { ModalProps } from './types';
import { actionGroupVariants, backdropVariants } from './variants';

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      subtitle,
      children,
      placement = 'center',
      closeOnBackdropClick = true,
      closeOnEscape = true,
      leftActions = [],
      rightActions = [],
      showActions = false,
      className,
      backdropClassName,
      preventBodyScroll = true,
      ...props
    },
    ref,
  ) => {
    // Use Modal hooks
    const { backdropRef, handleBackdropClick } = useModal({
      isOpen,
      onClose,
      closeOnEscape,
      closeOnBackdropClick,
    });

    useModalBodyScroll({
      isOpen,
      preventBodyScroll,
    });

    const { isVisible, isAnimating } = useModalAnimation({
      isOpen,
    });

    if (!isVisible) return null;

    const modalContent = (
      <div
        ref={backdropRef}
        className={twMerge(
          isAnimating ? 'modal-backdrop-enter' : 'modal-backdrop-exit',
          backdropVariants({ placement, className: backdropClassName }),
        )}
        onClick={handleBackdropClick}
        data-state={isAnimating ? 'open' : 'closed'}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={subtitle ? 'modal-subtitle' : undefined}
      >
        <div
          ref={ref}
          className={twMerge(
            isAnimating ? 'modal-enter' : 'modal-exit',
            `bg-background-200 relative flex w-full max-w-lg flex-col overflow-hidden rounded-xl border
            border-gray-400 shadow-2xl`,
            className,
          )}
          data-state={isAnimating ? 'open' : 'closed'}
          {...props}
        >
          {/* Header */}
          {(title || subtitle) && (
            <div className={'flex flex-col gap-3 border-b border-gray-400 p-5'}>
              {title && (
                <h2 id="modal-title" className="typo-heading-24">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p id="modal-subtitle" className="typo-copy-16">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Content */}
          {children && <div className="typo-copy-16 p-5">{children}</div>}

          {/* Actions */}
          {showActions && (leftActions.length > 0 || rightActions.length > 0) && (
            <div className="bg-background-100 flex h-[4.5rem] items-center justify-between gap-3 border-t border-gray-400 px-5">
              {/* Left Actions */}
              <div className={actionGroupVariants({ side: 'left' })}>
                {leftActions.map((action, index) => {
                  const { children, variant = 'secondary', size = 'medium', ...restProps } = action;
                  return (
                    <Button key={index} size={size} variant={variant} {...restProps}>
                      {children}
                    </Button>
                  );
                })}
              </div>

              {/* Right Actions */}
              <div className={actionGroupVariants({ side: 'right' })}>
                {rightActions.map((action, index) => {
                  const { children, variant = 'primary', size = 'medium', ...restProps } = action;
                  return (
                    <Button key={index} size={size} variant={variant} {...restProps}>
                      {children}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );

    // Render to portal for proper stacking
    if (typeof window !== 'undefined') {
      return createPortal(modalContent, document.body);
    }

    return null;
  },
);

Modal.displayName = 'Modal';

export default Modal;
