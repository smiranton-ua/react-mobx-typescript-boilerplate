import React from 'react';

import TestStore from './stores/TestStore';

export interface ContextInterface {
  testStore: TestStore;
}

export interface ProviderInterface { children: React.ReactElement }
