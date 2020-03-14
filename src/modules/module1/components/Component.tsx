import React from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';

import { useModule1Store } from '../hooks';

const Module1 = () => {
  const history = useHistory();
  const { test, change } = useModule1Store();

  return (
    <div>
      <div className='App'>
        Module One
        {test}
      </div>
      <div onClick={change}>
        test
      </div>
      <div onClick={() => { history.push('/module2'); }}>
        go to module 2
      </div>
    </div>
  );
};

export default observer(Module1);
