import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Drawer from "../Drawer";

export const Sidebar: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenDrawer = () => {
    setIsOpen(true);
  };

  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <Drawer isOpen={isOpen} onOpen={onOpenDrawer} onClose={onCloseDrawer}>
        {props.children}
      </Drawer>
    </div>
  );
};
