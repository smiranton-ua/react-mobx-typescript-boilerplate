import React from 'react';

import { StoreContext } from '../Context';

export const useStores = () => React.useContext(StoreContext);
