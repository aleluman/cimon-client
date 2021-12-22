import { ReactElement, cloneElement } from "react";
import ReactDOM from "react-dom";
import { Placement } from "@popperjs/core";
import { usePopperTooltip } from "react-popper-tooltip";
import { Arrow, TooltipContainer } from "./styles";

type TooltipProps = {
  children: ReactElement;
  text: string;
  tooltipPlacement?: Placement;
  isVisible?: boolean;
  offset?: [number, number];
};

export const Tooltip = ({ children, text, tooltipPlacement, isVisible, offset }: TooltipProps) => {
  const { setTooltipRef, setTriggerRef, getArrowProps, getTooltipProps, visible } =
    usePopperTooltip({
      placement: tooltipPlacement ?? "bottom",
      visible: isVisible,
      offset,
      delayShow: 400,
    });
  return (
    <>
      {cloneElement(children, { ref: setTriggerRef })}
      {visible &&
        ReactDOM.createPortal(
          <TooltipContainer ref={setTooltipRef} {...getTooltipProps()}>
            <Arrow {...getArrowProps()} />
            {text}
          </TooltipContainer>,
          document.getElementById("tooltips") as HTMLDivElement
        )}
    </>
  );
};
