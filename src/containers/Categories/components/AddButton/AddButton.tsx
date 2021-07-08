import React from "react";
import styles from "./AddButton.module.css";

interface AddButtonProps {
  title: string;
  icon: React.ReactElement;
  onClick: () => void;
}

export const AddButton: React.FC<AddButtonProps> = (props) => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <p className={styles.title}>{props.title}</p>
      {props.icon}
    </div>
  );
};
