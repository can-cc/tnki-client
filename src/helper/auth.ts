import axios from 'axios'

export function setJwt(jwt: string) {
  window.localStorage.setItem('jwt', jwt);
  axios.defaults.headers.common['jwt'] = jwt;
}

export function readJwt() {
  return window.localStorage.getItem('jwt');
}
