import { useState } from "react";
import { Menu } from "@headlessui/react";
import { css } from "@stitches/react";
import { Icon } from "@/shared/components/Icon/Icon";
import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import { Container, Divider, ExportButton, ExportItem, ExportMenu } from "./styles";
import { Help } from "../Help/Help";

export const ActionsToolbar = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  return (
    <>
      <Container>
        <IconOnlyButton
          icon="undo"
          text="Undo"
          handler={() => {}}
          disabled={false}
          color="$iconGray"
        />
        <IconOnlyButton
          icon="redo"
          text="Redo"
          handler={() => {}}
          disabled={false}
          color="$iconGray"
        />
        <Divider />
        <Menu as="div">
          <Menu.Button className={css(ExportButton)}>
            Export <Icon type="arrow-down" />
          </Menu.Button>
          <Menu.Items className={css(ExportMenu)}>
            <Menu.Item as="button" className={css(ExportItem)}>
              <Icon type="download" /> As JSON
            </Menu.Item>
            <Menu.Item as="button" className={css(ExportItem)}>
              <Icon type="image" /> As image
            </Menu.Item>
            <Menu.Item as="button" className={css(ExportItem)}>
              <Icon type="pdf" /> As PDF
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <IconOnlyButton icon="upload" text="Upload JSON" handler={() => {}} color="$iconGray" />
        <Divider />
        <IconOnlyButton
          icon="help"
          text="Help"
          handler={() => setIsHelpOpen(true)}
          color="$iconGray"
        />
      </Container>
      <Help isOpen={isHelpOpen} setIsOpen={setIsHelpOpen} />
    </>
  );
};
