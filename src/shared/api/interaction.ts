import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../state/store";
import { Graph, InteractionType } from "../types/editor";

export const useCreateInteraction = () => {
  const mutation = useMutation(
    (newInteraction: InteractionType) => {
      return axios.post<InteractionType>(
        `http://localhost:8080/graph/1/interactions/`,
        newInteraction
      );
    },
    {
      onMutate: async (newInteraction) => {
        const graph = queryClient.getQueryData(["graph", "1"]) as Graph;
        queryClient.setQueryData(["graph", "1"], {
          ...graph,
          interactions: [...graph.interactions, newInteraction],
        });
      },
    }
  );
  return mutation;
};

export const useDeleteInteraction = () => {
  const mutation = useMutation(
    (interactionId: string) =>
      axios.delete<InteractionType>(`http://localhost:8080/interactions/${interactionId}`),
    {
      onMutate: async (interactionId) => {
        const graph = queryClient.getQueryData(["graph", "1"]) as Graph;
        const filteredInteractions = graph.interactions.filter(
          (interaction) => interaction.id !== interactionId
        );
        queryClient.setQueryData(["graph", "1"], {
          ...graph,
          interactions: filteredInteractions,
        });
      },
    }
  );
  return mutation;
};
