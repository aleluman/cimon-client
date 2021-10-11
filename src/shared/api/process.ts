import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ProcessType } from "../types/process";
import { ProcessRouteParams } from "../types/routes";

export const useGetProcess = () => {
  const { processId } = useParams<ProcessRouteParams>();

  const queryData = useQuery(["process", processId], async () => {
    const graph = await axios.get<ProcessType>(`http://localhost:8080/processes/${processId}`);
    return graph.data;
  });

  return queryData;
};
