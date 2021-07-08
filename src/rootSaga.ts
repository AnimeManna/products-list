import { all } from "redux-saga/effects";
import registerSaga from "./containers/Register/saga";
import loginSaga from "./containers/Login/saga";

export const rootSaga = function* root() {
  yield all([registerSaga(), loginSaga()]);
};
