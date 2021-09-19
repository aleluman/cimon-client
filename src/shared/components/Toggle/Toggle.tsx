import { ReactNode } from "react";
import { RadioGroup } from "@headlessui/react";
import { Label, ToggleContainer } from "./styles";
import { css } from "@/shared/configs/stitches";

type ToggleProps = {
  value: string;
  label: string;
  onChange: (newValue: string) => void;
  children: ReactNode;
};

export const Toggle = ({ value, label, onChange, children }: ToggleProps) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Label className={css(Label)}>{label}</RadioGroup.Label>
      <ToggleContainer>{children}</ToggleContainer>
    </RadioGroup>
  );
};
