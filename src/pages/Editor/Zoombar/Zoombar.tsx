import React from "react";
import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import { Divider, ZoomBarContainer } from "./styles";

export const Zoombar = () => {
  return (
    <ZoomBarContainer>
      <IconOnlyButton icon="minus" text="Zoom out" tooltipPlacement="top" handler={() => {}} />
      <IconOnlyButton icon="fit" text="Fit screen" tooltipPlacement="top" handler={() => {}} />
      <IconOnlyButton icon="plus" text="Zoom in" tooltipPlacement="top" handler={() => {}} />
      <Divider />
      <IconOnlyButton icon="layout" text="Auto layout" tooltipPlacement="top" handler={() => {}} />
      <IconOnlyButton
        icon="stakeholder"
        text="Stakeholder mode"
        tooltipPlacement="top"
        handler={() => {}}
      />
      <IconOnlyButton icon="selected" text="Focus mode" tooltipPlacement="top" handler={() => {}} />
    </ZoomBarContainer>
  );
};
