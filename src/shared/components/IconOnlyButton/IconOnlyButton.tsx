import React from "react";
import { useTooltipState } from "reakit/Tooltip";
import { iconPaths } from "../Icon/Icons";
import { Icon } from "../Icon/Icon";
import { Arrow, ButtonContainer, IconButton, IconTooltip } from "./styles";

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
      <IconTooltip {...tooltip}>
        <Arrow {...tooltip} />
        {text}
      </IconTooltip>
    </>
  );
};
