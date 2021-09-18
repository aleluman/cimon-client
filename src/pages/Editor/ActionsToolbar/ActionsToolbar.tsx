import { Menu } from "@headlessui/react";
import { css } from "@stitches/react";
import { Icon } from "@/shared/components/Icon/Icon";
import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import {
  Container,
  Divider,
  ExportButton,
  ExportItem,
  ExportMenu,
  ToggleActive,
  ToggleContainer,
  ToggleInactive,
} from "./styles";

export const ActionsToolbar = () => {
  return (
    <Container>
      <ToggleContainer>
        <ToggleActive>Editor</ToggleActive>
        <ToggleInactive type="button">Mockup</ToggleInactive>
      </ToggleContainer>
      <Divider />
      <IconOnlyButton icon="undo" text="Undo" handler={() => {}} disabled={false} />
      <IconOnlyButton icon="redo" text="Redo" handler={() => {}} disabled={false} />
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
      <IconOnlyButton icon="upload" text="Upload JSON" handler={() => {}} />
      <Divider />
      <IconOnlyButton icon="help" text="Help" handler={() => {}} />
    </Container>
  );
};
