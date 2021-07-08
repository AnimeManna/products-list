import React from "react";
import { Link } from "react-router-dom";
import styles from "./WorkSpacePreview.module.css";
import { WorkSpacePreviewInterface } from "./interface";

export const WorkSpacePreview: React.FC<WorkSpacePreviewInterface> = (
  props
) => {
  return (
    <Link to={`/work-space/${props.id}`} className={styles.container}>
      <div className={styles.blur} />
      <p className={styles.title}>{props.name}</p>
    </Link>
  );
};
