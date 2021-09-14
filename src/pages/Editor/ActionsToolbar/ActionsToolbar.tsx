import React from "react";
import { useMenuState } from "reakit/Menu";
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
import { Icon } from "@/shared/components/Icon/Icon";

export const ActionsToolbar = () => {
  const exportMenu = useMenuState();

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
      <ExportButton {...exportMenu}>
        Export <Icon type="arrow-down" />
      </ExportButton>
      <ExportMenu {...exportMenu} aria-label="Exports">
        <ExportItem {...exportMenu}>
          <Icon type="download" /> As JSON
        </ExportItem>
        <ExportItem {...exportMenu}>
          <Icon type="image" /> As image
        </ExportItem>
        <ExportItem {...exportMenu}>
          <Icon type="pdf" /> As PDF
        </ExportItem>
      </ExportMenu>
      <IconOnlyButton icon="upload" text="Upload JSON" handler={() => {}} />
      <Divider />
      <IconOnlyButton icon="help" text="Help" handler={() => {}} />
    </Container>
  );
};
