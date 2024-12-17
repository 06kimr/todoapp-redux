import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import {  login as loginApi } from "../services/userApi";
import { login, setUser } from "../slices/commonSlice";

function* loginSaga(
  action: PayloadAction<{ username: string; password: string }>
) {
  const user: { username: string } = yield call(
    loginApi,
    action.payload.username,
    action.payload.password
  );

  yield put(setUser(user));
}

export function* commonSaga() {
  yield takeLatest(login, loginSaga);
}
