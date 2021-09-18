import { useGesture } from "@use-gesture/react";
import { Abstract, Body, Container, Title } from "./styles";
import { RoleType } from "@/shared/types/editor";
import { Icon } from "@/shared/components/Icon/Icon";
import { roleDimentions } from "@/shared/constants/editorConfigs";
import { RoleMenu } from "../RoleMenu/RoleMenu";
import { useUpdateRole } from "@/shared/api/role";
import { useStore } from "@/shared/state/store";

type RoleProps = {
  role: RoleType;
};

export const Role = ({ role }: RoleProps) => {
  const { x, y } = useStore((state) => state.rolePositions[role.id]);
  const zoom = useStore((state) => state.zoom);
  const activeItemId = useStore((state) => state.activeItemId);
  const setActiveItem = useStore((state) => state.setActiveItemId);
  const setPosition = useStore((state) => state.setPosition);
  const updateRole = useUpdateRole(role.id);

  const isActive = activeItemId === role.id;

  const roleHandlers = useGesture(
    {
      onDrag: ({ delta: [dx, dy] }) =>
        setPosition({ id: role.id, x: x + dx / zoom, y: y + dy / zoom }),
      onDragEnd: () => updateRole.mutate({ id: role.id, x, y, role: "repository" }),
      onClick: () => setActiveItem(role.id),
      onContextMenu: ({ event }) => event.preventDefault(),
    },
    { drag: { filterTaps: true } }
  );

  return (
    <Container
      {...roleHandlers()}
      height={roleDimentions.height}
      width={roleDimentions.width}
      active={isActive}
      x={x}
      y={y}
    >
      <Title>
        <Icon type={`${role.role}-${role.solutionUse}`} />
        {role.abstract && <Abstract>Abstract</Abstract>}
        {role.numberOfActors}
      </Title>
      <Body>{role.name}</Body>
      {isActive && <RoleMenu zoom={zoom} />}
    </Container>
  );
};
