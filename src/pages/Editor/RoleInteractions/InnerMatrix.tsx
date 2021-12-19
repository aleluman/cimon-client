import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { Checkbox } from "@/shared/components/Checkbox/Checkbox";
import {
  FromGroup,
  NoSelection,
  Table,
  TableContainer,
  Td,
  Th,
  THContained,
  THead,
  Tr,
} from "./styles";
import { FlattenedService } from "@/shared/utils/allInteractions";
import { queryClient, useEditor } from "@/shared/state/store";
import { getRole } from "@/shared/hooks/role";
import { useInteraction } from "@/shared/hooks/interaction";
import { InteractionType, Services } from "@/shared/types/editor";
import { AmbitType } from "@/shared/types/process";

type InnerMatrixProps = {
  services: string[];
  roleId: string;
};

export const InnerMatrix = ({ services, roleId }: InnerMatrixProps) => {
  const { ambitId } = useParams();
  const allInteractions = useEditor((state) => state.allRoleInteractions);

  const { updateInteraction } = useInteraction(ambitId as string);

  const getChecked = (serviceName: string, interaction: FlattenedService) => {
    const foundServiceInheritance = interaction.services.find(
      (service) => service.service === serviceName
    )?.inheritsFromId;
    if (!foundServiceInheritance) return false;
    const role = getRole(foundServiceInheritance, ambitId as string);
    return foundServiceInheritance === roleId ? true : role.name;
  };

  const clickHandler = (service: string, targetRoleId: string) => {
    const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
    const { interactions } = ambit.graph;
    const interaction = interactions.find(
      (inter) =>
        (inter.source === roleId && inter.target === targetRoleId) ||
        (inter.source === targetRoleId && inter.target === roleId)
    ) as InteractionType;
    if (interaction.source === roleId) {
      updateInteraction.mutate({
        ...interaction,
        sourceServices: interaction.sourceServices.includes(service as keyof Services)
          ? interaction.sourceServices.filter((item) => item !== service)
          : interaction.sourceServices.concat(service as keyof Services),
      });
    } else {
      updateInteraction.mutate({
        ...interaction,
        targetServices: interaction.targetServices.includes(service as keyof Services)
          ? interaction.targetServices.filter((item) => item !== service)
          : interaction.targetServices.concat(service as keyof Services),
      });
    }
  };

  return allInteractions?.length === 0 ? (
    <Tab.Panel as={Fragment}>
      <NoSelection>This role doesn&apos;t have any interactions yet.</NoSelection>
    </Tab.Panel>
  ) : (
    <Tab.Panel as={TableContainer}>
      <Table>
        <THead>
          <Tr head>
            <Th>Services</Th>
            {allInteractions?.map((interaction) => (
              <Th key={interaction.roleId}>
                <THContained>{interaction.roleName}</THContained>
                {!interaction.direct && <FromGroup>From group</FromGroup>}
              </Th>
            ))}
          </Tr>
        </THead>
        <tbody>
          {services.map((item) => (
            <Tr key={item}>
              <Td>{item}</Td>
              {allInteractions?.map((interaction) => (
                <Td key={interaction.roleId}>
                  <Checkbox
                    checked={getChecked(item, interaction)}
                    size="small"
                    handler={() => clickHandler(item, interaction.roleId)}
                    disabled={!interaction.direct}
                  />
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </Table>
    </Tab.Panel>
  );
};
