import { call, put, takeLatest } from "@redux-saga/core/effects";
import { doFetch, doFetchUserData } from "../FetchApi";
import { sagaLogin } from "./actions";

export function* userLogin({ payload }) {
  try {
    const user = yield call(doFetch, payload.userName, payload.passWord);
    yield put({ type: "LOGIN_RESPONSE", payload: user });
  } catch (e) {
    yield put({ type: sagaLogin, message: e.message });
  }
}
// export function* getUserData() {
//   try {
//     const newUser = yield call(doFetchUserData);
//   } catch (e) {
//     yield put({ type: "USER_DATA", message: e.message });
//   }
// }

export function* mySaga() {
  yield takeLatest("SAGALOGIN", userLogin);
}