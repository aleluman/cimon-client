import { Disclosure } from "@headlessui/react";
import { Icon } from "@/shared/components/Icon/Icon";
import { Input } from "@/shared/components/Input/Input";
import { User } from "../User/User";
import {
  DisclosureButton,
  DisclosureContainer,
  SearchIconContainer,
  UsersGroupsContainer,
  UsersTabContainer,
} from "./styles";

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
  return (
    <UsersTabContainer>
      <Input placeholder="Search" css={{ padding: "0.7rem 0.4rem" }} />
      <SearchIconContainer>
        <Icon type="search" />
      </SearchIconContainer>
      <UsersGroupsContainer>
        {roles.map((role) => (
          <Disclosure key={role.role} defaultOpen>
            <Disclosure.Button as={DisclosureContainer}>
              <Icon type="arrow-down" color="white" />
              <DisclosureButton>{role.role}</DisclosureButton>
              <Icon type="redo" color="white" />
            </Disclosure.Button>
            <Disclosure.Panel>
              {role.actors.map((user) => (
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
