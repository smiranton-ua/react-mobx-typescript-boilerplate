import * as React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { PrivateRoute } from 'src/common';
import { RouteInterface } from 'src/types/routes';

import { Module1Routes } from 'src/modules/module1';
import { Module2Routes } from 'src/modules/module2';

import { PATH } from 'src/constants';

const appRoutes: RouteInterface[] = [
  ...Module1Routes,
  ...Module2Routes
];

const App: React.FC = () => (
  <div className='app'>
    <Switch>
      {appRoutes.map((route) => (
        <PrivateRoute key={route.name} {...route} />
      ))}
      <Redirect from={PATH.ROOT} to={PATH.MODULE_ONE} />
    </Switch>
  </div>
);

export default App;
