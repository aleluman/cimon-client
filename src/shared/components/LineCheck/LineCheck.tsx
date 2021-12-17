import { Icon } from "../Icon/Icon";
import { Check, CheckMark, Container, Label } from "./styles";

type LineCheckProps = {
  checked: boolean;
  label: string;
  handler: (state: boolean) => void;
};

export const LineCheck = ({ checked, label, handler }: LineCheckProps) => {
  return (
    <Container htmlFor={`checkbox-${label}`}>
      <Check
        type="checkbox"
        id={`checkbox-${label}`}
        checked={checked}
        onChange={() => {
          handler(!checked);
        }}
      />
      <Label>{label}</Label>
      {checked && (
        <CheckMark>
          <Icon type="check" color="var(--white)" size={14} />
        </CheckMark>
      )}
    </Container>
  );
};
