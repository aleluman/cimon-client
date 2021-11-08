import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { config } from "../constants/urls";
import axios from "@/shared/constants/axios";

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
  const login = useMutation(
    (loginData: LoginData) => {
      return axios.post<Tokens>(`${config.API_URL}/token/`, loginData);
    },
    {
      onSuccess: (response) => {
        const { access, refresh, username } = response.data;
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        localStorage.setItem("username", username);
        navigate("/processes");
      },
      onError: () => {
        toast("The provided email or password is incorrect.", { type: "error" });
      },
    }
  );
  return login;
};
