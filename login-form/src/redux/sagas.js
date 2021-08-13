import { call, put, takeLatest } from "@redux-saga/core/effects";
import { doFetch, doFetchUserData, fetchSettingsData } from "../FetchApi";
import { sagaLogin } from "./actions";
import {
  SAGA_LOGIN,
  GET_SETTINGS,
  GET_SETTINGS_SUCCESS,
} from "./actions/actionTypes";

// REMEMBER TO ADD 2 TYPES OF ACTIONS

export function* getSettingsSaga() {
  try {
    const dataObj = yield call(fetchSettingsData);
    yield put({ type: GET_SETTINGS_SUCCESS, payload: dataObj });
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
    yield put({ type: "DASHBOARD_SUCCESS", payload: newUser });
  } catch (e) {}
}

export function* mySaga() {
  yield takeLatest(SAGA_LOGIN, userLogin);
  yield takeLatest("DASHBOARD_DATA", getUserData);
  yield takeLatest(GET_SETTINGS, getSettingsSaga);
}
