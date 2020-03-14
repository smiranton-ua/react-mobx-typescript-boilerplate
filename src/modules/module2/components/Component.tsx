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
        Module Two
        {test}
      </div>
      <div onClick={change}>
        test
      </div>
      <div onClick={() => { history.push('/module1'); }}>
        go to module 1
      </div>
    </div>
  );
};

export default observer(Module2);
