import { useState } from "react";
import { useGesture } from "@use-gesture/react";
import { Menu } from "@headlessui/react";
import { Button } from "@/shared/components/Button/Button";
import { Icon } from "@/shared/components/Icon/Icon";
import { MenuButtonContainer, MenuContainer, MenuItem, PhaseContainer, PhaseName } from "./styles";

type PhaseProps = {
  name: string;
  id: string;
  processId: string;
};

export const Phase = ({ name, id, processId }: PhaseProps) => {
  const [hovering, setHovering] = useState(false);

  const handlers = useGesture({
    onHover: ({ active }) => {
      setHovering(active);
    },
  });

  return (
    <PhaseContainer {...handlers()} hovering={hovering}>
      <PhaseName>{name}</PhaseName>
      <Menu as={MenuButtonContainer}>
        {({ open }) => (
          <>
            <Menu.Button
              as={Button}
              color="secondary"
              css={{ padding: "0.25rem", visibility: hovering || open ? "visible" : "hidden" }}
            >
              <Icon type="dots" />
            </Menu.Button>
            <Menu.Items as={MenuContainer}>
              <Menu.Item>
                <MenuItem>
                  <Icon type="edit" /> Rename
                </MenuItem>
              </Menu.Item>
              <Menu.Item>
                <MenuItem>
                  <Icon type="delete" />
                  Delete
                </MenuItem>
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </PhaseContainer>
  );
};
