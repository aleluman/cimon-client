import { useState } from "react";
import { Icon } from "../Icon/Icon";
import { Tooltip } from "../Tooltip/Tooltip";
import { Container } from "./styles";

type CheckboxProps = {
  checked?: boolean | string;
  handler: () => void;
  size?: "small" | "large";
  disabled: boolean;
};

export const Checkbox = ({ checked, handler, size = "large", disabled }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const clickHandler = () => {
    if (size === "large") setIsChecked((prev) => !prev);
    handler();
  };

  return typeof checked === "string" ? (
    <Tooltip text={`Inherited from ${checked}.\n Click to add Directly.`} tooltipPlacement="top">
      <Container
        checked={!!isChecked}
        size={size}
        inherit={typeof checked === "string"}
        onClick={() => clickHandler()}
        disabled={disabled}
      >
        {isChecked ? (
          <Icon type="check" size={size === "large" ? 19 : 13} />
        ) : (
          <Icon type="line" size={size === "large" ? 19 : 13} />
        )}
      </Container>
    </Tooltip>
  ) : (
    <Container
      checked={!!isChecked}
      size={size}
      inherit={typeof checked === "string"}
      onClick={() => clickHandler()}
      disabled={disabled}
    >
      {isChecked ? (
        <Icon type="check" size={size === "large" ? 19 : 13} />
      ) : (
        <Icon type="line" size={size === "large" ? 19 : 13} />
      )}
    </Container>
  );
};
