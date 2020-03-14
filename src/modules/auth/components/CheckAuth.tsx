import React from 'react';
import { observer } from 'mobx-react';

import { useAuthStore } from '../hooks';

interface Props {
  children: React.ReactElement;
}

const CheckAuth: React.FC<Props> = ({ children }) => {
  const { loading, checkUserAuth } = useAuthStore();

  React.useEffect(() => {
    checkUserAuth();
  }, []);

  if (loading) {
    return (
      <h2>
        Checking user...
      </h2>
    );
  }

  return children;
};

export default observer(CheckAuth);
