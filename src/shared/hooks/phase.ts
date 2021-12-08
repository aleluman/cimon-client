import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { urls } from "../constants/urls";
import { NewPhaseType, PhaseType, ProcessType } from "../types/process";
import { queryClient, useEditor } from "../state/store";
import axios from "../constants/axios";

export const usePhase = () => {
  const setNetworkError = useEditor((state) => state.setNetworkError);

  const createPhase = useMutation(
    (newPhase: NewPhaseType) => axios.post<PhaseType>(`${urls.API_URL}/phases/`, newPhase),
    {
      onSuccess: (response, request) => {
        queryClient.invalidateQueries(["process", request.process]);
        toast(`Phase ${response.data.name} created.`, { type: "success" });
      },
      onError: (error: AxiosError) => {
        const message = error.response?.data.nonFieldErrors
          ? "There is already a phase with that name on this process."
          : "Can't connect to the server. Check your connection.";
        toast(message, { type: "error" });
      },
    }
  );

  const updatePhase = useMutation(
    (updatedPhase: PhaseType & { process: string }) =>
      axios.patch<PhaseType>(`${urls.API_URL}/phases/${updatedPhase.id}/`, updatedPhase),
    {
      onMutate: async (mutation) => {
        await queryClient.cancelQueries(["process", mutation.process]);
        const process = queryClient.getQueryData<ProcessType>(["process", mutation.id]);
        queryClient.setQueryData(["process", mutation.id], { ...process, ...mutation });
      },
      onError: (error: AxiosError) => {
        if (error.response?.data.name)
          toast("There is already a phase using this name.", { type: "error" });
        else setNetworkError(true);
      },
      onSettled: (response) => {
        queryClient.invalidateQueries(["process", response?.data.id]);
      },
    }
  );

  const deletePhase = useMutation(
    (phaseId: string) => axios.delete<PhaseType>(`${urls.API_URL}/phases/${phaseId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("processes");
        toast(`Phase deleted correctly`, { type: "info" });
      },
      onError: () => {
        toast("Can't connect to the server. Check your connection.", { type: "error" });
      },
    }
  );
  return { createPhase, updatePhase, deletePhase };
};
