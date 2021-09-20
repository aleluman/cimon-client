import { useState } from "react";
import { toast } from "react-toastify";
import { useGesture } from "@use-gesture/react";
import { Tooltip } from "@/shared/components/Tooltip/Tooltip";
import { useStore } from "@/shared/state/store";
import { ButtonConnector } from "./styles";
import { Position } from "@/shared/types/editor";
import { getConnectedNodesIds } from "@/shared/utils/connectedNodes";
import { useCreateInteraction } from "@/shared/api/interaction";
import { createInteraction } from "@/shared/utils/createItems";
import { theme } from "@/shared/configs/stitches";

const calculateHoverNode = (update: Position) => {
  const rolesPositionsRecord = useStore.getState().rolePositions;
  const rolesPositions = Object.values(rolesPositionsRecord);
  const isHovering = rolesPositions.some((position) => {
    if (
      update.x >= position.x &&
      update.x <= position.x + 16 * 8 &&
      update.y >= position.y &&
      update.y <= position.y + 16 * 5
    ) {
      useStore.setState({ roleBeingHovered: position.id });
      return true;
    }
    return false;
  });
  if (!isHovering) useStore.setState({ roleBeingHovered: "" });
};

type RoleConnectorProps = {
  active: boolean;
  roleId: string;
  nodeX: number;
  nodeY: number;
};

export const RoleConnector = ({ active, roleId, nodeX, nodeY }: RoleConnectorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [using, setUsing] = useState(false);
  const [hover, setHover] = useState(false);
  const currentZoom = useStore((state) => state.zoom);
  const hoveringNodeId = useStore((state) => state.roleBeingHovered);
  const setRoleBeingHovered = useStore((state) => state.setRoleBeingHovered);
  const setShowPlaceholderInteraction = useStore((state) => state.setShowPlaceholderInteraction);
  const setPlaceholderInteraction = useStore((state) => state.setPlaceholderInteraction);
  const postInteraction = useCreateInteraction();

  const connectedNodes = getConnectedNodesIds(roleId).map((item) => item.roleId);

  const handlers = useGesture({
    onDrag: ({ event, delta: [dx, dy] }) => {
      event.stopPropagation();
      event.preventDefault();
      setPosition({
        x: position.x + dx / currentZoom,
        y: position.y + dy / currentZoom,
      });
      setShowPlaceholderInteraction(true);
      setPlaceholderInteraction({
        startNodeId: roleId,
        start: { x: nodeX + 16 * 4, y: nodeY + 16 * 2.5 },
        end: { x: position.x + nodeX + 16 * 8, y: position.y + nodeY + 16 * 2.5 },
        color: `${
          hoveringNodeId && connectedNodes?.includes(hoveringNodeId) ? theme.colors.yellow : ""
        }`,
      });
      calculateHoverNode({ x: position.x + nodeX + 16 * 8, y: position.y + nodeY + 16 * 2.5 });
    },
    onDragStart: () => {
      setUsing(true);
    },
    onDragEnd: () => {
      setPosition({ x: 0, y: 0 });
      setUsing(false);
      setShowPlaceholderInteraction(false);
      setRoleBeingHovered("");
      if (hoveringNodeId) {
        if (connectedNodes?.includes(hoveringNodeId)) {
          toast.warning("Cannot create a link to an already linked role.");
        } else {
          const newInteraction = createInteraction({ source: roleId, target: hoveringNodeId });
          postInteraction.mutate(newInteraction);
        }
      }
    },
    onClick: ({ event }) => {
      event.preventDefault();
      event.stopPropagation();
    },
    onHover: (event) => {
      setHover(event.active);
    },
  });

  return (
    <Tooltip text="Connect role" isVisible={!using && hover} offset={[0, 12]}>
      <ButtonConnector
        onClick={(event) => event.stopPropagation()}
        active={active}
        type="button"
        tabIndex={-1}
        aria-label="connect"
        using={using}
        {...handlers()}
      />
    </Tooltip>
  );
};
