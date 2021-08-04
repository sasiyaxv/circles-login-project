import { call, put, takeLatest } from "@redux-saga/core/effects";
import { doFetch } from "../FetchApi";
import { sagaLogin } from "./actions";

export function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* userLogin({ payload }) {
  try {
    const user = yield call(doFetch, payload.userName, payload.passWord);
    yield put({ type: "LOGIN_RESPONSE", payload: user });
  } catch (e) {
    yield put({ type: sagaLogin, message: e.message });
  }
}

export function* getUserData() {}

export function* mySaga() {
  yield takeLatest("SAGALOGIN", userLogin);
}
