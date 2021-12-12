import { useMutation } from "react-query";
import { queryClient, useEditor } from "../state/store";
import { InteractionType } from "../types/editor";
import { urls } from "../constants/urls";
import { AmbitType } from "../types/process";
import axios from "../constants/axios";

export const useInteraction = (ambitId: string) => {
  const setActiveItem = useEditor((state) => state.setActiveItem);
  const setNetworkError = useEditor((state) => state.setNetworkError);

  const createInteraction = useMutation(
    (newInteraction: InteractionType) => {
      return axios.post<InteractionType>(
        `${urls.API_URL}/ambits/${ambitId}/interactions/${newInteraction.id}/`,
        newInteraction
      );
    },
    {
      onMutate: async (newInteraction) => {
        const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
        queryClient.setQueryData(["ambit", ambitId], {
          ...ambit,
          graph: {
            roles: ambit.graph.roles,
            interactions: [...ambit.graph.interactions, newInteraction],
          },
        });
      },
      onError: () => {
        setNetworkError(true);
      },
    }
  );
  const deleteInteraction = useMutation(
    (interactionId: string) =>
      axios.delete<InteractionType>(
        `${urls.API_URL}/ambits/${ambitId}/interactions/${interactionId}/`
      ),
    {
      onMutate: async (interactionId) => {
        const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
        const filteredInteractions = ambit.graph.interactions.filter(
          (interaction) => interaction.id !== interactionId
        );
        setActiveItem({ id: "", type: "none" });
        queryClient.setQueryData(["ambit", ambitId], {
          ...ambit,
          graph: { ...ambit.graph, interactions: filteredInteractions },
        });
      },
      onError: () => {
        setNetworkError(true);
      },
    }
  );
  return { createInteraction, deleteInteraction };
};
