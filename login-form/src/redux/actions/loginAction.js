import { INCREMENT, DECREMENT, LOGIN, SAGALOGIN } from "./actionTypes";

export function incrementBy(payload) {
  return { type: INCREMENT, payload };
}

export function decrementBy(payload) {
  return { type: DECREMENT, payload };
}

export function login(userName, passWord) {
  return {
    type: LOGIN,
    payload: {
      userName,
      passWord,
    },
  };
}

export function sagaLogin(userName, passWord, callbackFn) {
  return {
    type: SAGALOGIN,
    payload: {
      userName,
      passWord,
    },
    callbackFn,
    // same as callbackFn:callbackFn
  };
}
