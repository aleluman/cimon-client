import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import { usePreferences } from "@/shared/state/store";
import { Divider, ZoomBarContainer } from "./styles";

export const Zoombar = () => {
  const isSidebarPresent = usePreferences((state) => state.showSidebar);

  return (
    <ZoomBarContainer tilted={isSidebarPresent}>
      <IconOnlyButton
        icon="minus"
        text="Zoom out"
        tooltipPlacement="top"
        handler={() => {}}
        color="$iconGray"
      />
      <IconOnlyButton
        icon="fit"
        text="Fit screen"
        tooltipPlacement="top"
        handler={() => {}}
        color="$iconGray"
      />
      <IconOnlyButton
        icon="plus"
        text="Zoom in"
        tooltipPlacement="top"
        handler={() => {}}
        color="$iconGray"
      />
      <Divider />
      <IconOnlyButton
        icon="layout"
        text="Auto layout"
        tooltipPlacement="top"
        handler={() => {}}
        color="$iconGray"
      />
      <IconOnlyButton
        icon="stakeholder"
        text="Stakeholder mode"
        tooltipPlacement="top"
        handler={() => {}}
        color="$iconGray"
      />
      <IconOnlyButton
        icon="selected"
        text="Focus mode"
        tooltipPlacement="top"
        handler={() => {}}
        color="$iconGray"
      />
    </ZoomBarContainer>
  );
};
