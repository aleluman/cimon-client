import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Graph, Role } from "../types/editor";

export const cimonApi = createApi({
  reducerPath: "cimonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),
  tagTypes: ["Interaction", "Role"],
  endpoints: (builder) => ({
    getGraphbyId: builder.query<Graph, string>({
      query: (id) => `graph/${id}`,
    }),
    updateRole: builder.mutation<Role, Partial<Role> & Pick<Role, "id">>({
      query: ({ id, ...update }) => ({
        url: `nodes/${id}`,
        method: "PATCH",
        body: update,
      }),
    }),
  }),
});

export const { useGetGraphbyIdQuery, useUpdateRoleMutation } = cimonApi;
