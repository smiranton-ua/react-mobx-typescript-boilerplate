import { Page } from 'src/modules/module1/pages';

import { PATH } from 'src/constants';

export default [
  {
    component: Page,
    name: 'Module 1',
    path: PATH.MODULE_ONE,
    exact: false,
    isPrivate: false
  }
];
