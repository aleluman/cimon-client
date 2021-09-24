import { Process } from "../Process/Process";
import { Searchbar } from "../Searchbar/Searchbar";
import { ProcessesContainer, SidebarContainer, Title } from "./styles";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Title>My Processes</Title>
      <Searchbar />
      <ProcessesContainer>
        <Process />
        <Process active />
        <Process />
        <Process />
        <Process />
      </ProcessesContainer>
    </SidebarContainer>
  );
};
