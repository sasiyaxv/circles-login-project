import {
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  POST_USER_LOGIN_ACTION,
  SAGA_LOGIN_ACTION,
  FETCH_DASHBOARD_DATA_ACTION,
  FETCH_DASHBOARD_DATA_ACTION_SUCCESS,
  GET_SETTINGS_ACTION,
  GET_SETTINGS_ACTION_SUCCESS,
  GET_SETTINGS_ACTION_FAIL,
} from "./actionTypes";

export function incrementBy(payload) {
  return { type: INCREMENT_ACTION, payload };
}

export function decrementBy(payload) {
  return { type: DECREMENT_ACTION, payload };
}

export function login(userName, passWord) {
  return {
    type: POST_USER_LOGIN_ACTION,
    payload: {
      userName,
      passWord,
    },
  };
}

export function sagaLogin(userName, passWord, callback) {
  return {
    type: SAGA_LOGIN_ACTION,
    payload: {
      userName,
      passWord,
    },
    callback,
    // callbackFn,
    // same as callbackFn:callbackFn
  };
}

export function getDashboardData() {
  return {
    type: FETCH_DASHBOARD_DATA_ACTION,
    payload: {},
  };
}

export function dashboardSuccess(user) {
  return {
    type: FETCH_DASHBOARD_DATA_ACTION_SUCCESS,
    payload: user,
  };
}

export function getDataConfigAction() {
  return {
    type: GET_SETTINGS_ACTION,
    payload: {},
  };
}

export function getDataConfigActionSuccess(dataObj) {
  return {
    type: GET_SETTINGS_ACTION_SUCCESS,
    payload: dataObj,
  };
}

export function getDataConfigActionFail(dataObj) {
  return {
    type: GET_SETTINGS_ACTION_FAIL,
    payload: dataObj,
  };
}
