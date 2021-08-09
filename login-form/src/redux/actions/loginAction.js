import {
  INCREMENT,
  DECREMENT,
  LOGIN,
  SAGA_LOGIN,
  DASHBOARD_DATA,
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
    type: SAGA_LOGIN,
    payload: {
      userName,
      passWord,
    },
    // callbackFn,
    // same as callbackFn:callbackFn
  };
}

export function getDashboardData() {
  return {
    type: DASHBOARD_DATA,
    payload: {},
  };
}

export function dashboardSuccess(user) {
  return {
    type: "DASHBOARD_SUCCESS",
    payload: user,
  };
}
