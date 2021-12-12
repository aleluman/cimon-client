import { Fragment, useState } from "react";
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
  Td,
  Table,
  Tr,
  THead,
  Th,
  HideButton,
} from "./styles";
import { Icon } from "@/shared/components/Icon/Icon";
import { Checkbox } from "@/shared/components/Checkbox/Checkbox";

export const RoleInteractions = () => {
  const [hidden, setHidden] = useState(true);
  const activeItem = useEditor((state) => state.activeItem);
  const showSidebar = usePreferences((state) => state.showSidebar);
  const mockupMode = useEditor((state) => state.mockupMode);

  return (
    <InteractionsContainer
      extended={!showSidebar}
      hidden={hidden}
      mockup={mockupMode && activeItem.type !== "none"}
    >
      <Tab.Group vertical className={css(InnerContainer)} as="div">
        <Tab.List className={css(TabList)}>
          <TabTitle>Interactions of role 1</TabTitle>
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
          <Tab.Panel as={Fragment}>
            <Table>
              <THead>
                <Tr head>
                  <Th>Services</Th>
                  <Th>Caretaker</Th>
                  <Th>Doctor</Th>
                </Tr>
              </THead>
              <tbody>
                {communication.map((item) => (
                  <Tr key={item}>
                    <Td>{item}</Td>
                    <Td>
                      <Checkbox checked size="small" handler={() => {}} />
                    </Td>
                    <Td>
                      <Checkbox checked={false} size="small" handler={() => {}} />
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </Tab.Panel>
          <Tab.Panel as={Fragment}>
            <Table>
              <THead>
                <Tr head>
                  <Th>Services</Th>
                  <Th>Caretaker</Th>
                  <Th>Doctor</Th>
                </Tr>
              </THead>
              <tbody>
                {transmission.map((item) => (
                  <Tr key={item}>
                    <Td>{item}</Td>
                    <Td>
                      <Checkbox checked size="small" handler={() => {}} />
                    </Td>
                    <Td>
                      <Checkbox checked={false} size="small" handler={() => {}} />
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </Tab.Panel>
          <Tab.Panel as={Fragment}>
            <Table>
              <THead>
                <Tr head>
                  <Th>Services</Th>
                  <Th>Caretaker</Th>
                  <Th>Doctor</Th>
                </Tr>
              </THead>
              <tbody>
                {awareness.map((item) => (
                  <Tr key={item}>
                    <Td>{item}</Td>
                    <Td>
                      <Checkbox checked size="small" handler={() => {}} />
                    </Td>
                    <Td>
                      <Checkbox checked="inherit" size="small" handler={() => {}} />
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <HideButton onClick={() => setHidden(!hidden)}>
        <Icon type={hidden ? "arrow-up" : "arrow-down"} size={12} />
      </HideButton>
    </InteractionsContainer>
  );
};
