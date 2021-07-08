import React from "react";
import styles from "./DrawerArrowButton.module.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { DrawerProps } from "../../interface";

export const DrawerArrowButton: React.FC<DrawerProps> = (props) => {
  return (
    <div className={styles.container}>
      {props.isOpen ? (
        <ArrowBackIosIcon onClick={props.onClose} />
      ) : (
        <ArrowForwardIosIcon onClick={props.onOpen} />
      )}
    </div>
  );
};
