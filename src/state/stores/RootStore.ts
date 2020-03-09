import TestStore from './TestStore';

class RootStore {
  testStore: any;

  constructor() {
    this.testStore = new TestStore();
  }
}

export default RootStore;
