import { FormTextFieldInput } from "../../components/Form/interface";
import { History } from "history";

export const POST_LOGIN_REQUEST = "POST_LOGIN_REQUEST" as const;
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS" as const;
export const POST_LOGIN_ERROR = "POST_LOGIN_ERROR" as const;

export const postLoginRequest = (user: FormTextFieldInput[]) => {
  return { type: POST_LOGIN_REQUEST, payload: user };
};

export const postLoginSuccess = () => {
  return { type: POST_LOGIN_SUCCESS, payload: null };
};

export const postLoginError = (error: string) => {
  return { type: POST_LOGIN_ERROR, payload: error };
};

export type LoginActionsTypes =
  | ReturnType<typeof postLoginRequest>
  | ReturnType<typeof postLoginSuccess>
  | ReturnType<typeof postLoginError>;
