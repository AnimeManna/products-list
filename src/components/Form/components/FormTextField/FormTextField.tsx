import React, { useEffect, useState } from "react";
import { useFormContext } from "../../FormContext";
import { FormTextFieldProps } from "./interface";
import styles from "./FormTextField.module.css";
import { FaQuestionCircle } from "react-icons/fa";
import ToolTip from "../../../ToolTip";

export const FormTextField: React.FC<FormTextFieldProps> = ({
  onValidate,
  ...inputProps
}) => {
  const { onRegisterField, onChangeField } = useFormContext();
  const [valueIsValidMessage, setValueIsValidMessage] =
    useState<string | undefined>(undefined);
  const [isShowToolTip, setIsShowToolTip] = useState<boolean>(false);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isValueValid = checkValueforValid(event.target.value);
    onChangeField({
      name: inputProps.name,
      value: event.target.value,
      isValid: isValueValid,
    });
  };

  const checkValueforValid = (value: string) => {
    if (onValidate) {
      const isValueValid = onValidate(value);
      setValueIsValidMessage(isValueValid);
      return !Boolean(isValueValid);
    }
    return true;
  };

  const onShowToolTip = () => {
    setIsShowToolTip(true);
  };

  const onHideToolTip = () => {
    setIsShowToolTip(false);
  };

  useEffect(() => {
    onRegisterField({ name: inputProps.name, value: "", isValid: false });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.nameInput}>{inputProps.name}</p>
      <div
        className={`${styles.textField} ${
          valueIsValidMessage
            ? valueIsValidMessage === "required"
              ? styles.required
              : styles.error
            : null
        } `}
      >
        <input
          onChange={onChangeInput}
          className={styles.input}
          placeholder={`Enter your ${inputProps.name} please`}
          {...inputProps}
        />
        {valueIsValidMessage && (
          <div
            className={styles.errorMessageContainer}
            onMouseEnter={onShowToolTip}
            onMouseLeave={onHideToolTip}
          >
            <FaQuestionCircle className={styles.icon} />
            {isShowToolTip && <ToolTip>{valueIsValidMessage}</ToolTip>}
          </div>
        )}
      </div>
    </div>
  );
};
