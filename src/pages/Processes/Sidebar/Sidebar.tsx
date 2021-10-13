import { useState } from "react";
import { useGetAllProcesses } from "@/shared/api/processes";
import { Button } from "@/shared/components/Button/Button";
import { Modal } from "@/shared/components/Modal/Modal";
import { Process } from "../Process/Process";
import { Searchbar } from "../Searchbar/Searchbar";
import {
  ModalButtonContainer,
  ModalInput,
  ModalLabel,
  ModalTextarea,
  ModalTitle,
  ProcessesContainer,
  SidebarContainer,
  Title,
} from "./styles";
import { Select } from "@/shared/components/Select/Select";
import { categories } from "@/shared/constants/categories";

export const Sidebar = () => {
  const [showProcessModal, setShowProcessModal] = useState(false);
  const { data, isLoading, isError } = useGetAllProcesses();

  return (
    <SidebarContainer>
      {data && (
        <>
          <Title>
            My Processes
            <Button icon="plus" variant="secondary" onClick={() => setShowProcessModal(true)}>
              Add process
            </Button>
          </Title>
          <Searchbar />
          <ProcessesContainer>
            {data.map((process) => (
              <Process key={process.id} process={process} />
            ))}
          </ProcessesContainer>
        </>
      )}
      <Modal isOpen={showProcessModal} setIsOpen={setShowProcessModal}>
        <ModalTitle>Add process</ModalTitle>
        <ModalLabel>
          Name
          <ModalInput type="text" />
        </ModalLabel>
        <ModalLabel>
          Type
          <Select options={categories} handler={() => {}} selectedValue="generic" />
        </ModalLabel>
        <ModalLabel>
          Objective
          <ModalTextarea />
        </ModalLabel>
        <ModalLabel>
          Description
          <ModalTextarea css={{ height: "8rem" }} />
        </ModalLabel>
        <ModalButtonContainer>
          <Button variant="secondary" onClick={() => {}}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {}}>
            Create
          </Button>
        </ModalButtonContainer>
      </Modal>
    </SidebarContainer>
  );
};
