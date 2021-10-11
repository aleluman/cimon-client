import { Icon } from "../Icon/Icon";
import { Container, HiddenCheckbox } from "./styles";

type CheckboxProps = {
  checked?: boolean | "inherit";
  handler: () => void;
};

export const Checkbox = ({ checked, handler }: CheckboxProps) => {
  return (
    <Container checked={!!checked}>
      {checked ? <Icon type="check" size={19} /> : "-"}
      <HiddenCheckbox type="checkbox" onChange={handler} checked={!!checked} />
    </Container>
  );
};
