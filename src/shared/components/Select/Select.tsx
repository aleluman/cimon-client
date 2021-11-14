import { Listbox } from "@headlessui/react";
import { css } from "@/shared/constants/stitches";
import { SelectButton, SelectContainer, Selected, SelectMenu, SelectOption } from "./styles";
import { Icon } from "../Icon/Icon";
import { ProcessCategory, ProcessType } from "@/shared/types/process";

type SelectProps = {
  options: ProcessCategory[];
  handler: (value: ProcessType["category"]) => void;
  selectedValue: ProcessType["category"];
};

export const Select = ({ options, handler, selectedValue }: SelectProps) => {
  const selectedOption = options.find(
    (option) => option.value === selectedValue
  ) as ProcessCategory;

  return (
    <Listbox value={selectedValue} onChange={handler} as="div" className={css(SelectContainer)}>
      <Listbox.Button className={css(SelectButton)}>
        <Selected>
          {selectedOption.icon && <Icon type={selectedOption.icon} />}
          {selectedOption.name}
        </Selected>{" "}
        <Icon type="arrow-down" />
      </Listbox.Button>
      <Listbox.Options className={css(SelectMenu)}>
        {options.map((option) => (
          <Listbox.Option key={option.id} value={option.value} className={css(SelectOption)}>
            {option.icon && <Icon type={option.icon} />}
            {option.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
