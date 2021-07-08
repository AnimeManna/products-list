import React from "react";
import styles from "./SingingPaper.module.css";

interface SingingPaperProps {
  title: string;
  children: React.ReactNode;
}

export const SingingPaper: React.FC<SingingPaperProps> = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.title}</p>
      {props.children}
    </div>
  );
};
