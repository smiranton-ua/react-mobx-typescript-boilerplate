import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { GlobalStyle } from 'src/styles/global';
import { PrivateRoute } from 'src/modules/auth';

import { RouteInterface } from 'src/types/routes';

import * as module1 from 'src/modules/module1';
import * as module2 from 'src/modules/module2';

import { PATH } from 'src/constants';

const appRoutes: RouteInterface[] = [
  ...module1.routes,
  ...module2.routes
];

const App: React.FC = () => (
  <>
    <Switch>
      {appRoutes.map((route) => (



        <PrivateRoute key={route.name} {...route} />
      ))}
      <Redirect from={PATH.ROOT} to={PATH.MODULE_ONE} />
    </Switch>
    <GlobalStyle />
  </>
);

export default App;
