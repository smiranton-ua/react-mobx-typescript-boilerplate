import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from 'src/state/Context';
import { CheckAuth } from 'src/modules/auth';
import { Loadable } from 'src/common';

const App = Loadable(() => import('./App'));

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <CheckAuth>
        <App />
      </CheckAuth>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
