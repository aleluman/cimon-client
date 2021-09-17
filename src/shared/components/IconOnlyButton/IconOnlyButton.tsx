import { iconPaths } from "../Icon/Icons";
import { Icon } from "../Icon/Icon";
import { IconButton } from "./styles";
import { Tooltip } from "../Tooltip/Tooltip";

type IconOnlyButtonProps = {
  handler: (event: React.MouseEvent) => void;
  text: string;
  icon: keyof typeof iconPaths;
  working?: boolean;
  disabled?: boolean;
  tooltipPlacement?: "top" | "right" | "bottom" | "left";
};

export const IconOnlyButton = ({
  handler,
  icon,
  text,
  tooltipPlacement,
  working,
  disabled,
}: IconOnlyButtonProps) => {
  return (
    <Tooltip text={text} tooltipPlacement={tooltipPlacement}>
      <IconButton working={working} disabled={disabled} onClick={handler}>
        <Icon type={icon} />
      </IconButton>
    </Tooltip>
  );
};
