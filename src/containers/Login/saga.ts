import { put, call, takeLatest } from "redux-saga/effects";
import {
  POST_LOGIN_REQUEST,
  postLoginSuccess,
  postLoginError,
  LoginActionsTypes,
} from "./actions";
import { AxiosResponse } from "axios";
import apiAxiosClient from "../../api/axiosApi";
import { LoginResponse, ResponseToken } from "./intreface";
import FormService from "../../services/FormService/FormService";
import { authSucces } from "../../utils/Auth/action";
import history from "../../history";

const setToken = (token: ResponseToken) => {
  localStorage.setItem("tokenAccess", token.access);
  localStorage.setItem("tokeRefresh", token.refresh);
};

export function* onLoginUser(action: LoginActionsTypes) {
  try {
    const postRequestLoginData = FormService.convertFormFieldArrayToObject(
      action.payload
    );
    const response: AxiosResponse<LoginResponse> = yield call(
      apiAxiosClient.post,
      "api/auth/sign-in",
      postRequestLoginData
    );
    yield setToken(response.data.token);
    yield put(authSucces(response.data.id));
    yield history.push("/auth");
    yield put(postLoginSuccess());
  } catch (error) {
    console.dir(error);
    let serverErrorMessage = error.toString();
    if (error.response) {
      serverErrorMessage = error.response.data.errors[0];
    } else if (error.message === "Network Error") {
      serverErrorMessage = "Server today shalit";
    }
    yield put(postLoginError(serverErrorMessage));
  }
}

export default function* registerSaga() {
  yield takeLatest(POST_LOGIN_REQUEST, onLoginUser);
}
