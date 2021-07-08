import React from "react";
import styles from "./Drawer.module.css";
import DrawerArrowButton from "./components/DrawerArrowButton";
import { DrawerProps } from "./interface";

export const Drawer: React.FC<DrawerProps> = (props) => {
  return (
    <div
      className={`${styles.container} ${
        props.isOpen && styles.containerIsOpen
      }`}
    >
      {props.children}
      <DrawerArrowButton
        isOpen={props.isOpen}
        onOpen={props.onOpen}
        onClose={props.onClose}
      />
    </div>
  );
};
