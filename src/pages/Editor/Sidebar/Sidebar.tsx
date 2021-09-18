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

export const Sidebar = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <SidebarContainer hidden={hidden}>
      <SidebarWrapper>
        <Title>
          Properties of <TitleName>Home care</TitleName>
        </Title>
        <SubTitle>Description:</SubTitle>
        <Description name="description" id="description" placeholder="Add a description here..." />
        <Help>Select a role or an interaction to view and edit its details.</Help>
        <HideButton onClick={() => setHidden((prev) => !prev)}>
          <Icon type={hidden ? "arrow-left" : "arrow-right"} color="var(--white)" />
        </HideButton>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
