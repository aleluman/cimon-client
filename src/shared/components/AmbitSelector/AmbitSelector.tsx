import { useNavigate, useParams } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Icon } from "../Icon/Icon";
import { AmbitButton, AmbitItem, AmbitMenu } from "./styles";
import { css } from "@/shared/constants/stitches";
import { queryClient, useEditor } from "@/shared/state/store";
import { ProcessType } from "@/shared/types/process";

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
    if (ambitId !== selected?.id) {
      resetState();
      navigate(`/processes/${processId}/${ambitId}/`);
    }
  };

  const ambitSort = (
    a: {
      id: string;
      name: string;
    },
    b: {
      id: string;
      name: string;
    }
  ) => {
    const process = queryClient.getQueryData(["process", processId as string]) as ProcessType;
    const orders = process.ambitOrders;
    if (orders.indexOf(a.name) < orders.indexOf(b.name)) return -1;
    return 1;
  };

  return (
    <Menu as="div">
      <Menu.Button className={css(AmbitButton)}>
        {selected?.name}
        <Icon type="arrow-down" />
      </Menu.Button>
      <Menu.Items className={css(AmbitMenu)}>
        {ambits.sort(ambitSort).map((ambit, index) => (
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
