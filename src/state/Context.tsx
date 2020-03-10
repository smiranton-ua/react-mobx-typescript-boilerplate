import React from 'react';

import { RootStore } from 'src/state/RootStore';
import { ContextInterface, ProviderInterface } from 'src/state/Context.interface';

export const StoreContext = React.createContext<ContextInterface>({} as ContextInterface);

export const StoreProvider: React.FC<ProviderInterface> = ({ children }) => (
  <StoreContext.Provider value={new RootStore()}>
    {children}
  </StoreContext.Provider>
);
