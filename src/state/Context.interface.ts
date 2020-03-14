import React from 'react';

import { store as Module1Store } from 'src/modules/module1';
import { store as Module2Store } from 'src/modules/module2';
import { store as AuthStore } from 'src/modules/auth';

export interface ContextInterface {
  module1Store: Module1Store;
  module2Store: Module2Store;
  authStore: AuthStore;
}

export interface ProviderInterface { children: React.ReactElement }
