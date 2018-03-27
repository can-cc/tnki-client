import axios from 'axios';
import router from '@/router';
import { readJwt } from '@/helper/auth';

export function setupAxiosAuth() {
  axios.defaults.headers.common['jwt'] = readJwt();
  axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (error.response.status === 401) {
        router.push('/signin');
      }
      return error;
    }
  );
}
