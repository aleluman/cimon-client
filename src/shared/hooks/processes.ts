import { useQuery } from "react-query";
import { urls } from "../constants/urls";
import { ProcessType } from "../types/process";
import axios from "../constants/axios";

export const useGetAllProcesses = () => {
  const queryData = useQuery("processes", async () => {
    const processes = await axios.get<ProcessType[]>(`${urls.API_URL}/processes`);
    return processes.data;
  });

  return queryData;
};
