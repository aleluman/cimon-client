import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ProcessRouteParams } from "../types/routes";

type ProcessType = {
  id: string;
  name: string;
  ambits: { id: string; name: string }[];
  roles: { id: string; name: string; type: "human" | "service" | "repository" }[];
};

export const useGetProcess = () => {
  const { processId } = useParams<ProcessRouteParams>();

  const queryData = useQuery(["process", processId], async () => {
    const graph = await axios.get<ProcessType>(`http://localhost:8080/processes/${processId}`);
    return graph.data;
  });

  return queryData;
};
