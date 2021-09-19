import { RadioGroup } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { OptionButton } from "./styles";

type ToggleOptionProps = {
  children: ReactNode;
  value: string;
};

export const ToggleOption = ({ value, children }: ToggleOptionProps) => {
  return (
    <RadioGroup.Option value={value} as={Fragment}>
      {({ checked }) => <OptionButton checked={checked}>{children}</OptionButton>}
    </RadioGroup.Option>
  );
};
