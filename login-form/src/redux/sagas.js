import { call, put, takeLatest } from "@redux-saga/core/effects";

import { doFetch, doFetchUserData, fetchSettingsData } from "../FetchApi";
import { sagaLogin } from "./actions";
import {
  SAGA_LOGIN_ACTION,
  GET_SETTINGS_ACTION,
  GET_SETTINGS_ACTION_SUCCESS,
  FETCH_DASHBOARD_DATA_ACTION,
  FETCH_DASHBOARD_DATA_ACTION_SUCCESS,
  GET_SETTINGS_ACTION_FAIL,
} from "./actions/actionTypes";

// REMEMBER TO ADD 2 TYPES OF ACTIONS

export function* getSettingsSaga() {
  try {
    const dataObj = yield call(fetchSettingsData);
    if (dataObj.loginHeader == "") {
      console.log("LOGIN HEADER IS NULL");
      yield put({ type: GET_SETTINGS_ACTION_FAIL, payload: dataObj });
    } else {
      yield put({ type: GET_SETTINGS_ACTION_SUCCESS, payload: dataObj });
    }
  } catch (e) {}
}

export function* userLogin({ payload, callback }) {
  try {
    const user = yield call(doFetch, payload.userName, payload.passWord);
    yield put({ type: "LOGIN_RESPONSE", payload: user });
    callback();
  } catch (e) {
    yield put({ type: sagaLogin, message: e.message });
  }
}

export function* getUserData() {
  try {
    const newUser = yield call(doFetchUserData);
    yield put({ type: FETCH_DASHBOARD_DATA_ACTION_SUCCESS, payload: newUser });
  } catch (e) {}
}

export function* mySaga() {
  yield takeLatest(SAGA_LOGIN_ACTION, userLogin);
  yield takeLatest(FETCH_DASHBOARD_DATA_ACTION, getUserData);
  yield takeLatest(GET_SETTINGS_ACTION, getSettingsSaga);
}
