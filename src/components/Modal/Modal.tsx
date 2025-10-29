'use client';

import './animation.css';

import { forwardRef, useId } from 'react';
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
      centerActions = [],
      rightActions = [],
      showActions = false,
      className,
      backdropClassName,
      preventBodyScroll = true,
      'data-testid': dataTestId,
      baseId,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const modalId = baseId || generatedId;

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

    const { isVisible, isAnimating, shouldAnimate } = useModalAnimation({
      isOpen,
    });

    if (!isVisible) return null;

    const modalContent = (
      <div
        ref={backdropRef}
        className={twMerge(
          shouldAnimate && (isAnimating ? 'modal-backdrop-enter' : 'modal-backdrop-exit'),
          backdropVariants({ placement, shouldAnimate, className: backdropClassName }),
        )}
        onClick={handleBackdropClick}
        data-state={isAnimating ? 'open' : 'closed'}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${modalId}-title` : undefined}
        aria-describedby={subtitle ? `${modalId}-subtitle` : undefined}
        data-testid={dataTestId}
      >
        <div
          ref={ref}
          className={twMerge(
            shouldAnimate && (isAnimating ? 'modal-enter' : 'modal-exit'),
            `bg-background-200 relative flex max-h-[calc(100vh-3rem)] w-full max-w-lg flex-col overflow-hidden
            rounded-xl border border-gray-400 shadow-2xl`,
            className,
          )}
          data-state={isAnimating ? 'open' : 'closed'}
          {...props}
        >
          {/* Header */}
          {(title || subtitle) && (
            <div className={'flex flex-col gap-3 border-b border-gray-400 p-5'}>
              {title && (
                <h2 id={`${modalId}-title`} className="typo-heading-24">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p id={`${modalId}-subtitle`} className="typo-copy-16">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Content */}
          {children && (
            <div className="typo-copy-16 min-h-0 flex-1 overflow-y-auto p-5">{children}</div>
          )}

          {/* Actions */}
          {showActions && (
            <div className="bg-background-100 flex min-h-[4.5rem] items-center gap-3 border-t border-gray-400 px-5">
              {/* Left Actions */}
              {!!leftActions.length && (
                <div className={actionGroupVariants({ side: 'left' })}>
                  {leftActions.map((action, index) => {
                    const {
                      children,
                      variant = 'secondary',
                      size = 'medium',
                      ...restProps
                    } = action;
                    const leftActionId = `${modalId}-left-action-${index}`;
                    return (
                      <Button
                        key={index}
                        id={leftActionId}
                        size={size}
                        variant={variant}
                        {...restProps}
                      >
                        {children}
                      </Button>
                    );
                  })}
                </div>
              )}

              {/* Center Actions */}
              {!!centerActions.length && (
                <div className={actionGroupVariants({ side: 'center' })}>
                  {centerActions.map((action, index) => {
                    const {
                      children,
                      variant = 'secondary',
                      size = 'medium',
                      ...restProps
                    } = action;
                    const centerActionId = `${modalId}-center-action-${index}`;
                    return (
                      <Button
                        key={index}
                        id={centerActionId}
                        size={size}
                        variant={variant}
                        {...restProps}
                      >
                        {children}
                      </Button>
                    );
                  })}
                </div>
              )}

              {/* Right Actions */}
              {!!rightActions.length && (
                <div className={actionGroupVariants({ side: 'right' })}>
                  {rightActions.map((action, index) => {
                    const { children, variant = 'primary', size = 'medium', ...restProps } = action;
                    const rightActionId = `${modalId}-right-action-${index}`;
                    return (
                      <Button
                        key={index}
                        id={rightActionId}
                        size={size}
                        variant={variant}
                        {...restProps}
                      >
                        {children}
                      </Button>
                    );
                  })}
                </div>
              )}
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
