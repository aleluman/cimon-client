import axios from "axios";
import { useAuth } from "../state/store";
import { urls } from "./urls";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const { access } = useAuth.getState();
    if (access && !config.url?.includes("token") && !config.url?.includes("register")) {
      config.headers = {
        Authorization: `Bearer ${access}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (!err.config.url.includes("token") && !err.config.url.includes("register") && err.response) {
      if (err.response.status === 401) {
        try {
          const { refresh } = useAuth.getState();
          const rs = await instance.post(`${urls.API_URL}/token/refresh/`, {
            refresh,
          });
          const { access, refresh: newRefesh } = rs.data;
          useAuth.setState({ access, refresh: newRefesh });
          return await instance(originalConfig);
        } catch (_error) {
          window.history.pushState({}, "", "/login/");
          useAuth.setState({ username: null, access: null, refresh: null });
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
