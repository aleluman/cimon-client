import React from "react";
import { useTooltipState } from "reakit/Tooltip";
import { iconPaths } from "../Icon/Icons";
import { Icon } from "../Icon/Icon";
import { ButtonContainer, IconButton } from "./styles";
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
  text,
  tooltipPlacement,
  working,
  disabled,
}: IconOnlyButtonProps) => {
  const tooltip = useTooltipState({ placement: tooltipPlacement || "bottom" });

  return (
    <>
      <ButtonContainer {...tooltip}>
        <IconButton {...tooltip} working={working} disabled={disabled} onClick={handler}>
          <Icon type={icon} />
        </IconButton>
      </ButtonContainer>
      <Tooltip tooltipProps={tooltip}>{text}</Tooltip>
    </>
  );
};
