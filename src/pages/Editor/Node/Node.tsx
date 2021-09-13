import React from "react";
import { useGesture } from "@use-gesture/react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { updatePosition } from "@/shared/state/positions";
import { Abstract, Body, Container, Title } from "./styles";
import { Role } from "@/shared/types/editor";
import { Icon } from "@/shared/components/Icon/Icon";
import { nodeDimentions } from "@/shared/constants/editorConfigs";
import { useUpdateRoleMutation } from "@/shared/state/api";
import { setActiveItem } from "@/shared/state/editor";

type NodeProps = {
  node: Role;
};

export const Node = ({ node }: NodeProps) => {
  const { x, y } = useAppSelector((state) => state.positions[node.id]);
  const zoom = useAppSelector((state) => state.editor.zoom);
  const activeItemId = useAppSelector((state) => state.editor.activeItem);
  const [updateRole] = useUpdateRoleMutation();
  const dispatch = useAppDispatch();

  const nodeHandlers = useGesture(
    {
      onDrag: ({ delta: [dx, dy] }) => {
        dispatch(
          updatePosition({ id: node.id, x: x + dx / zoom, y: y + dy / zoom })
        );
      },
      onDragEnd: () => {
        updateRole({ id: node.id, x, y });
      },
      onClick: () => {
        dispatch(setActiveItem(node.id));
      },
      onContextMenu: ({ event }) => {
        event.preventDefault();
      },
    },
    { drag: { filterTaps: true } }
  );

  return (
    <Container
      {...nodeHandlers()}
      height={nodeDimentions.height}
      width={nodeDimentions.width}
      active={activeItemId === node.id}
      x={x}
      y={y}
    >
      <Title>
        <Icon type={`${node.role}-${node.solutionUse}`} />
        {node.abstract && <Abstract>Abstract</Abstract>}
        {node.numberOfActors}
      </Title>
      <Body>{node.name}</Body>
    </Container>
  );
};
