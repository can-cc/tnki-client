
export function setJwtToken(jwtToken: string) {
  window.localStorage.setItem('jwt_token', jwtToken);
}

export function readJwt(): string {
  return window.localStorage.getItem('jwt_token')!;
}
