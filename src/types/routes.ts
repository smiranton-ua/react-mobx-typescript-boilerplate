import { FC } from 'react';

export interface RouteInterface {
  component: FC;
  routes?: RouteInterface[];
  name: string;
  path: string;
  exact?: boolean;
  isPrivate?: boolean;
  redirect?: {
    from: string;
    to: string;
  };
}
