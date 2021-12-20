import { useParams } from "react-router-dom";
import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import { queryClient, useEditor, usePreferences } from "@/shared/state/store";
import { AmbitType } from "@/shared/types/process";
import { Divider, ZoomBarContainer } from "./styles";
import { calcZoom, setFit } from "@/shared/utils/zoom";

export const Zoombar = () => {
  const isSidebarPresent = usePreferences((state) => state.showSidebar);
  const mockupMode = useEditor((state) => state.mockupMode);
  const activeItem = useEditor((state) => state.activeItem);
  const stakeholderMode = useEditor((state) => state.stakeholderMode);
  const setStakeholderMode = useEditor((state) => state.setStakeholderMode);
  const setFocusMode = useEditor((state) => state.setFocusMode);
  const setFocused = useEditor((state) => state.setFocused);
  const focusMode = useEditor((state) => state.focusMode);

  const { ambitId } = useParams();

  const setZoom = (update: "minus" | "plus") => {
    const store = useEditor.getState();
    const preferences = usePreferences.getState();
    const { zoom, translations } = store;
    const sideBarHidden = !preferences.showSidebar;
    const { newZoom, newX, newY } = calcZoom(
      { x: (window.innerWidth - (sideBarHidden ? 0 : 20 * 16)) / 2, y: window.innerHeight / 2 },
      translations,
      zoom,
      update === "minus" ? 12 : -12,
      1
    );
    if (newZoom >= 0.4 && newZoom <= 3) {
      useEditor.setState({ doingAction: true });
      useEditor.setState({ zoom: newZoom });
      useEditor.setState({ translations: { x: newX, y: newY } });
    }
  };

  const focusHandler = (roleId: string) => {
    const ambit = queryClient.getQueryData(["ambit", ambitId as string]) as AmbitType;
    const { interactions } = ambit.graph;
    const focusedRoles: string[] = [roleId];
    const focusedInteractions = interactions.filter(
      (interaction) => interaction.source === roleId || interaction.target === roleId
    );
    focusedInteractions.forEach((interaction) => {
      if (!focusedRoles.includes(interaction.source)) focusedRoles.push(interaction.source);
      if (!focusedRoles.includes(interaction.target)) focusedRoles.push(interaction.target);
    });
    setFocused({ roles: focusedRoles, interactions: focusedInteractions.map((inter) => inter.id) });
    setFocusMode(!focusMode);
  };

  return (
    <ZoomBarContainer tilted={!isSidebarPresent} mockup={mockupMode && activeItem.type !== "none"}>
      <IconOnlyButton
        icon="minus"
        text="Zoom out"
        tooltipPlacement="top"
        handler={() => setZoom("minus")}
        color="$iconGray"
      />
      <IconOnlyButton
        icon="fit"
        text="Fit screen"
        tooltipPlacement="top"
        handler={() => setFit(ambitId as string)}
        color="$iconGray"
      />
      <IconOnlyButton
        icon="plus"
        text="Zoom in"
        tooltipPlacement="top"
        handler={() => setZoom("plus")}
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
        handler={() => {
          setStakeholderMode(!stakeholderMode);
          useEditor.setState({ doingAction: true });
        }}
        color="$iconGray"
        working={stakeholderMode}
      />
      <IconOnlyButton
        icon="selected"
        text="Focus mode"
        tooltipPlacement="top"
        handler={() => focusHandler(activeItem.id)}
        color="$iconGray"
        working={focusMode}
        disabled={activeItem.type !== "role" && !focusMode}
      />
    </ZoomBarContainer>
  );
};
