import axios from "axios";
import { useQuery } from "react-query";

type ProcessType = {
  id: string;
  name: string;
  ambits: { id: string; name: string }[];
  roles: { id: string; name: string; type: "human" | "service" | "repository" }[];
};

export const useGetProcess = () => {
  const id = "1";
  const queryData = useQuery(
    ["process", id],
    async () => {
      const graph = await axios.get<ProcessType>(`http://localhost:8080/processes/${id}`);
      return graph.data;
    },
    { refetchOnWindowFocus: false }
  );

  return queryData;
};
