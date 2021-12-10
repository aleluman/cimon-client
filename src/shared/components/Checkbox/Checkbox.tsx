import { useState } from "react";
import { Icon } from "../Icon/Icon";
import { Container } from "./styles";

type CheckboxProps = {
  checked?: boolean | "inherit";
  handler: () => void;
  size?: "small" | "large";
};

export const Checkbox = ({ checked, handler, size = "large" }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const clickHandler = () => {
    setIsChecked((prev) => !prev);
    handler();
  };

  return (
    <Container
      checked={!!isChecked}
      size={size}
      inherit={isChecked === "inherit"}
      onClick={() => clickHandler()}
    >
      {isChecked ? (
        <Icon type="check" size={size === "large" ? 19 : 13} />
      ) : (
        <Icon type="line" size={size === "large" ? 19 : 13} />
      )}
    </Container>
  );
};
