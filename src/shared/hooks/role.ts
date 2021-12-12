import { useMutation } from "react-query";
import axios from "../constants/axios";
import { urls } from "../constants/urls";
import { queryClient, useEditor } from "../state/store";
import { RoleType } from "../types/editor";
import { AmbitType } from "../types/process";

export const getRole = (id: string, ambitId: string) => {
  const ambitData = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
  const currentRole = ambitData.graph.roles.find((role) => role.id === id) as RoleType;
  return currentRole;
};

export const useRole = (ambitId: string) => {
  const setActiveItem = useEditor((state) => state.setActiveItem);
  const setNetworkError = useEditor((state) => state.setNetworkError);

  const createRole = useMutation(
    ({ newRole }: { newRole: RoleType; newName: boolean }) =>
      axios.post<RoleType>(`${urls.API_URL}/ambits/${ambitId}/roles/${newRole.id}/`, newRole),
    {
      onMutate: async (variables) => {
        const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
        queryClient.setQueryData(["ambit", ambitId], {
          ...ambit,
          graph: { ...ambit.graph, roles: [...ambit.graph.roles, variables.newRole] },
        });
        setActiveItem({ id: variables.newRole.id, type: "role", new: variables.newName });
      },
      onError: () => {
        setNetworkError(true);
      },
    }
  );

  const updateRole = useMutation(
    (updatedRole: RoleType) =>
      axios.put<RoleType>(
        `${urls.API_URL}/ambits/${ambitId}/roles/${updatedRole.id}/`,
        updatedRole
      ),
    {
      onMutate: async (updatedRole) => {
        const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
        const filteredRoles = ambit.graph.roles.filter((role) => role.id !== updatedRole.id);
        queryClient.setQueryData(["ambit", ambitId], {
          ...ambit,
          graph: { ...ambit.graph, roles: [...filteredRoles, updatedRole] },
        });
      },
      onError: () => {
        setNetworkError(true);
      },
    }
  );

  const deleteRole = useMutation(
    (roleId: string) =>
      axios.delete<RoleType>(`${urls.API_URL}/ambits/${ambitId}/roles/${roleId}/`),
    {
      onMutate: async (roleId) => {
        const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
        const filteredRoles = ambit.graph.roles.filter((role) => role.id !== roleId);
        const filteredInteractions = ambit.graph.interactions.filter((interaction) => {
          return interaction.source !== roleId && interaction.target !== roleId;
        });
        setActiveItem({ id: "", type: "none" });
        queryClient.setQueryData(["ambit", ambitId], {
          ...ambit,
          graph: {
            roles: filteredRoles,
            interactions: filteredInteractions,
          },
        });
      },
      onError: () => {
        setNetworkError(true);
      },
    }
  );
  return { createRole, updateRole, deleteRole };
};
