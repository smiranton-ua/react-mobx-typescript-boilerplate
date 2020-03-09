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
        Module One {test}
      </div>
      <button onClick={change}>
        test
      </button>
      <button onClick={() => { history.push('/module2'); }}>
        go to module 2
      </button>
    </div>
  );
};

export default observer(Module1);
