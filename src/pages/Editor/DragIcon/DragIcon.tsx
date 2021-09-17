import React from "react";
import { useTooltipState } from "reakit/Tooltip";
import { Icon } from "@/shared/components/Icon/Icon";
import { RoleDragIcon } from "../RoleBar/styles";
import { Tooltip } from "@/shared/components/Tooltip/Tooltip";

type DragIconProps = {
  type: "human" | "service" | "repository";
};

export const DragIcon = ({ type }: DragIconProps) => {
  const tooltip = useTooltipState({ placement: "right" });

  return (
    <RoleDragIcon {...tooltip}>
      <Icon type={`${type}-internal`} />
      <Tooltip tooltipProps={tooltip}>{type.charAt(0).toUpperCase() + type.slice(1)}</Tooltip>
    </RoleDragIcon>
  );
};
