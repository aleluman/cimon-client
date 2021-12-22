import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { useParams } from "react-router-dom";
import { Abstract, Body, Container, Name, NameInput, Title } from "./styles";
import { RoleType } from "@/shared/types/editor";
import { Icon } from "@/shared/components/Icon/Icon";
import { RoleMenu } from "../RoleMenu/RoleMenu";
import { useRole } from "@/shared/hooks/role";
import { queryClient, useEditor } from "@/shared/state/store";
import { RoleConnector } from "../RoleConnector/RoleConnector";
import { EditorRouteParams } from "@/shared/types/routes";
import { AmbitType } from "@/shared/types/process";
import { getAllInteractions } from "@/shared/utils/allInteractions";

type RoleProps = {
  role: RoleType;
};

export const Role = ({ role }: RoleProps) => {
  const { ambitId } = useParams<EditorRouteParams>();
  const [isHovering, setIsHovering] = useState(false);
  const { x, y } = useEditor((state) => state.rolePositions[ambitId as string][role.id]);
  const zoom = useEditor((state) => state.zoom);
  const activeItem = useEditor((state) => state.activeItem);
  const [isEditingName, setIsEditingName] = useState(activeItem.new);
  const hoveringRoleId = useEditor((state) => state.roleBeingHovered);
  const doingAction = useEditor((state) => state.doingAction);
  const setActiveItem = useEditor((state) => state.setActiveItem);
  const setAllRoleInteractions = useEditor((state) => state.setAllRoleInteractions);
  const setPosition = useEditor((state) => state.setPosition);
  const setDoingAction = useEditor((state) => state.setDoingAction);
  const stakeholderMode = useEditor((state) => state.stakeholderMode);
  const focusMode = useEditor((state) => state.focusMode);
  const [cursor, setCursor] = useState("default");
  const focused = useEditor((state) => state.focusedRoles.includes(role.id));
  const { updateRole, deleteRole } = useRole(ambitId as string);

  const containerRef = useRef<HTMLDivElement>(null);

  const isActive = activeItem.id === role.id;

  const isBeingHovered = hoveringRoleId === role.id;

  useEffect(() => {
    if (isActive && !isEditingName) containerRef.current?.focus();
  }, [isActive, isEditingName]);

  const roleHandlers = useGesture({
    onDragStart: () => {
      setDoingAction(true);
      setActiveItem({ id: role.id, type: "role" });
      setAllRoleInteractions(getAllInteractions(ambitId as string));
      setCursor("grabbing");
    },
    onDrag: ({ delta: [dx, dy] }) =>
      setPosition({ id: role.id, x: x + dx / zoom, y: y + dy / zoom }, ambitId as string),
    onDragEnd: ({ tap }) => {
      if (!tap) updateRole.mutate({ ...role, x, y });
      setDoingAction(false);
      setCursor("default");
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

  const inputHandlers = useGesture({
    onKeyDown: ({ event }) => {
      event.stopPropagation();
      const target = event.target as HTMLInputElement;
      const { key } = event;
      if (key === "Escape" || key === "Enter") {
        target.blur();
      }
    },
    onBlur: ({ event }) => {
      const target = event.target as HTMLInputElement;
      setIsEditingName(false);
      if (target.value !== "") {
        const roles = queryClient.getQueryData<AmbitType>(["ambit", ambitId])?.graph
          .roles as RoleType[];
        const isNameUsed = roles.some((item) => item.id !== role.id && item.name === target.value);
        if (isNameUsed) {
          toast.warning("There is already another role with that name.");
        } else if (target.value !== role.name) {
          updateRole.mutate({ ...role, name: target.value });
        }
      } else {
        toast.warning("Nodes can't have an empty name.");
      }
    },
  });

  return (
    <>
      <Container
        {...roleHandlers()}
        ref={containerRef}
        active={isActive}
        beingHovered={isBeingHovered}
        disabled={focusMode && !focused}
        tabIndex={0}
        css={{ transform: `translate3d(${x}px,${y}px,0)`, cursor }}
      >
        {!stakeholderMode && (
          <Title>
            <Icon type={`${role.role}-${role.solutionUse}`} />
            {role.abstract && <Abstract />}
            {role.numberOfActors}
          </Title>
        )}
        <Body onDoubleClick={() => setIsEditingName(true)}>
          {isEditingName ? (
            <NameInput
              maxLength={50}
              autoFocus
              defaultValue={activeItem.new ? "" : role.name}
              {...inputHandlers()}
            />
          ) : (
            <>
              {stakeholderMode && <Icon type={`${role.role}-internal`} size={32} />}
              <Name stakeholder={stakeholderMode}>{role.name}</Name>
            </>
          )}
        </Body>
        {(isHovering || isActive) && !focusMode && (
          <RoleConnector active={isActive} roleId={role.id} nodeX={x} nodeY={y} />
        )}
      </Container>
      {isActive && !doingAction && (
        <RoleMenu
          parentRef={containerRef}
          role={role}
          setEditing={setIsEditingName}
          stakeholder={stakeholderMode}
        />
      )}
    </>
  );
};
