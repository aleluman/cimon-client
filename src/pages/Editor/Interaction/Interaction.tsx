import { useParams } from "react-router-dom";
import { useMemo, useRef } from "react";
import { useGesture } from "@use-gesture/react";
import { getMarkerAngle, getPath } from "../../../shared/utils/curves";
import { ClickPath, Path, PathContainer } from "./styles";
import { roleDimentions } from "@/shared/configs/editorConfigs";
import { InteractionType } from "@/shared/types/editor";
import { useEditor } from "@/shared/state/store";
import { useInteraction } from "@/shared/api/interaction";
import { Marker } from "../Marker/Marker";
import { EditorRouteParams } from "@/shared/types/routes";

type InteractionProps = {
  interaction: InteractionType;
};

export const Interaction = ({ interaction }: InteractionProps) => {
  const { ambitId } = useParams<EditorRouteParams>();
  const startPosition = useEditor((state) => state.rolePositions[ambitId][interaction.source]);
  const endPosition = useEditor((state) => state.rolePositions[ambitId][interaction.target]);
  const activeItem = useEditor((state) => state.activeItem);
  const setActiveItem = useEditor((state) => state.setActiveItem);
  const { deleteInteraction } = useInteraction();
  const pathRef = useRef<SVGPathElement>(null);

  const isActive = activeItem.type === "interaction" && activeItem.id === interaction.id;

  const startArrow = useMemo(
    () => interaction.targetServices.length > 0,
    [interaction.targetServices]
  );

  const endArrow = useMemo(
    () => interaction.sourceServices.length > 0 || interaction.inherit,
    [interaction.sourceServices, interaction.inherit]
  );

  const pathHandlers = useGesture({
    onClick: () => {
      setActiveItem({ id: interaction.id, type: "interaction" });
    },
    onKeyDown: ({ event }) => {
      const { key } = event;
      if (key === "Delete") {
        deleteInteraction.mutate(interaction.id);
      }
    },
  });

  const markerAngle =
    pathRef.current && startPosition && endPosition ? getMarkerAngle(pathRef.current) : 0;

  const curve = getPath(roleDimentions.width, roleDimentions.height, startPosition, endPosition);

  return (
    <PathContainer tabIndex={0} {...pathHandlers()}>
      <Marker
        id={interaction.id}
        active={isActive}
        inherit={interaction.inherit}
        angle={markerAngle}
      />
      <Path
        d={curve}
        active={activeItem.id === interaction.id}
        ref={pathRef}
        markerEnd={endArrow ? `url(#endMarker${interaction.id})` : "none"}
        markerStart={startArrow ? `url(#startMarker${interaction.id})` : "none"}
      />
      <ClickPath d={curve} />
    </PathContainer>
  );
};
