import React, { useCallback } from 'react';
import { ExternalToast, toast as sonnerToast } from 'sonner';

import Toast from '../Toast';
import { ToastProps } from '../types';

export const useToast = () => {
  const openToast = useCallback((toast: ToastProps, data?: ExternalToast) => {
    sonnerToast.custom((id) => <Toast id={id} {...toast} />, data);
  }, []);

  return {
    openToast,
  };
};
