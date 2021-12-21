import { Fragment, useMemo } from "react";
import { Tab } from "@headlessui/react";
import { Icon } from "@/shared/components/Icon/Icon";
import { MainContent, MainPhone, NotificationCircle, TabButton, TabList } from "./styles";
import { Home } from "./Home/Home";
import { Users } from "./Users/Users";
import { useEditor } from "@/shared/state/store";
import { Contact } from "./Contact/Contact";
import { Call } from "./Call/Call";
import { getActors } from "@/shared/constants/actors";
import { Notifications } from "./Notifications/Notifications";
import { FlattenedService } from "@/shared/utils/allInteractions";

export const Phone = () => {
  const showContact = useEditor((state) => state.showContact);
  const showCall = useEditor((state) => state.showCall);
  const allInteractions = useEditor((state) => state.allRoleInteractions) as FlattenedService[];

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

  return (
    <>
      <Tab.Group as={MainPhone}>
        <Tab.Panels as={MainContent}>
          <Tab.Panel as={Home} />
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
