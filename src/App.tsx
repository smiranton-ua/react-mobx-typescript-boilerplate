import React from 'react';
import { observer } from 'mobx-react';

import { StoreProvider } from './state/Context';
import { useStores } from './hooks/stores';

import './App.css';

const App = observer(() => {
  const { testStore } = useStores();

  return (
    <div className='App'>
      <header className='App-header'>
        {testStore.test && (
          <h2>
            Heyyyyy
          </h2>
        )}
        <button
          className='App-link'
          type='button'
          onClick={() => { testStore.change(); }}
        >
          Learn React
        </button>
      </header>
    </div>
  );
});

const Root = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);

export default Root;
