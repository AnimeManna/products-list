import React, { useState } from "react";
import styles from "./Categories.module.css";
import Wrapper from "../../components/Wrapper";
import WrapperHeader from "../../components/Wrapper/components/WrapperHeader";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import AddButton from "./components/AddButton";
import Modal from "../../components/Modal";
import Login from "../Login";
import { RouteComponentProps } from "react-router";

export const Categories: React.FC<RouteComponentProps> = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Wrapper>
      <WrapperHeader
        name="Categories"
        actions={
          <AddButton
            title="Add new category"
            icon={<PlaylistAddIcon />}
            onClick={onOpenModal}
          />
        }
      />
      <Modal isOpen={isOpenModal} onClose={onCloseModal}>
        Add new category
      </Modal>
    </Wrapper>
  );
};
