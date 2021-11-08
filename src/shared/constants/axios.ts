import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
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
    if (!err.config.url.includes("token") && err.response) {
      if (err.response.status === 401) {
        try {
          const rs = await instance.post("/auth/refreshtoken", {
            refreshToken: localStorage.getItem("refresh"),
          });
          const { accessToken } = rs.data;
          localStorage.setItem("access", accessToken);
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
