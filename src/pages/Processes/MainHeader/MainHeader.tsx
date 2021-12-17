import { FocusEvent, useEffect, useState, KeyboardEvent } from "react";
import { toast } from "react-toastify";
import { useProcess } from "@/shared/hooks/process";
import { Button } from "@/shared/components/Button/Button";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { getRelativeTime } from "@/shared/utils/relativeTime";
import { LastEditedText, ContentTitle, ContentTitleContainer, ProcessName } from "./styles";
import { Modal } from "@/shared/components/Modal/Modal";
import { ModalFooterContainer, ModalText, ModalTitle } from "@/shared/components/Modal/styles";
import { Input } from "@/shared/components/Input/Input";

type MainHeaderProps = {
  process: ProcessType;
};

export const MainHeader = ({ process }: MainHeaderProps) => {
  const [isRenaming, setIsRenaming] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [timeMessage, setTimeMessage] = useState(getRelativeTime(new Date(process.lastEdited)));
  const { deleteProcess, updateProcess } = useProcess();

  useEffect(() => {
    setTimeMessage(getRelativeTime(new Date(process.lastEdited)));
    const updateInterval = setInterval(() => {
      setTimeMessage(getRelativeTime(new Date(process.lastEdited)));
    }, 60000);
    return () => {
      clearInterval(updateInterval);
    };
  }, [process.id, process.lastEdited]);

  const renameHandler = (event: FocusEvent | KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    const newName = target.value;
    if (newName.length === 0) toast("A process can't have an empty name", { type: "error" });
    else updateProcess.mutateAsync({ id: process.id, name: newName });
    setIsRenaming(false);
  };

  const keyboardHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === "Escape") renameHandler(event);
  };

  return (
    <ContentTitleContainer>
      <ContentTitle>
        <Icon type={process.category} size={24} color="$primary" />
        {!isRenaming && (
          <>
            <ProcessName>{process.name}</ProcessName>
            <Button color="secondary" onClick={() => setIsRenaming(true)}>
              <Icon type="edit" /> Rename
            </Button>
          </>
        )}
        {isRenaming && (
          <>
            <Input
              css={{ maxWidth: "12rem" }}
              defaultValue={process.name}
              autoFocus
              maxLength={90}
              onKeyDown={keyboardHandler}
              onBlur={renameHandler}
            />
            <Button css={{ marginLeft: "-8px" }}>OK</Button>
          </>
        )}
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
