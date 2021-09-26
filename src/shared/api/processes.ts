import axios from "axios";
import { useQuery } from "react-query";
import { ProcessType } from "../types/process";

export const useGetAllProcesses = () => {
  const queryData = useQuery("processes", async () => {
    const processes = await axios.get<ProcessType[]>(`http://localhost:8080/processes`);
    return processes.data;
  });

  return queryData;
};
