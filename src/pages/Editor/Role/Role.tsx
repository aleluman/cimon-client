import { useState } from "react";
import { useGesture } from "@use-gesture/react";
import { Abstract, Body, Container, Title } from "./styles";
import { RoleType } from "@/shared/types/editor";
import { Icon } from "@/shared/components/Icon/Icon";
import { RoleMenu } from "../RoleMenu/RoleMenu";
import { useUpdateRole } from "@/shared/api/role";
import { useStore } from "@/shared/state/store";
import { RoleConnector } from "../RoleConnector/RoleConnector";

type RoleProps = {
  role: RoleType;
};

export const Role = ({ role }: RoleProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { x, y } = useStore((state) => state.rolePositions[role.id]);
  const zoom = useStore((state) => state.zoom);
  const activeItem = useStore((state) => state.activeItem);
  const hoveringRoleId = useStore((state) => state.roleBeingHovered);
  const setActiveItem = useStore((state) => state.setActiveItem);
  const setPosition = useStore((state) => state.setPosition);
  const updateRole = useUpdateRole(role.id);

  const isActive = activeItem.id === role.id;

  const isBeingHovered = hoveringRoleId === role.id;

  const roleHandlers = useGesture({
    onDrag: ({ delta: [dx, dy] }) =>
      setPosition({ id: role.id, x: x + dx / zoom, y: y + dy / zoom }),
    onDragEnd: () => updateRole.mutate({ x, y }),
    onHover: ({ active }) => setIsHovering(active),
    onClick: () => setActiveItem({ id: role.id, type: "role" }),
    onContextMenu: ({ event }) => event.preventDefault(),
  });

  return (
    <Container
      active={isActive}
      beingHovered={isBeingHovered}
      css={{ transform: `translate3d(${x}px,${y}px,0)` }}
      {...roleHandlers()}
    >
      <Title>
        <Icon type={`${role.role}-${role.solutionUse}`} />
        {role.abstract && <Abstract />}
        {role.numberOfActors}
      </Title>
      <Body>{role.name}</Body>
      {(isHovering || isActive) && (
        <RoleConnector active={isActive} roleId={role.id} nodeX={x} nodeY={y} />
      )}
      {isActive && <RoleMenu zoom={zoom} />}
    </Container>
  );
};
