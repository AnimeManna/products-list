import React from "react";
import styles from "./Wrapper.module.css";

export const Wrapper: React.FC = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};
