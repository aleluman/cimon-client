import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { useEditor, usePreferences } from "@/shared/state/store";
import { css } from "@/shared/constants/stitches";
import { awareness, communication, transmission } from "@/shared/constants/services";
import {
  InteractionsContainer,
  InnerContainer,
  TabList,
  TabItem,
  TabTitle,
  HideButton,
  NoSelection,
} from "./styles";
import { Icon } from "@/shared/components/Icon/Icon";
import { InnerMatrix } from "./InnerMatrix";
import { getRole } from "@/shared/hooks/role";
import { Tooltip } from "@/shared/components/Tooltip/Tooltip";

export const RoleInteractions = () => {
  const [hidden, setHidden] = useState(true);
  const activeItem = useEditor((state) => state.activeItem);
  const showSidebar = usePreferences((state) => state.showSidebar);
  const mockupMode = useEditor((state) => state.mockupMode);

  const { ambitId } = useParams();

  const getRoleName = (roleid: string) => {
    return getRole(roleid, ambitId as string).name;
  };

  return (
    <InteractionsContainer
      extended={!showSidebar}
      hidden={hidden}
      mockup={mockupMode && activeItem.type !== "none"}
    >
      <>
        {activeItem.type === "role" && (
          <Tab.Group vertical className={css(InnerContainer)} as="div">
            <Tab.List className={css(TabList)}>
              <TabTitle>Interactions of {getRoleName(activeItem.id)}</TabTitle>
              <Tab as={Fragment}>
                {({ selected }) => <TabItem selected={selected}>Communication services</TabItem>}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => <TabItem selected={selected}>Transmission services</TabItem>}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => <TabItem selected={selected}>Awareness Services</TabItem>}
              </Tab>
            </Tab.List>
            <Tab.Panels as={Fragment}>
              <InnerMatrix services={communication} roleId={activeItem.id} />
              <InnerMatrix services={transmission} roleId={activeItem.id} />
              <InnerMatrix services={awareness} roleId={activeItem.id} />
            </Tab.Panels>
          </Tab.Group>
        )}
        {activeItem.type !== "role" && (
          <NoSelection>Select a role to see all its interactions.</NoSelection>
        )}
      </>
      <Tooltip text={`${hidden ? "Show" : "Hide"} role interactions`}>
        <HideButton onClick={() => setHidden(!hidden)}>
          <Icon type={hidden ? "arrow-up" : "arrow-down"} size={12} />
        </HideButton>
      </Tooltip>
    </InteractionsContainer>
  );
};
