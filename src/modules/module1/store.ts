import { action, observable } from 'mobx';

export default class Module1Store {
  @observable public test = 1;

  @action.bound public change() {
    this.test += 1;
  }
}
