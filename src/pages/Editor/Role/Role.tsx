import React from "react";
import { useGesture } from "@use-gesture/react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { updatePosition } from "@/shared/state/slices/positions";
import { Abstract, Body, Container, Title } from "./styles";
import { RoleType } from "@/shared/types/editor";
import { Icon } from "@/shared/components/Icon/Icon";
import { roleDimentions } from "@/shared/constants/editorConfigs";
import { useUpdateRoleMutation } from "@/shared/state/slices/api";
import { setActiveItem } from "@/shared/state/slices/editor";
import { activeItemSelector, positionSelector, zoomSelector } from "@/shared/state/selectors";

type RoleProps = {
  role: RoleType;
};

export const Role = ({ role }: RoleProps) => {
  const { x, y } = useAppSelector(positionSelector(role.id));
  const zoom = useAppSelector(zoomSelector);
  const activeItemId = useAppSelector(activeItemSelector);
  const [updateRole] = useUpdateRoleMutation();
  const dispatch = useAppDispatch();

  const roleHandlers = useGesture(
    {
      onDrag: ({ delta: [dx, dy] }) => {
        dispatch(updatePosition({ id: role.id, x: x + dx / zoom, y: y + dy / zoom }));
      },
      onDragEnd: () => {
        updateRole({ id: role.id, x, y });
      },
      onClick: () => {
        dispatch(setActiveItem(role.id));
      },
      onContextMenu: ({ event }) => {
        event.preventDefault();
      },
    },
    { drag: { filterTaps: true } }
  );

  return (
    <Container
      {...roleHandlers()}
      height={roleDimentions.height}
      width={roleDimentions.width}
      active={activeItemId === role.id}
      x={x}
      y={y}
    >
      <Title>
        <Icon type={`${role.role}-${role.solutionUse}`} />
        {role.abstract && <Abstract>Abstract</Abstract>}
        {role.numberOfActors}
      </Title>
      <Body>{role.name}</Body>
    </Container>
  );
};
