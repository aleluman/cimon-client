import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../state/store";
import { Graph, InteractionType } from "../types/editor";

export const useInteraction = (ambitId: string) => {
  const createInteraction = useMutation(
    (newInteraction: InteractionType) => {
      return axios.post<InteractionType>(
        `http://localhost:8080/graph/${ambitId}/interactions/`,
        newInteraction
      );
    },
    {
      onMutate: async (newInteraction) => {
        const graph = queryClient.getQueryData(["graph", ambitId]) as Graph;
        queryClient.setQueryData(["graph", ambitId], {
          ...graph,
          interactions: [...graph.interactions, newInteraction],
        });
      },
    }
  );
  const deleteInteraction = useMutation(
    (interactionId: string) =>
      axios.delete<InteractionType>(`http://localhost:8080/interactions/${interactionId}`),
    {
      onMutate: async (interactionId) => {
        const graph = queryClient.getQueryData(["graph", ambitId]) as Graph;
        const filteredInteractions = graph.interactions.filter(
          (interaction) => interaction.id !== interactionId
        );
        queryClient.setQueryData(["graph", ambitId], {
          ...graph,
          interactions: filteredInteractions,
        });
      },
    }
  );
  return { createInteraction, deleteInteraction };
};
