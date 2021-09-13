import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Graph, RoleType } from "../../types/editor";

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
    updateRole: builder.mutation<RoleType, Partial<RoleType> & Pick<RoleType, "id">>({
      query: ({ id, ...update }) => ({
        url: `roles/${id}`,
        method: "PATCH",
        body: update,
      }),
    }),
  }),
});

export const { useGetGraphbyIdQuery, useUpdateRoleMutation } = cimonApi;
