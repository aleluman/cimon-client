import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../state/store";
import { Graph, RoleType } from "../types/editor";

export const getRole = (id: string) => {
  const graph = queryClient.getQueryData(["graph", "1"]) as Graph;
  const currentRole = graph.roles.find((role) => role.id === id) as RoleType;
  return currentRole;
};

export const useUpdateRole = (id: string) => {
  const mutation = useMutation(
    (updatedRole: Partial<RoleType>) =>
      axios.patch<RoleType>(`http://localhost:8080/roles/${id}`, updatedRole),
    {
      onMutate: async (updatedRole) => {
        const graph = queryClient.getQueryData(["graph", "1"]) as Graph;
        const filteredRoles = graph.roles.filter((role) => role.id !== id);
        const currentRole = graph.roles.find((role) => role.id === id) as RoleType;
        queryClient.setQueryData(["graph", "1"], {
          ...graph,
          roles: [...filteredRoles, { ...currentRole, ...updatedRole }],
        });
      },
    }
  );

  return mutation;
};

export const useCreateRole = () => {
  const mutation = useMutation(
    (newRole: RoleType) => axios.post<RoleType>(`http://localhost:8080/graph/1/roles/`, newRole),
    {
      onMutate: async (newRole) => {
        const graph = queryClient.getQueryData(["graph", "1"]) as Graph;
        queryClient.setQueryData(["graph", "1"], {
          ...graph,
          roles: [...graph.roles, newRole],
        });
      },
    }
  );
  return mutation;
};

export const useDeleteRole = () => {
  const mutation = useMutation(
    (roleId: string) => axios.delete<RoleType>(`http://localhost:8080/roles/${roleId}`),
    {
      onMutate: async (roleId) => {
        const graph = queryClient.getQueryData(["graph", "1"]) as Graph;
        const filteredRoles = graph.roles.filter((role) => role.id !== roleId);
        queryClient.setQueryData(["graph", "1"], {
          ...graph,
          roles: filteredRoles,
        });
      },
    }
  );
  return mutation;
};
