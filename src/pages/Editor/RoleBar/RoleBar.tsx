import React from "react";
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
import { useGetProcessByIdQuery } from "@/shared/state/apis/processApi";

export const RoleBar = () => {
  const { data } = useGetProcessByIdQuery("1");

  const handlers = useGesture({
    onDrag: ({ args: [type, name] }) => {},
  });

  return (
    <RoleBarContainer>
      <Title>Roles</Title>
      <DragIconContainer>
        <RoleDragIcon {...handlers("human", "")}>
          <Icon type="human-internal" />
        </RoleDragIcon>
        <RoleDragIcon {...handlers("service", "")}>
          <Icon type="service-internal" />
        </RoleDragIcon>
        <RoleDragIcon {...handlers("repository", "")}>
          <Icon type="repository-internal" />
        </RoleDragIcon>
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
