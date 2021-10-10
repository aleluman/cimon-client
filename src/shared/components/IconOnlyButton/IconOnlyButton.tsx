import { iconPaths } from "../../constants/Icons";
import { Icon } from "../Icon/Icon";
import { IconButton } from "./styles";
import { Tooltip } from "../Tooltip/Tooltip";

type IconOnlyButtonProps = {
  handler: (event: React.MouseEvent) => void;
  text: string;
  icon: keyof typeof iconPaths;
  color?: string;
  working?: boolean;
  disabled?: boolean;
  tooltipPlacement?: "top" | "right" | "bottom" | "left";
};

export const IconOnlyButton = ({
  handler,
  icon,
  color,
  text,
  tooltipPlacement,
  working,
  disabled,
}: IconOnlyButtonProps) => {
  return (
    <Tooltip text={text} tooltipPlacement={tooltipPlacement}>
      <IconButton working={working} disabled={disabled} onClick={handler}>
        <Icon type={icon} color={color} />
      </IconButton>
    </Tooltip>
  );
};
