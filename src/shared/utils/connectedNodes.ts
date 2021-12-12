import { queryClient } from "../state/store";
import { AmbitType } from "../types/process";

export const getConnectedNodesIds = (roleId: string, ambitId: string) => {
  const ambitData = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
  return ambitData.graph.interactions
    .filter((interaction) => roleId === interaction.source || roleId === interaction.target)
    .map((interaction) => {
      return interaction.source === roleId
        ? { interactionId: interaction.id, roleId: interaction.target }
        : { interactionId: interaction.id, roleId: interaction.source };
    });
};
