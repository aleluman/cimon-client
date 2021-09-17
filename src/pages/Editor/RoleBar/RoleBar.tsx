import React from "react";
import { useGesture } from "@use-gesture/react";
import { Icon } from "@/shared/components/Icon/Icon";
import {
  DragIconContainer,
  ListContainer,
  ListItem,
  ListItemText,
  RoleBarContainer,
  RoleSpan,
  Subtitle,
  Title,
} from "./styles";
import { useGetProcessByIdQuery } from "@/shared/state/apis/processApi";
import { DragIcon } from "../DragIcon/DragIcon";

export const RoleBar = () => {
  const { data } = useGetProcessByIdQuery("1");

  const handlers = useGesture({
    onDrag: ({ args: [type, name] }) => {},
  });

  return (
    <RoleBarContainer>
      <Title>Roles</Title>
      <DragIconContainer>
        <RoleSpan {...handlers("human", "")}>
          <DragIcon type="human" />
        </RoleSpan>
        <RoleSpan {...handlers("service", "")}>
          <DragIcon type="service" />
        </RoleSpan>
        <RoleSpan {...handlers("repository", "")}>
          <DragIcon type="repository" />
        </RoleSpan>
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
