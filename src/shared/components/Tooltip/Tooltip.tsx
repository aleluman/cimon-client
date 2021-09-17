import React from "react";
import { TooltipStateReturn } from "reakit/ts";
import { Arrow, CommonTooltip } from "./styles";

type TooltipProps = {
  tooltipProps: TooltipStateReturn;
  children: React.ReactNode;
};

export const Tooltip = ({ children, tooltipProps }: TooltipProps) => {
  return (
    <>
      <CommonTooltip {...tooltipProps}>
        <Arrow {...tooltipProps} />
        {children}
      </CommonTooltip>
    </>
  );
};
