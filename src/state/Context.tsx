import React from 'react';

import { ContextInterface, ProviderInterface } from 'src/state/Context.types';
import { RootStore } from 'src/state/stores';

export const StoreContext = React.createContext<ContextInterface>({} as ContextInterface);

export const StoreProvider: React.FC<ProviderInterface> = ({ children }) => (
  <StoreContext.Provider value={new RootStore()}>
    {children}
  </StoreContext.Provider>
);
