import { action, observable, computed } from 'mobx';

import api from 'src/modules/auth/api';

import { UserInterface } from 'src/types/auth';

export default class Module1Store {
  @observable public loading = true;
  @observable public userInfo: UserInterface | null = null;

  @computed get isUserLoggedIn() {
    return this.userInfo && this.userInfo.id;
  }

  @action.bound private setLoading(status: boolean) {
    this.loading = status;
  }

  @action.bound public async checkUserAuth() {
    try {
      this.setLoading(true);
      await api.fetchUserInfo();
    } finally {
      this.setLoading(false);
    }
  }
}
