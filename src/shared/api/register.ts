import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { config } from "../constants/urls";
import axios from "@/shared/constants/axios";
import { useLogin } from "./login";

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  id: number;
  name: string;
  email: string;
};

export const useRegister = () => {
  const login = useLogin();
  const register = useMutation(
    (registerData: RegisterData) => {
      return axios.post<RegisterResponse>(`${config.API_URL}/register/`, registerData);
    },
    {
      onSuccess: (_, requestData) => {
        login.mutate({ email: requestData.email, password: requestData.password });
      },
      onError: (error: AxiosError) => {
        const message = error.response?.data.email
          ? "There is already an user using this email."
          : "Can't connect to the server. Check your connection.";
        toast(message, { type: "error" });
      },
    }
  );
  return register;
};
