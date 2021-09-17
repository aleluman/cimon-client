import React, { useState } from "react";
import { usePopper } from "react-popper";
import { Popover } from "@headlessui/react";
import { Icon } from "../Icon/Icon";
import { MenuContainer, UserMenuItem, UserNameContainer } from "./styles";

type UserMenuProps = { username: string };

export const UserMenu = ({ username }: UserMenuProps) => {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const {
    styles: { popper },
    attributes,
  } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "preventOverflow", enabled: true, options: { padding: 4 } },
      {
        name: "offset",
        options: {
          offset: [0, 9],
        },
      },
    ],
  });

  return (
    <Popover>
      <Popover.Button ref={setReferenceElement} css={UserNameContainer}>
        {username}
        <Icon type="arrow-down" />
      </Popover.Button>
      <Popover.Panel
        style={popper}
        ref={setPopperElement}
        css={MenuContainer}
        {...attributes.popper}
      >
        <UserMenuItem role="button" tabIndex={0}>
          <Icon type="logout" />
          Logout
        </UserMenuItem>
        <UserMenuItem role="button" tabIndex={0}>
          <Icon type="help" />
          About
        </UserMenuItem>
      </Popover.Panel>
    </Popover>
  );
};
