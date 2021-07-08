import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
  LoginActionsTypes,
} from "./actions";

import { LoginReducerInitialState } from "./intreface";
import { FormTextFieldInput } from "../../components/Form/interface";

const initialState: LoginReducerInitialState = {
  user: [] as FormTextFieldInput[],
  isLoading: false,
  error: "",
};

export const loginReducer = (
  state: LoginReducerInitialState = initialState,
  action: LoginActionsTypes
) => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
        isLoading: true,
        error: "",
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
      };
    case POST_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
