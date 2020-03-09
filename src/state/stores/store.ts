import { Module1Store } from '../../modules/module1';
import { Module2Store } from '../../modules/module2';

export class RootStore {
  module1Store: any;
  module2Store: any;

  constructor() {
    this.module1Store = new Module1Store();
    this.module2Store = new Module2Store();
  }
}
