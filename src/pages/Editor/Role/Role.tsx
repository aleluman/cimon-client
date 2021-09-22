import { useRef, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { Abstract, Body, Container, Name, Title } from "./styles";
import { RoleType } from "@/shared/types/editor";
import { Icon } from "@/shared/components/Icon/Icon";
import { RoleMenu } from "../RoleMenu/RoleMenu";
import { useDeleteRole, useUpdateRole } from "@/shared/api/role";
import { useEditor } from "@/shared/state/store";
import { RoleConnector } from "../RoleConnector/RoleConnector";

type RoleProps = {
  role: RoleType;
};

export const Role = ({ role }: RoleProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { x, y } = useEditor((state) => state.rolePositions[role.id]);
  const zoom = useEditor((state) => state.zoom);
  const activeItem = useEditor((state) => state.activeItem);
  const hoveringRoleId = useEditor((state) => state.roleBeingHovered);
  const doingAction = useEditor((state) => state.doingAction);
  const setActiveItem = useEditor((state) => state.setActiveItem);
  const setPosition = useEditor((state) => state.setPosition);
  const setDoingAction = useEditor((state) => state.setDoingAction);
  const updateRole = useUpdateRole(role.id);
  const deleteRole = useDeleteRole();

  const containerRef = useRef<HTMLDivElement>(null);

  const isActive = activeItem.id === role.id;

  const isBeingHovered = hoveringRoleId === role.id;

  const roleHandlers = useGesture({
    onDragStart: () => {
      setDoingAction(true);
    },
    onDrag: ({ delta: [dx, dy] }) =>
      setPosition({ id: role.id, x: x + dx / zoom, y: y + dy / zoom }),
    onDragEnd: ({ tap }) => {
      if (tap) setActiveItem({ id: role.id, type: "role" });
      else updateRole.mutate({ x, y });
      setDoingAction(false);
    },
    onHover: ({ active }) => setIsHovering(active),
    onKeyDown: ({ event }) => {
      const { key } = event;
      if (key === "Delete") {
        deleteRole.mutate(role.id);
      }
    },
    onContextMenu: ({ event }) => event.preventDefault(),
  });

  return (
    <>
      <Container
        {...roleHandlers()}
        ref={containerRef}
        active={isActive}
        beingHovered={isBeingHovered}
        tabIndex={0}
        css={{ transform: `translate3d(${x}px,${y}px,0)` }}
      >
        <Title>
          <Icon type={`${role.role}-${role.solutionUse}`} />
          {role.abstract && <Abstract />}
          {role.numberOfActors}
        </Title>
        <Body>
          <Name>{role.name}</Name>
        </Body>
        {(isHovering || isActive) && (
          <RoleConnector active={isActive} roleId={role.id} nodeX={x} nodeY={y} />
        )}
      </Container>
      {isActive && !doingAction && <RoleMenu parentRef={containerRef} />}
    </>
  );
};
