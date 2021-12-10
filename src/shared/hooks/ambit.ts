import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { urls } from "../constants/urls";
import { AmbitType, NewAmbitType, ProcessType } from "../types/process";
import { queryClient, useEditor } from "../state/store";
import axios from "../constants/axios";

export const useAmbit = () => {
  const setNetworkError = useEditor((state) => state.setNetworkError);

  const createAmbit = useMutation(
    (newAmbit: NewAmbitType) => axios.post<AmbitType>(`${urls.API_URL}/ambits/`, newAmbit),
    {
      onSuccess: (response, request) => {
        queryClient.invalidateQueries(["process", request.process]);
        toast(`Ambit ${response.data.name} created.`, { type: "success" });
      },
      onError: (error: AxiosError) => {
        const message = error.response?.data.nonFieldErrors
          ? "There is already an ambit with that name on this process."
          : "Can't connect to the server. Check your connection.";
        toast(message, { type: "error" });
      },
    }
  );

  const updateAmbit = useMutation(
    (updatedAmbit: Partial<AmbitType> & Pick<AmbitType, "id"> & { process: string }) =>
      axios.patch<AmbitType>(`${urls.API_URL}/ambits/${updatedAmbit.id}/`, updatedAmbit),
    {
      onSuccess: (response, request) => {
        queryClient.invalidateQueries(["process", request.process]);
      },
      onError: (error: AxiosError) => {
        if (error.response?.data.name)
          toast("There is already an ambit using this name.", { type: "error" });
        else setNetworkError(true);
      },
      onSettled: (response) => {
        queryClient.invalidateQueries(["process", response?.data.id]);
      },
    }
  );

  const updateAmbitName = useMutation(
    (updatedAmbit: Pick<AmbitType, "id"> & Pick<AmbitType, "name"> & { process: string }) =>
      axios.patch<AmbitType>(`${urls.API_URL}/ambits/${updatedAmbit.id}/`, updatedAmbit),
    {
      onMutate: async (mutation) => {
        await queryClient.cancelQueries(["process", mutation.process]);
        const process = queryClient.getQueryData<ProcessType>([
          "process",
          mutation.process,
        ]) as ProcessType;
        const newAmbits = process?.ambits.map((ambit) =>
          ambit.id !== mutation.id ? ambit : { ...ambit, name: mutation.name }
        );
        queryClient.setQueryData(["process", mutation.process], { ...process, ambits: newAmbits });
        return { process };
      },
      onError: (error: AxiosError, mutation, context) => {
        if (error.response?.data.nonFieldErrors) {
          const oldContext = context as { process: ProcessType };
          toast("There is already an ambit using this name.", { type: "error" });
          queryClient.setQueryData(["process", mutation.process], oldContext.process);
        } else setNetworkError(true);
      },
      onSettled: (response) => {
        queryClient.invalidateQueries(["process", response?.data.id]);
      },
    }
  );

  const updateAmbitPhases = useMutation(
    (updatedAmbit: Pick<AmbitType, "phases"> & Pick<AmbitType, "id"> & { process: string }) =>
      axios.patch<AmbitType>(`${urls.API_URL}/ambits/${updatedAmbit.id}/`, updatedAmbit),
    {
      onMutate: async (mutation) => {
        await queryClient.cancelQueries(["process", mutation.process]);
        const process = queryClient.getQueryData<ProcessType>([
          "process",
          mutation.process,
        ]) as ProcessType;
        const newAmbits = process.ambits.map((ambit) =>
          ambit.id !== mutation.id
            ? ambit
            : { id: ambit.id, name: ambit.name, phases: mutation.phases }
        );
        const updatedProcess = {
          ...process,
          ambits: newAmbits,
        };
        queryClient.setQueryData(["process", mutation.process], updatedProcess);
      },
      onError: () => {
        setNetworkError(true);
      },
    }
  );

  const deleteAmbit = useMutation(
    ({ id, processId }: { id: string; processId: string }) =>
      axios.delete<AmbitType>(`${urls.API_URL}/ambits/${id}`),
    {
      onMutate: async (mutation) => {
        await queryClient.cancelQueries(["process", mutation.processId]);
        const process = queryClient.getQueryData<ProcessType>([
          "process",
          mutation.processId,
        ]) as ProcessType;
        const updatedProcess = {
          ...process,
          ambits: process.ambits.filter((ambit) => ambit.id !== mutation.id),
        };
        queryClient.setQueryData(["process", mutation.processId], updatedProcess);
      },
      onSuccess: (_, request) => {
        queryClient.invalidateQueries(["process", request.processId]);
        toast(`Ambit deleted correctly`, { type: "info" });
      },
      onError: () => {
        toast("Can't connect to the server. Check your connection.", { type: "error" });
      },
    }
  );

  return { createAmbit, updateAmbit, updateAmbitPhases, updateAmbitName, deleteAmbit };
};