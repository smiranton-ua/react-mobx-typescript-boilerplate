import { api } from 'src/utils';

class ModuleApi {
  fetchTest() {
    return api.get('test');
  }
}

export default new ModuleApi();
