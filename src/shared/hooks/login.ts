import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { urls } from "../constants/urls";
import axios from "@/shared/constants/axios";
import { useAuth } from "../state/store";

type LoginData = {
  email: string;
  password: string;
};

type Tokens = {
  access: string;
  refresh: string;
  username: string;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const setAccess = useAuth((state) => state.setAccess);
  const setRefresh = useAuth((state) => state.setRefresh);
  const setUsername = useAuth((state) => state.setUsername);

  const login = useMutation(
    (loginData: LoginData) => {
      return axios.post<Tokens>(`${urls.API_URL}/token/`, loginData);
    },
    {
      onSuccess: (response) => {
        const { access, refresh, username } = response.data;
        setAccess(access);
        setRefresh(refresh);
        setUsername(username);
        navigate("/processes");
      },
      onError: (error: AxiosError) => {
        const message = error.response
          ? "You have entered an invalid email or password."
          : "Can't connect to the server. Check your connection.";
        toast(message, { type: "error" });
      },
    }
  );
  return login;
};
