import React, { useEffect, useState } from "react";
import Button from "../../../Button";
import { useFormContext } from "../../FormContext";
import { ButtonProps } from "../../../Button/intreface";
import { FormTextFieldInput } from "../../interface";

export const FormButton: React.FC<ButtonProps> = ({
  primary,
  ...buttonProps
}) => {
  const { formContext } = useFormContext();
  const [FormIsValid, setFormIsValid] = useState<boolean>(false);

  useEffect(() => {
    checkContextForValid();
  }, [formContext]);

  const checkContextForValid = () => {
    setFormIsValid(formContext.every((field: FormTextFieldInput) => field.isValid));
  };

  return (
    <Button disabled={!FormIsValid} primary={primary} {...buttonProps}>
      {buttonProps.children}
    </Button>
  );
};
