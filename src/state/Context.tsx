import React from 'react';

import RootStore from './stores/RootStore';

import { ContextInterface, ProviderInterface } from './Context.interface';

export const StoreContext = React.createContext<ContextInterface>({} as ContextInterface);

export const StoreProvider: React.FC<ProviderInterface> = ({ children }) => (
  <StoreContext.Provider value={new RootStore()}>
    {children}
  </StoreContext.Provider>
);
