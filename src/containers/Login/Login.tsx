import React from "react";
import SingingPaper from "../../components/SingingPaper";
import Form from "../../components/Form";
import FormTextField from "../../components/Form/components/FormTextField";
import FormErrorMessage from "../../components/Form/components/FormErrorMessage";
import FormButton from "../../components/Form/components/FormButton";
import ValidateService from "../../services/ValidateService/ValidateService";
import { useSelector, useDispatch } from "react-redux";
import { postLoginRequest } from "./actions";
import { FormTextFieldInput } from "../../components/Form/interface";
import { RootReducerState } from "../../rootReducer";
import { RouteComponentProps } from "react-router";

export const Login: React.FC<RouteComponentProps> = (props) => {
  const dispatch = useDispatch();

  const sendLoginRequest = (loginRequestData: FormTextFieldInput[]) => {
    dispatch(postLoginRequest(loginRequestData));
  };

  const errorMessage = useSelector(
    (state: RootReducerState) => state.loginReducer.error
  );

  return (
    <SingingPaper title="Login">
      <Form onSubmit={sendLoginRequest}>
        <FormTextField
          name="login"
          onValidate={ValidateService.composeValidators(
            ValidateService.required,
            ValidateService.loginValidator
          )}
        />
        <FormTextField
          name="password"
          type={"password"}
          onValidate={ValidateService.composeValidators(
            ValidateService.required
          )}
        />
        <FormButton primary>Sing-in</FormButton>
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </Form>
    </SingingPaper>
  );
};
