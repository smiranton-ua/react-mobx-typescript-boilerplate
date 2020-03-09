import { action, observable } from 'mobx';

export default class Module2Store {
  @observable public test = 1;

  @action.bound public change() {
    this.test += 1;
  }
}
