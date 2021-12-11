import { useState } from "react";
import { usePopper } from "react-popper";
import { Popover } from "@headlessui/react";
import { Icon } from "../Icon/Icon";
import { css } from "@/shared/constants/stitches";
import { Toggle } from "../Toggle/Toggle";
import { ToggleOption } from "../ToggleOption/ToggleOption";
import { usePreferences } from "@/shared/state/store";
import { useLogout } from "@/shared/hooks/logout";
import { MenuContainer, ThemeContainer, UserMenuItem, UserNameContainer } from "./styles";
import { About } from "../About/About";

type UserMenuProps = { username: string };

export const UserMenu = ({ username }: UserMenuProps) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const theme = usePreferences((state) => state.theme);
  const setTheme = usePreferences((state) => state.setTheme);
  const logout = useLogout();
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
    <>
      <Popover>
        <Popover.Button ref={setReferenceElement} className={css(UserNameContainer)}>
          {username}
          <Icon type="arrow-down" />
        </Popover.Button>
        <Popover.Panel
          style={popper}
          ref={setPopperElement}
          className={css(MenuContainer)}
          {...attributes.popper}
        >
          <ThemeContainer>
            <Toggle
              value={theme}
              label="Theme"
              onChange={(value) => setTheme(value as "light" | "dark")}
            >
              <ToggleOption value="light">
                <Icon type="sun" />
                Light
              </ToggleOption>
              <ToggleOption value="dark">
                <Icon type="moon" />
                Dark
              </ToggleOption>
            </Toggle>
          </ThemeContainer>
          <UserMenuItem role="button" tabIndex={0} onClick={() => logout()}>
            <Icon type="logout" />
            Logout
          </UserMenuItem>
          <UserMenuItem role="button" tabIndex={0} onClick={() => setAboutOpen(true)}>
            <Icon type="help" />
            About
          </UserMenuItem>
        </Popover.Panel>
      </Popover>
      <About isOpen={aboutOpen} setIsOpen={setAboutOpen} />
    </>
  );
};
