import * as React from 'react';

import { AsyncCompInterface, PropsInterface } from './Loadable.types';

const Loadable = (AsyncCompFactory: AsyncCompInterface, FallbackComp = null) => {
  const AsyncComp = React.lazy(AsyncCompFactory);

  const LoadableComp: React.FC<PropsInterface> = (props) => (
    <React.Suspense fallback={FallbackComp}>
      <AsyncComp {...props} />
    </React.Suspense>
  );

  return LoadableComp;
};


export default Loadable;
