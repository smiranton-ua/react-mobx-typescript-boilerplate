import React from 'react';

import { ErrorBoundary } from 'src/common';
import { Component } from '../components';

const Page: React.FC = () => (
  <ErrorBoundary>
    <Component />
  </ErrorBoundary>
);

export default Page;
