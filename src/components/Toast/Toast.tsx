import { FC } from 'react';
import { toast as sonnerToast } from 'sonner';

import { Button, Icon } from '@/components';

import { ToastProps } from './types';
import { closeButtonIconVariants, closeButtonVariants, containerVariants } from './variants';

const Toast: FC<ToastProps> = ({
  id,
  message,
  type = 'default',
  withCloseButton = true,
  actions = [],
  onClose,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={containerVariants({
        type,
        className,
      })}
      role="alert"
      aria-live="polite"
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">{children || <p>{message}</p>}</div>
        {withCloseButton && (
          <Button
            shape={'square'}
            size={'small'}
            variant={'tertiary'}
            onClick={() => {
              onClose?.();
              sonnerToast.dismiss(id);
            }}
            iconOnly
            aria-label="Close notification"
            className={closeButtonVariants({
              type,
            })}
          >
            <Icon
              name={'cross'}
              className={closeButtonIconVariants({
                type,
              })}
            />
          </Button>
        )}
      </div>
      {!!actions?.length && (
        <div className="mt-4 flex justify-end gap-3">
          {actions.map((action, index) => {
            const { label, dismiss = true, onClick, ...buttonProps } = action;
            return (
              <Button
                key={index}
                size="small"
                shape="rounded"
                onClick={(event) => {
                  if (dismiss) {
                    sonnerToast.dismiss(id);
                  }

                  onClick?.(event, id);
                }}
                {...buttonProps}
              >
                {label}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

Toast.displayName = 'Toast';

export default Toast;
