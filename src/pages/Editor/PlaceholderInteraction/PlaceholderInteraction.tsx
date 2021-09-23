import { useEditor } from "@/shared/state/store";
import { PlaceholderInteraction } from "@/shared/types/editor";
import { Circle, PlaceholderPath } from "./styles";

export const PlaceHolderInteraction = () => {
  const interaction = useEditor((state) => state.placeholderInteraction as PlaceholderInteraction);

  return (
    <g>
      <defs>
        <marker id="markerCircle" markerWidth="8" markerHeight="8" refX="3" refY="3">
          <Circle
            cx="3"
            cy="3"
            r="1.5"
            style={{ stroke: `${interaction.color ? interaction.color : ""}` }}
          />
        </marker>
      </defs>
      <PlaceholderPath
        d={`M ${interaction.start.x},${interaction.start.y} L ${interaction.end.x},${interaction.end.y}`}
        markerEnd="url(#markerCircle)"
        style={{ stroke: `${interaction.color ? interaction.color : ""}` }}
      />
    </g>
  );
};
