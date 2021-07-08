import React from "react";
import SingingPaper from "../../components/SingingPaper";
import Form from "../../components/Form";
import FormTextField from "../../components/Form/components/FormTextField";
import FormErrorMessage from "../../components/Form/components/FormErrorMessage";
import FormButton from "../../components/Form/components/FormButton";
import { useSelector, useDispatch } from "react-redux";
import { RootReducerState } from "../../rootReducer";
import { postRegistrationRequest } from "./actions";
import { FormTextFieldInput } from "../../components/Form/interface";
import ValidateService from "../../services/ValidateService/ValidateService";

export const Register: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootReducerState) => state.registerReducer.isLoading
  );

  const error = useSelector(
    (state: RootReducerState) => state.registerReducer.error
  );

  const sendRegisterRequest = (registerRequestData: FormTextFieldInput[]) => {
    dispatch(postRegistrationRequest(registerRequestData));
  };

  const required = (value: string) => (value ? undefined : "Required");

  return (
    <div>
      <SingingPaper title="Register">
        <Form onSubmit={sendRegisterRequest}>
          <FormTextField
            name="email"
            autoComplete={"e-mail"}
            onValidate={ValidateService.composeValidators(
              ValidateService.required,
              ValidateService.emailValidator
            )}
          />
          <FormTextField
            name="login"
            autoComplete={"login"}
            onValidate={ValidateService.composeValidators(
              ValidateService.required,
              ValidateService.loginValidator
            )}
          />
          <FormTextField
            name="password"
            type="password"
            autoComplete={"new-password"}
            onValidate={ValidateService.composeValidators(
              ValidateService.required,
              ValidateService.passwordValidator
            )}
          />
          <FormTextField
            name="confirmationPassword"
            type="password"
            autoComplete={"new-password"}
            placeholder={"Repeat your password please"}
            onValidate={required}
          />
          <FormButton primary>Sing-up</FormButton>
          <FormErrorMessage>{error}</FormErrorMessage>
        </Form>
      </SingingPaper>
    </div>
  );
};
