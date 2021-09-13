import React from "react";
import { usePopoverState } from "reakit/Popover";
import { Icon } from "../Icon/Icon";
import { MenuContainer, UserMenuItem, UserNameContainer } from "./styles";

type UserMenuProps = {
  username: string;
};

export const UserMenu = ({ username }: UserMenuProps) => {
  const popover = usePopoverState({ placement: "bottom", unstable_offset: [-4, 6] });
  return (
    <>
      <UserNameContainer {...popover}>
        <p>{username}</p>
        <Icon type="arrow-down" />
      </UserNameContainer>
      <MenuContainer {...popover} aria-label="User menu">
        <UserMenuItem onClick={popover.hide}>
          <Icon type="logout" /> Logout
        </UserMenuItem>
        <UserMenuItem onClick={popover.hide}>
          <Icon type="help" />
          About
        </UserMenuItem>
      </MenuContainer>
    </>
  );
};
