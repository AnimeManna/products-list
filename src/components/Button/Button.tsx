import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./intreface";

export const Button: React.FC<ButtonProps> = ({ primary, ...buttonProps }) => {
  return (
    <button
      onClick={buttonProps.onClick}
      className={`${styles.container} ${buttonProps.className} ${
        primary && styles.primary
      } ${buttonProps.disabled && styles.disabled}`}
      {...buttonProps}
    >
      {buttonProps.children}
    </button>
  );
};
