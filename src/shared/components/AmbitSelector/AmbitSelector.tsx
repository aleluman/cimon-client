import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { Icon } from "../Icon/Icon";
import { AmbitButton, AmbitItem, AmbitMenu } from "./styles";
import { css } from "@/shared/constants/stitches.config";

type AmbitSelectorProps = {
  ambits: {
    id: string;
    name: string;
  }[];
};

export const AmbitSelector = ({ ambits }: AmbitSelectorProps) => {
  const [selected, setSelected] = useState(ambits[0]);

  return (
    <Listbox value={selected} onChange={setSelected} as="div">
      <Listbox.Button className={css(AmbitButton)}>
        {selected.name}
        <Icon type="arrow-down" />
      </Listbox.Button>
      <Listbox.Options className={css(AmbitMenu)}>
        {ambits.map((ambit) => (
          <Listbox.Option
            key={ambit.id}
            value={ambit}
            className={css(AmbitItem)({ selected: selected.id === ambit.id })}
          >
            {`${ambit.id}. ${ambit.name}`}
            {selected.id === ambit.id && <Icon type="check" size={12} />}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
