import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Module1Routes } from 'src/modules/module1';
import { Module2Routes } from 'src/modules/module2';

const appRoutes = [
  ...Module1Routes,
  ...Module2Routes
];

const App: React.FC = () => (
  <div className='App'>
    <Switch>
      {appRoutes.map((route: any) => route.component && <Route key={route.name} {...route} />)}
      <Redirect from={'/'} to={'/module1'} />
    </Switch>
  </div>
);

export default App;
