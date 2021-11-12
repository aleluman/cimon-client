import axios from "axios";
import { useAuth } from "../state/store";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const { access } = useAuth.getState();
    if (access && !config.url?.includes("token") && !config.url?.includes("register")) {
      config.headers = { Authorization: `Bearer ${access}` };
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
    if (!err.config.url.includes("token") && !err.config.url.includes("register") && err.response) {
      if (err.response.status === 401) {
        try {
          const { refresh } = useAuth.getState();
          const rs = await instance.post("/auth/refreshtoken", {
            refresh,
          });
          const { access } = rs.data;
          useAuth.setState({ access });
          return await instance(err.config);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
