import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  left: string | null;
  right: string | null;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.component}>{props.left}</div>
      <p className={styles.title}>Product-list</p>
      <div className={styles.component}>{props.right}</div>
    </div>
  );
};
