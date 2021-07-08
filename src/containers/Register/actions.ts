import { RegisterResponseUser } from "./interface";
import { FormTextFieldInput } from "../../components/Form/interface";

export const POST_REGISTRATION_REQUEST = "POST_REGISTRATION_REQUEST" as const;
export const POST_REGISTRATION_SUCCESS = "POST_REGISTRATION_SUCCESS" as const;
export const POST_REGISTRATION_ERROR = "POST_REGISTRATION_ERROR" as const;

export const postRegistrationRequest = (
  registrationRequestData: FormTextFieldInput[]
) => {
  return {
    type: POST_REGISTRATION_REQUEST,
    payload: registrationRequestData,
  };
};

export const postRegistrationSuccess = (user: RegisterResponseUser) => {
  return {
    type: POST_REGISTRATION_SUCCESS,
    payload: user,
  };
};

export const postRegistrationError = (error: string) => {
  return {
    type: POST_REGISTRATION_ERROR,
    payload: error,
  };
};

export type RegisterActionsTypes =
  | ReturnType<typeof postRegistrationRequest>
  | ReturnType<typeof postRegistrationSuccess>
  | ReturnType<typeof postRegistrationError>;
