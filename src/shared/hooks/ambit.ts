import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import { urls } from "../constants/urls";
import { AmbitType, NewAmbitType, ProcessType } from "../types/process";
import { queryClient, useEditor } from "../state/store";
import axios from "../constants/axios";
import { useProcess } from "./process";

export const useGetAmbit = (ambitId: string) => {
  const addAmbit = useEditor((state) => state.addAmbit);
  const setPosition = useEditor((state) => state.setPosition);
  const setSelectedAmbit = useEditor((state) => state.setSelectedAmbit);

  const queryData = useQuery(
    ["ambit", ambitId],
    async () => {
      const ambit = await axios.get<AmbitType>(`${urls.API_URL}/ambits/${ambitId}`);
      return ambit.data;
    },
    {
      onSuccess: (data) => {
        const { roles } = data.graph;
        addAmbit(ambitId);
        roles.forEach((role) => setPosition({ id: role.id, x: role.x, y: role.y }, ambitId));
        setSelectedAmbit(data);
        const { versions, setVersions } = useEditor.getState();
        if (versions.length === 0) setVersions([data.graph]);
      },
      refetchOnWindowFocus: false,
      cacheTime: 0,
    }
  );

  return queryData;
};

export const useAmbit = () => {
  const setNetworkError = useEditor((state) => state.setNetworkError);
  const { updateProcess } = useProcess();

  const createAmbit = useMutation(
    (newAmbit: NewAmbitType) => axios.post<AmbitType>(`${urls.API_URL}/ambits/`, newAmbit),
    {
      onMutate: (newAmbit) => {
        const process = queryClient.getQueryData(["process", newAmbit.process]) as ProcessType;
        queryClient.setQueriesData<ProcessType>(["process", newAmbit.process], {
          ...process,
          ambitOrders: process.ambitOrders.includes(newAmbit.name)
            ? process.ambitOrders
            : process.ambitOrders.concat(newAmbit.name),
        });
      },
      onSuccess: (response, request) => {
        const process = queryClient.getQueryData(["process", request.process]) as ProcessType;
        updateProcess.mutate({ id: process.id, ambitOrders: process.ambitOrders });
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
      onSuccess: (_, request) => {
        queryClient.invalidateQueries(["process", request.process]);
      },
      onError: () => {
        setNetworkError(true);
      },
    }
  );

  const setGraph = useMutation(
    (updatedAmbit: Pick<AmbitType, "id"> & Pick<AmbitType, "graph"> & { process: string }) =>
      axios.patch<AmbitType>(`${urls.API_URL}/ambits/${updatedAmbit.id}/`, updatedAmbit),
    {
      onMutate: (updatedAmbit) => {
        const ambit = queryClient.getQueryData(["ambit", updatedAmbit.id]) as AmbitType;
        queryClient.setQueryData<AmbitType>(["ambit", updatedAmbit.id], {
          ...ambit,
          graph: updatedAmbit.graph,
        });
      },
      onError: () => {
        setNetworkError(true);
      },
      onSettled: (_res, _, request) => {
        queryClient.invalidateQueries(["process", request.process]);
      },
    }
  );

  const updateAmbitName = useMutation(
    (updatedAmbit: Pick<AmbitType, "id"> & Pick<AmbitType, "name"> & { process: string }) =>
      axios.patch<AmbitType>(`${urls.API_URL}/ambits/${updatedAmbit.id}/`, updatedAmbit),
    {
      onMutate: async (mutation) => {
        await queryClient.cancelQueries(["process", mutation.process]);
        const process = queryClient.getQueryData(["process", mutation.process]) as ProcessType;
        const newAmbits = process?.ambits.map((ambit) =>
          ambit.id !== mutation.id ? ambit : { ...ambit, name: mutation.name }
        );
        const ambit = process.ambits.find((currentAmbit) => currentAmbit.id === mutation.id)
          ?.name as string;
        const orders = [...process.ambitOrders];
        const ambitIndex = orders.indexOf(ambit);
        orders[ambitIndex] = mutation.name;
        queryClient.setQueryData(["process", mutation.process], {
          ...process,
          ambits: newAmbits,
          ambitOrders: orders,
        });
        return { process };
      },
      onError: (error: AxiosError, mutation, context) => {
        if (error.response?.data.nonFieldErrors) {
          const oldContext = context as { process: ProcessType };
          toast("There is already an ambit using this name.", { type: "error" });
          queryClient.setQueryData(["process", mutation.process], oldContext.process);
        } else setNetworkError(true);
      },
      onSuccess: (response, request) => {
        const process = queryClient.getQueryData(["process", request.process]) as ProcessType;
        updateProcess.mutate({ id: process.id, ambitOrders: process.ambitOrders });
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
          lastEdited: new Date().toISOString(),
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
        const ambit = process.ambits.find((currentAmbit) => currentAmbit.id === mutation.id)
          ?.name as string;
        const updatedProcess = {
          ...process,
          ambits: process.ambits.filter((currentAmbit) => currentAmbit.id !== mutation.id),
          ambitOrders: process.ambitOrders.filter((currentAmbit) => currentAmbit !== ambit),
        };
        queryClient.setQueryData(["process", mutation.processId], updatedProcess);
      },
      onSuccess: (_, request) => {
        const process = queryClient.getQueryData(["process", request.processId]) as ProcessType;
        updateProcess.mutate({ id: process.id, ambitOrders: process.ambitOrders });
        toast(`Ambit deleted correctly`, { type: "info" });
      },
      onError: () => {
        toast("Can't connect to the server. Check your connection.", { type: "error" });
      },
    }
  );

  return { createAmbit, updateAmbit, updateAmbitPhases, updateAmbitName, deleteAmbit, setGraph };
};
