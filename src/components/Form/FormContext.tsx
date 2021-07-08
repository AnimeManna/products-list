import { createContext, useContext } from "react";
import { FormTextFieldInput } from "./interface";

export interface FormContextInterface {
  formContext: FormTextFieldInput[];
  onRegisterField: (arg0: FormTextFieldInput) => void;
  onChangeField: (arg0: FormTextFieldInput) => void;
}

export const FormContext = createContext({} as FormContextInterface);

export const useFormContext = () => useContext(FormContext);
