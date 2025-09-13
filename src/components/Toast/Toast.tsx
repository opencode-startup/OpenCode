import { FC } from 'react';

import { Button, Icon } from '@/components';

import { useToast } from './hooks';
import { ToastProps } from './types';
import { variants } from './variants';

const Toast: FC<ToastProps> = ({
  message,
  type = 'default',
  withCloseButton = true,
  onClose,
  className,
  children,
  ...props
}) => {
  const { handleKeyDown } = useToast({
    onClose,
  });

  return (
    <div className={variants({ type, className })} role="alert" aria-live="polite" {...props}>
      <div className="min-w-0 flex-1">{children || <p>{message}</p>}</div>
      {withCloseButton && (
        <Button
          shape={'square'}
          size={'small'}
          variant={'tertiary'}
          onClick={onClose}
          onKeyDown={handleKeyDown}
          aria-label="Close notification"
        >
          <Icon name={'cross'} />
        </Button>
      )}
    </div>
  );
};

Toast.displayName = 'Toast';

export default Toast;
