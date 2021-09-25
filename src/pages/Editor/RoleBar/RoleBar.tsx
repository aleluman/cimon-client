import { memo } from "react";
import { useGesture } from "@use-gesture/react";
import { useParams } from "react-router-dom";
import { Icon } from "@/shared/components/Icon/Icon";
import {
  DragIconContainer,
  ListContainer,
  ListItem,
  ListItemText,
  RoleBarContainer,
  RoleDragIcon,
  Subtitle,
  Title,
} from "./styles";
import { Tooltip } from "@/shared/components/Tooltip/Tooltip";
import { useGetProcess } from "@/shared/api/process";
import { useEditor } from "@/shared/state/store";
import { getMousePositionInCanvas } from "@/shared/utils/mousePosition";
import { createName, createNewRole } from "@/shared/utils/createItems";
import { PlaceholderRoleType } from "@/shared/types/editor";
import { useRole } from "@/shared/api/role";
import { EditorRouteParams } from "@/shared/types/routes";

export const RoleBar = memo(() => {
  const setPlaceholderRole = useEditor((state) => state.setPlaceholderRole);
  const { ambitId } = useParams<EditorRouteParams>();
  const { createRole } = useRole();

  const { data } = useGetProcess();

  const handlers = useGesture({
    onDragStart: ({ args: [role, name], values: [x, y] }) => {
      const { translations, zoom } = useEditor.getState();
      const position = getMousePositionInCanvas(zoom, translations, { x, y });
      setPlaceholderRole({ name, role, x: position.x, y: position.y });
    },
    onDrag: ({ args: [role, name], delta: [dx, dy] }) => {
      const { placeholderRole, zoom } = useEditor.getState();
      if (placeholderRole) {
        const position = {
          x: placeholderRole.x + dx / zoom,
          y: placeholderRole.y + dy / zoom,
        };
        setPlaceholderRole({ name, role, x: position.x, y: position.y });
      }
    },
    onDragEnd: ({ args: [role, name] }) => {
      const { placeholderRole } = useEditor.getState();
      const { x, y } = placeholderRole as PlaceholderRoleType;
      const newName = createName(role, ambitId);
      const newRole = createNewRole(name === "" ? newName : name, role, x, y);
      createRole.mutate({ newRole, newName: name === "" });
      setPlaceholderRole(null);
    },
  });

  return (
    <RoleBarContainer>
      <Title>Roles</Title>
      <DragIconContainer>
        <Tooltip text="Human" tooltipPlacement="right">
          <RoleDragIcon {...handlers("human", "")}>
            <Icon type="human-internal" />
          </RoleDragIcon>
        </Tooltip>
        <Tooltip text="Service" tooltipPlacement="right">
          <RoleDragIcon {...handlers("service", "")}>
            <Icon type="service-internal" />
          </RoleDragIcon>
        </Tooltip>
        <Tooltip text="Repository" tooltipPlacement="right">
          <RoleDragIcon {...handlers("repository", "")}>
            <Icon type="repository-internal" />
          </RoleDragIcon>
        </Tooltip>
      </DragIconContainer>
      {data && (
        <>
          <Subtitle>Existing roles</Subtitle>
          <ListContainer>
            {data.roles.map((role) => (
              <ListItem key={role.id} {...handlers(role.type, role.name)}>
                <Icon type={`${role.type}-internal`} size={12} />
                <ListItemText>{role.name}</ListItemText>
              </ListItem>
            ))}
          </ListContainer>
        </>
      )}
    </RoleBarContainer>
  );
});
