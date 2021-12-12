import { useParams } from "react-router-dom";
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
import { useEditor, usePreferences } from "@/shared/state/store";
import { RoleSidebar } from "./RoleSidebar";
import { InteractionSidebar } from "./InteractionSidebar";
import { useGetAmbit } from "@/shared/hooks/ambit";

export const Sidebar = () => {
  const showSidebar = usePreferences((state) => state.showSidebar);
  const setHidden = usePreferences((state) => state.setShowSidebar);
  const activeItem = useEditor((state) => state.activeItem);
  const mockupMode = useEditor((state) => state.mockupMode);

  const { ambitId } = useParams();

  const { data, isError, isLoading } = useGetAmbit(ambitId as string);

  return (
    <SidebarContainer
      hidden={!showSidebar}
      mockup={mockupMode && activeItem.type !== "none"}
      css={{ paddingTop: activeItem.type === "role" ? "0.4rem" : "1rem" }}
    >
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
            <HideButton onClick={() => setHidden(!showSidebar)}>
              <Icon
                type={showSidebar ? "arrow-right" : "arrow-left"}
                color="var(--white)"
                size={12}
              />
            </HideButton>
          </>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};
