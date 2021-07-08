import React from "react";
import styles from "./WrapperHeader.module.css";
import SearchField from "../../../SearchField";

export const WrapperHeader: React.FC<any> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.search}>
        <SearchField />
      </div>
      <div>{props.actions}</div>
    </div>
  );
};
