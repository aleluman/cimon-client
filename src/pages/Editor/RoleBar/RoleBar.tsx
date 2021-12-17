import { useParams } from "react-router-dom";
import { memo } from "react";
import { useGesture } from "@use-gesture/react";
import { toast } from "react-toastify";
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
import { useGetProcess } from "@/shared/hooks/process";
import { useEditor } from "@/shared/state/store";
import { getMousePositionInCanvas } from "@/shared/utils/mousePosition";
import { createName, createNewRole } from "@/shared/utils/createItems";
import { PlaceholderRoleType } from "@/shared/types/editor";
import { useRole } from "@/shared/hooks/role";
import { useGetAmbit } from "@/shared/hooks/ambit";

export const RoleBar = memo(() => {
  const setPlaceholderRole = useEditor((state) => state.setPlaceholderRole);
  const { ambitId, processId } = useParams();
  const { createRole } = useRole(ambitId as string);

  const { data } = useGetProcess(processId as string);

  const { data: ambitData } = useGetAmbit(ambitId as string);
  const names = ambitData?.graph.roles.map((role) => role.name);
  const isNameAvailable = !data?.roles.every((role) =>
    ambitData?.graph.roles.some((node) => node.name === role.name)
  );

  const handlers = useGesture({
    onDragStart: ({ args: [role, name], values: [x, y], tap }) => {
      const { translations, zoom } = useEditor.getState();
      const position = getMousePositionInCanvas(zoom, translations, { x, y });
      setPlaceholderRole({ name, role, x: position.x, y: position.y });
    },
    onDrag: ({ args: [role, name], delta: [dx, dy], tap }) => {
      if (tap) {
        toast("To add a role click the icon and drag it into the canvas.", { type: "warning" });
        setPlaceholderRole(null);
      } else {
        const { placeholderRole, zoom } = useEditor.getState();
        if (placeholderRole) {
          const position = {
            x: placeholderRole.x + dx / zoom,
            y: placeholderRole.y + dy / zoom,
          };
          setPlaceholderRole({ name, role, x: position.x, y: position.y });
        }
      }
    },
    onDragEnd: ({ args: [role, name], tap }) => {
      if (!tap) {
        const { placeholderRole } = useEditor.getState();
        const { x, y } = placeholderRole as PlaceholderRoleType;
        const newName = createName(role, ambitId as string);
        const newRole = createNewRole(name === "" ? newName : name, role, x, y);
        createRole.mutate({ newRole, newName: name === "" });
        setPlaceholderRole(null);
      }
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
      {data && isNameAvailable && (
        <>
          <Subtitle>Existing roles</Subtitle>
          <ListContainer>
            {data.roles
              .filter((role) => !names?.includes(role.name))
              .map((role) => (
                <ListItem key={role.id} {...handlers(role.role, role.name)}>
                  <Icon type={`${role.role}-internal`} size={12} />
                  <ListItemText>{role.name}</ListItemText>
                </ListItem>
              ))}
          </ListContainer>
        </>
      )}
    </RoleBarContainer>
  );
});
