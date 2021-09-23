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
import { useEditor } from "@/shared/state/store";
import { RoleSidebar } from "./RoleSidebar";
import { InteractionSidebar } from "./InteractionSidebar";
import { useGetGraph } from "@/shared/api/graph";

export const Sidebar = () => {
  const [hidden, setHidden] = useState(false);
  const activeItem = useEditor((state) => state.activeItem);
  const { data, isError, isLoading } = useGetGraph();

  return (
    <SidebarContainer hidden={hidden}>
      <SidebarWrapper>
        {isLoading && <Title>Loading...</Title>}
        {isError && <Title>Error</Title>}
        {data && (
          <>
            {activeItem.type === "role" && <RoleSidebar roleId={activeItem.id} />}
            {activeItem.type === "interaction" && <InteractionSidebar />}
            {activeItem.type === "none" && (
              <>
                <Title>
                  Properties of <TitleName>{data.name}</TitleName>
                </Title>
                <SubTitle>Description:</SubTitle>
                <Description
                  name="description"
                  id="description"
                  placeholder="Add a description here..."
                  defaultValue={data.description}
                />
                <Help>Select a role or an interaction to view and edit its details.</Help>
              </>
            )}
            <HideButton onClick={() => setHidden((prev) => !prev)}>
              <Icon type={hidden ? "arrow-left" : "arrow-right"} color="var(--white)" size={12} />
            </HideButton>
          </>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};
