import { store as Module1Store } from 'src/modules/module1';
import { store as Module2Store } from 'src/modules/module2';

class RootStore {
  module1Store: Module1Store;
  module2Store: Module2Store;

  constructor() {
    this.module1Store = new Module1Store();
    this.module2Store = new Module2Store();
  }
}

export default RootStore;
