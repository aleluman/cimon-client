import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { urls } from "../constants/urls";
import { NewPhaseType, PhaseType, ProcessType } from "../types/process";
import { queryClient, useEditor } from "../state/store";
import axios from "../constants/axios";
import { useAmbit } from "./ambit";

export const usePhase = () => {
  const setNetworkError = useEditor((state) => state.setNetworkError);
  const { updateAmbitPhases } = useAmbit();

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
        const process = queryClient.getQueryData<ProcessType>([
          "process",
          mutation.process,
        ]) as ProcessType;
        const newPhases = process?.phases.map((phase) =>
          phase.id !== mutation.id ? phase : { id: phase.id, name: mutation.name }
        );
        queryClient.setQueryData(["process", mutation.process], { ...process, phases: newPhases });
        return { process };
      },
      onError: (error: AxiosError, mutation, context) => {
        if (error.response?.data.nonFieldErrors) {
          const oldContext = context as { process: ProcessType };
          toast("There is already a phase using this name.", { type: "error" });
          queryClient.setQueryData(["process", mutation.process], oldContext.process);
        } else setNetworkError(true);
      },
      onSettled: (response) => {
        queryClient.invalidateQueries(["process", response?.data.id]);
      },
    }
  );

  const deletePhase = useMutation(
    ({ id, processId }: { id: string; processId: string }) =>
      axios.delete<PhaseType>(`${urls.API_URL}/phases/${id}`),
    {
      onMutate: async (mutation) => {
        await queryClient.cancelQueries(["process", mutation.processId]);
        const process = queryClient.getQueryData<ProcessType>([
          "process",
          mutation.processId,
        ]) as ProcessType;
        const updatedProcess = {
          ...process,
          phases: process.phases.filter((phase) => phase.id !== mutation.id),
        };
        queryClient.setQueryData(["process", mutation.processId], updatedProcess);
        process.ambits.forEach((ambit) => {
          const newPhases = ambit.phases.filter((phase) => phase !== mutation.id);
          updateAmbitPhases.mutate({ id: ambit.id, process: process.id, phases: newPhases });
        });
      },
      onSuccess: (_, request) => {
        queryClient.invalidateQueries(["process", request.processId]);
        toast(`Phase deleted correctly`, { type: "info" });
      },
      onError: () => {
        toast("Can't connect to the server. Check your connection.", { type: "error" });
      },
    }
  );
  return { createPhase, updatePhase, deletePhase };
};
