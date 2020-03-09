import { action, observable } from 'mobx';

class TestStore {
  @observable public test = false;

  @action.bound public change() {
    this.test = !this.test;
  }
}

export default TestStore;
