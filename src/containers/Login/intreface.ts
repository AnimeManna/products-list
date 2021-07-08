import { FormTextFieldInput } from "../../components/Form/interface";

export interface LoginReducerInitialState {
  user: FormTextFieldInput[];
  isLoading: boolean;
  error: string;
}

export interface ResponseToken {
  access: string;
  refresh: string;
}

export interface LoginResponse {
  id: string;
  token: ResponseToken;
}
