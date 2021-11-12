import { useQuery } from "react-query";
import { config } from "../constants/urls";
import { ProcessType } from "../types/process";
import axios from "../constants/axios";

export const useGetAllProcesses = () => {
  const queryData = useQuery("processes", async () => {
    const processes = await axios.get<ProcessType[]>(`${config.API_URL}/processes`);
    return processes.data;
  });

  return queryData;
};
