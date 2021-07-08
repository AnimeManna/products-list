import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export const Modal: React.FC<ModalProps> = (props) => {
  if (props.isOpen)
    return (
      <div className={styles.container}>
        <div className={styles.blur} onClick={props.onClose} />
        <div className={styles.component}>{props.children}</div>
      </div>
    );

  return null;
};
