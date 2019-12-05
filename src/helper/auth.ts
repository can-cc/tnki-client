import axios from 'axios'

export function setJwt(jwt: string) {
  window.localStorage.setItem('jwt', jwt);
  axios.defaults.headers.common['jwt'] = jwt;
}

export function readJwt() {
  return window.localStorage.getItem('jwt');
}

export function setUserId(userId: number): void {
  window.localStorage.setItem('userId', userId.toString());
}

export function readUserId(): string {
  return window.localStorage.getItem('userId')!;
}
