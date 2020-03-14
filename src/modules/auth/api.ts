// import { api } from 'src/utils';

class AuthApi {
  public fetchUserInfo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'Anton',
          roles: []
        });
      }, 1000);
    });
  }
}

export default new AuthApi();
