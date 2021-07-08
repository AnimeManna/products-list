import { put, call, takeLatest } from "redux-saga/effects";
import {
  POST_REGISTRATION_REQUEST,
  postRegistrationSuccess,
  postRegistrationError,
  RegisterActionsTypes,
} from "./actions";
import { AxiosResponse } from "axios";
import FormService from "../../services/FormService/FormService";
import ValidateService from "../../services/ValidateService/ValidateService";
import { RegisterResponseUser } from "./interface";
import apiAxiosClient from "../../api/axiosApi";

function* onRegistrationUser(action: RegisterActionsTypes) {
  try {
    const postRequestRegisterData = FormService.convertFormFieldArrayToObject(
      action.payload
    );
    if (
      ValidateService.checkPasswordEqualsConfirmationPassword(
        postRequestRegisterData.password,
        postRequestRegisterData.confirmationPassword
      )
    ) {
      const response: AxiosResponse<RegisterResponseUser> = yield call(
        apiAxiosClient.post,
        "api/auth/sign-up",
        postRequestRegisterData
      );
      yield put(postRegistrationSuccess(response.data));
    } else {
      yield put(postRegistrationError("Confirm password isn't equal password"));
    }
  } catch (error) {
    let serverErrorMessage = error.toString();
    if (error.response.data) {
      serverErrorMessage = error.response.data.errors[0];
    }
    yield put(postRegistrationError(serverErrorMessage));
  }
}

export default function* registerSaga() {
  yield takeLatest(POST_REGISTRATION_REQUEST, onRegistrationUser);
}
