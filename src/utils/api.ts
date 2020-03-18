import axios, { AxiosResponse } from 'axios';
import get from 'lodash/get';

import { getBaseUrl } from './url';

const instance = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.response.use(
  (res: AxiosResponse) => res,





  (error: Error) => {
        return Promise.reject({
      extended: get(error, 'response.data.error.extended', {}),
      message: get(error, 'response.data.error.message', error),
      code: get(error, 'response.data.error.errcode', 0)
    });
  }
);

export default instance;
