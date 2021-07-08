import React from "react";
import styles from "./Paper.module.css";

export const Paper: React.FC = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};
