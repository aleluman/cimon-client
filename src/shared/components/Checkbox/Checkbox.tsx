import { Icon } from "../Icon/Icon";
import { Container, HiddenCheckbox } from "./styles";

type CheckboxProps = {
  checked?: boolean | "inherit";
  handler: () => void;
  size?: "small" | "large";
};

export const Checkbox = ({ checked, handler, size = "large" }: CheckboxProps) => {
  return (
    <Container checked={!!checked} size={size} inherit={checked === "inherit"}>
      {checked ? (
        <Icon type="check" size={size === "large" ? 19 : 13} />
      ) : (
        <Icon type="line" size={size === "large" ? 19 : 13} />
      )}
      <HiddenCheckbox type="checkbox" onChange={handler} checked={!!checked} />
    </Container>
  );
};
