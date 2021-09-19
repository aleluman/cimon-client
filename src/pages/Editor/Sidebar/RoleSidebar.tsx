import { getRole, useUpdateRole } from "@/shared/api/role";
import { SubTitle, Title, TitleName, Description } from "./styles";
import { Toggle } from "@/shared/components/Toggle/Toggle";
import { ToggleOption } from "@/shared/components/ToggleOption/ToggleOption";
import { Icon } from "@/shared/components/Icon/Icon";
import { RoleType } from "@/shared/types/editor";

type RoleSidebarProps = {
  roleId: string;
};

export const RoleSidebar = ({ roleId }: RoleSidebarProps) => {
  const role = getRole(roleId);
  const updateRole = useUpdateRole(roleId);

  const updateRoleType = (value: string) => {
    updateRole.mutate({ role: value as RoleType["role"] });
  };

  const updateRoleActors = (value: string) => {
    updateRole.mutate({ numberOfActors: value as RoleType["numberOfActors"] });
  };

  const updateRoleUse = (value: string) => {
    updateRole.mutate({ solutionUse: value as RoleType["solutionUse"] });
  };

  return (
    <>
      <Title>
        Properties of <TitleName>{role.name}</TitleName>
      </Title>
      <Toggle value={role.role} label="Role" onChange={updateRoleType}>
        <ToggleOption value="human">
          <Icon type={`human-${role.solutionUse}`} /> Human
        </ToggleOption>
        <ToggleOption value="service">
          <Icon type={`service-${role.solutionUse}`} /> Service
        </ToggleOption>
        <ToggleOption value="repository">
          <Icon type={`repository-${role.solutionUse}`} /> Repository
        </ToggleOption>
      </Toggle>
      <Toggle value={role.numberOfActors} label="Number of actors" onChange={updateRoleActors}>
        <ToggleOption value="0..N">0..N</ToggleOption>
        <ToggleOption value="1..N">1..N</ToggleOption>
        <ToggleOption value="0..1">0..1</ToggleOption>
        <ToggleOption value="1">1</ToggleOption>
        <ToggleOption value="?">?</ToggleOption>
      </Toggle>
      <Toggle value={role.solutionUse} label="Solution use" onChange={updateRoleUse}>
        <ToggleOption value="internal">
          <Icon type={`${role.role}-internal`} /> Internal
        </ToggleOption>
        <ToggleOption value="external">
          <Icon type={`${role.role}-external`} /> External
        </ToggleOption>
        <ToggleOption value="both">
          <Icon type={`${role.role}-both`} />
          Both
        </ToggleOption>
      </Toggle>
      <SubTitle>Description</SubTitle>
      <Description placeholder="Add a description here..." defaultValue={role.description} />
    </>
  );
};
