import { put, call, takeLatest } from "redux-saga/effects";
import { logInUser } from "../actions/user";
import { userActionTypes } from "../actions/user";
import { INVALID_VALUES_ERROR } from "../../errors/errors";
import userAuth from "./userAuth";

function* userWorker(action) {
  const result = yield call(userAuth, action.authData);
  if (result) {
    yield put(logInUser());
    action.navigate("/search");
  } else {
    action.setErrors({ password: INVALID_VALUES_ERROR });
  }
}

export function* userWatcher() {
  yield takeLatest(userActionTypes.AUTH_USER, userWorker);
}
