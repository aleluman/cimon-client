import { ActionsToolbar } from "@/shared/components/ActionsToolbar/ActionsToolbar";
import { SidebarContainer } from "./styles";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <ActionsToolbar inMockup />
    </SidebarContainer>
  );
};
