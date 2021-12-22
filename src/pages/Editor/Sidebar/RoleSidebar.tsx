import { ChangeEvent, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { getRole, useRole } from "@/shared/hooks/role";
import {
  SubTitle,
  Title,
  TitleName,
  Description,
  Divider,
  PhoneContainer,
  MockupContainer,
  TabContainer,
  TabButton,
  Help,
} from "./styles";
import { Toggle } from "@/shared/components/Toggle/Toggle";
import { ToggleOption } from "@/shared/components/ToggleOption/ToggleOption";
import { Icon } from "@/shared/components/Icon/Icon";
import { RoleType } from "@/shared/types/editor";
import { queryClient, useEditor } from "@/shared/state/store";
import { useDebounce } from "@/shared/hooks/debounce";
import { Phone } from "@/pages/Phone/Phone";
import { AmbitType } from "@/shared/types/process";
import { LineCheck } from "@/shared/components/LineCheck/LineCheck";

type RoleSidebarProps = {
  roleId: string;
};

export const RoleSidebar = ({ roleId }: RoleSidebarProps) => {
  const { ambitId } = useParams();
  const role = getRole(roleId, ambitId as string);
  const [description, setDescription] = useState(role.description);
  const { updateRole } = useRole(ambitId as string);
  const mockupMode = useEditor((state) => state.mockupMode);
  const setMockupMode = useEditor((state) => state.setMockupMode);

  useDebounce(() => updateRole.mutate({ ...role, description }), 200, [description]);

  const updateRoleType = (value: string) => {
    updateRole.mutate({ ...role, role: value as RoleType["role"] });
  };

  const updateRoleActors = (value: string) => {
    updateRole.mutate({ ...role, numberOfActors: value as RoleType["numberOfActors"] });
  };

  const updateRoleUse = (value: string) => {
    updateRole.mutate({ ...role, solutionUse: value as RoleType["solutionUse"] });
  };

  const updateRoleAbstract = () => {
    updateRole.mutate({ ...role, abstract: !role.abstract });
  };

  const checkAbstract = () => {
    const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
    const { interactions } = ambit.graph;
    return interactions.some((interaction) => interaction.target === roleId && interaction.inherit);
  };

  const handleTab = (index: number) => {
    setMockupMode(index !== 0);
  };

  const isInGroup = useMemo(() => {
    const ambit = queryClient.getQueryData<AmbitType>(["ambit", ambitId]) as AmbitType;
    const { interactions } = ambit.graph;
    return interactions.some(
      (interaction) =>
        interaction.inherit && (interaction.source === roleId || interaction.target === roleId)
    );
  }, [ambitId, roleId]);

  const descriptionHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <Tab.Group onChange={handleTab} defaultIndex={mockupMode ? 1 : 0}>
      <Tab.List as={TabContainer}>
        <Tab as={TabButton} active={!mockupMode}>
          Properties
        </Tab>
        <Tab as={TabButton} active={mockupMode}>
          Mockup
        </Tab>
      </Tab.List>
      <Title>
        {mockupMode ? "Mockup for" : "Properties of"} <TitleName>{role.name}</TitleName>
      </Title>
      <Tab.Panels>
        <Tab.Panel>
          <Toggle value={role.role} label="Role" onChange={updateRoleType}>
            {isInGroup && (
              <Help css={{ padding: "0.35rem", margin: 0 }}>
                Can&apos;t change role type for a role in a group.
              </Help>
            )}
            {!isInGroup && (
              <>
                <ToggleOption value="human">
                  <Icon type={`human-${role.solutionUse}`} /> Human
                </ToggleOption>
                <ToggleOption value="service">
                  <Icon type={`service-${role.solutionUse}`} /> Service
                </ToggleOption>
                <ToggleOption value="repository">
                  <Icon type={`repository-${role.solutionUse}`} /> Repository
                </ToggleOption>{" "}
              </>
            )}
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
          <Divider />
          {(role.abstract || checkAbstract()) && (
            <>
              <LineCheck
                checked={role.abstract}
                label="Abstract"
                handler={() => updateRoleAbstract()}
              />
              <Divider css={{ marginTop: "0.6rem" }} />
            </>
          )}
          <SubTitle>Description</SubTitle>
          <Description
            placeholder="Add a description here..."
            value={description}
            onChange={descriptionHandler}
            maxLength={250}
            onBlur={() => updateRole.mutate({ ...role, description })}
          />
        </Tab.Panel>
        <Tab.Panel as={MockupContainer}>
          {role.role === "human" ? (
            <PhoneContainer>
              <Phone />
            </PhoneContainer>
          ) : (
            <Help css={{ margin: 0 }}> Only human roles can have a mockup.</Help>
          )}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
