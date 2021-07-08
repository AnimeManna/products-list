import React from "react";
import { Search } from "@material-ui/icons";
import styles from "./SearchField.module.css";

export const SearchField: React.FC = (props) => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} {...props} />
      <Search />
    </div>
  );
};
