import { useTheme } from "@emotion/react";
import React, { useState } from "react";
import { useMenuState } from "reakit/Menu";
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
  const menu = useMenuState({ gutter: 4 });

  const handleSelect = (ambit: typeof ambits[0]) => {
    setSelected(ambit);
    menu.hide();
  };

  return (
    <>
      <AmbitButton {...menu}>
        <p>{selected.name}</p> <Icon type="arrow-down" />
      </AmbitButton>
      <AmbitMenu {...menu} aria-label="Ambit menu">
        {ambits.map((ambit) => (
          <AmbitItem
            {...menu}
            key={ambit.id}
            selected={ambit.id === selected.id}
            onClick={() => handleSelect(ambit)}
          >
            <p>{ambit.name}</p>
            {ambit.id === selected.id && (
              <Icon type="check" size={12} color={theme.color.textImportant} />
            )}
          </AmbitItem>
        ))}
      </AmbitMenu>
    </>
  );
};
