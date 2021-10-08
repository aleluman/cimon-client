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
        markerWidth="16"
        markerHeight="16"
        refX="14"
        refY="8"
        orient={`${angle}rad`}
        markerUnits="userSpaceOnUse"
      >
        <Path d="M0,0 L16,8 L0,16 L4,8 L0,0" active={active} inherit={inherit} />
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
        <Path d="M0,0 L16,8 L0,16 L4,8 L0,0" active={active} inherit={inherit} />
      </marker>
      <marker
        id={`endMarkerInherit${id}`}
        markerWidth="20"
        markerHeight="16"
        refX="20"
        refY="8"
        orient={`${angle}rad`}
        markerUnits="userSpaceOnUse"
      >
        <Path d="M20,8 C-4,23 0,8 4,8 M20,8 C-4,-7 0,8 4,8" active={active} inherit={inherit} />
      </marker>
      <marker
        id={`startMarkerInherit${id}`}
        markerWidth="16"
        markerHeight="16"
        refX="14"
        refY="8"
        orient={`${angle + Math.PI}rad`}
        markerUnits="userSpaceOnUse"
      >
        <Path d="M16,8 Q20,-4 4,8 Q-4,-4 16,8" active={active} inherit={inherit} />
      </marker>
    </defs>
  );
};
