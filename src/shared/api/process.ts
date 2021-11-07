import axios from "axios";
import { useQuery } from "react-query";
import { ProcessType } from "../types/process";

export const useGetProcess = (processId: string) => {
  const queryData = useQuery(["process", processId], async () => {
    const graph = await axios.get<ProcessType>(`http://localhost:8080/processes/${processId}`);
    return graph.data;
  });

  return queryData;
};
