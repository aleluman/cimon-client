import { iconPaths } from "./Icons";
import { Path } from "./styles";

type IconProps = {
  type: keyof typeof iconPaths;
  size?: number;
  color?: string;
};

export const Icon = ({ type, size = 16, color }: IconProps) => {
  return (
    <svg viewBox="0 0 28 28" style={{ width: `${size}px`, flexShrink: 0 }}>
      <Path css={{ fill: color }} d={`${iconPaths[type]}`} />
    </svg>
  );
};
