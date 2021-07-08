import React, { useState } from "react";
import { FormContext } from "./FormContext";
import { FormTextFieldInput, FormProps } from "./interface";
import styles from "./Form.module.css";

export const Form: React.FC<FormProps> = (props) => {
  const [formContext, setFormContext] = useState<any>([]);

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.onSubmit(formContext);
  };

  const onRegisterField = (field: FormTextFieldInput) => {
    setFormContext((prevContext: FormTextFieldInput[]) => [
      ...prevContext,
      field,
    ]);
  };

  const onChangeField = (field: FormTextFieldInput) => {
    setFormContext((prevContext: FormTextFieldInput[]) =>
      prevContext.map((contextField: FormTextFieldInput) => {
        if (contextField.name !== field.name) {
          return contextField;
        }
        return field;
      })
    );
  };

  return (
    <form
      onSubmit={formSubmit}
      className={`${styles.container} ${props.className}`}
    >
      <div className={styles.formFields}>
        <FormContext.Provider
          value={{ formContext, onRegisterField, onChangeField }}
        >
          {props.children}
        </FormContext.Provider>
      </div>
    </form>
  );
};
