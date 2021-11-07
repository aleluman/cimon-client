import { useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Icon } from "../Icon/Icon";
import { AmbitButton, AmbitItem, AmbitMenu } from "./styles";
import { css } from "@/shared/constants/stitches";
import { useEditor } from "@/shared/state/store";

type AmbitSelectorProps = {
  ambits: {
    id: string;
    name: string;
  }[];
};

export const AmbitSelector = ({ ambits }: AmbitSelectorProps) => {
  const selected = useEditor((state) => state.selectedAmbit);
  const setActiveItem = useEditor((state) => state.setActiveItem);

  const navigate = useNavigate();

  const handleChangeAmbit = (ambitId: string) => {
    setActiveItem({ type: "none", id: "" });
    navigate(`/ambits/${ambitId}/editor`);
  };

  return (
    <Menu as="div">
      <Menu.Button className={css(AmbitButton)}>
        {selected?.name}
        <Icon type="arrow-down" />
      </Menu.Button>
      <Menu.Items className={css(AmbitMenu)}>
        {ambits.map((ambit) => (
          <Menu.Item
            key={ambit.id}
            className={css(AmbitItem)({ selected: selected?.id === ambit.id })}
            as="a"
            onClick={() => handleChangeAmbit(ambit.id)}
          >
            {`${ambit.id}. ${ambit.name}`}
            {selected?.id === ambit.id && <Icon type="check" size={12} />}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
