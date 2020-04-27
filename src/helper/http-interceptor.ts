import axios from 'axios';
import router from '@/router';
import { readJwt } from '@/helper/auth';

export function setAxiosHttpInterceptor(jwtToken: string) {
  axios.defaults.headers.common['X-App-Auth-Token'] = jwtToken;
}

export function setupAxiosInterceptor() {
  setAxiosHttpInterceptor(readJwt());
  axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (error.response.status === 401) {
        router.push('/login');
      }
      throw error;
    }
  );
}
