import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { useEditor, usePreferences } from "@/shared/state/store";
import { css } from "@/shared/configs/stitches";
import { awareness, communication, transmission } from "@/shared/configs/services";
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
} from "./styles";

export const RoleInteractions = () => {
  const activeItem = useEditor((state) => state.activeItem);
  const showSidebar = usePreferences((state) => state.showSidebar);

  return (
    <InteractionsContainer extended={showSidebar}>
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
                </Tr>
              </THead>
              <tbody>
                {communication.map((item) => (
                  <Tr>
                    <Td key={item}>{item}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </Tab.Panel>
          <Tab.Panel as={Fragment}>
            <Table>
              <THead>
                <Tr head>
                  <Th>asdf</Th>
                </Tr>
              </THead>
              <tbody>
                {transmission.map((item) => (
                  <Tr>
                    <Td key={item}>{item}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </Tab.Panel>
          <Tab.Panel as={Fragment}>
            <Table>
              <THead>
                <Tr head>
                  <Th>asdf</Th>
                </Tr>
              </THead>
              <tbody>
                {awareness.map((item) => (
                  <Tr>
                    <Td key={item}>{item}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </InteractionsContainer>
  );
};
