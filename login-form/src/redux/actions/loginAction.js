import {
  INCREMENT,
  DECREMENT,
  LOGIN,
  SAGALOGIN,
  DASHBOARDDATA,
} from "./actionTypes";

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

export function sagaLogin(userName, passWord) {
  return {
    type: SAGALOGIN,
    payload: {
      userName,
      passWord,
    },
    // callbackFn,
    // same as callbackFn:callbackFn
  };
}

export function getDashboardData(email, name, origin) {
  return {
    type: DASHBOARDDATA,
    payload: {
      email,
      name,
      origin,
    },
  };
}
