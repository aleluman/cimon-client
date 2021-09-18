import { useState } from "react";
import { Icon } from "@/shared/components/Icon/Icon";
import {
  Description,
  Help,
  HideButton,
  SidebarContainer,
  SidebarWrapper,
  SubTitle,
  Title,
  TitleName,
} from "./styles";
import { useStore } from "@/shared/state/store";
import { RoleSidebar } from "./RoleSidebar";
import { InteractionSidebar } from "./InteractionSidebar";

export const Sidebar = () => {
  const [hidden, setHidden] = useState(false);
  const activeItem = useStore((state) => state.activeItem);

  return (
    <SidebarContainer hidden={hidden}>
      <SidebarWrapper>
        {activeItem.type === "role" && <RoleSidebar roleId={activeItem.id} />}
        {activeItem.type === "interaction" && <InteractionSidebar />}
        {activeItem.type === "none" && (
          <>
            <Title>
              Properties of <TitleName>Home care</TitleName>
            </Title>
            <SubTitle>Description:</SubTitle>
            <Description
              name="description"
              id="description"
              placeholder="Add a description here..."
            />
            <Help>Select a role or an interaction to view and edit its details.</Help>
          </>
        )}
        <HideButton onClick={() => setHidden((prev) => !prev)}>
          <Icon type={hidden ? "arrow-left" : "arrow-right"} color="var(--white)" />
        </HideButton>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
