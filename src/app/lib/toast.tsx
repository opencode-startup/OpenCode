import React from 'react';
import { ExternalToast, toast as sonnerToast } from 'sonner';

import { Toast, ToastProps } from '@/components';

export const openToast = (toast: ToastProps, data?: ExternalToast) => {
  sonnerToast.custom((id) => <Toast id={id} {...toast} />, data);
};

export const closeToast = (id?: string | number) => {
  sonnerToast.dismiss(id);
};
