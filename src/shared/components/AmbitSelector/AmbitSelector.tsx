import { useNavigate, useParams } from "react-router-dom";
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
  const resetState = useEditor((state) => state.reset);

  const navigate = useNavigate();

  const { processId } = useParams();

  const handleChangeAmbit = (ambitId: string) => {
    resetState();
    navigate(`/processes/${processId}/${ambitId}/`);
  };

  return (
    <Menu as="div">
      <Menu.Button className={css(AmbitButton)}>
        {selected?.name}
        <Icon type="arrow-down" />
      </Menu.Button>
      <Menu.Items className={css(AmbitMenu)}>
        {ambits.map((ambit, index) => (
          <Menu.Item
            key={ambit.id}
            className={css(AmbitItem)({ selected: selected?.id === ambit.id })}
            as="a"
            onClick={() => handleChangeAmbit(ambit.id)}
          >
            {`${index + 1}. ${ambit.name}`}
            {selected?.id === ambit.id && <Icon type="check" size={12} />}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
