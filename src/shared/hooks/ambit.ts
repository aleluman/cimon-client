import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { urls } from "../constants/urls";
import { AmbitType, NewAmbitType } from "../types/process";
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

  return { createAmbit };
};
