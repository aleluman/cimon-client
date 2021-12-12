import { useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { getMarkerAngle, getPath } from "../../../shared/utils/curves";
import { ClickPath, Path, PathContainer } from "./styles";
import { roleDimentions } from "@/shared/constants/editorConfigs";
import { InteractionType } from "@/shared/types/editor";
import { useEditor } from "@/shared/state/store";
import { useInteraction } from "@/shared/hooks/interaction";
import { Marker } from "../Marker/Marker";

type InteractionProps = {
  interaction: InteractionType;
};

export const Interaction = ({ interaction }: InteractionProps) => {
  const [angle, setAngle] = useState(0);
  const { ambitId } = useParams();
  const startPosition = useEditor(
    (state) => state.rolePositions[ambitId as string][interaction.source]
  );
  const endPosition = useEditor(
    (state) => state.rolePositions[ambitId as string][interaction.target]
  );
  const activeItem = useEditor((state) => state.activeItem);
  const setActiveItem = useEditor((state) => state.setActiveItem);
  const { deleteInteraction } = useInteraction(ambitId as string);
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

  useEffect(
    () =>
      setAngle(
        pathRef.current && startPosition && endPosition ? getMarkerAngle(pathRef.current) : 0
      ),
    [startPosition, endPosition, pathRef]
  );

  const curve = getPath(roleDimentions.width, roleDimentions.height, startPosition, endPosition);

  return (
    <PathContainer tabIndex={0} {...pathHandlers()}>
      <Marker id={interaction.id} active={isActive} inherit={interaction.inherit} angle={angle} />
      <Path
        d={curve}
        active={activeItem.id === interaction.id}
        dashed={interaction.inherit}
        ref={pathRef}
        markerEnd={endArrow ? `url(#endMarkerInherit${interaction.id})` : "none"}
        markerStart={startArrow ? `url(#startMarker${interaction.id})` : "none"}
      />
      <ClickPath d={curve} />
    </PathContainer>
  );
};
