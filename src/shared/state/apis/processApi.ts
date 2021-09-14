import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ProcessType = {
  id: string;
  name: string;
  ambits: { id: string; name: string }[];
  roles: { name: string; type: "Human" | "Service" | "Repository" }[];
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
