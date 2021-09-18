import { useGesture } from "@use-gesture/react";
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
import { useProcess } from "@/shared/api/process";

export const RoleBar = () => {
  const { data } = useProcess();

  const handlers = useGesture({
    onDrag: ({ args: [type, name] }) => {},
  });

  return (
    <RoleBarContainer>
      <Title>Roles</Title>
      <DragIconContainer>
        <Tooltip text="Human">
          <RoleDragIcon {...handlers("human", "")}>
            <Icon type="human-internal" />
          </RoleDragIcon>
        </Tooltip>
        <Tooltip text="Service">
          <RoleDragIcon {...handlers("service", "")}>
            <Icon type="service-internal" />
          </RoleDragIcon>
        </Tooltip>
        <Tooltip text="Repository">
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
};
