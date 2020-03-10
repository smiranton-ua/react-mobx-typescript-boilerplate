import { Module1Store } from 'src/modules/module1';
import { Module2Store } from 'src/modules/module2';

export class RootStore {
  module1Store: Module1Store;
  module2Store: Module2Store;

  constructor() {
    this.module1Store = new Module1Store();
    this.module2Store = new Module2Store();
  }
}
