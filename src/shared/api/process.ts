import { useMutation, useQuery } from "react-query";
import { urls } from "../constants/urls";
import { NewProcessType, ProcessType } from "../types/process";
import axios from "../constants/axios";
import { queryClient } from "../state/store";

export const useGetProcess = (processId: string) => {
  const queryData = useQuery(["process", processId], async () => {
    const graph = await axios.get<ProcessType>(`${urls.API_URL}/processes/${processId}`);
    return graph.data;
  });

  return queryData;
};

export const useProcess = () => {
  const createProcess = useMutation(
    (newProcess: NewProcessType) =>
      axios.post<ProcessType>(`${urls.API_URL}/processes/`, newProcess),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("processes");
      },
    }
  );

  const updateProcess = useMutation(
    (updatedProcess: Partial<ProcessType> & Pick<ProcessType, "id">) =>
      axios.patch<Partial<ProcessType> & Pick<ProcessType, "id">>(
        `${urls.API_URL}/processes/${updatedProcess.id}`,
        updatedProcess
      )
  );

  const deleteProcess = useMutation((processId: string) =>
    axios.delete<ProcessType>(`${urls.API_URL}/processes/${processId}`)
  );
  return { createProcess, updateProcess, deleteProcess };
};
