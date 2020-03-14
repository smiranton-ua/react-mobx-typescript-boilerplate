import { store as Module1Store } from 'src/modules/module1';
import { store as Module2Store } from 'src/modules/module2';
import { store as AuthStore } from 'src/modules/auth';

class RootStore {
  module1Store: Module1Store;
  module2Store: Module2Store;
  authStore: AuthStore;

  constructor() {
    this.module1Store = new Module1Store();
    this.module2Store = new Module2Store();
    this.authStore = new AuthStore();
  }
}

export default RootStore;
