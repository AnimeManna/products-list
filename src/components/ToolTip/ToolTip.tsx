import React from "react";
import styles from "./ToolTip.module.css";

export const ToolTip: React.FC<any> = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};
