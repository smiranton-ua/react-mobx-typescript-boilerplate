import React from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';

import { useModule1Store } from '../hooks';

const Module2 = () => {
  const history = useHistory();
  const { test, change } = useModule1Store();

  return (
    <div>
      <div className='App'>
        Module Two {test}
      </div>
      <button onClick={change}>
        test
      </button>
      <button onClick={() => { history.goBack(); }}>
        go to module 1
      </button>
    </div>
  );
};

export default observer(Module2);
