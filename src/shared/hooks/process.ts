import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import { urls } from "../constants/urls";
import { NewProcessType, ProcessType } from "../types/process";
import axios from "../constants/axios";
import { queryClient, useEditor } from "../state/store";

export const useGetProcess = (processId: string) => {
  const queryData = useQuery(["process", processId], async () => {
    const process = await axios.get<ProcessType>(`${urls.API_URL}/processes/${processId}`);
    return process.data;
  });

  return queryData;
};

export const useProcess = () => {
  const navigate = useNavigate();
  const setNetworkError = useEditor((state) => state.setNetworkError);

  const createProcess = useMutation(
    (newProcess: NewProcessType) =>
      axios.post<ProcessType>(`${urls.API_URL}/processes/`, newProcess),
    {
      onSuccess: (response) => {
        queryClient.invalidateQueries("processes");
        toast(`Process ${response.data.name} created.`, { type: "success" });
        navigate(`/processes/${response.data.id}`);
      },
      onError: (error: AxiosError) => {
        const message =
          error.response?.data.name || error.response?.status === 500
            ? "There is already a process using this name."
            : "Can't connect to the server. Check your connection.";
        toast(message, { type: "error" });
      },
    }
  );

  const updateProcess = useMutation(
    (updatedProcess: Partial<ProcessType> & Pick<ProcessType, "id">) =>
      axios.patch<Partial<ProcessType> & Pick<ProcessType, "id">>(
        `${urls.API_URL}/processes/${updatedProcess.id}/`,
        updatedProcess
      ),
    {
      onMutate: async (mutation) => {
        await queryClient.cancelQueries(["process", mutation.id]);
        const process = queryClient.getQueryData<ProcessType>(["process", mutation.id]);
        queryClient.setQueryData(["process", mutation.id], { ...process, ...mutation });
        return { process };
      },
      onError: (error: AxiosError, _, context) => {
        const oldContext = context as { process: ProcessType };
        queryClient.setQueryData(["process", oldContext.process.id], oldContext.process);
        if (error.response?.data.name)
          toast("There is already a process using this name.", { type: "error" });
        else setNetworkError(true);
      },
      onSettled: (response) => {
        queryClient.invalidateQueries(["process", response?.data.id]);
        queryClient.invalidateQueries("processes");
      },
    }
  );

  const deleteProcess = useMutation(
    (processId: string) => axios.delete<ProcessType>(`${urls.API_URL}/processes/${processId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("processes");
        toast(`Process deleted correctly`, { type: "info" });
        navigate(`/processes`);
      },
      onError: () => {
        toast("Can't connect to the server. Check your connection.", { type: "error" });
      },
    }
  );
  return { createProcess, updateProcess, deleteProcess };
};
