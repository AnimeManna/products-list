import { FormTextFieldInput } from "../../components/Form/interface";

export interface RegisterResponseUser {
  id: string;
  login: string;
  email: string;
}

export interface RegisterReducerInitialState {
  postRequestData: FormTextFieldInput[];
  user: RegisterResponseUser;
  isLoading: boolean;
  error: string;
}
