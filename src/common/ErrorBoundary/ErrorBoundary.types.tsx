import { ReactNode, ReactElement, ErrorInfo } from 'react';

export interface PropsInterface {
  text?: string;
  children: ReactNode | ReactElement;
}

export interface StateInterface {
  error: Error | string;
  errorInfo: ErrorInfo | null;
}
