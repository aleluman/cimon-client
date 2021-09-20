import { queryClient } from "../state/store";
import { Graph } from "../types/editor";

export const getConnectedNodesIds = (roleId: string) => {
  const graph = queryClient.getQueryData(["graph", "1"]) as Graph;
  return graph.interactions
    .filter((interaction) => roleId === interaction.source || roleId === interaction.target)
    .map((interaction) => {
      return interaction.source === roleId
        ? { interactionId: interaction.id, roleId: interaction.target }
        : { interactionId: interaction.id, roleId: interaction.source };
    });
};
