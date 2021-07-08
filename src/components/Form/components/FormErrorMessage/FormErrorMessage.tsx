import React from "react";
import styles from "./FormErrorMessage.module.css";
import { FormErrorMessageProps } from "./interface";

export const FormErrorMessage: React.FC<FormErrorMessageProps> = (props) => {
  return (
    <p className={`${styles.container} ${props.className}`}>{props.children}</p>
  );
};
