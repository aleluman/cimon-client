import { Fragment, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { Icon } from "@/shared/components/Icon/Icon";
import { MainContent, MainPhone, NotificationCircle, TabButton, TabList } from "./styles";
import { Home } from "./Home/Home";
import { Users } from "./Users/Users";
import { queryClient, useEditor } from "@/shared/state/store";
import { Contact } from "./Contact/Contact";
import { Call } from "./Call/Call";
import { getActors } from "@/shared/constants/actors";
import { Notifications } from "./Notifications/Notifications";
import { FlattenedService } from "@/shared/utils/allInteractions";
import { ProcessType } from "@/shared/types/process";

export const Phone = () => {
  const showContact = useEditor((state) => state.showContact);
  const showCall = useEditor((state) => state.showCall);
  const allInteractions = useEditor((state) => state.allRoleInteractions) as FlattenedService[];

  const { processId } = useParams();

  const roles = useMemo(
    () =>
      getActors(
        allInteractions.map((inter) => ({
          role: inter.roleName,
          n: inter.roleN,
          type: inter.roleType,
          services: inter.services.map((service) => service.service),
        }))
      ),
    [allInteractions]
  );

  const hasNotifications = useMemo(() => {
    return roles.some((role) => role.services.includes("Incomming messages"));
  }, [roles]);

  const processType = useMemo(() => {
    const currentProcess = queryClient.getQueryData(["process", processId]) as ProcessType;
    return currentProcess.category;
  }, [processId]);

  return (
    <>
      <Tab.Group as={MainPhone}>
        <Tab.Panels as={MainContent}>
          <Tab.Panel>
            <Home processType={processType} />
          </Tab.Panel>
          <Tab.Panel as={Fragment}>
            <Users roles={roles} />
          </Tab.Panel>
          <Tab.Panel as={Fragment}>
            <Notifications roles={roles} />
          </Tab.Panel>
        </Tab.Panels>
        <Tab.List as={TabList}>
          <Tab as={Fragment}>
            {({ selected }) => (
              <TabButton selected={selected}>
                <Icon type="home" size={20} />
                Home
              </TabButton>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <TabButton selected={selected}>
                <Icon type="human-internal" size={20} />
                Contacts
              </TabButton>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <TabButton selected={selected} css={{ position: "relative" }}>
                <Icon type="notification" size={20} />
                Notifications
                {hasNotifications && <NotificationCircle />}
              </TabButton>
            )}
          </Tab>
        </Tab.List>
      </Tab.Group>
      {showContact && <Contact />}
      {showCall !== "none" && <Call />}
    </>
  );
};
