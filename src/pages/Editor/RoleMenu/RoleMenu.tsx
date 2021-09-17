import { memo } from "react";
import { Divider, IconSelect, RoleMenuContainer } from "./styles";
import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import { Icon } from "@/shared/components/Icon/Icon";

type RoleMenuProps = {
  zoom: number;
};

export const RoleMenu = memo(({ zoom }: RoleMenuProps) => {
  const displacement = 4.1 + 1 / (zoom / 1.5);

  return (
    <RoleMenuContainer displacement={displacement} zoom={zoom}>
      <IconOnlyButton icon="edit" text="Edit name" handler={() => {}} />
      <IconOnlyButton icon="delete" text="Delete" handler={() => {}} />
      <Divider />
      <IconSelect>
        <Icon type="human-internal" />
        <Icon type="arrow-down" />
      </IconSelect>
      <IconSelect>
        0..N
        <Icon type="arrow-down" />
      </IconSelect>
    </RoleMenuContainer>
  );
});
