import { Icon } from "../Icon/Icon";
import { Tooltip } from "../Tooltip/Tooltip";
import { Container } from "./styles";

type CheckboxProps = {
  checked?: boolean | string;
  handler: () => void;
  size?: "small" | "large";
  disabled?: boolean;
};

export const Checkbox = ({ checked, handler, size = "large", disabled }: CheckboxProps) => {
  return typeof checked === "string" ? (
    <Tooltip text={`Inherited from ${checked}.\n Click to add Directly.`} tooltipPlacement="top">
      <Container
        checked={!!checked}
        size={size}
        inherit={typeof checked === "string"}
        onClick={() => handler()}
        disabled={disabled}
      >
        {checked ? (
          <Icon type="check" size={size === "large" ? 19 : 13} />
        ) : (
          <Icon type="line" size={size === "large" ? 19 : 13} />
        )}
      </Container>
    </Tooltip>
  ) : (
    <Container
      checked={!!checked}
      size={size}
      inherit={typeof checked === "string"}
      onClick={() => handler()}
      disabled={disabled}
    >
      {checked ? (
        <Icon type="check" size={size === "large" ? 19 : 13} />
      ) : (
        <Icon type="line" size={size === "large" ? 19 : 13} />
      )}
    </Container>
  );
};
