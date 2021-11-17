import { useState } from "react";
import { useGetAllProcesses } from "@/shared/hooks/processes";
import { Button } from "@/shared/components/Button/Button";
import { Process } from "../Process/Process";
import { Searchbar } from "../Searchbar/Searchbar";
import { HelpText, ProcessesContainer, SidebarContainer, Title } from "./styles";
import { Icon } from "@/shared/components/Icon/Icon";
import { NewProcessModal } from "../NewProcessModal/NewProcessModal";

export const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [showProcessModal, setShowProcessModal] = useState(false);
  const { data, isLoading, isError } = useGetAllProcesses();

  const filteredProcesses = data?.filter((process) =>
    process.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SidebarContainer>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && (
        <>
          <Title>
            My Processes
            <Button color="secondary" onClick={() => setShowProcessModal(true)}>
              <Icon type="plus" />
              Add process
            </Button>
          </Title>
          {data.length > 0 && <Searchbar handler={setSearch} />}
          <ProcessesContainer>
            {filteredProcesses?.map((process) => (
              <Process key={process.id} process={process} />
            ))}
            {data.length === 0 && <HelpText>You don&apos;t have any processes.</HelpText>}
            {filteredProcesses?.length === 0 && (
              <HelpText>No processes match your search.</HelpText>
            )}
          </ProcessesContainer>
        </>
      )}
      <NewProcessModal show={showProcessModal} handler={setShowProcessModal} />
    </SidebarContainer>
  );
};
