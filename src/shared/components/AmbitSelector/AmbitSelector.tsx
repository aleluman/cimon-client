import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Listbox } from "@headlessui/react";
import { Icon } from "../Icon/Icon";
import { AmbitButton, AmbitItem, AmbitMenu } from "./styles";

type AmbitSelectorProps = {
  ambits: {
    id: string;
    name: string;
  }[];
};

export const AmbitSelector = ({ ambits }: AmbitSelectorProps) => {
  const [selected, setSelected] = useState(ambits[0]);
  const theme = useTheme();

  return (
    <Listbox value={selected} onChange={setSelected} as="div">
      <Listbox.Button css={AmbitButton}>
        {selected.name}
        <Icon type="arrow-down" />
      </Listbox.Button>
      <Listbox.Options css={AmbitMenu}>
        {ambits.map((ambit) => (
          <Listbox.Option
            key={ambit.id}
            value={ambit}
            css={AmbitItem(theme, selected.id === ambit.id)}
          >
            {`${ambit.id}. ${ambit.name}`}
            {selected.id === ambit.id && <Icon type="check" size={12} />}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
