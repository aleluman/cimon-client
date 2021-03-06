import { Path } from "./styles";

type MarkerProps = {
  id: string;
  angle: number;
  active: boolean;
  inherit: boolean;
};

export const Marker = ({ id, angle, active, inherit }: MarkerProps) => {
  return (
    <defs>
      <marker
        id={`endMarker${id}`}
        markerWidth="24"
        markerHeight="24"
        refX="15"
        refY="9"
        orient={`${angle}rad`}
        markerUnits="userSpaceOnUse"
      >
        <Path d="M2,2 L16,9 L2,16z" active={active} inherit={inherit} />
      </marker>
      <marker
        id={`startMarker${id}`}
        markerWidth="16"
        markerHeight="16"
        refX="14"
        refY="8"
        orient={`${angle + Math.PI}rad`}
        markerUnits="userSpaceOnUse"
      >
        <Path d="M2,2 L16,9 L2,16z" active={active} inherit={inherit} />
      </marker>
    </defs>
  );
};
