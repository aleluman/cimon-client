import { useGetAllProcesses } from "@/shared/api/processes";
import { Process } from "../Process/Process";
import { Searchbar } from "../Searchbar/Searchbar";
import { ProcessesContainer, SidebarContainer, Title } from "./styles";

export const Sidebar = () => {
  const { data, isLoading, isError } = useGetAllProcesses();

  return (
    <SidebarContainer>
      {data && (
        <>
          <Title>My Processes</Title>
          <Searchbar />
          <ProcessesContainer>
            {data.map((process) => (
              <Process key={process.id} process={process} />
            ))}
          </ProcessesContainer>
        </>
      )}
    </SidebarContainer>
  );
};
