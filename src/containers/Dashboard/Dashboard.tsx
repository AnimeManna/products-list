import React from "react";
import styles from "./Dashboard.module.css";
import WorkSpacePreview from "../../components/WorkSpacePreview";
import CreateWorkSpace from "../../components/CreateWorkSpace";
import { Link } from "react-router-dom";

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <WorkSpacePreview name={"WorkSpacePreview"} id="1" />

      <WorkSpacePreview name={"WorkSpacePreview"} id="2" />

      <WorkSpacePreview name={"WorkSpacePreview"} id="3" />

      <CreateWorkSpace />
    </div>
  );
};
