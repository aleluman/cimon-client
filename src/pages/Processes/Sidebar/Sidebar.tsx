import { useState } from "react";
import { useGetAllProcesses } from "@/shared/api/processes";
import { Button } from "@/shared/components/Button/Button";
import { Process } from "../Process/Process";
import { Searchbar } from "../Searchbar/Searchbar";
import { ProcessesContainer, SidebarContainer, Title } from "./styles";
import { Icon } from "@/shared/components/Icon/Icon";
import { NewProcessModal } from "../NewProcessModal/NewProcessModal";

export const Sidebar = () => {
  const [showProcessModal, setShowProcessModal] = useState(false);
  const { data, isLoading, isError } = useGetAllProcesses();

  return (
    <SidebarContainer>
      {data && (
        <>
          <Title>
            My Processes
            <Button color="secondary" onClick={() => setShowProcessModal(true)}>
              <Icon type="plus" />
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
      <NewProcessModal show={showProcessModal} handler={setShowProcessModal} />
    </SidebarContainer>
  );
};
