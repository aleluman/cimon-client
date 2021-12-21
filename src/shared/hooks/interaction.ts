import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { queryClient, useEditor } from "../state/store";
import { InteractionType } from "../types/editor";
import { urls } from "../constants/urls";
import { AmbitType } from "../types/process";
import axios from "../constants/axios";
import { getAllInteractions } from "../utils/allInteractions";
import { useUndo } from "./undo";

export const getInteraction = (id: string, ambitId: string) => {
  const ambitData = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
  const currentInteraction = ambitData.graph.interactions.find(
    (interaction) => interaction.id === id
  ) as InteractionType;
  return currentInteraction;
};

export const useInteraction = (ambitId: string) => {
  const { createVersion } = useUndo();
  const setActiveItem = useEditor((state) => state.setActiveItem);
  const setNetworkError = useEditor((state) => state.setNetworkError);
  const setAllRoleInteractions = useEditor((state) => state.setAllRoleInteractions);

  const { processId } = useParams();

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
        setActiveItem({ id: newInteraction.id, type: "interaction" });
        createVersion(ambitId);
      },
      onError: () => {
        setNetworkError(true);
      },
    }
  );

  const updateInteraction = useMutation(
    (updatedInteraction: InteractionType) =>
      axios.put<InteractionType>(
        `${urls.API_URL}/ambits/${ambitId}/interactions/${updatedInteraction.id}/`,
        updatedInteraction
      ),
    {
      onMutate: async (updatedInteraction) => {
        const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
        const filteredInteractions = ambit.graph.interactions.filter(
          (interaction) => interaction.id !== updatedInteraction.id
        );
        queryClient.setQueryData(["ambit", ambitId], {
          ...ambit,
          graph: { ...ambit.graph, interactions: [...filteredInteractions, updatedInteraction] },
        });
        setAllRoleInteractions(getAllInteractions(ambitId));
        createVersion(ambitId);
      },
      onError: () => {
        setNetworkError(true);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["process", processId]);
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
        createVersion(ambitId);
      },
      onError: () => {
        setNetworkError(true);
      },
    }
  );
  return { createInteraction, deleteInteraction, updateInteraction };
};
