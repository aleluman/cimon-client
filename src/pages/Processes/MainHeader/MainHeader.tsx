import { useEffect, useState } from "react";
import { useProcess } from "@/shared/hooks/process";
import { Button } from "@/shared/components/Button/Button";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { getRelativeTime } from "@/shared/utils/relativeTime";
import { LastEditedText, ContentTitle, ContentTitleContainer } from "./styles";
import { Modal } from "@/shared/components/Modal/Modal";
import { ModalFooterContainer, ModalText, ModalTitle } from "@/shared/components/Modal/styles";

type MainHeaderProps = {
  process: ProcessType;
};

export const MainHeader = ({ process }: MainHeaderProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [timeMessage, setTimeMessage] = useState(getRelativeTime(new Date(process.lastEdited)));
  const { deleteProcess } = useProcess();

  useEffect(() => {
    setTimeMessage(getRelativeTime(new Date(process.lastEdited)));
    const updateInterval = setInterval(() => {
      setTimeMessage(getRelativeTime(new Date(process.lastEdited)));
    }, 60000);
    return () => {
      clearInterval(updateInterval);
    };
  }, [process.id, process.lastEdited]);

  return (
    <ContentTitleContainer>
      <ContentTitle>
        <Icon type={process.category} size={24} color="$primary" />
        {process.name}
      </ContentTitle>
      <LastEditedText>Last edited {timeMessage}</LastEditedText>
      <Button color="secondary" onClick={() => setShowDeleteModal(true)}>
        <Icon type="delete" />
        Delete
      </Button>
      <Modal isOpen={showDeleteModal} setIsOpen={setShowDeleteModal}>
        <ModalTitle>Warning</ModalTitle>
        <ModalText>Are you sure you want to delete the process {process.name}?</ModalText>
        <ModalFooterContainer>
          <Button color="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button
            color="danger"
            disabled={deleteProcess.isLoading}
            isWorking={deleteProcess.isLoading}
            css={{ width: "4rem", height: "2.1rem" }}
            onClick={() => deleteProcess.mutate(process.id)}
          >
            {deleteProcess.isLoading ? " " : "Delete"}
          </Button>
        </ModalFooterContainer>
      </Modal>
    </ContentTitleContainer>
  );
};
