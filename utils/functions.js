const LS_KEY = "USER_LOGGED_IN";
const LS_VALUE = "IS_LOGGED_IN";

export function isLoggedIn() {
  return localStorage.getItem(LS_KEY) == LS_VALUE;
}

export function logIn() {
  return localStorage.setItem(LS_KEY, LS_VALUE);
}

export function logout(){
    return localStorage.removeItem(LS_KEY);
}
