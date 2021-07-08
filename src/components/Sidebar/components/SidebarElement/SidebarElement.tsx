import React from "react";
import styles from "./SidebarElement.module.css";
import { SidebarElementProps } from "./interface";
import { Link } from "react-router-dom";

export const SidebarElement: React.FC<SidebarElementProps> = (props) => {
  return (
    <Link to={props.to} className={styles.container}>
      <p className={styles.title}>{props.children}</p>
      {props.icon}
    </Link>
  );
};
