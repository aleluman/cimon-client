import { useTheme } from "@emotion/react";
import React, { useState } from "react";
import { useMenuState } from "reakit/Menu";
import { Icon } from "../Icon/Icon";
import { AmbitButton, AmbitItem, AmbitMenu } from "./styles";

const ambits = [
  { id: "asdf", name: " asdfasdf" },
  { id: "asdf2", name: " asdfasdf" },
  { id: "asdf3", name: " asdfasdf" },
  { id: "asdf4", name: " asdfasdf" },
  { id: "asdf5", name: " asdfasdf" },
  { id: "asdf6", name: " asdfasdf" },
  { id: "asdf7", name: " asdfasdfasdfasdfasdfadfdhsfafasdfasdf" },
  { id: "asdf8", name: " asdfasdf" },
  { id: "asdf9", name: " asdfasdf" },
  { id: "asdf0", name: " asdfasadfdf" },
  { id: "asdf12", name: " asdfasdf" },
];

export const AmbitSelector = () => {
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
