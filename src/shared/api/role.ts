import axios from "axios";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { queryClient, useEditor } from "../state/store";
import { Graph, RoleType } from "../types/editor";
import { EditorRouteParams } from "../types/routes";

export const getRole = (id: string, ambitId: string) => {
  const graph = queryClient.getQueryData(["graph", ambitId]) as Graph;
  const currentRole = graph.roles.find((role) => role.id === id) as RoleType;
  return currentRole;
};

export const useRole = () => {
  const { ambitId } = useParams<EditorRouteParams>();
  const setActiveItem = useEditor((state) => state.setActiveItem);

  const createRole = useMutation(
    ({ newRole }: { newRole: RoleType; newName: boolean }) =>
      axios.post<RoleType>(`http://localhost:8080/graph/${ambitId}/roles/`, newRole),
    {
      onMutate: async (variables) => {
        const graph = queryClient.getQueryData(["graph", ambitId]) as Graph;
        queryClient.setQueryData(["graph", ambitId], {
          ...graph,
          roles: [...graph.roles, variables.newRole],
        });
        setActiveItem({ id: variables.newRole.id, type: "role", new: variables.newName });
      },
    }
  );

  const updateRole = useMutation(
    (updatedRole: Partial<RoleType> & Pick<RoleType, "id">) =>
      axios.patch<RoleType>(`http://localhost:8080/roles/${updatedRole.id}`, updatedRole),
    {
      onMutate: async (updatedRole) => {
        const graph = queryClient.getQueryData(["graph", ambitId]) as Graph;
        const filteredRoles = graph.roles.filter((role) => role.id !== updatedRole.id);
        const currentRole = graph.roles.find((role) => role.id === updatedRole.id) as RoleType;
        queryClient.setQueryData(["graph", ambitId], {
          ...graph,
          roles: [...filteredRoles, { ...currentRole, ...updatedRole }],
        });
      },
    }
  );

  // todo: propagate delete on backend

  const deleteRole = useMutation(
    (roleId: string) => axios.delete<RoleType>(`http://localhost:8080/roles/${roleId}`),
    {
      onMutate: async (roleId) => {
        const graph = queryClient.getQueryData(["graph", ambitId]) as Graph;
        const filteredRoles = graph.roles.filter((role) => role.id !== roleId);
        const filteredInteractions = graph.interactions.filter((interaction) => {
          return interaction.source !== roleId && interaction.target !== roleId;
        });
        setActiveItem({ id: "", type: "none" });
        queryClient.setQueryData(["graph", ambitId], {
          ...graph,
          roles: filteredRoles,
          interactions: filteredInteractions,
        });
      },
    }
  );
  return { createRole, updateRole, deleteRole };
};
