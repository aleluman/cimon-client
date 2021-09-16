import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ProcessType = {
  id: string;
  name: string;
  ambits: { id: string; name: string }[];
  roles: { id: string; name: string; type: "human" | "service" | "repository" }[];
};

export const processApi = createApi({
  reducerPath: "processApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),
  tagTypes: ["Process"],
  endpoints: (builder) => ({
    getProcessById: builder.query<ProcessType, string>({
      query: (id) => `processes/${id}`,
    }),
  }),
});

export const { useGetProcessByIdQuery } = processApi;
