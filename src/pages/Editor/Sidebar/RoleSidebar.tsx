import { RadioGroup } from "@headlessui/react";
import { Fragment } from "react";
import { getRole, useUpdateRole } from "@/shared/api/role";
import { SubTitle, Title, TitleName } from "./styles";

type RoleSidebarProps = {
  roleId: string;
};

export const RoleSidebar = ({ roleId }: RoleSidebarProps) => {
  const role = getRole(roleId);
  const updateRole = useUpdateRole(roleId);

  return (
    <>
      <Title>
        Properties of <TitleName>{role.name}</TitleName>
      </Title>
      <RadioGroup value={role.role} onChange={() => {}}>
        <RadioGroup.Label as={Fragment}>
          <SubTitle>Role</SubTitle>
        </RadioGroup.Label>
        <RadioGroup.Option value="human">asdfg</RadioGroup.Option>
      </RadioGroup>
      <SubTitle>Number of actors</SubTitle>
      <SubTitle>Solution use</SubTitle>
    </>
  );
};
