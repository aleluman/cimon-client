import { Button } from "@/shared/components/Button/Button";
import { Modal } from "@/shared/components/Modal/Modal";
import { ModalFooterContainer, ModalText, ModalTitle } from "@/shared/components/Modal/styles";
import { useAmbit } from "@/shared/hooks/ambit";
import { usePhase } from "@/shared/hooks/phase";

type DeleteModalProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  type: "ambit" | "phase";
  name: string;
  id: string;
  processId: string;
};

export const DeleteModal = ({
  showModal,
  setShowModal,
  type,
  name,
  id,
  processId,
}: DeleteModalProps) => {
  const { deletePhase } = usePhase();
  const { deleteAmbit } = useAmbit();

  const operation = type === "ambit" ? deleteAmbit : deletePhase;

  const deleteHandler = async () => {
    await operation.mutateAsync({ id, processId });
    setShowModal(false);
  };

  return (
    <Modal isOpen={showModal} setIsOpen={setShowModal}>
      <ModalTitle>Warning</ModalTitle>
      <ModalText>
        Are you sure you want to delete the {type} {name}?
      </ModalText>
      <ModalFooterContainer>
        <Button color="secondary" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button
          color="danger"
          disabled={operation.isLoading}
          isWorking={operation.isLoading}
          css={{ width: "4rem", height: "2.1rem" }}
          onClick={deleteHandler}
        >
          {operation.isLoading ? " " : "Delete"}
        </Button>
      </ModalFooterContainer>
    </Modal>
  );
};
