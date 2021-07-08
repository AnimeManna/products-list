import {
  POST_REGISTRATION_ERROR,
  POST_REGISTRATION_SUCCESS,
  POST_REGISTRATION_REQUEST,
  RegisterActionsTypes,
} from "./actions";
import { RegisterReducerInitialState } from "./interface";
import { FormTextFieldInput } from "../../components/Form/interface";

const initialState: RegisterReducerInitialState = {
  postRequestData: [] as FormTextFieldInput[],
  user: {
    id: "",
    login: "",
    email: "",
  },
  isLoading: false,
  error: "",
};

export const registerReducer = (
  state: RegisterReducerInitialState = initialState,
  action: RegisterActionsTypes
) => {
  switch (action.type) {
    case POST_REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        postRequestData: action.payload,
        error: "",
      };
    case POST_REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: "",
      };
    case POST_REGISTRATION_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
