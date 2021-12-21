import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Icon } from "@/shared/components/Icon/Icon";
import { Input } from "@/shared/components/Input/Input";
import { User } from "../User/User";
import {
  DisclosureButton,
  DisclosureContainer,
  GroupContainer,
  SearchIconContainer,
  UsersGroupsContainer,
  UsersTabContainer,
} from "./styles";
import { useEditor } from "@/shared/state/store";

type UsersProps = {
  roles: {
    role: string;
    type: string;
    services: string[];
    actors: {
      role: string;
      name: string;
      id: number;
    }[];
  }[];
};

export const Users = ({ roles }: UsersProps) => {
  const [search, setSearch] = useState("");
  const showContactHandler = useEditor((state) => state.setShowContact);
  const setSelectedActor = useEditor((state) => state.setSelectedActor);

  const groupHandler = (role: string, type: string, services: string[]) => {
    showContactHandler(true);
    setSelectedActor({ id: 0, name: "Group", role, type, services });
  };

  return (
    <UsersTabContainer>
      <Input
        placeholder="Search"
        css={{ padding: "0.7rem 0.4rem" }}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <SearchIconContainer>
        <Icon type="search" />
      </SearchIconContainer>
      <UsersGroupsContainer>
        {roles
          .filter((role) => role.role.toLowerCase().includes(search.toLowerCase()))
          .map((role) => (
            <Disclosure key={role.role} defaultOpen>
              <Disclosure.Button as={DisclosureContainer}>
                <Icon type="arrow-down" color="white" />
                <DisclosureButton>{role.role}</DisclosureButton>
                {role.services.includes("Send to all") && (
                  <GroupContainer
                    onClick={(event) => {
                      event.stopPropagation();
                      groupHandler(role.role, role.type, role.services);
                    }}
                  >
                    <Icon type="redo" color="white" />
                  </GroupContainer>
                )}
              </Disclosure.Button>
              <Disclosure.Panel>
                {role.actors
                  .filter((actor) => actor.name.toLowerCase().includes(search.toLowerCase()))
                  .map((user) => (
                    <User
                      key={user.id}
                      name={user.name}
                      role={user.role}
                      id={user.id}
                      type={role.type}
                      services={role.services}
                      context="users"
                    />
                  ))}
              </Disclosure.Panel>
            </Disclosure>
          ))}
      </UsersGroupsContainer>
    </UsersTabContainer>
  );
};
