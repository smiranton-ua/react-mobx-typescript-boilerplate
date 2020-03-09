import React from 'react';

import { StoreContext } from '../state/Context';

export const useStores = () => React.useContext(StoreContext);
