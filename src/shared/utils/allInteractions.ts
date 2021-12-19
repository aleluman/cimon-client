import { queryClient, useEditor } from "../state/store";
import { AmbitType } from "../types/process";

export type FlattenedService = {
  roleId: string;
  roleName: string;
  direct: boolean;
  services: {
    depth: number;
    service: string;
    inheritsFromName: string;
    inheritsFromId: string;
  }[];
};

const flatten = (unflattenedServices: UnflattenedServices, ambitId: string, roleId: string) => {
  const ambit = queryClient.getQueryData<AmbitType>(["ambit", ambitId]) as AmbitType;
  const { roles, interactions } = ambit.graph;

  const flattenedServices: FlattenedService[] = [];

  unflattenedServices.forEach((service) => {
    const repeated = unflattenedServices.filter(
      (currentService) => currentService.roleId === service.roleId
    );

    const mappedServices = repeated
      .map((currentService) => {
        return currentService.sourceServices.map((item) => ({
          service: item,
          depth: currentService.depth,
          inheritsFromName: roles.find((role) => role.id === currentService.inheritsFrom)
            ?.name as string,
          inheritsFromId: currentService.inheritsFrom,
        }));
      })
      .flat();

    const filteredServices = mappedServices.filter((currentService) => {
      const serviceIndex = mappedServices.indexOf(currentService);
      const mappedAndRemoved = [
        ...mappedServices.slice(0, serviceIndex),
        ...mappedServices.slice(serviceIndex + 1),
      ];
      return (
        mappedAndRemoved.every((item) => currentService.service !== item.service) ||
        mappedAndRemoved.some((item) => {
          const duplicates = mappedAndRemoved.filter(
            (currentItem) => currentItem.service === item.service
          );
          const minimumDepth = Math.min(...duplicates.map((o) => o.depth), 0);
          return currentService.service === item.service && item.depth > minimumDepth;
        })
      );
    });

    const flattened = {
      roleId: service.roleId,
      roleName: roles.find((role) => role.id === service.roleId)?.name as string,
      direct: interactions.some(
        (interaction) =>
          (interaction.source === service.roleId && interaction.target === roleId) ||
          (interaction.source === roleId && interaction.target === service.roleId)
      ),
      services: filteredServices,
    };

    if (!flattenedServices.some((item) => item.roleId === service.roleId)) {
      flattenedServices.push(flattened);
    }
  });

  return flattenedServices.sort((a, b) => a.roleName.localeCompare(b.roleName));
};

type UnflattenedServices = {
  depth: number;
  roleId: string;
  inheritsFrom: string;
  sourceServices: string[];
}[];

export const getAllInteractions = (ambitId: string) => {
  const ambit = queryClient.getQueryData<AmbitType>(["ambit", ambitId]) as AmbitType;
  const { interactions } = ambit.graph;

  const { activeItem } = useEditor.getState();

  const roleId = activeItem.id;

  const visitedRoles: string[] = [];
  const unflattenedServices: UnflattenedServices = [];

  const traverse = (currentRoleId: string, depth: number) => {
    if (visitedRoles.includes(currentRoleId)) return;
    visitedRoles.push(currentRoleId);
    interactions.forEach((interaction) => {
      if (
        !interaction.inherit &&
        (interaction.source === currentRoleId || interaction.target === currentRoleId)
      ) {
        const currRoleId =
          interaction.source === currentRoleId ? interaction.target : interaction.source;

        unflattenedServices.push({
          depth,
          roleId: currRoleId,
          inheritsFrom: currentRoleId,
          sourceServices:
            interaction.source === currentRoleId
              ? interaction.sourceServices
              : interaction.targetServices,
        });
      }
    });
    const groupInteractions = interactions.filter(
      (interaction) => interaction.inherit && interaction.source === currentRoleId
    );
    const nextNodesIds = groupInteractions.map((interaction) => interaction.target);
    nextNodesIds.forEach((role) => {
      traverse(role, depth + 1);
    });
  };

  traverse(roleId, 0);

  return flatten(unflattenedServices, ambitId, roleId);
};
