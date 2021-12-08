import { useState } from "react";
import { useGesture } from "@use-gesture/react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/components/Button/Button";
import { Icon } from "@/shared/components/Icon/Icon";
import { AmbitContainer, AmbitText, MenuButtonContainer, MenuContainer, MenuItem } from "./styles";

type AmbitProps = {
  id: string;
  name: string;
};

export const Ambit = ({ id, name }: AmbitProps) => {
  const [hovering, setHovering] = useState(false);

  const handlers = useGesture({
    onHover: ({ active }) => {
      setHovering(active);
    },
  });

  return (
    <AmbitContainer {...handlers()}>
      <AmbitText as={Link} to={`/ambits/${id}`}>
        {name}
      </AmbitText>
      <Menu as={MenuButtonContainer}>
        {({ open }) => (
          <>
            <Menu.Button
              as={Button}
              color="secondary"
              css={{
                padding: "0.25rem",
                visibility: hovering || open ? "visible" : "hidden",
                marginRight: "0.2rem",
              }}
            >
              <Icon type="dots" />
            </Menu.Button>
            <Menu.Items as={MenuContainer}>
              <Menu.Item>
                <MenuItem>
                  <Icon type="generic" /> Edit graph
                </MenuItem>
              </Menu.Item>
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
    </AmbitContainer>
  );
};
