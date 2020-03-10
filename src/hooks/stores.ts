import React from 'react';

import { StoreContext } from 'src/state/Context';

export const useStores = () => React.useContext(StoreContext);
