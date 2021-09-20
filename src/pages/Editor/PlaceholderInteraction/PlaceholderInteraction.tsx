import { useStore } from "@/shared/state/store";
import { Circle, PlaceholderPath } from "./styles";

export const PlaceHolderInteraction = () => {
  const interaction = useStore((state) => state.placeholderInteraction);

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
