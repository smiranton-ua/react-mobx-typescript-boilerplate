import React from 'react';

import { Module1Store } from '../modules/module1';
import { Module2Store } from '../modules/module2';

export interface ContextInterface {
  module1Store: Module1Store;
  module2Store: Module2Store;
}

export interface ProviderInterface { children: React.ReactElement }
