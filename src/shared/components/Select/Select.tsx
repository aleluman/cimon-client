import { Listbox } from "@headlessui/react";
import { css } from "@/shared/configs/stitches";
import { SelectButton, SelectContainer, SelectMenu, SelectOption } from "./styles";
import { Icon } from "../Icon/Icon";

type SelectProps = {
  options: { id: string; value: string; name: string }[];
  handler: (value: string) => void;
  selectedValue: string;
};

export const Select = ({ options, handler, selectedValue }: SelectProps) => {
  return (
    <Listbox value={selectedValue} onChange={handler} as="div" className={css(SelectContainer)}>
      <Listbox.Button className={css(SelectButton)}>
        {selectedValue} <Icon type="arrow-down" />
      </Listbox.Button>
      <Listbox.Options className={css(SelectMenu)}>
        {options.map((option) => (
          <Listbox.Option key={option.id} value={option.value} className={css(SelectOption)}>
            {option.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
